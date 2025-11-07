'use client';

import { Wine, Clock, Utensils, Calendar, Sparkles, ChevronRight } from 'lucide-react';

export default function SpecialOffersSection() {
  const offers = [
    {
      id: 1,
      title: "HAPPY HOUR",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
      description: "At Both Bars and Inside Lounge: Open – Close\nInside Dining Tables: Open – 5pm\nOutside Tall Deck: Open – 6pm",
      details: [
        "$5 Specialty Cocktails",
        "20% Off Appetizers & Shareables: Plus Sliders",
        "$5 Wells | 90% Off 12oz Vodka",
        "Oysters $1 off Market Price",
        "Steamed Mussels $15 off",
        "Fresh Catch Dinners"
      ],
      icon: Clock,
      color: "from-orange-500 to-amber-600"
    },
    {
      id: 2,
      title: "SPECIAL\nOCCASIONS",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
      buttonText: "CUSTOMIZE YOUR DINING EXPERIENCE",
      icon: Sparkles,
      color: "from-blue-600 to-indigo-700",
      special: true
    },
    {
      id: 3,
      title: "SUNDAY\nBRUNCH",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80",
      description: "10AM – 2PM\nJoin Us For Unlimited Bloody Marys & Mimosa Bar\n$29 pp – unlimited service fee",
      icon: Utensils,
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 4,
      title: "MONDAY\n$2 OYSTERS",
      image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&q=80",
      description: "ON THE HALF SHELL\nOpen-Till Half Shell Menu Served\n$3 Off All Martinis\nInside Resto: Non-Martinis",
      icon: Utensils,
      color: "from-slate-600 to-gray-700"
    },
    {
      id: 5,
      title: "TUESDAY\nWINE",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      description: "All-Day Tuesday Wine &\nChampagne: 50% Bottles Off\n5pm-$200",
      icon: Wine,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 6,
      title: "WEDNESDAY\nLOBSTER NIGHT",
      image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=800&q=80",
      description: "Choice of 1lb. Whole Maine Lobster\n$42pp or Cold Water Lobster Tail\nChoice of Appetizer: Lobster Bisq.Anot Choose SOSB\nServed with Unlimited Mashed Potatoes & Sautéed\nVegetables\n$36 pp – 10% service fee",
      icon: Utensils,
      color: "from-red-600 to-rose-700"
    }
  ];

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">

      <div className="absolute inset-0">

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
          alt="Abstract blue texture background"
          className="w-full h-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-white/20 opacity-70"></div>

        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600"></div>
            <Sparkles className="mx-4 w-8 h-8 text-blue-600" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-600"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Weekly <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Specials</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our exciting weekly offers and special dining experiences
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`absolute top-0 left-0 w-20 h-20 overflow-hidden z-20`}>
                <div className={`absolute top-0 left-0 w-32 h-8 bg-gradient-to-r ${offer.color} transform -rotate-45 -translate-x-8 translate-y-4 shadow-lg`}>
                  <div className="flex items-center justify-center h-full">
                    <offer.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="relative h-64 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${offer.color} opacity-40 group-hover:opacity-50 transition-opacity`}></div>
              </div>

              <div className="p-6 relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 whitespace-pre-line leading-tight">
                  {offer.title}
                </h3>

                {offer.special ? (
                  <button className={`w-full mt-4 px-6 py-4 bg-gradient-to-r ${offer.color} text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group`}>
                    <span className="text-sm">{offer.buttonText}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 whitespace-pre-line">
                      {offer.description}
                    </p>

                    {offer.details && (
                      <ul className="space-y-2">
                        {offer.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${offer.color} mt-2 mr-2 flex-shrink-0`}></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${offer.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* 
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-100">
            <Calendar className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Dine?</h3>
            <p className="text-gray-600 mb-6">Reserve your table today and experience our exceptional cuisine</p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span>Make a Reservation</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
