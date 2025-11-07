import Image from "next/image";
import ThanksgivingHero from "@/components/hero";
import SpecialOffersSection from "@/components/special";
import PromotionalBanners from "@/components/banners";
import FanClubMissionSection from "@/components/fan";
export default function Home() {
  return (
    <div>
      <ThanksgivingHero />
      <SpecialOffersSection />
      <PromotionalBanners />
      <FanClubMissionSection />
    </div>
  );
}
