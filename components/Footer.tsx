import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/images/logo.webp" alt="NitNOT Clinic" className="h-6 sm:h-8 w-auto mb-4" />
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Professional head lice treatment and lice removal. Clinic in Hampton, UK, plus home visits across London. 100% guarantee.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-orange-500">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-orange-500 flex-shrink-0" />
                <a href="tel:07835356251" className="text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors">07835 356251</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-orange-500 flex-shrink-0" />
                <a href="mailto:anica@nitnot.com" className="text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors break-all">anica@nitnot.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-orange-500 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-600">Hampton, Richmond, London</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-orange-500">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/services" className="block text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors">
                Our Services
              </Link>
              <Link href="/pricing" className="block text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="block text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors">
                Book Appointment
              </Link>
              <Link href="/news" className="block text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors">
                News & Articles
              </Link>
              <a href="/sitemap.xml" className="block text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors">
                Sitemap
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-orange-500">Clinic & Hours</h4>
            <div className="space-y-1 text-gray-600 text-xs sm:text-sm">
              <p>NitNOT Clinic</p>
              <p>Flat 8, Chapter Way</p>
              <p>Hampton, Richmond, London TW12 1AG</p>
              <div className="pt-2">
                <p className="font-semibold text-gray-700">Opening hours</p>
                <p>Mon – Fri: 10:00 – 19:30</p>
                <p>Sat: 11:00 – 17:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            © NitNOT Clinic | Flat 8, Chapter Way, Hampton, Richmond, London TW12 1AG
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
