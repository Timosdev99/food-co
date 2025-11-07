'use client';

import { useState } from 'react';
import { Mail, Check, ChevronDown, Play } from 'lucide-react';

export default function FanClubMissionSection() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white">

      <FanClubSection />

      <MissionStatementSection />
    </div>
  );
}

function FanClubSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [selectedLocations, setSelectedLocations] = useState({
    primeSteaks: true,
    oakEmber: true,
    oysterWine: true,
    nonnas: true,
    chickenPlace: true,
    stuartFish: true,
    amoreItalian: true
  });

  type LocationKeys = keyof typeof selectedLocations;

  const handleCheckbox = (location: LocationKeys) => {
    setSelectedLocations(prev => ({
      ...prev,
      [location]: !prev[location]
    }));
  };

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
                <Mail className="w-6 h-6 text-amber-600" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  JOIN OUR
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  FAN CLUB
                </span>
              </h2>

              <p className="text-gray-600 text-lg">
                Stay connected for exclusive offers and event information
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-700 font-medium mb-3">Select your favorite locations:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { key: 'primeSteaks', label: "Mum G's Prime Seafood & Steaks" },
                    { key: 'oakEmber', label: "Oak & Ember Steakhouse" },
                    { key: 'oysterWine', label: "Mum G's Oyster & Wine Bar" },
                    { key: 'nonnas', label: "Nonna's" },
                    { key: 'chickenPlace', label: "The Chicken Place" },
                    { key: 'stuartFish', label: "Stuart Fish Grill" },
                    { key: 'amoreItalian', label: "Amore Italian Chophouse" }
                  ].map((location) => (
                    <label key={location.key} className="flex items-start gap-2 cursor-pointer group">
                      <div className="relative mt-0.5">
                        <input
                          type="checkbox"
                          checked={selectedLocations[location.key as LocationKeys]}
                          onChange={() => handleCheckbox(location.key as LocationKeys)}
                          className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500 cursor-pointer"
                        />
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-amber-600 transition-colors">
                        {location.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold rounded-lg transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                SIGN UP
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By signing up, you agree to receive marketing emails. You can unsubscribe at any time.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Restaurant outdoor dining"
                className="w-full h-[600px] object-cover"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/40 hover:bg-white/30 hover:scale-110 transition-all duration-300 group/play">
                    <Play className="w-8 h-8 text-white ml-1 group-hover/play:scale-110 transition-transform" fill="white" />
                  </button>
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Experience the Atmosphere</h3>
                  <p className="text-white/90">Join us for an unforgettable dining experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MissionStatementSection() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0">
        <svg className="w-full h-24 fill-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Title */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-amber-500"></div>
              <div className="text-amber-600 text-2xl">✦</div>
              <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-amber-500"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                MISSION STATEMENT
              </span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-tl-full"></div>

            <div className="relative space-y-6">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                To create an unprecedented Floribbean Steakhouse where the finest seafood and steak meet the beauty of the oceanfront.
              </p>

              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                We are committed to delivering exceptional cuisine, impeccable service, and an atmosphere that captures the essence of coastal luxury, ensuring every guest leaves with cherished memories of indulgence by the sea.
              </p>

              <div className="flex justify-center items-center gap-4 mt-8 text-6xl text-amber-500/20 font-serif">
                <span>"</span>
                <span>"</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-white transform rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </div>
  );
}
