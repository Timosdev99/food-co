'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ThanksgivingHero() {
  const [currentMedia, setCurrentMedia] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const mediaItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=1920&q=80',
      alt: 'Thanksgiving dinner table'
    },
    {
      type: 'image',
      src: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
      alt: 'thanksgiving meal'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1920&q=80',
      alt: 'Gourmet thanksgiving meal'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % mediaItems.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${currentMedia === index ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}

                  autoPlay
                  muted
                  loop
                  playsInline
                  onLoadedData={() => setIsVideoLoaded(true)}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}


          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <nav className="relative z-20 flex items-center justify-between px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="text-3xl font-bold text-white">
              <span className="text-amber-400">Kyle G's</span>
              <div className="text-sm tracking-[0.3em] font-light">PRIME SEAFOOD</div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">
            <a href="#" className="hover:text-amber-400 transition">MENUS</a>
            <a href="#" className="hover:text-amber-400 transition">RESERVE A TABLE</a>
            <a href="#" className="hover:text-amber-400 transition">EVENTS</a>
            <a href="#" className="hover:text-amber-400 transition">GIFT CARDS</a>
            <a href="#" className="hover:text-amber-400 transition">PRIVATE DINING</a>
            <a href="#" className="hover:text-amber-400 transition">SPECIAL OCCASIONS</a>
            <a href="#" className="hover:text-amber-400 transition">OUR BRANDS</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center px-4">
          <div className="max-w-5xl animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-16 bg-amber-400"></div>
              <div className="mx-4 text-amber-400 text-2xl">✦</div>
              <div className="h-px w-16 bg-amber-400"></div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              THANKSGIVING
              <span className="block text-amber-400 mt-2">DAY</span>
            </h1>

            <div className="space-y-2 mb-8">
              <p className="text-2xl md:text-3xl text-white font-light tracking-wide">
                Open 11am-8pm
              </p>
              <p className="text-xl md:text-2xl text-amber-400 font-light tracking-wider">
                Holiday Menu & Holiday Specials
              </p>
            </div>

            <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Celebrate this special day with our carefully curated Thanksgiving menu featuring
              premium seafood, perfectly roasted turkey, and traditional favorites with a gourmet twist.
            </p>

            <button className="group relative px-10 py-4 bg-amber-500 text-white font-semibold text-lg tracking-wider overflow-hidden transition-all duration-300 hover:bg-amber-600 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">VIEW HOLIDAY MENU</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>

            <div className="mt-6">
              <button className="px-8 py-3 border-2 border-white text-white font-medium tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                RESERVE YOUR TABLE
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-amber-400" />
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-20 flex space-x-2">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMedia(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentMedia === index
                ? 'bg-amber-400 w-8'
                : 'bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </div>

      <AwardsSection />

      <ReservationSection />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </>
  );
}

function AwardsSection() {
  const awards = [
    {
      title: "Voted",
      subtitle: "TOP 100\nBrunch Spots\nin USA",
      color: "bg-blue-900",
      textSize: "text-xs"
    },
    {
      title: "Voted",
      subtitle: "TOP 100\nAl Fresco\nRestaurants\nin USA",
      color: "bg-blue-800",
      textSize: "text-xs"
    },
    {
      title: "Diners'\nChoice",
      year: "2025",
      color: "bg-red-600",
      logo: true,
      textSize: "text-sm"
    },
    {
      title: "Diners'\nChoice",
      year: "2024",
      color: "bg-red-500",
      logo: true,
      textSize: "text-sm"
    },
    {
      title: "TOP 100\nRestaurant",
      year: "2023",
      color: "bg-amber-500",
      textSize: "text-sm"
    },
    {
      title: "Voted",
      subtitle: "Top 100\nMost Scenic\nRestaurants\nin USA",
      color: "bg-blue-900",
      textSize: "text-xs"
    },
    {
      title: "Voted",
      subtitle: "Top 50\nfor Date Night\nin USA",
      color: "bg-blue-800",
      textSize: "text-xs"
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide justify-center items-center flex-wrap">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative group cursor-pointer transform hover:scale-110 transition-all duration-500"
              style={{
                animation: `float ${3 + index * 0.2}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="relative w-40 h-40">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <filter id={`shadow-${index}`}>
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.3" />
                    </filter>
                  </defs>
                  <path
                    d="M100,10 L105,30 L125,25 L115,45 L135,50 L120,65 L135,80 L115,85 L125,105 L105,100 L100,120 L95,100 L75,105 L85,85 L65,80 L80,65 L65,50 L85,45 L75,25 L95,30 Z"
                    fill="#d1d5db"
                    filter={`url(#shadow-${index})`}
                  />
                </svg>

                <div className={`absolute inset-4 rounded-full ${award.color} flex flex-col items-center justify-center text-white shadow-2xl border-4 border-white group-hover:border-amber-300 transition-all duration-300`}>
                  {award.logo && (
                    <div className="bg-white rounded-full px-2 py-0.5 mb-2">
                      <span className="text-red-600 text-[8px] font-bold">● OpenTable</span>
                    </div>
                  )}
                  <div className="text-center px-3">
                    <div className={`font-bold leading-tight whitespace-pre-line ${award.textSize}`}>
                      {award.title}
                    </div>
                    {award.subtitle && (
                      <div className="text-[9px] leading-tight mt-1 whitespace-pre-line">
                        {award.subtitle}
                      </div>
                    )}
                    {award.year && (
                      <div className="text-xs font-semibold mt-1">{award.year}</div>
                    )}
                  </div>
                </div>

                <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

function ReservationSection() {
  const [formData, setFormData] = useState({
    people: '2 people',
    date: 'Today',
    time: 'Now'
  });

  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover transform scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-blue-900/80" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Find a Table
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="text-amber-400 text-2xl">✦</div>
              <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <select
                value={formData.people}
                onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                className="px-6 py-5 bg-white/95 rounded-xl text-gray-800 font-medium appearance-none cursor-pointer hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option>2 people</option>
                <option>1 person</option>
                <option>3 people</option>
                <option>4 people</option>
                <option>5 people</option>
                <option>6+ people</option>
              </select>

              <select
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="px-6 py-5 bg-white/95 rounded-xl text-gray-800 font-medium appearance-none cursor-pointer hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option>Today</option>
                <option>Tomorrow</option>
                <option>This Weekend</option>
              </select>

              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="px-6 py-5 bg-white/95 rounded-xl text-gray-800 font-medium appearance-none cursor-pointer hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option>Now</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
              </select>

              <button className="px-6 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                Find a Table
              </button>
            </div>
          </div>


          <div className="flex items-center justify-center mt-6 gap-2">
            <span className="text-white/70 text-sm">Powered by</span>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
              <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">●</span>
              </div>
              <span className="text-white font-semibold text-sm">OpenTable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
