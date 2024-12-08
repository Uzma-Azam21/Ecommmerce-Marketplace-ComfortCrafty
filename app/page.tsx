import HeroSection from "./components/HeroSection/HeroSection";
import CompanyLogo from "./components/CompanyLogo/CompanyLogo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CompanyLogo />
    </main>
  );
}
