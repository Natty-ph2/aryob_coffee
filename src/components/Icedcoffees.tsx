import Card from "./Card"
import Section from "./Section"
import Separator from "./Separator"
import { icedCoffee } from "@/constants"


const Icedcoffee = () => {
 return (
  <Section title="Icedcoffee" id="icedCoffee">
   {icedCoffee.map((item, i) => (
    <Card
    key={i}
    image={item.image}
    title={item.title}
    price={item.price} description={""} ingredients={[]}       
    />
   ))}
   <Separator />
  </Section>
 )
}

export default Icedcoffee;