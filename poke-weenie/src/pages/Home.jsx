import Navbar from "../components/custom/Navbar";
import CustomCard from "../components/custom/CustomCard";
import Footer from "../components/custom/Footer";

const cards = [
  {
    id: 1,
    name: "Birthday Wishes",
    price: 4.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Congratulations",
    price: 3.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Thank You",
    price: 2.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Get Well Soon",
    price: 3.49,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Wedding Wishes",
    price: 5.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Sympathy",
    price: 4.49,
    image: "/placeholder.svg?height=200&width=300",
  },
];

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
