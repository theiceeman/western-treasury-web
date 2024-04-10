import { SiteFooter } from '@/components/landing-page/site-footer';
import { SiteHeader } from '@/components/landing-page/site-header';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      {/* <SiteHeader /> */}
      <main className="flex flex-col w-full">{children}</main>
      {/* <SiteFooter /> */}
    </>
  );
}
