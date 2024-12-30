import Card from "./Card"
import Section from "./Section"
import Separator from "./Separator"
import { teaDrinks } from "@/constants"



import { StaticImageData } from 'next/image';








const Tea = () => {
 return (
  <Section title="TEA- ሻይ" id="tea">
   {teaDrinks.map((item, i) => (
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

export default Tea;