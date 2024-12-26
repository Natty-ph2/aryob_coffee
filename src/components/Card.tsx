import Image from "next/image"

interface CardProps {
  image: string
  title: string
  price: string
  description: string
  ingredients: string[]
}

const Card = ({
  image,
  title,
  price,
  description,
  ingredients
}: CardProps) => {
  return (
    <div className="flex flex-col gap-4 grow basis-96 lg:max-w-[476px] border border-slate-500 rounded-lg hover:bg-gray-800  duration-100 p-4 cursor-pointer group">
      <Image
        src={image}
        alt={title}
        width={800}
        height={200}
        className="rounded-lg aspect-video object-cover"
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-medium mb-2 text-gray-900  group-hover:text-slate-200">{title}</h3>
        <h4 className="text-xl font-normal text-slate-900  group-hover:text-slate-200">{price}</h4>
      </div>
    </div>
  )
}

export default Card
