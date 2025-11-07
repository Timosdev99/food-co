'use client';

import { useState } from 'react';
import { Gift, Calendar, Star, ArrowRight, Sparkles } from 'lucide-react';

export default function PromotionalBanners() {
  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <PrimeMemberBanner />

        <GiftCardBanner />

        <HolidayPartyBanner />
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle 2s infinite;
        }
      `}</style>
    </div>
  );
}

export function PrimeMemberBanner() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
          <div className="text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-bold text-sm tracking-wider">EXCLUSIVE MEMBER PROGRAM</span>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Mun G's
                </span>
              </div>
              <div className="text-sm text-gray-400 tracking-[0.3em] mb-4">PRIME SEAFOOD & STEAKS</div>
              <h2 className="text-5xl md:text-6xl font-bold text-white">
                PRIME MEMBER
              </h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                GET REWARDED
              </h3>
              <p className="text-gray-300 text-lg">
                Start earning with every reservation and<br />
                enjoy exclusive offers and rewards
              </p>
            </div>

            <button className="group/btn px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 mx-auto md:mx-0">
              <span className="tracking-wider">REGISTER NOW</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative h-80 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80"
              alt="Premium dining"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GiftCardBanner() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-green-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
      <div className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-700 rounded-2xl overflow-hidden shadow-2xl">
        {/* Christmas Decorations */}
        <div className="absolute top-0 left-0 right-0 h-24 opacity-20">
          <img src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200&q=80" alt="decorations" className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white text-2xl animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            >
              ❄
            </div>
          ))}
        </div>

        <div className="relative py-12 px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex justify-center items-center gap-4 mb-4">
              <span className="text-yellow-400 text-3xl">⭐</span>
              <span className="text-yellow-400 text-4xl">✨</span>
              <span className="text-yellow-400 text-3xl">⭐</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              GIFT CARD SPECIAL
            </h2>

            <div className="text-5xl md:text-6xl font-black text-yellow-300 mb-4 drop-shadow-lg">
              20% DISCOUNT ON ALL GIFT CARDS!
            </div>

            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/30 mb-6">
              <p className="text-white font-bold text-lg">
                LIMITED TIME OFFER
              </p>
            </div>

            <p className="text-white text-xl mb-6">
              Use promo code<br />
              <span className="text-2xl font-bold text-yellow-300">HOLIDAY20</span><br />
              at checkout
            </p>

            <button className="group/btn px-10 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold text-lg rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 flex items-center gap-3 mx-auto">
              <Gift className="w-6 h-6" />
              <span className="tracking-wider">PURCHASE NOW</span>
              <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
            </button>

            <p className="text-white/80 text-sm mt-6">
              *Valid on $50+ gift card purchases. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(1000px) rotate(360deg);
            opacity: 0.3;
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
}

export function HolidayPartyBanner() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
      <div className="relative grid md:grid-cols-2 gap-6 items-center">
        {/* Left Card */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group/card transform hover:scale-105 transition-transform duration-500">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
            alt="Holiday party"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <Calendar className="w-12 h-12 mb-4 text-yellow-400" />
              <h3 className="text-4xl font-bold mb-3 leading-tight">
                RESERVE YOUR<br />HOLIDAY PARTY
              </h3>
              <button className="mt-4 px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2">
                <span>BOOK NOW</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-2xl group/card transform hover:scale-105 transition-transform duration-500">
          <img
            src="https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=800&q=80"
            alt="Elegant table setting"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="text-center p-8">
                <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-pulse" />
                <h3 className="text-3xl font-bold text-white mb-4">
                  Elegant Private<br />Dining Experience
                </h3>
                <p className="text-gray-200 text-lg">
                  Perfect for celebrations<br />and special occasions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
