import Image from "next/image";

export default function KontaktPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000080] text-white">
      {/* BACKGROUND BASE */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,#000080_0%,#00006e_38%,#000055_72%,#00003f_100%)]" />

      {/* STATIC RINGS */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute left-1/2 top-[58%] h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#000080]" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#000080]" />
          <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#000080]" />

          <div
            className="absolute left-1/2 top-1/2 h-[320px] w-[320px] rounded-full border-2 border-[#000080]"
            style={{ transform: "translate(-50%, -50%)" }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] rounded-full border-2 border-[#000080]"
            style={{ transform: "translate(-50%, -50%)" }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[680px] w-[680px] rounded-full border-2 border-[#000080]"
            style={{ transform: "translate(-50%, -50%)" }}
          />
        </div>
      </div>
      <div
            className="absolute left-1/2 top-[58%] h-[320px] w-[320px] rounded-full border-2 border-[#000080]"
            style={{
              transform: "translate(-50%, -50%)",
              animation: "ringBreathInner 3s linear infinite",
            }}
          />
          <div
            className="absolute left-1/2 top-[58%] h-[500px] w-[500px] rounded-full border-2 border-[#000080]"
            style={{
              transform: "translate(-50%, -50%)",
              animation: "ringBreathMiddle 3s linear infinite",
            }}
          />
          <div
            className="absolute left-1/2 top-[58%] h-[680px] w-[680px] rounded-full border-2 border-[#000080]"
            style={{
              transform: "translate(-50%, -50%)",
              animation: "ringBreathOuter 3s linear infinite",
            }}
          />

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div
          className="absolute left-1/2 top-[58%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/40 blur-[145px]"
        />
        <div
          className="absolute left-1/2 top-[58%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/28 blur-[90px]"
        />
      </div>

      {/* HEADER */}
      <div className="relative z-[30] mx-auto max-w-[1440px] px-5 pt-5 sm:px-8 md:px-10 md:pt-7 lg:px-14">
        <header className="rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-7">
            <a href="/" className="flex items-center gap-4">
              <Image
                src="/dalan-vekst-logov2.png"
                alt="Dalan Vekst"
                width={150}
                height={40}
                priority
                className="object-contain"
              />

              <span className="text-[14px] font-medium leading-none tracking-[-0.015em] text-white/65">
                – skiller klinten fra hveten
              </span>
            </a>

            <div className="flex items-center gap-6">
              <a
                href="/om-oss"
                className="hidden text-[15px] font-medium tracking-[-0.015em] text-white/78 transition hover:text-white md:block"
              >
                Om oss
              </a>

              <a
                href="/kontakt"
                className="inline-flex items-center rounded-full border border-white/25 px-4 py-2 text-[14px] font-semibold tracking-[-0.015em] text-white transition hover:bg-white/10 sm:px-6 sm:py-3"
              >
                Kontakt
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* CONTENT (erstatter VOKS + skjema) */}
      <div className="absolute inset-0 z-[10]">
        <div className="absolute left-[50%] top-[60%] -translate-x-1/2 -translate-y-1/2 text-center max-w-[600px] px-6">
          
          <h1 className="text-[48px] md:text-[58px] font-medium tracking-[-0.06em] leading-[0.9] mb-6">
            Kontakt
          </h1>

          <p className="text-white/70 text-[16px] md:text-[18px] mb-10">
            Ta kontakt for en uforpliktende prat.
          </p>

          <div className="space-y-3">
            <a
              href="mailto:post@dalanvekst.no"
              className="block text-[20px] md:text-[22px] font-medium hover:text-white/80 transition"
            >
              post@dalanvekst.no
            </a>

            <a
              href="tel:+4790233597"
              className="block text-[20px] md:text-[22px] font-medium hover:text-white/80 transition"
            >
              +47 902 33 597
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}