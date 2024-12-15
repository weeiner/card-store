import Navbar from "../components/custom/Navbar";
import CustomCard from "../components/custom/CustomCard";

const cards = [
  { id: 1, name: "Birthday Wishes", price: 4.99, image: "/placeholder.svg?height=200&width=300" },
  { id: 2, name: "Congratulations", price: 3.99, image: "/placeholder.svg?height=200&width=300" },
  { id: 3, name: "Thank You", price: 2.99, image: "/placeholder.svg?height=200&width=300" },
  { id: 4, name: "Get Well Soon", price: 3.49, image: "/placeholder.svg?height=200&width=300" },
  { id: 5, name: "Wedding Wishes", price: 5.99, image: "/placeholder.svg?height=200&width=300" },
  { id: 6, name: "Sympathy", price: 4.49, image: "/placeholder.svg?height=200&width=300" },
]

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
