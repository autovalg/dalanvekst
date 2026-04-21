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
      </div>

      {/* MOVING GLOW */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div
          className="absolute left-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/40 blur-[145px]"
          style={{
            top: sequenceStarted ? "69%" : "58%",
            transition:
              "top 1.1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease",
          }}
        />
        <div
          className="absolute left-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A61A31]/28 blur-[90px]"
          style={{
            top: sequenceStarted ? "69%" : "58%",
            transition:
              "top 1.1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease",
          }}
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
    className="hidden text-[15px] font-medium tracking-[-0.015em] text-white/78 transition hover:text-white md:block"
  >
    Kontakt
  </a>
</div>
          </div>
        </header>
      </div>

      {/* HERO INTERACTION LAYER */}
      <div className="absolute inset-0 z-[10]">
        {/* VOKS */}
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

        {/* FÅ TILBUD */}
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

      {/* FORM */}
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
    </main>
  );
}