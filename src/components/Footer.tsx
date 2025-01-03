import Link from "next/link"
import Image from "next/image"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const links = [
 { href: "https://www.facebook.com", icon: <FaFacebook /> },
 { href: "https://www.instagram.com/aryob_coffee?igsh=MWh1Znh3cG00ZXF4bw==", icon: <FaInstagramSquare /> },
 { href: "https://t.me/YoniET", icon: <FaTelegram /> },
 { href: "tel:+251 92 534 5675", icon: <FaPhoneAlt /> },
]

const Footer = () => {
 return (
  <footer className="flex flex-col items-center justify-center gap-6 py-12 mt-24 px-4 border-t border-slate-500">
   <Link href="/">
    <Image
     src="/logo.png"
     alt="Restaurant logo"
     width={140}
     height={140}
     className="rounded-full object-cover"
    />
   </Link>
   <ul className="flex items-center justify-center gap-5">
    {links.map((item, i) => (
     <li key={i}>
      <Link
       href={item.href}
       target="_blank"
       rel="noreferrer"
       className="btn btn-circle btn-outline"
      >
       {item.icon}
      </Link>
     </li>
    ))}
   </ul>
   <Link href="/" className="flex flex-col items-center">
    <span>Hosana</span>
    <span>Ethiopia</span>
   </Link>
  </footer>
 )
}

export default Footer