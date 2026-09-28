export default function HeroBackground() {
  return (
    <>
      {/* ── Ambient Radial Lighting (Cyan / Electric Blue Glows) ── */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[650px] w-[95vw] max-w-[1200px] rounded-full opacity-35 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(1,101,255,0.45) 0%, rgba(56,189,248,0.2) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-[-10%] h-[500px] w-[500px] rounded-full opacity-20 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(1,140,255,0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Cyber Subtle Grid Pattern ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
    </>
  );
}
