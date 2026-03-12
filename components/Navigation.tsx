"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/images/nitnot-logo.webp" alt="NitNOT Clinic" className="h-6 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-orange-600 bg-orange-50"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <a
              href="tel:07835356251"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-orange-600 border border-orange-300 rounded-full hover:bg-orange-50 transition-colors"
            >
              <Phone size={14} className="mr-1.5" />
              07835 356251
            </a>
            <Button
              onClick={() => router.push("/contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile: Call button + burger */}
          <div className="flex items-center space-x-2 md:hidden">
            <a
              href="tel:07835356251"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              <Phone size={14} />
              Call Now
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-orange-600 bg-orange-50"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:07835356251"
                className="flex items-center justify-center px-3 py-3 mt-2 text-orange-600 font-medium border border-orange-300 rounded-full hover:bg-orange-50 transition-colors"
              >
                <Phone size={16} className="mr-2" />
                Call 07835 356251
              </a>
              <Button
                onClick={() => {
                  router.push("/contact");
                  setIsOpen(false);
                }}
                className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
