import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hotdrinks from "@/components/Hotdrinks";
import Icedcoffee from "@/components/Icedcoffees";
import SpecCoffee from "@/components/SpecCoffee";
import Tea from "@/components/Tea";



export default function Home() {

  return(
    <>
      <Header />
      <Hotdrinks />
      <Icedcoffee />
      <SpecCoffee />
      <Tea />
      <Footer />
    </>
  )
}