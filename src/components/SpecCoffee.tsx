import Card from "./Card"
import Section from "./Section"
import Separator from "./Separator"
import { specCoffee } from "@/constants"



import { StaticImageData } from 'next/image';








const SpecCoffee = () => {
 return (
  <Section title="Special Coffee- ልዩ ቡና" id="specialCoffee">
   {specCoffee.map((item, i) => (
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

export default SpecCoffee;