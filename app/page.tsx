import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoryList from "./components/CategoryList";
import CompanyLogo from "./CompanyLogo";
import Explore from "./Explore";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanyLogo />
      <FeaturedProducts />
      <CategoryList />
      <Explore />
    </div>
  );
}
