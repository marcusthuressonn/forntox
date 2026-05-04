"use client"

import Link from "next/link"
import { ArrowUpRight, Minus, Plus, ScanLine, Check, MessageCircle, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <How />
        <Compare />
        <Voices />
        <Pricing />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </div>
  )
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-[1200px] px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-display text-[1.35rem] tracking-tight">
          forntox<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[13px] text-muted-foreground">
          <a href="#hur" className="hover:text-foreground transition">Hur det funkar</a>
          <a href="#jamfor" className="hover:text-foreground transition">Jämför</a>
          <a href="#pris" className="hover:text-foreground transition">Pris</a>
          <a href="#faq" className="hover:text-foreground transition">Frågor</a>
        </nav>
        <div className="flex items-center gap-5">
          <Link href="/login" className="hidden sm:inline text-[13px] text-muted-foreground hover:text-foreground transition">
            Logga in
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-[13px] font-medium hover:opacity-90 transition"
          >
            Börja gratis
          </Link>
        </div>
      </div>
    </header>
  )
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-[1200px] px-6 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="md:col-span-7">
            <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
              För småföretagare som bokför själva
            </p>
            <h1 className="mt-6 font-display text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-[0.95] tracking-[-0.035em]">
              Bokför själv.<br />
              <em className="text-primary not-italic font-display italic">Sov gott</em> ändå.
            </h1>
            <p className="mt-8 text-[15px] text-muted-foreground leading-relaxed max-w-md">
              Sköt bokföringen själv och spara tusenlappar varje månad till
              ett fast lågt månadspris. Våra auktoriserade ekonomer finns
              där när du tvekar och granskar allt varje kvartal.
            </p>
            <p className="mt-5 font-display italic text-[18px] text-foreground/90 max-w-md">
              Du behåller friheten. Vi tar bort osäkerheten.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <Link
                href="/register"
                className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground pl-6 pr-2 py-2 text-[14px] font-semibold w-fit"
              >
                Kom igång på 5 minuter
                <span className="h-9 w-9 rounded-full bg-primary-foreground text-primary grid place-items-center transition group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
                <span>30 dagar gratis</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                <span>Inget kort</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                <span>Säg upp när du vill</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- HERO MOCKUP (animated) ---------------- */
type Step = 0 | 1 | 2 | 3 | 4 | 5

