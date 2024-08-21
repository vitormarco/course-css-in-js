import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainStoryGrid from "@/components/MainStoryGrid";
import Spacer from "@/components/Spacer";
import SpecialtyStoryGrid from "@/components/SpecialtyStoryGrid";

function Home() {
  return (
    <>
      <Header />
      <div className="max-width-wrapper">
        <MainStoryGrid />
        <SpecialtyStoryGrid />
      </div>
      <Spacer size={64} />
      <Footer />
    </>
  );
}

export default Home
