import HeroSection from '@/src/components/landing-page/hero-section';
import { HowItWorks } from '@/src/components/landing-page/how-it-works';
import { MarketRate } from '@/src/components/landing-page/market-rate';
import PreFooter from '@/src/components/landing-page/pre-footer';
import { SiteFooter } from '@/src/components/landing-page/site-footer';
import { SiteHeader } from '@/src/components/landing-page/site-header';
import Testimonials from '@/src/components/landing-page/testimonials';

export default function Page() {
  return (
    <>
      <div className="relative w-full">
        <SiteHeader />
        <HeroSection />
        <div className="absolute top-0 z-0 h-full w-full bg-[url('/hero/hero-bg.svg')] bg-cover"></div>
      </div>
      <div className="mx-auto mb-[100px] flex w-full max-w-[80rem] flex-col items-center justify-center gap-[100px] px-3 md:px-[95px] md:pb-[80x]">
        <div className="flex  justify-center text-center">
          <h3 className="text-3xl lg:text-4xl font-black capitalize mt-5">
            Exchange your crypto,   <span className="text-primary"> for fiat</span>.
          </h3>
        </div>
        <HowItWorks />
      </div>
      <MarketRate />
      <Testimonials />
      <PreFooter />
      <SiteFooter />
    </>
  );
}
