import Image from "next/image"
import { FaArrowAltCircleDown } from "react-icons/fa";



const Header = () => {
 return (
  <header className="header-bg flex flex-col items-center px-3 pb-16 min-h-screen">
   <figure className="flex flex-col items-center justify-center gap-4 mt-auto mb-10">
    <Image
     src="/logo.png"
     alt="Restaurant logo"
     width={360}
     height={260}
     className="rounded-full object-cover mb-4"
    />
    <figcaption className="uppercase font-light text-2xl text-[#e1c79d]">
     <strong className="font-semibold">A </strong> Cup{" "}
     <strong className="font-semibold">of</strong> Hope
    </figcaption>
   </figure>
   <div className="flex flex-col gap-4 max-w-[600px] mb-auto text-white text-sm">
    <p>
        <strong className="font-semibold">Aryob</strong> is about a story of little beams of light, passion,
        struggles and most importantly hopes of shinning in the dark together, eagerly urging to the beauty of the
        future, to hope, to see beyond the dark.
    </p>
   
   </div>
   <div className="flex flex-col items-center">
    <div>
    <FaArrowAltCircleDown />
    </div>
   
    <p>Scroll to see menu</p>
   </div>
  </header>
 )
}

export default Header