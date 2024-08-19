import Advertisement from "@/components/Advertisement";
import Header from "@/components/Header";
import MainStoryGrid from "@/components/MainStoryGrid";
import SpecialtyStoryGrid from "@/components/SpecialtyStoryGrid";

function Home() {
  return (
    <>
      <Header />
      <div className="max-width-wrapper">
        <MainStoryGrid />
        <SpecialtyStoryGrid />
      </div>
      {/* TODO: Spacer */}
      {/* TODO: Footer */}
    </>
  );
}

export default Home
