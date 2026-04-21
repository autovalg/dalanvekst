import Image from "next/image";

export default function KontaktPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000080] text-white">
      {/* BACKGROUND BASE */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,#000080_0%,#00006e_38%,#000055_72%,#00003f_100%)]" />

      {/* STATIC RINGS */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute left-1/2 top-[58%] hidden h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 md:block">
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#000080]" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#000080]" />
          <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#000080]" />

          <div
            className="absolute left-1/2 top-1/2 h-[320px] w-[320px] rounded-full border-2 border-[#000080]"
            style={{
              transform: "translate(-50%, -50%)",
              animation: "ringBreathInner 3s linear infinite",
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] rounded-full border-2 border-[#000080]"
            style={{
              transform: "translate(-50%, -50%)",
              animation: "ringBreathMiddle 3s linear infinite",
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[680px] w-[680px] rounded-full border-2 border-[#000080]"
            style={{
              transform: "translate(-50%, -50%)",
              animation: "ringBreathOuter 3s linear infinite",
            }}
          />
        </div>

        <div className="absolute left-1/2 top-[54%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 md:hidden">
          <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#000080]" />
          <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#000080]" />
          <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#000080]" />

          <div
            className="absolute left-1/2 top-1/2 h-[220px] w-[220px] rounded-full border border-[#000080]"
            style={{
              transform: "translate(-50%, -50%)",
              animation: "ringBreathInner 3s linear infinite",
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[340px] w-[340px] rounded-full border border-[#000080]"
            style={{
              transform: "translate(-50%, -50%)",
              animation: "ringBreathMiddle 3s linear infinite",
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[460px] w-[460px] rounded-full border border-[#000080]"
            style={{
              transform: "translate(-50%, -50%)",
              animation: "ringBreathOuter 3s linear infinite",
            }}
          />
        </div>
      </div>

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="absolute left-1/2 top-[58%] hidden h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/40 blur-[145px] md:block" />
        <div className="absolute left-1/2 top-[58%] hidden h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/28 blur-[90px] md:block" />

        <div className="absolute left-1/2 top-[54%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/38 blur-[120px] md:hidden" />
        <div className="absolute left-1/2 top-[54%] h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/24 blur-[70px] md:hidden" />
      </div>

      {/* HEADER */}
      <div className="relative z-[30] mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 sm:pt-5 md:px-10 md:pt-7 lg:px-14">
        <header className="rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-xl md:rounded-[24px]">
          <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-7">
            <a href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
              <Image
                src="/dalan-vekst-logov2.png"
                alt="Dalan Vekst"
                width={150}
                height={40}
                priority
                className="h-auto w-[118px] object-contain sm:w-[135px] md:w-[150px]"
              />
              <span className="hidden text-[14px] font-medium leading-none tracking-[-0.015em] text-white/65 md:block">
                – skiller klinten fra hveten
              </span>
            </a>

            <div className="flex items-center gap-3 sm:gap-5 md:gap-6">
              <a
                href="/om-oss"
                className="text-[13px] font-medium tracking-[-0.015em] text-white/78 transition hover:text-white sm:text-[14px] md:text-[15px]"
              >
                Om oss
              </a>

              <a
                href="/kontakt"
                className="text-[13px] font-medium tracking-[-0.015em] text-white sm:text-[14px] md:text-[15px]"
              >
                Kontakt
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* CONTENT */}
      <div className="relative z-[10] mx-auto flex min-h-[calc(100vh-92px)] max-w-[760px] items-center justify-center px-5 pb-14 pt-12 text-center sm:px-8 md:px-10">
        <div className="w-full max-w-[600px]">
          <h1 className="text-[38px] font-medium tracking-[-0.06em] leading-[0.9] text-white sm:text-[48px] md:text-[58px]">
            Kontakt
          </h1>

          <p className="mt-5 text-[15px] leading-[1.7] text-white/70 sm:text-[16px] md:text-[18px]">
            Ta kontakt for en uforpliktende prat.
          </p>

          <div className="mt-8 space-y-3 sm:space-y-4">
            <a
              href="mailto:post@dalanvekst.no"
              className="block break-words text-[18px] font-medium transition hover:text-white/80 sm:text-[20px] md:text-[22px]"
            >
              post@dalanvekst.no
            </a>

            <a
              href="tel:+4790233597"
              className="block text-[18px] font-medium transition hover:text-white/80 sm:text-[20px] md:text-[22px]"
            >
              +47 902 33 597
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}