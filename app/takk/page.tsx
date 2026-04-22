import Image from "next/image";

export default function TakkPage() {
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
        <div className="absolute left-1/2 top-[58%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/40 blur-[145px]" />
        <div className="absolute left-1/2 top-[58%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/28 blur-[90px]" />
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
                className="hidden text-[15px] font-medium tracking-[-0.015em] text-white/78 transition hover:text-white md:block"
              >
                Kontakt
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* CONTENT */}
      <div className="absolute inset-0 z-[10]">
        <div className="absolute left-[50%] top-[60%] max-w-[680px] -translate-x-1/2 -translate-y-1/2 px-6 text-center">
          <h1 className="mb-6 text-[48px] font-medium leading-[0.9] tracking-[-0.06em] text-white md:text-[58px]">
            Takk
          </h1>

          <p className="mb-4 text-[16px] text-white/78 md:text-[18px]">
            Henvendelsen din er sendt.
          </p>

          <p className="mb-10 text-[15px] leading-[1.75] text-white/62 md:text-[16px]">
            Vi ser gjennom det du har sendt inn og tar kontakt så snart som mulig.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/"
              className="inline-flex items-center rounded-full border border-white/18 bg-white/[0.05] px-6 py-3 text-[14px] font-semibold tracking-[-0.015em] text-white transition hover:bg-white/[0.09]"
            >
              Tilbake til forsiden
            </a>

            <a
              href="/kontakt"
              className="inline-flex items-center rounded-full bg-[#A61A31] px-6 py-3 text-[14px] font-semibold tracking-[-0.015em] text-white transition hover:scale-[1.02] hover:bg-[#8f172a]"
            >
              Kontakt oss
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}