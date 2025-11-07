'use client';

import { MapPin, Phone, Mail, Clock, ChevronUp, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function RestaurantFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg className="w-full h-10 fill-gray-100" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <button
          onClick={scrollToTop}
          className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white"
        >
          <ChevronUp className="w-8 h-8 text-white" strokeWidth={3} />
        </button>
      </div>

      <div className="relative pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-amber-400 rounded-full"></div>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {['CONTACT', 'CAREERS', 'PRIVATE DINING', 'DIRECTIONS', 'ABOUT US', 'SHOP', 'EVENTS'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-amber-400 rounded-full"></div>
                Location
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-300">10900 S Ocean Dr.</p>
                    <p className="text-gray-300">Hutchinson Island, FL 34957</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="tel:772-237-5461" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Phone: 772-237-5461
                  </a>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:info@kylegs.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Email: Click Here
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-amber-400 rounded-full"></div>
                Hours
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-medium">Mon-Thu:</span>
                      <span className="text-gray-300 ml-4">11:00pm-9:00pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-medium">Fri-Sat:</span>
                      <span className="text-gray-300 ml-4">11:00pm-10:30pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-medium">Sun:</span>
                      <span className="text-gray-300 ml-4">10:00am-9:00pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-amber-400 rounded-full"></div>
                Our Team
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-amber-400/50 transition-colors">
                  <p className="text-sm text-gray-400 mb-1">CHEF DE CUISINE</p>
                  <p className="text-white font-semibold">Rafael Him</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-amber-400/50 transition-colors">
                  <p className="text-sm text-gray-400 mb-1">GENERAL MANAGER</p>
                  <p className="text-white font-semibold">David Doe</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">

              <div className="flex items-center gap-6">
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/50">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>

              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm mb-2">
                  © 2025 MAIN STREET MEDIA 360. ALL RIGHTS RESERVED
                </p>
                <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs">
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">ACCESSIBILITY STATEMENT</a>
                  <span className="text-gray-600">|</span>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">TERMS OF SERVICE</a>
                  <span className="text-gray-600">|</span>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">PRIVACY POLICY</a>
                  <span className="text-gray-600">|</span>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">CAREERS</a>
                  <span className="text-gray-600">|</span>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">SERVICE CHARGE DISCLOSURE</a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-amber-400 text-sm mb-2">powered by</p>
              <div className="inline-block bg-gradient-to-r from-lime-500 to-lime-600 px-6 py-2 rounded-lg">
                <p className="text-white font-bold text-lg">Main Street Media</p>
                <p className="text-white text-xs tracking-wider">DIGITAL MARKETING AGENCY</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-blue-600"></div>
    </footer>
  );
}
