import Navbar from "../components/custom/Navbar";
import CustomCard from "../components/custom/CustomCard";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
}

export default Home;
