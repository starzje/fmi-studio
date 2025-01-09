import Link from "next/link";
import logo from "public/images/fmi-logo.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="FMI">
      <Image src={logo} alt="FMI" width={28} height={28} />
    </Link>
  );
}
