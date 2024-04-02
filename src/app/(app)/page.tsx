import HeroSection from '@/components/hero-section';
import { HowItWorks } from '@/components/how-it-works';
import { MarketRate } from '@/components/market-rate';

export default function Page() {
  return (
    <>
      <HeroSection />
      <div className="my-[100px] grid items-center justify-center gap-[100px] px-[88px] pb-[80x] pt-[150px]">
        <div className="flex  items-center justify-center">
          <h3 className="text-[55px]/[60px]">Exchange globally, no limit always</h3>
        </div>
        <HowItWorks />
      </div>
      <MarketRate />
    </>
  );
}
