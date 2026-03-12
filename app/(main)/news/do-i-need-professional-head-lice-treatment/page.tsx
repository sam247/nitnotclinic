"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function DoINeedProfessionalHeadLiceTreatmentPage() {
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
            <span className="text-gray-900">Do I Need Professional Head Lice Treatment?</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Do I Need Professional Head Lice Treatment Or Can I Treat It At Home?
          </h1>

          <div className="rounded-xl overflow-hidden shadow-lg mb-8">
            <Image
              src="/do-i-need-professional-head-lice-treatment.webp"
              alt="Professional head lice treatment - when to book a clinic or home visit"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            When you first spot head lice, it&apos;s tempting to grab the nearest bottle in the chemist and hope for the best. But some infestations are stubborn, keep coming back, or spread quickly through the family. That&apos;s when professional head lice treatment can save you a lot of time, stress and money.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            In this guide, we&apos;ll walk through when DIY is enough – and when it&apos;s time to book a head lice clinic or home‑visit appointment.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How To Know If Your Child Has Head Lice</h2>
            <p className="text-gray-700 mb-4">Before you think about treatment, you need to be sure you&apos;re actually dealing with head lice and nits.</p>
            <p className="text-gray-700 mb-2">Common signs include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Persistent itching, especially behind the ears and at the nape of the neck</li>
              <li>Tiny white/yellow &quot;dots&quot; stuck to the hair shaft that don&apos;t brush off easily</li>
              <li>Live lice moving quickly when you part the hair</li>
              <li>A crawling or tickling sensation on the scalp</li>
            </ul>
            <p className="text-gray-700">
              The most reliable way to check is with a good quality nit comb on damp, conditioned hair under a bright light. Work in small sections from scalp to tip and wipe the comb on white tissue each pass. If you see live lice or lots of eggs, you&apos;re dealing with an active infestation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">When At‑Home Head Lice Treatments Can Work</h2>
            <p className="text-gray-700 mb-4">For a light infestation, or the very first time you&apos;ve spotted lice, a careful DIY approach can sometimes be enough.</p>
            <p className="text-gray-700 mb-2">At‑home treatment may be suitable if:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>You&apos;ve only found a few lice and very few attached eggs</li>
              <li>You have time and patience to comb thoroughly every few days</li>
              <li>Your child sits reasonably well for combing sessions</li>
              <li>Everyone in the family can be checked and treated at the same time</li>
            </ul>
            <p className="text-gray-700 mb-2">A good basic home routine:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Use a metal nit comb and plenty of conditioner on wet hair</li>
              <li>Comb from scalp to ends in very small sections</li>
              <li>Repeat every 3–4 days for at least two weeks</li>
              <li>Check all family members and treat anyone with live lice</li>
            </ul>
            <p className="text-gray-700">
              If you&apos;re consistent and the infestation is mild, you may clear it at home. But there are clear signs that DIY isn&apos;t working. If treatments keep failing, see our article on <Link href="/news/why-do-head-lice-treatments-keep-failing" className="text-orange-600 font-medium hover:underline">why head lice treatments keep failing</Link> and what actually works.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Signs Your At‑Home Head Lice Treatment Isn&apos;t Working</h2>
            <p className="text-gray-700 mb-4">Many parents end up stuck in a cycle of &quot;nearly clear&quot; for weeks or even months. If any of these sound familiar, it&apos;s time to consider professional head lice treatment:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Lice keep coming back after you thought you&apos;d cleared them</li>
              <li>You&apos;ve tried more than one shop‑bought lotion or spray without success</li>
              <li>You&apos;re seeing lots of tiny new lice (nymphs), which means eggs keep hatching</li>
              <li>Combing sessions are taking hours and causing tears, meltdowns or battles</li>
              <li>You have a child with sensory needs, ADHD or autism who cannot tolerate long combing sessions</li>
              <li>The whole family is affected and it feels impossible to get everyone clear at the same time</li>
            </ul>
            <p className="text-gray-700">
              At this point, it&apos;s not your fault. Head lice have become increasingly resistant to many over‑the‑counter products, and even &quot;natural&quot; options can fail if they&apos;re not applied and combed correctly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Professional Head Lice Treatment Can Be More Effective</h2>
            <p className="text-gray-700 mb-4">A specialist head lice clinic or mobile lice technician does this all day, every day. That experience makes a big difference.</p>
            <p className="text-gray-700 mb-2">Professional treatment can help because:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Thorough technique:</strong> Every strand is worked through in a logical pattern, so nothing is missed.</li>
              <li><strong>Specialist tools and products:</strong> Clinics use professional‑grade combs and solutions that are gentle but highly effective.</li>
              <li><strong>Time and focus:</strong> Appointments are long enough to do the job properly, without kids (or parents) getting exhausted.</li>
              <li><strong>Education:</strong> You&apos;ll be shown exactly what has been removed and taught how to check going forward.</li>
              <li><strong>Follow‑up plan:</strong> Clear guidance on when to re‑check, how to prevent re‑infestation, and what to do if your child is exposed again at school.</li>
            </ul>
            <p className="text-gray-700">Most families are surprised how quickly a trained specialist can get even heavy infestations under control.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">When To Book A Head Lice Clinic Or Home Visit</h2>
            <p className="text-gray-700 mb-4">If you&apos;re unsure whether it&apos;s &quot;bad enough&quot; for a clinic, ask yourself these questions:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Have you already spent money on two or more products that haven&apos;t worked?</li>
              <li>Has the infestation been hanging around for more than two weeks?</li>
              <li>Are head lice affecting school, sleep, behaviour or confidence?</li>
              <li>Do you feel embarrassed, overwhelmed or unsure what else to try?</li>
              <li>Do you have more than one child with lice at the same time?</li>
            </ul>
            <p className="text-gray-700">
              If you&apos;ve answered &quot;yes&quot; to any of these, professional head lice treatment is likely to be faster, more reliable and, in many cases, cheaper than continuing to experiment at home.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What Happens At A Professional Head Lice Appointment?</h2>
            <p className="text-gray-700 mb-2">Every clinic is slightly different, but you can typically expect:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>A quick consultation and scalp check to confirm the level of infestation</li>
              <li>Application of a safe, clinic‑approved product or conditioner</li>
              <li>Systematic combing using specialist lice and nit combs</li>
              <li>Regular wipes of the comb so you can see what is being removed</li>
              <li>Advice on what needs washing (and what doesn&apos;t) at home</li>
              <li>A clear aftercare plan and, if needed, a follow‑up appointment</li>
            </ul>
            <p className="text-gray-700">
              Most children settle quickly once they realise it doesn&apos;t hurt and they can watch a film, read or use a tablet while the specialist works.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Can Head Lice Be Treated At Home After Seeing A Professional?</h2>
            <p className="text-gray-700 mb-4">
              Yes, in many cases the goal is to give you a &quot;fresh start&quot; and then show you how to stay on top of things. After a professional head lice treatment, you&apos;ll usually be advised to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Do a quick comb‑through on set days to catch any stragglers</li>
              <li>Check the rest of the family and close contacts</li>
              <li>Build a simple weekly check into your routine during peak school term times</li>
            </ul>
            <p className="text-gray-700">
              This means that next time you spot the first signs, you&apos;re more likely to catch it early and manage it yourself.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Worried About Head Lice And Not Sure What To Do Next?</h2>
            <p className="text-gray-700 mb-4">
              If you&apos;re exhausted by constant combing, fed up with products that don&apos;t work, or worried about how bad an infestation has become, you don&apos;t have to handle it alone.
            </p>
            <p className="text-gray-700 mb-2">A professional head lice clinic can:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Confirm exactly what you&apos;re dealing with</li>
              <li>Treat the infestation safely and thoroughly</li>
              <li>Give you a clear plan so you feel back in control</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If you&apos;re in Hampton, Richmond, London or the surrounding areas, you can book a friendly, child‑focused head lice treatment appointment and get everything taken care of in one visit.
            </p>
            <p className="text-gray-700 font-medium">
              Ready to stop battling head lice at home? Book your professional head lice treatment today and let a specialist do the hard work for you.
            </p>
          </section>

          <div className="bg-orange-500 rounded-2xl p-6 sm:p-8 text-center mt-12">
            <h2 className="text-2xl font-bold text-white mb-3">Book Professional Head Lice Treatment</h2>
            <p className="text-orange-100 mb-6">
              Our Hampton clinic and home-visit service offer a 100% guarantee. Safe, gentle and child-friendly.
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
