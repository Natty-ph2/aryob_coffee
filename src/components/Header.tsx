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
   <div className="flex flex-col gap-4 max-w-[300px] mb-auto">
    {/* <a
     href="https://lil-baghdad.square.site/s/order?location=11ecbc4e2927f6a69d9aac1f6bbbcc9c&customer_seat_id=11ef0e78f85e40fa879a7a73c86d77ee#most-popular"
     target="_blank"
     rel="noreferrer"
     className="btn btn-outline rounded-full w-[300px]"
    >
     Order Online
    </a> */}
   
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