import { ReactNode } from "react"

interface SectionProps {
 title?: string
 id?: string
 children: ReactNode
}

const Section = ({
 title,
 id,
 children
}: SectionProps) => {
 return (
  <section className="mx-auto px-4 max-w-[1000px]">
   {title && <h2 className="text-3xl mb-4">{title}</h2>}
   <div className="flex flex-wrap gap-4">
    {children}
   </div>
  </section>
 )
}

export default Section