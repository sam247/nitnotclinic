"use client";

import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "07835 356251",
    href: "tel:07835356251",
    description: "Call us today to make a booking.",
    available: "Mon-Fri 10:00-19:30, Sat 11:00-17:00",
  },
  {
    icon: MessageCircle,
    title: "Text / WhatsApp",
    detail: "07835 356251",
    href: "https://wa.me/4407835356251",
    description: "Send us a text or WhatsApp for quick questions.",
    available: "We'll respond as soon as we can",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "anica@nitnot.com",
    href: "mailto:anica@nitnot.com",
    description: "Detailed inquiries and non-urgent bookings.",
    available: "We'll respond as soon as we can",
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    urgency: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Booking Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email || "Not provided"}\n` +
        `Service: ${formData.service || "Not specified"}\n` +
        `Visit Type: ${formData.urgency || "Not specified"}\n\n` +
        `Message:\n${formData.message || "No additional message"}`
    );

    window.location.href = `mailto:anica@nitnot.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening Email",
      description:
        "Your email client will open with the booking details pre-filled.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Contact Us"
        subtitle="Call us, Text us or send us a WhatsApp on 07835 356251 today to make a booking."
      />

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Reach Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the contact method that works best for you. We&apos;re here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <a key={index} href={method.href} className="block">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-5 sm:p-6 text-center">
                    <method.icon className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-orange-500 mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">
                      {method.detail}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">
                      {method.description}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {method.available}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Book Your Appointment
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8">
                Book an appointment now and we&apos;ll get back to you as soon as we can.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service">Service Needed</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                    >
                      <option value="">Select a service</option>
                      <option value="Head Lice Check">Head Lice Check</option>
                      <option value="Short/Thin to Medium Hair">
                        Short/Thin to Medium Hair Treatment
                      </option>
                      <option value="Long/Thick Hair & Severe Cases">
                        Long/Thick Hair & Severe Cases
                      </option>
                      <option value="Just need advice">Just need advice</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="urgency">Preferred Visit Type</Label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                    >
                      <option value="">Select type</option>
                      <option value="In Clinic (Hampton)">In Clinic (Hampton)</option>
                      <option value="Home Visit">Home Visit</option>
                      <option value="Flexible">I&apos;m flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1"
                    placeholder="Any additional details about your situation, preferred appointment times, or questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Booking Request
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  This will open your email client to send directly to anica@nitnot.com
                </p>
              </form>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
                    <span>Opening Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm sm:text-base">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">10:00 – 19:30</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">11:00 – 17:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
                    <span>Clinic Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-600 space-y-1 mb-4 text-sm sm:text-base">
                    <p className="font-semibold text-gray-900">NitNOT Clinic</p>
                    <p>Flat 8, Chapter Way</p>
                    <p>Hampton, Richmond, London</p>
                    <p>TW12 1AG</p>
                  </div>
                  <p className="text-sm text-orange-600 font-medium">
                    Free on-street parking available
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
                    <span>Mobile Service Areas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    We provide mobile home visit services across London and surrounding areas.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Home visit minimum charge: £150. Additional travel charge may apply for longer journeys.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-orange-50">
                <CardContent className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:07835356251"
                      className="flex items-center space-x-3 text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span className="font-semibold">07835 356251</span>
                    </a>
                    <a
                      href="mailto:anica@nitnot.com"
                      className="flex items-center space-x-3 text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span className="font-semibold">anica@nitnot.com</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance + final CTA */}
      <section className="py-12 sm:py-16 bg-orange-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Every booking is handled with care and discretion. We use only safe, gentle head lice treatment methods and have helped hundreds of families — you&apos;re in experienced hands.
          </p>
          <a
            href="tel:07835356251"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-4 font-semibold transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call 07835 356251 to book
          </a>
        </div>
      </section>
    </div>
  );
}
