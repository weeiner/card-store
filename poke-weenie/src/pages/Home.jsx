import Navbar from "../components/custom/Navbar";
import CustomCard from "../components/custom/CustomCard";
import Footer from "../components/custom/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row flex-wrap justify-center mt-3 mb-3">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
