import Link from "next/link";
import Image from "next/image";
import Logo from "./logo_small_icon_only.png";

export default function Navbar() {
   return (
      <nav>
         <Image src={Logo} alt="Kaffee logo" width={70} placeholder="blur" quality={100} />
         <h1>Kaffee!</h1>
         <Link href="/">Hauptseite</Link>
         <Link href="/posts">Beiträge</Link>
      </nav>
   );
}
