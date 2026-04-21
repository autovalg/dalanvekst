import Image from "next/image";

export default function OmOssPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000080] text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,#000080_0%,#00006e_38%,#000055_72%,#00003f_100%)]" />

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute left-1/2 top-[22%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/20 blur-[100px] sm:h-[260px] sm:w-[260px] md:h-[280px] md:w-[280px]" />
        <div className="absolute left-[74%] top-[78%] h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/18 blur-[100px] sm:h-[230px] sm:w-[230px] md:h-[260px] md:w-[260px]" />
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
                className="text-[13px] font-medium tracking-[-0.015em] text-white sm:text-[14px] md:text-[15px]"
              >
                Om oss
              </a>

              <a
                href="/kontakt"
                className="text-[13px] font-medium tracking-[-0.015em] text-white/78 transition hover:text-white sm:text-[14px] md:text-[15px]"
              >
                Kontakt
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* CONTENT */}
      <section className="relative z-[10] mx-auto max-w-[1440px] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 md:px-10 lg:px-14 lg:pb-28 lg:pt-20">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* LEFT */}
          <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:rounded-[28px] sm:p-8 md:p-11">
            <h1 className="max-w-[12ch] text-[34px] font-medium leading-[0.94] tracking-[-0.06em] text-white sm:text-[44px] md:max-w-[10ch] md:text-[64px]">
              Vi bygger vekstsystemer
            </h1>

            <p className="mt-5 max-w-[56ch] text-[15px] leading-[1.72] tracking-[-0.01em] text-white/72 sm:text-[16px] md:mt-6 md:text-[17px]">
              Dalan Vekst er bygget for én ting: å hjelpe bedrifter få flere
              kunder gjennom bedre nettsider, skarpere budskap og mer målrettet
              digital tilstedeværelse.
            </p>

            <p className="mt-4 max-w-[56ch] text-[15px] leading-[1.72] tracking-[-0.01em] text-white/72 sm:text-[16px] md:mt-5 md:text-[17px]">
              Vi bygger ikke bare noe som ser bra ut. Vi bygger noe som skal
              fungere i praksis — tiltrekke riktige mennesker, skape tillit og
              gjøre det enklere for kunden å ta kontakt.
            </p>

            <div className="mt-8 md:mt-9">
              <a
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-[#A61A31] px-5 py-3 text-[14px] font-semibold tracking-[-0.015em] text-white transition hover:scale-[1.02] hover:bg-[#8f172a] sm:px-6"
              >
                Ta kontakt
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:rounded-[28px] sm:p-8 md:p-10">
            <h2 className="text-[24px] font-medium tracking-[-0.04em] text-white sm:text-[28px] md:text-[30px]">
              Slik jobber vi
            </h2>

            <div className="mt-6 space-y-4 md:mt-8 md:space-y-5">
              <div className="rounded-[20px] border border-white/10 bg-white/[0.035] p-4 sm:rounded-[22px] sm:p-5">
                <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-white sm:text-[17px]">
                  01 — Klar posisjonering
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-white/68 sm:text-[15px]">
                  Vi spisser budskapet slik at det blir tydelig hva bedriften
                  tilbyr, hvem den hjelper og hvorfor noen skal velge akkurat
                  dere.
                </p>
              </div>

              <div className="rounded-[20px] border border-white/10 bg-white/[0.035] p-4 sm:rounded-[22px] sm:p-5">
                <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-white sm:text-[17px]">
                  02 — Nettsider med retning
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-white/68 sm:text-[15px]">
                  Vi bygger sider som ser sterke ut visuelt, men viktigere:
                  sider som leder besøkende mot handling.
                </p>
              </div>

              <div className="rounded-[20px] border border-white/10 bg-white/[0.035] p-4 sm:rounded-[22px] sm:p-5">
                <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-white sm:text-[17px]">
                  03 — Fokus på respons
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-white/68 sm:text-[15px]">
                  Målet er ikke bare trafikk. Målet er relevante henvendelser,
                  flere samtaler og bedre grunnlag for vekst.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LOWER SECTION */}
        <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-[1fr_0.95fr] lg:gap-10">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:rounded-[28px] sm:p-8 md:p-10">
            <h2 className="text-[24px] font-medium tracking-[-0.04em] text-white sm:text-[28px] md:text-[30px]">
              Hva vi tror på
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:mt-7">
              <div className="rounded-[18px] border border-white/10 bg-white/[0.035] p-4 sm:rounded-[20px] sm:p-5">
                <p className="text-[15px] font-semibold tracking-[-0.015em] text-white">
                  Enkelhet slår støy
                </p>
                <p className="mt-2 text-[14px] leading-[1.7] text-white/66">
                  Tydelige budskap og ren struktur gjør det lettere for kunden å
                  forstå og handle.
                </p>
              </div>

              <div className="rounded-[18px] border border-white/10 bg-white/[0.035] p-4 sm:rounded-[20px] sm:p-5">
                <p className="text-[15px] font-semibold tracking-[-0.015em] text-white">
                  Design skal prestere
                </p>
                <p className="mt-2 text-[14px] leading-[1.7] text-white/66">
                  Utseendet skal styrke inntrykket, ikke bare pynte på siden.
                </p>
              </div>

              <div className="rounded-[18px] border border-white/10 bg-white/[0.035] p-4 sm:rounded-[20px] sm:p-5">
                <p className="text-[15px] font-semibold tracking-[-0.015em] text-white">
                  Retning før volum
                </p>
                <p className="mt-2 text-[14px] leading-[1.7] text-white/66">
                  Riktig trafikk og riktig kommunikasjon er mer verdt enn mye
                  aktivitet uten mål.
                </p>
              </div>

              <div className="rounded-[18px] border border-white/10 bg-white/[0.035] p-4 sm:rounded-[20px] sm:p-5">
                <p className="text-[15px] font-semibold tracking-[-0.015em] text-white">
                  Alt må ha et formål
                </p>
                <p className="mt-2 text-[14px] leading-[1.7] text-white/66">
                  Hver seksjon, knapp og tekstlinje bør dra brukeren i riktig
                  retning.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:rounded-[28px] sm:p-8 md:p-10">
            <h2 className="text-[28px] font-medium leading-[0.96] tracking-[-0.05em] text-white sm:text-[32px] md:text-[36px]">
              Klar for vekst?
            </h2>

            <p className="mt-4 max-w-[38ch] text-[14px] leading-[1.75] text-white/70 sm:mt-5 sm:text-[15px]">
              Dersom du ønsker en nettside og digital tilstedeværelse som er
              bygget for å skape respons, kan vi ta en uforpliktende prat.
            </p>

            <div className="mt-7 md:mt-8">
              <a
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-[#A61A31] px-5 py-3 text-[14px] font-semibold tracking-[-0.015em] text-white transition hover:scale-[1.02] hover:bg-[#8f172a] sm:px-6"
              >
                Ta kontakt i dag
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}