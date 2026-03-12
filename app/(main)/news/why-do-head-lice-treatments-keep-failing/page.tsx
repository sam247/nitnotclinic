"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function WhyDoHeadLiceTreatmentsKeepFailingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <article className="py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:text-orange-500">News</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Why Do Head Lice Treatments Keep Failing?</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why Do Head Lice Treatments Keep Failing (And What Actually Works)?
          </h1>

          <div className="rounded-xl overflow-hidden shadow-lg mb-8">
            <Image
              src="/why-do-head-lice-treatments-keep-failing.webp"
              alt="Why head lice treatments keep failing and when to book professional head lice treatment"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            If you feel like you&apos;ve tried &quot;every head lice treatment under the sun&quot; and they keep coming back, you&apos;re not alone. Many parents spend weeks battling lice, only to find more crawling around just as they think they&apos;ve won.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            In this article, we&apos;ll look at the main reasons head lice treatments fail – and what actually works to get your family properly clear.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">1. Head Lice Are Becoming Resistant To Some Products</h2>
            <p className="text-gray-700 mb-4">One of the biggest reasons shop‑bought treatments don&apos;t work is resistance. Over time, head lice can become less sensitive to certain ingredients that used to kill them reliably.</p>
            <p className="text-gray-700 mb-2">That means:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>You may follow the instructions perfectly but still see live lice afterwards.</li>
              <li>A product that worked for one child a few years ago might do very little now.</li>
              <li>Repeating the same failing treatment over and over just wastes time and money.</li>
            </ul>
            <p className="text-gray-700">
              If you&apos;ve used the same lotion or spray more than once and you&apos;re still finding live lice, it&apos;s a strong sign you need a different approach – not just another bottle. Our guide on <Link href="/news/do-i-need-professional-head-lice-treatment" className="text-orange-600 font-medium hover:underline">when to book professional head lice treatment</Link> explains when it&apos;s time to see a specialist.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">2. Eggs (Nits) Are Not Being Fully Removed</h2>
            <p className="text-gray-700 mb-4">Even when you manage to kill most of the live lice, the eggs can be the real problem. Those tiny, glue‑like nits are designed to cling to hair and survive.</p>
            <p className="text-gray-700 mb-2">Treatments often fail because:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>The product doesn&apos;t fully penetrate or dissolve the egg shell.</li>
              <li>Combing is rushed or patchy, so some sections of hair are missed.</li>
              <li>Only the visible eggs are removed, while the ones close to the scalp are left behind.</li>
            </ul>
            <p className="text-gray-700">
              When eggs are left, they hatch a few days later and you&apos;re right back where you started – with a new wave of baby lice (nymphs) spreading through the hair. A truly effective treatment has to deal with both live lice and eggs, and that usually means very methodical, thorough combing – something a <Link href="/services" className="text-orange-600 font-medium hover:underline">professional head lice clinic</Link> is set up to do.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">3. Not Treating Everyone At The Same Time</h2>
            <p className="text-gray-700 mb-4">Head lice spread quickly among people who have regular close contact. If you only treat one child and not their siblings, or you skip checking adults, you can get stuck in a loop of re‑infestation.</p>
            <p className="text-gray-700 mb-2">Common scenarios:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>One child is &quot;the obvious one&quot; with lots of lice, but a sibling has a lighter infestation that goes unnoticed.</li>
              <li>Parents assume adults can&apos;t get lice and don&apos;t check their own hair.</li>
              <li>Close contacts (sleepovers, grandparents, co‑parents) are not checked or informed.</li>
            </ul>
            <p className="text-gray-700">
              If even one person in the close circle is missed, lice can move back and forth and make it seem like treatments aren&apos;t working. Adults can get head lice too – read our article on <Link href="/news/head-lice-treatment-for-adults" className="text-orange-600 font-medium hover:underline">head lice treatment for adults</Link> for what to look for and how to treat.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">4. Rushing The Combing Process</h2>
            <p className="text-gray-700 mb-4">Combing out head lice sounds simple, but doing it properly is hard work. Many failed treatments come down to technique rather than the product itself.</p>
            <p className="text-gray-700 mb-2">Treatments are more likely to fail if:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Hair is not fully detangled before combing.</li>
              <li>You&apos;re using a poor‑quality plastic comb that misses smaller lice and eggs.</li>
              <li>Sections are too big and you&apos;re not working from the scalp to the ends every time.</li>
              <li>Combing sessions are cut short because children are bored, upset or uncomfortable.</li>
            </ul>
            <p className="text-gray-700">
              For a heavy infestation, a proper comb‑through can take an hour or more per person. That&apos;s a lot to ask of busy parents, especially if you have more than one child. A <Link href="/services" className="text-orange-600 font-medium hover:underline">head lice clinic or home visit</Link> gives you the time and technique to get it done properly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">5. Stopping Too Soon</h2>
            <p className="text-gray-700 mb-4">Another easy mistake is stopping treatment as soon as you stop seeing obvious lice, without doing follow‑up checks.</p>
            <p className="text-gray-700 mb-2">This can cause problems when:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Eggs that survived the first treatment hatch a few days later.</li>
              <li>You don&apos;t re‑check on days 3, 7 and 10–14, so new lice grow and start laying eggs.</li>
              <li>You assume &quot;no itching&quot; means &quot;no lice&quot;, even though some children don&apos;t scratch at all.</li>
            </ul>
            <p className="text-gray-700">Without a simple follow‑up schedule, it&apos;s easy to think you&apos;re clear when the infestation is quietly building up again.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">6. Using Too Many Different Products</h2>
            <p className="text-gray-700 mb-4">When you&apos;re desperate, it&apos;s tempting to try anything that claims to work – lotions, sprays, shampoos, oils, home remedies. But constantly switching can actually make things worse.</p>
            <p className="text-gray-700 mb-2">Problems with product‑hopping:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>It&apos;s harder to know which treatment helped and which didn&apos;t.</li>
              <li>You might mix products that aren&apos;t meant to be used together.</li>
              <li>Scalp and hair can become irritated, especially in children with sensitive skin or eczema.</li>
            </ul>
            <p className="text-gray-700">
              Rather than throwing more products at the problem, it&apos;s usually better to pick one safe, evidence‑based approach and combine it with meticulous combing – or <Link href="/contact" className="text-orange-600 font-medium hover:underline">book a professional head lice treatment</Link> who can do that for you.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">When It&apos;s Time To Consider Professional Head Lice Treatment</h2>
            <p className="text-gray-700 mb-4">There&apos;s a point where continuing to DIY stops being practical. Professional head lice treatment can be a better option if:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>You&apos;ve already tried two or more treatments that didn&apos;t clear the infestation.</li>
              <li>You&apos;re finding head lice again within a week or two of &quot;finishing&quot; treatment.</li>
              <li>You have a child who can&apos;t tolerate long combing sessions (sensory needs, ADHD, autism, anxiety).</li>
              <li>You&apos;re dealing with multiple children or the whole family at once.</li>
              <li>Head lice are causing arguments, tears, missed sleep or missed school.</li>
            </ul>
            <p className="text-gray-700">
              A specialist can often clear even stubborn infestations much faster, simply because they have the right tools, products and technique – and the time to do the job properly. See our <Link href="/services" className="text-orange-600 font-medium hover:underline">head lice treatment services</Link> for clinic and home-visit options.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How A Professional Head Lice Clinic Actually Gets Results</h2>
            <p className="text-gray-700 mb-4">So what does a professional service do differently?</p>
            <p className="text-gray-700 mb-2">Typically, a good clinic or mobile technician will:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Carry out a detailed check to see exactly how heavy the infestation is.</li>
              <li>Use professional‑grade combs and a proven treatment product that is gentle on the scalp.</li>
              <li>Work through the hair in tiny, systematic sections so lice and eggs are removed thoroughly.</li>
              <li>Show you what&apos;s been removed so you can see the progress with your own eyes.</li>
              <li>Give you a clear, simple follow‑up plan (including when to re‑check and how to reduce the risk of getting lice again).</li>
            </ul>
            <p className="text-gray-700">
              That combination of expertise, equipment and time is very hard to recreate at home – especially when you&apos;re tired and emotionally drained from weeks of trying. Find out more about <Link href="/about" className="text-orange-600 font-medium hover:underline">how we work at NitNOT Clinic</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What Actually Works Long-Term</h2>
            <p className="text-gray-700 mb-4">Whether you choose to keep treating at home or decide to book a professional, long‑term success usually comes down to three things:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>A method that targets both live lice and eggs.</li>
              <li>Treating or checking everyone who might be affected at the same time.</li>
              <li>A simple habit of regular head checks during term time.</li>
            </ul>
            <p className="text-gray-700">
              Once you&apos;ve got a clear head to start from, building a quick weekly comb‑through into your routine can dramatically cut the chances of a major infestation taking hold again.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready To Stop Fighting With Head Lice?</h2>
            <p className="text-gray-700 mb-4">
              If you&apos;re exhausted by treatments that don&apos;t deliver, it might be time to get specialist help instead of buying yet another bottle.
            </p>
            <p className="text-gray-700 mb-2">A professional head lice clinic can:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Take over the hard work of removing lice and nits.</li>
              <li>Give you clear, confident advice tailored to your family.</li>
              <li>Help you go from &quot;constant battle&quot; to &quot;back in control&quot; in as little as one visit.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If you&apos;re in Hampton, Richmond, London or the surrounding areas, you can <Link href="/contact" className="text-orange-600 font-medium hover:underline">book a friendly, child‑focused head lice treatment appointment</Link> and finally get the results your at‑home treatments haven&apos;t managed.
            </p>
            <p className="text-gray-700 font-medium">
              Tired of head lice treatments that keep failing? Book your professional head lice treatment today and let an expert deal with it properly.
            </p>
          </section>

          <div className="bg-orange-500 rounded-2xl p-6 sm:p-8 text-center mt-12">
            <h2 className="text-2xl font-bold text-white mb-3">Book Professional Head Lice Treatment</h2>
            <p className="text-orange-100 mb-6">
              Our <Link href="/services" className="underline text-white font-semibold hover:no-underline">Hampton clinic</Link> and home-visit service offer a 100% guarantee. Safe, gentle and child-friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                className="bg-white text-orange-600 hover:bg-orange-50 rounded-full px-6"
                onClick={() => router.push("/contact")}
              >
                Book an appointment
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
