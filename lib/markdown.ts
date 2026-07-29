import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  readTime: string;
  content: string;
}

// Pure parser for frontmatter to avoid dependencies
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { data: {} as Record<string, string>, content: fileContent };
  }

  const yamlLines = match[1].split(/\r?\n/);
  const data: Record<string, string> = {};

  for (const line of yamlLines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      data[key] = value.replace(/^['"]|['"]$/g, ""); // strip outer quotes
    }
  }

  return { data, content: match[2] };
}

// Pure markdown to HTML converter for high-performance dependency-free rendering
function parseMarkdownToHtml(markdown: string): string {
  let html = markdown;

  // 1. Headers (e.g., ### Header)
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-[17px] font-bold text-ink-900 dark:text-white mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-xl sm:text-2xl font-semibold text-ink-900 dark:text-white mt-8 mb-4 border-b border-black/5 dark:border-white/5 pb-2">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white mt-10 mb-5">$1</h1>');

  // 2. Bold (**text**)
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // 3. Italics (*text*)
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // 4. Links ([text](url))
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-brand-blue dark:text-brand-skyblue hover:underline font-medium" target="_blank" rel="noopener noreferrer">$1</a>');

  // 5. Blockquotes (> text)
  html = html.replace(/^\> (.*$)/gim, '<blockquote class="border-l-4 border-brand-blue pl-4 py-1 my-5 italic text-slate-500 dark:text-slate-400 bg-black/5 dark:bg-white/5 rounded-r-md">$1</blockquote>');

  // 6. Unordered Lists (- item or * item)
  // Match single list items first
  html = html.replace(/^\s*[\-\*]\s+(.*$)/gim, '<li class="ml-6 list-disc my-1.5 text-slate-700 dark:text-slate-300">$1</li>');

  // 7. Paragraph blocks (double newlines)
  const blocks = html.split(/\r?\n\r?\n+/);
  const formattedBlocks = blocks.map((block) => {
    const trimmed = block.trim();
    if (!trimmed) return "";
    
    // If it's already an HTML structure, don't wrap in <p>
    if (
      trimmed.startsWith("<h") || 
      trimmed.startsWith("<blockquote") || 
      trimmed.startsWith("<li") || 
      trimmed.startsWith("<ul") ||
      trimmed.startsWith("<div")
    ) {
      return trimmed;
    }
    
    return `<p class="leading-relaxed text-sm sm:text-base text-slate-700 dark:text-slate-300 my-4">${trimmed.replace(/\r?\n/g, "<br/>")}</p>`;
  });

  return formattedBlocks.filter(Boolean).join("\n");
}

export function getSortedPostsData(): Omit<PostData, "content">[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = parseFrontmatter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "",
        excerpt: data.excerpt || "",
        coverImage: data.coverImage || "",
        readTime: data.readTime || "3 min read",
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontmatter(fileContents);
  const htmlContent = parseMarkdownToHtml(content);

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || "",
    excerpt: data.excerpt || "",
    coverImage: data.coverImage || "",
    readTime: data.readTime || "3 min read",
    content: htmlContent,
  };
}