function HeroMockup() {
  const [step, setStep] = useState<Step>(0)
  const [typed, setTyped] = useState("")
  const target = "Lunch med kund — Esperanto"

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = []
    const intervals: ReturnType<typeof setInterval>[] = []

    const runScene = () => {
      setStep(0)
      setTyped("")

      timeouts.push(setTimeout(() => setStep(1), 400))

      let i = 0
      const typingId = setInterval(() => {
        i++
        setTyped(target.slice(0, i))
        if (i >= target.length) clearInterval(typingId)
      }, 55)
      intervals.push(typingId)

      timeouts.push(setTimeout(() => setStep(2), 2600))
      timeouts.push(setTimeout(() => setStep(3), 3400))
      timeouts.push(setTimeout(() => setStep(4), 5800))
      timeouts.push(setTimeout(() => setStep(5), 7200))
    }

    runScene()
    const loop = setInterval(runScene, 10000)
    intervals.push(loop)

    return () => {
      timeouts.forEach(clearTimeout)
      intervals.forEach(clearInterval)
    }
  }, [])

  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-[2.5rem] bg-primary/15 blur-3xl -z-10" />

      <div
        className="relative rounded-2xl border overflow-hidden shadow-[var(--shadow-card)]"
        style={{
          background: "oklch(0.92 0.012 95)",
          color: "oklch(0.26 0.018 150)",
          ["--background" as string]: "oklch(0.96 0.010 95)",
          ["--foreground" as string]: "oklch(0.24 0.020 150)",
          ["--muted-foreground" as string]: "oklch(0.50 0.018 150)",
          ["--border" as string]: "oklch(0.84 0.012 95)",
          ["--card" as string]: "oklch(0.96 0.010 95)",
          borderColor: "oklch(0.82 0.014 95)",
        } as React.CSSProperties}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/70">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Ny verifikation
          </span>
          <span className="text-[11px] text-muted-foreground tabular-nums">#2041</span>
        </div>

        <div className="p-5 space-y-4 min-h-[420px]">
          <div className="rounded-xl border border-border/70 p-4 bg-background/40">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-10 rounded-md border border-border overflow-hidden bg-paper text-paper-foreground shrink-0 transition">
                <div className="px-1.5 pt-1.5 space-y-0.5">
                  <div className="h-0.5 w-6 bg-paper-foreground/40 rounded" />
                  <div className="h-0.5 w-5 bg-paper-foreground/30 rounded" />
                  <div className="h-0.5 w-7 bg-paper-foreground/30 rounded" />
                  <div className="h-0.5 w-4 bg-paper-foreground/30 rounded" />
                  <div className="h-0.5 w-6 bg-paper-foreground/30 rounded" />
                </div>
                {step < 1 && (
                  <div className="absolute inset-x-0 h-[2px] bg-primary shadow-[0_0_8px_var(--primary)] animate-[scanline_1.2s_ease-in-out_infinite]" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground inline-flex items-center gap-1.5">
                    <ScanLine className="h-3 w-3" /> Kvitto skannat
                  </span>
                  <span className="text-[11px] text-muted-foreground">Esperanto · 14:22</span>
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-2xl tracking-tight">1 248 kr</span>
                  <span className="text-[11px] text-muted-foreground">inkl. moms</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Beskrivning
            </label>
            <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-border bg-background/40 px-3 py-2.5 text-[14px] h-[42px]">
              <span className="truncate">{typed || " "}</span>
              <span className="inline-block h-4 w-[2px] bg-foreground/70 animate-[blink_1s_steps(1)_infinite]" />
            </div>
          </div>

          <div>
            <label className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Konto
            </label>
            <div
              className={
                "mt-1.5 flex items-center justify-between gap-2 rounded-lg border px-3 py-2.5 text-[14px] h-[42px] transition " +
                (step >= 4
                  ? "border-primary/60 bg-primary/10"
                  : step >= 2
                    ? "border-amber-400/50 bg-amber-400/5"
                    : "border-border bg-background/40")
              }
            >
              <span className={"truncate " + (step < 2 ? "text-muted-foreground" : "")}>
                {step >= 4 ? "5811 — Representation, avdragsgill" : step >= 2 ? "Osäker — be om hjälp?" : "Välj konto…"}
              </span>
              {step === 2 && (
                <span className="text-amber-400 font-display text-base">?</span>
              )}
              {step >= 4 && <Check className="h-4 w-4 text-primary" />}
            </div>
          </div>

          <div
            className={
              "rounded-xl border border-border/70 p-3.5 bg-background/40 flex items-start gap-3 transition-opacity duration-500 " +
              (step >= 3 ? "opacity-100" : "opacity-0 pointer-events-none")
            }
          >
            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-sm shrink-0">
              A
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-[12px]">
                <span className="font-medium">Anna</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-primary inline-flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Auktoriserad ekonom
                </span>
              </div>
              <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed">
                Lunch med kund bokförs på <span className="text-foreground">5811</span>. Avdragsgillt upp till 60 kr/person — resten på 6072. Jag fixar uppdelningen åt dig.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 h-9">
            <div className="flex items-center gap-2 text-[12px] whitespace-nowrap">
              {step >= 5 ? (
                <>
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-muted-foreground">
                    Granskat <span className="text-foreground">Q3 ✓</span>
                  </span>
                </>
              ) : step >= 3 ? (
                <>
                  <MessageCircle className="h-3.5 w-3.5 text-primary" />
                  <span className="text-muted-foreground">Anna svarade på 41 sek</span>
                </>
              ) : (
                <>
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                  <span className="text-muted-foreground">Utkast</span>
                </>
              )}
            </div>
            <button
              className={
                "rounded-full text-[12px] px-3 py-1.5 transition " +
                (step >= 4
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground")
              }
            >
              {step >= 4 ? "Bokfört ✓" : "Bokför"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          "absolute -left-4 sm:-left-8 top-32 max-w-[200px] rounded-2xl rounded-bl-sm bg-paper text-paper-foreground p-3 shadow-[var(--shadow-card)] transition-all duration-500 hidden sm:block " +
          (step >= 2 && step < 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none")
        }
      >
        <div className="text-[10px] uppercase tracking-[0.14em] opacity-60">Du</div>
        <div className="text-[13px] leading-snug mt-0.5">
          Lunch med kund — vart bokför jag det? 🤔
        </div>
      </div>

      <div
        className={
          "absolute -right-3 sm:-right-6 -bottom-4 rounded-2xl bg-primary text-primary-foreground p-4 shadow-[var(--shadow-card)] transition-all duration-700 " +
          (step >= 5 ? "opacity-100 translate-y-0 rotate-[-3deg]" : "opacity-0 translate-y-3 rotate-0")
        }
      >
        <div className="text-[10px] uppercase tracking-[0.14em] opacity-70">Sparat i månaden</div>
        <div className="font-display text-3xl leading-none mt-1 tracking-tight">+4 200 kr</div>
        <div className="text-[10px] opacity-70 mt-1">vs traditionell byrå</div>
      </div>
    </div>
  )
}

/* ---------------- MARQUEE TRUST ---------------- */
function Marquee() {
  const items = [
    "Auktoriserade ekonomer",
    "Ingen bindningstid",
    "Fast lågt pris",
  ]
  return (
    <section className="border-y border-border/60 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 py-5 flex flex-wrap items-center gap-x-10 gap-y-2 text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
        {items.map((it, i) => (
          <span key={it} className="inline-flex items-center gap-10">
            {it}
            {i < items.length - 1 && <span className="text-primary/60">/</span>}
          </span>
        ))}
      </div>
    </section>
  )
}

/* ---------------- MANIFESTO ---------------- */
function Manifesto() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-2">
          <span className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">01 — Idén</span>
        </div>
        <div className="md:col-span-10">
          <p className="font-display text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.025em]">
            Du behåller <em className="italic text-primary">friheten</em>.
            Vi tar bort osäkerheten.
          </p>
          <div className="mt-12 md:mt-14 max-w-2xl space-y-7 text-[19px] md:text-[21px] leading-[1.55] tracking-[-0.005em] text-foreground/80">
            <p>
              Sköt bokföringen själv i en plattform byggd för det. Skanna
              kvitton, koppla banken, klart. Fastnar du finns en auktoriserad
              ekonom ett klick bort, och var tredje månad går vi igenom allt
              tillsammans.
            </p>
            <p>
              <span className="text-foreground">Inga timdebiteringar. Ingen bindningstid.</span>{" "}
              <span className="text-muted-foreground">Bara ett fast lågt månadspris och tusenlappar kvar i bolaget varje månad.</span>
            </p>
            <p className="pt-2 border-t border-border/60 font-display italic text-[22px] md:text-[26px] leading-snug text-foreground">
              På köpet får du något ingen byrå kan ge dig: <span className="text-primary not-italic">riktig koll på dina egna pengar.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- HOW (numbered) ---------------- */
function How() {
  const steps = [
    {
      n: "01",
      title: "Du bokför.",
      body: "Skanna kvittot med mobilen, koppla banken, klicka match. Plattformen föreslår — du bestämmer.",
      tag: "Plattformen",
    },
    {
      n: "02",
      title: "Du frågar när du tvekar.",
      body: "Chatta direkt med en auktoriserad ekonom. Svar samma dag, oftast inom timmen. Inga timdebiteringar.",
      tag: "Supporten",
    },
    {
      n: "03",
      title: "Vi granskar varje kvartal.",
      body: "Var tredje månad går en ekonom igenom din bokföring. Inga obehagliga överraskningar vid bokslutet.",
      tag: "Granskningen",
    },
    {
      n: "04",
      title: "Du förstår ditt bolag.",
      body: "När du gör det själv ser du exakt vart pengarna går. Det är där den verkliga kontrollen börjar.",
      tag: "Bonusen",
    },
  ]
  return (
    <section id="hur" className="border-t border-border/60">
      {steps.map((s, i) => (
        <div
          key={s.n}
          className={
            "border-b border-border/60 " +
            (i % 2 === 1 ? "bg-card/40" : "")
          }
        >
          <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24 grid md:grid-cols-12 gap-8 md:gap-12 items-baseline">
            <div className="md:col-span-2 font-display text-5xl md:text-6xl text-primary tabular-nums">
              {s.n}
            </div>
            <div className="md:col-span-6">
              <h3 className="font-display text-3xl md:text-5xl tracking-[-0.025em] leading-[1.05]">
                {s.title}
              </h3>
            </div>
            <div className="md:col-span-4">
              <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">{s.tag}</p>
              <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

/* ---------------- COMPARE TABLE ---------------- */
function Compare() {
  const rows: [string, string, string, string][] = [
    ["Månadskostnad", "499 kr fast", "99 kr", "3 000–8 000 kr rörligt"],
    ["Auktoriserad ekonom", "Ingår", "—", "Ingår"],
    ["Du behåller kontrollen", "Ja", "Ja", "Nej"],
    ["Hjälp när du tvekar", "Chatt + video", "—", "Telefontid"],
    ["Kvartalsgranskning", "Ingår", "—", "Tilläggstjänst"],
    ["Svarstid på frågor", "Inom timmen", "—", "2–5 dagar"],
    ["Bindningstid", "Ingen", "Ingen", "12 månader"],
  ]
  return (
    <section id="jamfor" className="py-28 md:py-36 bg-paper text-paper-foreground">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-2">
            <span className="text-[12px] uppercase tracking-[0.18em] opacity-60">02 — Jämför</span>
          </div>
          <div className="md:col-span-10">
            <h2 className="font-display text-4xl md:text-6xl tracking-[-0.025em] leading-[1.02]">
              Vad du faktiskt sparar — i kronor och i frihet.
            </h2>
          </div>
        </div>

        <div className="border-t border-paper-foreground/15">
          <div className="grid grid-cols-12 py-4 text-[12px] uppercase tracking-[0.18em] opacity-60 gap-3">
            <div className="col-span-3" />
            <div className="col-span-3">Forntox</div>
            <div className="col-span-3">Helt själv</div>
            <div className="col-span-3">Traditionell byrå</div>
          </div>
          {rows.map(([label, ours, self, theirs]) => (
            <div
              key={label}
              className="grid grid-cols-12 py-6 border-t border-paper-foreground/15 text-[14px] md:text-[16px] items-baseline gap-3"
            >
              <div className="col-span-3 font-medium">{label}</div>
              <div className="col-span-3 font-display text-lg md:text-2xl tracking-tight">{ours}</div>
              <div className="col-span-3 opacity-60">{self}</div>
              <div className="col-span-3 opacity-60 line-through decoration-1">{theirs}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- VOICES ---------------- */
function Voices() {
  const quotes = [
    {
      text: "Jag sparar 4 200 kr i månaden mot min gamla byrå — och förstår äntligen vart pengarna i bolaget tar vägen.",
      who: "Sara Lindqvist",
      where: "Norrhem Studio",
    },
    {
      text: "Det som får mig att sova om natten är kvartalsgranskningen. Någon kollar att jag inte gjort bort mig.",
      who: "Mikael Ahmed",
      where: "Frilansande arkitekt",
    },
    {
      text: "Första gången jag faktiskt har koll på min likviditet. Jag är inte ekonom — men jag förstår mitt företag nu.",
      who: "Ellen Vik",
      where: "Vik Konsult AB",
    },
  ]
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-14">
          <div className="md:col-span-2">
            <span className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">03 — Från kunderna</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border/60 border border-border/60">
          {quotes.map((q) => (
            <figure key={q.who} className="bg-background p-8 md:p-10 flex flex-col">
              <blockquote className="font-display text-xl md:text-2xl leading-snug tracking-[-0.015em] flex-1">
                “{q.text}”
              </blockquote>
              <figcaption className="mt-8 text-[13px] text-muted-foreground">
                <span className="text-foreground">{q.who}</span> — {q.where}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const incl = [
    "Bokföringsplattform med kvittoskanning",
    "Bankkoppling — alla svenska banker",
    "Personlig onboarding med ekonom",
    "Obegränsad chatt med auktoriserade ekonomer",
    "Kvartalsgranskning",
    "Momsrapport & årsbokslut",
    "Ingen bindningstid",
  ]
  return (
    <section id="pris" className="py-28 md:py-36 border-t border-border/60">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <span className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">04 — Pris</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl tracking-[-0.03em] leading-[0.95]">
            Ett pris.<br />
            <em className="italic text-primary">Allt ingår.</em>
          </h2>
          <div className="mt-10 flex items-baseline gap-3">
            <span className="font-display text-[6rem] leading-none tracking-[-0.04em]">499</span>
            <div className="text-muted-foreground">
              <div className="text-sm">kr / mån</div>
              <div className="text-xs">exkl. moms</div>
            </div>
          </div>
          <Link
            href="/register"
            className="mt-10 group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground pl-6 pr-2 py-2 text-[14px] font-semibold w-fit"
          >
            Starta 30 dagar gratis
            <span className="h-9 w-9 rounded-full bg-primary-foreground text-primary grid place-items-center transition group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="md:col-span-7 md:pl-12 md:border-l border-border/60">
          <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">Det här ingår</p>
          <ul className="mt-6 divide-y divide-border/60">
            {incl.map((i, idx) => (
              <li key={i} className="py-4 flex items-baseline gap-6 text-[16px]">
                <span className="font-display text-sm text-primary tabular-nums w-6">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const qs = [
    {
      q: "Kan jag verkligen sköta bokföringen själv?",
      a: "Ja. Plattformen guidar steg för steg, kvitton skannas automatiskt och banktransaktioner matchas med ett klick. Och fastnar du — chatta med en ekonom direkt.",
    },
    {
      q: "Vad gör ekonomerna åt mig?",
      a: "De onboardar dig, svarar på frågor löpande och granskar din bokföring varje kvartal så att inget hamnar fel inför bokslut och deklaration.",
    },
    {
      q: "Finns det bindningstid?",
      a: "Nej. Du betalar månadsvis och säger upp när du vill — utan avgifter.",
    },
    {
      q: "Vad händer med min data?",
      a: "Krypterad lagring i Sverige enligt GDPR. Bara du och din tilldelade ekonom har åtkomst.",
    },
    {
      q: "Funkar det för mitt aktiebolag?",
      a: "Ja — enskild firma, handelsbolag och aktiebolag.",
    },
  ]
  return (
    <section id="faq" className="py-28 md:py-36 border-t border-border/60">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <span className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">05 — Frågor</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[0.95]">
            Det du undrar.
          </h2>
        </div>
        <div className="md:col-span-8">
          {qs.map((item) => (
            <details key={item.q} className="group border-b border-border/60 py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                <span className="font-display text-xl md:text-2xl tracking-[-0.015em]">{item.q}</span>
                <span className="mt-1 shrink-0 text-muted-foreground">
                  <Plus className="h-5 w-5 group-open:hidden" />
                  <Minus className="h-5 w-5 hidden group-open:block" />
                </span>
              </summary>
              <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed max-w-2xl">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- CLOSING ---------------- */
function Closing() {
  return (
    <section className="py-32 md:py-44 border-t border-border/60">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <h2 className="font-display text-[3rem] sm:text-[5rem] md:text-[7.5rem] leading-[0.92] tracking-[-0.04em]">
          Redo att ta<br />
          <em className="italic text-primary">kontroll?</em>
        </h2>
        <Link
          href="/register"
          className="mt-12 group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground pl-7 pr-2 py-2 text-[14px] font-semibold"
        >
          Starta din 30-dagars trial
          <span className="h-9 w-9 rounded-full bg-primary-foreground text-primary grid place-items-center transition group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </Link>
        <p className="mt-6 text-[13px] text-muted-foreground">
          Kom igång på fem minuter. Vi backar dig hela vägen.
        </p>
      </div>
    </section>
  )
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-[1200px] px-6 py-16 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-6">
          <div className="font-display text-[3rem] md:text-[4.5rem] leading-none tracking-[-0.03em]">
            forntox<span className="text-primary">.</span>
          </div>
          <p className="mt-5 text-[14px] text-muted-foreground max-w-sm">
            Bokföring för småföretagare som vill göra själva — med ekonom i ryggen.
          </p>
        </div>
        <FooterCol title="Produkt" links={[["Funktioner", "#hur"], ["Pris", "#pris"], ["Säkerhet", "#faq"]]} />
        <FooterCol title="Företag" links={[["Om oss", "#"], ["Karriär", "#"], ["Kontakt", "#"]]} />
        <FooterCol title="Hjälp" links={[["Kunskapsbank", "#faq"], ["Logga in", "/login"], ["Boka samtal", "#"]]} />
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Forntox AB · 559000-0000</span>
          <span>Krypterad data — i Sverige</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="md:col-span-2">
      <div className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">{title}</div>
      <ul className="mt-4 space-y-2 text-[14px]">
        {links.map(([label, href]) => {
          const isInternal = href.startsWith("/")
          if (isInternal) {
            return (
              <li key={label}>
                <Link href={href} className="hover:text-primary transition">{label}</Link>
              </li>
            )
          }
          return (
            <li key={label}>
              <a href={href} className="hover:text-primary transition">{label}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
