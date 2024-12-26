import Card from "./Card"
import Section from "./Section"
import Separator from "./Separator"
import { hotCoffee } from "@/constants"
const Hotdrinks = () => {
 return (
  <Section title="Hotdrinks" id="hotCoffee">
   {hotCoffee.map((item, i) => (
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

export default Hotdrinks