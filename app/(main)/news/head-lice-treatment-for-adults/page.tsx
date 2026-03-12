"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Head Lice Treatment for Adults",
  description: "Complete guide to head lice treatment for adults in the UK.",
  author: { "@type": "Organization", name: "NitNOT Clinic" },
  publisher: { "@type": "Organization", name: "NitNOT Clinic" },
  datePublished: "2026-03-08",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function Myth({ myth, fact }: { myth: string; fact: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <p className="font-semibold text-gray-900">Myth: {myth}</p>
      <p className="text-gray-600 mt-1">Fact: {fact}</p>
    </div>
  );
}

export default function HeadLiceTreatmentForAdultsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="text-sm text-gray-500 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:text-orange-500">
              News
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">
              Head Lice Treatment for Adults
            </span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Head Lice Treatment for Adults
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            If you thought head lice were only a problem for school children,
            you&apos;re not alone — but you&apos;d be mistaken. Adults can and do
            get head lice, particularly those who spend time with children or
            work in close‑contact environments. While the idea of having lice
            can feel unpleasant, the good news is that treatment today is
            simple, fast, and highly effective when done properly.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            This guide explains everything adults need to know about
            identifying, treating, and preventing head lice, with a focus on
            practical UK‑approved treatments and household strategies that
            actually work.
          </p>

          <div className="bg-orange-50 rounded-2xl p-6 mb-10">
            <p className="text-gray-700 mb-3">
              Need professional help? Our{" "}
              <Link
                href="/services"
                className="text-orange-500 font-semibold hover:underline"
              >
                treatment services
              </Link>{" "}
              offer a 100% guarantee of success.
            </p>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full"
              onClick={() => router.push("/contact")}
            >
              <Phone className="mr-2 h-4 w-4" /> Book an Appointment
            </Button>
          </div>

          <Section title="What Are Head Lice?">
            <p>
              Head lice (<em>Pediculus humanus capitis</em>) are tiny parasitic
              insects that live on the human scalp, feeding on small amounts of
              blood. They do not carry disease, but their bites can cause
              itching and discomfort.
            </p>
            <p>
              Each louse is about the size of a sesame seed, and their eggs —
              known as nits — appear as tiny white or yellowish specks stuck
              firmly to the hair shaft, often near the scalp.
            </p>
            <p>
              Because they move quickly, live close to the scalp, and blend
              with hair colour, adult lice can be difficult to spot without
              careful inspection.
            </p>
          </Section>

          <Section title="Can Adults Really Get Head Lice?">
            <p>
              Absolutely. While they&apos;re more common among children aged 4 to
              11 (particularly girls), adults frequently catch them through
              close contact.
            </p>
            <p>The most common scenarios include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Parents and caregivers catching lice from their children.
              </li>
              <li>
                Teachers, healthcare workers, and nursery staff who come into
                regular hair‑to‑hair contact.
              </li>
              <li>
                Partners — lice can spread between adults who share a bed or
                cuddle.
              </li>
              <li>
                Households with shared brushes, combs, towels, or bedding.
              </li>
            </ul>
            <p>
              Because head lice can only survive around 24–48 hours away from
              the human scalp, they spread primarily through direct head‑to‑head
              contact rather than from furniture or clothing.
            </p>
          </Section>

          <Section title="Signs and Symptoms of Head Lice in Adults">
            <p>
              The classic symptom of a lice infestation is an itchy scalp,
              usually caused by an allergic reaction to louse saliva. However,
              not everyone itches — it can take several weeks for the scalp to
              react.
            </p>
            <p>Common signs to look out for include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Persistent itching behind the ears or at the nape of the neck.
              </li>
              <li>A tickling or crawling feeling on the scalp.</li>
              <li>Red bite marks, particularly around the neckline.</li>
              <li>Difficulty sleeping (lice are more active in the dark).</li>
              <li>
                Nits visibly attached to hair strands near the scalp (unlike
                dandruff, these do not brush away easily).
              </li>
            </ul>
            <p>
              If you&apos;re unsure whether you have lice, using a fine‑toothed
              detection comb on damp, conditioned hair is the most reliable way
              to confirm it.
            </p>
          </Section>

          <Section title="How to Check for Head Lice">
            <p>
              A wet‑combing check is the gold standard, recommended by both the
              NHS and local health authorities in the UK. Here&apos;s how to do
              it:
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Wash and condition the hair, leaving it wet and slippery.</li>
              <li>
                Use a fine‑toothed detection comb, available from most
                pharmacies or online.
              </li>
              <li>
                Comb section by section, from scalp to tip, wiping the comb on
                white tissue after each pass.
              </li>
              <li>
                Inspect closely for lice or nits. Live lice will be brownish and
                may move; nits are white or yellow and stick firmly to the
                hair.
              </li>
            </ol>
            <p>
              Do this over a sink or light‑coloured towel for visibility. Find
              even a single live louse, and you&apos;ll need to treat.
            </p>
          </Section>

          <Section title="Recommended Adult Head Lice Treatments in the UK">
            <p>
              Fortunately, treatment options are straightforward, safe, and easy
              to follow. They fall into two primary categories:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              1. Chemical and Silicone-Based Lotions or Sprays
            </h3>
            <p>
              These products suffocate or dehydrate lice, breaking their life
              cycle. Popular UK brands include Hedrin, Lyclear, Full Marks, and
              Nyda.
            </p>
            <p>
              Always follow the manufacturer&apos;s instructions, but general
              guidance includes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Apply to dry hair, ensuring full scalp and root coverage.
              </li>
              <li>
                Leave for the recommended time (often between 10 minutes and 8
                hours, depending on the product).
              </li>
              <li>
                Rinse thoroughly and comb out dead lice and eggs using a fine
                tooth comb.
              </li>
              <li>Repeat after 7 days to kill newly hatched lice.</li>
            </ul>
            <p>
              Many modern treatments are pesticide‑free, using dimeticone or
              mineral oil to suffocate the lice — a great option for adults who
              prefer gentler solutions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              2. Wet Combing (The &quot;Bug Busting&quot; Method)
            </h3>
            <p>
              Wet combing alone can remove lice effectively without chemicals
              but requires persistence.
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>
                Comb wet, conditioned hair systematically from the scalp to the
                ends.
              </li>
              <li>Repeat every 3–4 days for at least 2 weeks.</li>
              <li>
                Continue until no lice are found for two consecutive sessions.
              </li>
            </ol>
            <p>
              Although time‑intensive, this method is ideal for those who prefer
              a natural, low‑cost, or pregnancy‑safe approach.
            </p>
          </Section>

          <Section title="Do You Need to Treat the Whole Family?">
            <p>
              Not always. Only those with confirmed lice need treatment, but
              it&apos;s a good idea to check everyone in the household. Since
              head lice spread through close contact, family members —
              particularly children — may easily reinfect each other.
            </p>
            <p>
              If one person has lice, everyone else should be checked
              carefully, especially those sleeping in the same bed or using
              shared hair items.
            </p>
          </Section>

          <Section title="Handling Nits (Lice Eggs)">
            <p>
              Treatments primarily target living lice; nits can remain attached
              to the hair even after successful treatment. Removing them
              improves comfort and reduces confusion later.
            </p>
            <p>Tips for nit removal:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use a fine metal comb on conditioned, damp hair daily.</li>
              <li>
                Apply a vinegar or diluted conditioner rinse to help loosen
                eggs.
              </li>
              <li>Snip out stubborn strands if necessary.</li>
            </ul>
            <p>
              Freshly laid eggs are difficult to spot because they&apos;re
              close to the scalp, so a second treatment within 7–10 days
              ensures any newly hatched lice are caught before they reproduce.
            </p>
          </Section>

          <Section title="Preventing Reinfestation">
            <p>
              Even after complete removal, it&apos;s worth taking precautions to
              minimise the chance of lice returning.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Regular detection combing, especially if you have children at
                school.
              </li>
              <li>
                Avoid sharing combs, brushes, towels, hats, or hair accessories.
              </li>
              <li>
                Tie long hair up in a plait or bun during close‑contact
                activities.
              </li>
              <li>Check children weekly, particularly during known outbreaks.</li>
              <li>Clean combs and brushes in hot water (over 60°C) after use.</li>
            </ul>
            <p>
              There&apos;s no proven spray or product that reliably prevents
              head lice, but vigilance and routine checking work best.
            </p>
          </Section>

          <Section title="Common Myths About Adult Head Lice">
            <p>
              Because lice infestations are still somewhat taboo, myths tend to
              spread faster than the lice themselves. Let&apos;s separate fact
              from fiction.
            </p>
            <div className="space-y-4">
              <Myth
                myth="Head lice prefer dirty hair."
                fact="Lice don't care whether hair is clean or dirty; they simply like blood and warmth."
              />
              <Myth
                myth="You can catch lice from pets."
                fact="Human lice only feed on humans; pets can't carry them."
              />
              <Myth
                myth="Head lice can jump or fly."
                fact="They crawl — quite quickly — but cannot jump or fly."
              />
              <Myth
                myth="Home remedies like mayonnaise or oil are guaranteed to work."
                fact="Some may suffocate a few lice, but most are unreliable and messy compared with tested products."
              />
              <Myth
                myth="Short hair stops lice."
                fact="Lice can live in any hair length above a few millimetres; shorter cuts simply make detection easier."
              />
            </div>
          </Section>

          <Section title="When to Seek Medical Advice">
            <p>
              Most head lice infestations can be managed at home using
              over‑the‑counter treatments. However, consider speaking to your
              GP or pharmacist if:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>You&apos;ve tried two full treatments, and live lice are still seen.</li>
              <li>The scalp becomes infected or inflamed due to scratching.</li>
              <li>
                You&apos;re pregnant, breastfeeding, or have sensitive skin and
                need product advice.
              </li>
              <li>You experience allergies or reactions to treatment lotions.</li>
            </ul>
          </Section>

          <Section title="Lice Treatment and Haircare Tips for Adults">
            <p>
              Because adult hair can include dyes, treatments, or extensions,
              here are tailored suggestions:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Colour‑treated hair</strong> — use silicone‑based
                (non‑pesticide) products that won&apos;t strip dye.
              </li>
              <li>
                <strong>Afro‑textured or curly hair</strong> — wide‑tooth
                detangling before wet combing helps prevent breakage.
              </li>
              <li>
                <strong>Extensions or weaves</strong> — treat only the scalp
                area; if infestation persists, professional removal may be
                necessary.
              </li>
              <li>
                <strong>Beards and body hair</strong> — head lice rarely live
                outside the scalp, but check near the neckline or behind ears.
              </li>
            </ul>
          </Section>

          <Section title="Are Head Lice Becoming Resistant to Treatment?">
            <p>
              In some countries, traditional insecticide‑based treatments (like
              permethrin) have lost effectiveness due to louse resistance. In
              the UK, however, this issue has largely been sidestepped by
              modern silicone‑ and oil‑based products, which work mechanically
              rather than chemically — meaning lice can&apos;t easily adapt.
            </p>
            <p>
              If a product doesn&apos;t work, it&apos;s more likely due to
              missed lice or eggs than true resistance. Ensuring adequate
              coverage, correct timing, and repeat application are key. For more on why treatments fail and when to see a specialist, read <Link href="/news/why-do-head-lice-treatments-keep-failing" className="text-orange-600 font-medium hover:underline">why head lice treatments keep failing</Link>.
            </p>
          </Section>

          <Section title="Emotional Impact and Stigma">
            <p>
              Even as adults, discovering head lice can feel embarrassing. Many
              people worry it reflects poor hygiene or attracts judgment from
              others. It&apos;s important to remember: anyone can get lice,
              regardless of cleanliness or lifestyle.
            </p>
            <p>
              Approach the situation practically — treat promptly, inform close
              contacts if necessary, and move on. With today&apos;s treatments,
              there&apos;s no reason for ongoing discomfort or stigma.
            </p>
          </Section>

          <Section title="Quick Recap: The Adult Lice Treatment Checklist">
            <ol className="list-decimal pl-6 space-y-1">
              <li>Confirm lice via wet‑comb check.</li>
              <li>Choose a product‑based or wet‑comb treatment.</li>
              <li>Treat all confirmed cases in the household on the same day.</li>
              <li>Repeat treatment after 7 days.</li>
              <li>Remove nits using daily combing for cosmetic comfort.</li>
              <li>Clean combs, pillowcases, and brushes.</li>
              <li>Recheck weekly for a month to confirm clearance.</li>
            </ol>
            <p>
              Following this sequence prevents reinfestation and ensures the
              infestation cycle is broken effectively.
            </p>
          </Section>

          <Section title="Where to Buy Head Lice Treatments in the UK">
            <p>
              Most pharmacies, including Boots, Superdrug, Tesco Pharmacy, and
              Lloyds, stock NHS‑approved lice treatments, detection combs, and
              nit removal kits. Online pharmacies and supermarket health aisles
              also offer home‑delivery options.
            </p>
            <p>
              If cost is a concern, your local NHS minor ailments service may
              supply lice lotion free of charge, particularly for qualifying
              families.
            </p>
          </Section>

          <div className="mt-10 mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Head lice in adults are more common than many realise — especially
              for parents, teachers, and professionals who work closely with
              children. The key to successful treatment is early detection, full
              coverage, and disciplined follow‑up.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              With the modern UK‑approved treatments available today, getting
              rid of lice doesn&apos;t have to be stressful or time‑consuming.
              Stay calm, follow the steps carefully, and you&apos;ll be
              lice‑free within a couple of weeks.
            </p>
          </div>

          <div className="bg-orange-500 rounded-2xl p-6 sm:p-8 text-center mt-12">
            <h2 className="text-2xl font-bold text-white mb-3">
              Need Professional Help?
            </h2>
            <p className="text-orange-100 mb-6">
              Our expert Nit Nurse provides guaranteed head lice removal at our{" "}
              <Link
                href="/"
                className="underline text-white font-semibold"
              >
                Hampton clinic
              </Link>{" "}
              or via our mobile service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                className="bg-white text-orange-600 hover:bg-orange-50 rounded-full px-6"
                onClick={() => router.push("/contact")}
              >
                Book an Appointment
              </Button>
              <Button
                variant="outline"
                className="bg-white text-orange-600 hover:bg-orange-50 border-white rounded-full px-6"
                asChild
              >
                <a href="tel:07835356251">
                  <Phone className="mr-2 h-4 w-4" />
                  Call 07835 356251
                </a>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
