"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [sequenceStarted, setSequenceStarted] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [offerVisible, setOfferVisible] = useState(false);

  useEffect(() => {
    if (!sequenceStarted) return;

    const formTimer = window.setTimeout(() => {
      setFormVisible(true);
    }, 380);

    const offerTimer = window.setTimeout(() => {
      setOfferVisible(true);
    }, 1100);

    return () => {
      window.clearTimeout(formTimer);
      window.clearTimeout(offerTimer);
    };
  }, [sequenceStarted]);

  const scrollToMobileForm = () => {
    const form = document.getElementById("mobile-contact-form");
    form?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000080] text-white">
      {/* BACKGROUND BASE */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,#000080_0%,#00006e_38%,#000055_72%,#00003f_100%)]" />

      {/* STATIC RINGS */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {/* Desktop rings */}
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

{/* Mobile rings */}
<div className="absolute left-1/2 top-[41%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 md:hidden">
  <div className="absolute left-1/2 top-[41%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#000080]" />
  <div className="absolute left-1/2 top-[41%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#000080]" />
  <div className="absolute left-1/2 top-[41%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#000080]" />

  <div
    className="absolute left-1/2 top-[41%] h-[220px] w-[220px] rounded-full border border-[#000080]"
    style={{
      transform: "translate(-50%, -50%)",
      animation: "ringBreathInner 3s linear infinite",
    }}
  />
  <div
    className="absolute left-1/2 top-[41%] h-[340px] w-[340px] rounded-full border border-[#000080]"
    style={{
      transform: "translate(-50%, -50%)",
      animation: "ringBreathMiddle 3s linear infinite",
    }}
  />
  <div
    className="absolute left-1/2 top-[41%] h-[460px] w-[460px] rounded-full border border-[#000080]"
    style={{
      transform: "translate(-50%, -50%)",
      animation: "ringBreathOuter 3s linear infinite",
    }}
  />
</div>
      </div>

      {/* MOVING GLOW */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        {/* Desktop glow */}
        <div
          className="absolute left-1/2 hidden h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/40 blur-[145px] md:block"
          style={{
            top: sequenceStarted ? "69%" : "58%",
            transition:
              "top 1.1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease",
          }}
        />
        <div
          className="absolute left-1/2 hidden h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/28 blur-[90px] md:block"
          style={{
            top: sequenceStarted ? "69%" : "58%",
            transition:
              "top 1.1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease",
          }}
        />

        {/* Mobile glow */}
<div className="absolute left-1/2 top-[41%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/38 blur-[120px] md:hidden" />
<div className="absolute left-1/2 top-[41%] h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/24 blur-[70px] md:hidden" />
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
                className="text-[13px] font-medium tracking-[-0.015em] text-white/78 transition hover:text-white sm:text-[14px] md:text-[15px]"
              >
                Kontakt
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* DESKTOP HERO */}
      <div className="hidden md:block">
        <div className="absolute inset-0 z-[10]">
          <button
            type="button"
            onClick={() => {
              if (sequenceStarted) return;
              setSequenceStarted(true);
            }}
            className="absolute left-1/2 top-[58%] z-[11] -translate-x-1/2 -translate-y-1/2 text-center outline-none"
            style={{ cursor: sequenceStarted ? "default" : "pointer" }}
          >
            <span
              className="block text-[54px] font-medium leading-[0.9] tracking-[-0.065em] text-white md:text-[64px]"
              style={{
                textShadow: "0 0 30px rgba(166,26,49,0.12)",
                transform: sequenceStarted
                  ? "translateZ(-120px) scale(0.62)"
                  : "translateZ(0) scale(1)",
                opacity: sequenceStarted ? 0 : 1,
                filter: sequenceStarted ? "blur(10px)" : "blur(0px)",
                transition:
                  "transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.34s ease, filter 0.42s ease",
              }}
            >
              VOKS
            </span>
          </button>

          <div
            className="pointer-events-none absolute left-[55.5%] top-[71.5%] z-[25] -translate-x-1/2 -translate-y-1/2 text-center"
            style={{
              opacity: offerVisible ? 1 : 0,
              filter: offerVisible ? "blur(0px)" : "blur(10px)",
              transform: offerVisible
                ? "translate(-50%, -50%) scale(1)"
                : "translate(-50%, -50%) scale(0.64)",
              transition:
                "opacity 0.42s ease, filter 0.42s ease, transform 0.48s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <button
              type="submit"
              form="contact-form"
              className="pointer-events-auto block cursor-pointer text-[42px] font-medium leading-[0.92] tracking-[-0.055em] text-white md:text-[50px]"
              style={{ textShadow: "0 0 26px rgba(166,26,49,0.16)" }}
            >
              FÅ TILBUD
            </button>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-[20]">
          <div
            className={`absolute left-[61.3%] top-[60.8%] w-[420px] -translate-x-1/2 -translate-y-1/2 ${
              formVisible ? "pointer-events-auto" : "pointer-events-none"
            }`}
            style={{
              opacity: formVisible ? 1 : 0,
              transform: formVisible
                ? "translate(-50%, -50%) scale(1)"
                : "translate(-50%, -46%) scale(0.96)",
              filter: formVisible ? "blur(0px)" : "blur(8px)",
              transition:
                "opacity 0.55s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), filter 0.55s ease",
            }}
          >
            <form
              id="contact-form"
              action="https://formsubmit.co/post@dalanvekst.no"
              method="POST"
              className="space-y-3"
            >
              <input
                type="hidden"
                name="_subject"
                defaultValue="Ny henvendelse fra dalanvekst.no"
              />
              <input
                type="hidden"
                name="_next"
                defaultValue="https://dalanvekst.no/takk"
              />
              <input type="hidden" name="_captcha" defaultValue="false" />
              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <input
                type="text"
                name="navn_bedrift"
                placeholder="Ditt navn / Bedrift"
                required
                className="h-[48px] w-full rounded-[14px] border border-white/16 bg-white/[0.035] px-4 text-[14px] text-white outline-none backdrop-blur-xl placeholder:text-white/40"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="tel"
                  name="telefon"
                  placeholder="Telefon"
                  required
                  className="h-[48px] rounded-[14px] border border-white/16 bg-white/[0.035] px-4 text-[14px] text-white outline-none backdrop-blur-xl placeholder:text-white/40"
                />
                <input
                  type="email"
                  name="epost"
                  placeholder="E-post"
                  required
                  className="h-[48px] rounded-[14px] border border-white/16 bg-white/[0.035] px-4 text-[14px] text-white outline-none backdrop-blur-xl placeholder:text-white/40"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="hva_det_gjelder"
                  placeholder="Hva det gjelder"
                  className="h-[48px] rounded-[14px] border border-white/16 bg-white/[0.035] px-4 text-[14px] text-white outline-none backdrop-blur-xl placeholder:text-white/40"
                />
                <input
                  type="text"
                  name="Budsjett"
                  placeholder="Budsjett"
                  className="h-[48px] rounded-[14px] border border-white/16 bg-white/[0.035] px-4 text-[14px] text-white outline-none backdrop-blur-xl placeholder:text-white/40"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* MOBILE HERO + FORM */}
      <section className="relative z-[10] mx-auto w-full max-w-[420px] px-5 pb-16 pt-10 text-center md:hidden">
        <div className="flex min-h-[68vh] flex-col items-center justify-center">
          <button
            type="button"
            onClick={scrollToMobileForm}
            className="cursor-pointer"
          >
            <span
              className="block text-[46px] font-medium leading-[0.9] tracking-[-0.065em] text-white"
              style={{ textShadow: "0 0 24px rgba(166,26,49,0.12)" }}
            >
              VOKS
            </span>
          </button>
        </div>

        <form
  id="mobile-contact-form"
  action="https://formsubmit.co/post@dalanvekst.no"
  method="POST"
  className="mt-23 w-full space-y-3"
>
          <input
            type="hidden"
            name="_subject"
            defaultValue="Ny henvendelse fra dalanvekst.no"
          />
          <input
            type="hidden"
            name="_next"
            defaultValue="https://dalanvekst.no/takk"
          />
          <input type="hidden" name="_captcha" defaultValue="false" />
          <input
            type="text"
            name="_honey"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            type="text"
            name="navn_bedrift"
            placeholder="Ditt navn / Bedrift"
            required
            className="h-[50px] w-full rounded-[14px] border border-white/16 bg-white/[0.05] px-4 text-[15px] text-white outline-none backdrop-blur-xl placeholder:text-white/40"
          />

          <input
            type="tel"
            name="telefon"
            placeholder="Telefon"
            required
            className="h-[50px] w-full rounded-[14px] border border-white/16 bg-white/[0.05] px-4 text-[15px] text-white outline-none backdrop-blur-xl placeholder:text-white/40"
          />

          <input
            type="email"
            name="epost"
            placeholder="E-post"
            required
            className="h-[50px] w-full rounded-[14px] border border-white/16 bg-white/[0.05] px-4 text-[15px] text-white outline-none backdrop-blur-xl placeholder:text-white/40"
          />

          <input
            type="text"
            name="hva_det_gjelder"
            placeholder="Hva det gjelder"
            className="h-[50px] w-full rounded-[14px] border border-white/16 bg-white/[0.05] px-4 text-[15px] text-white outline-none backdrop-blur-xl placeholder:text-white/40"
          />

          <input
            type="text"
            name="Budsjett"
            placeholder="Budsjett"
            className="h-[50px] w-full rounded-[14px] border border-white/16 bg-white/[0.05] px-4 text-[15px] text-white outline-none backdrop-blur-xl placeholder:text-white/40"
          />

          <button
            type="submit"
            className="w-full rounded-[14px] bg-[#A61A31] px-5 py-4 text-[14px] font-semibold tracking-[-0.015em] text-white transition active:scale-[0.99]"
          >
            FÅ TILBUD
          </button>
        </form>
      </section>
    </main>
  );
}