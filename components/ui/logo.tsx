import Link from "next/link";
import logo from "public/images/fmi-logo.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="FMI">
      <div className="flex justify-center items-center space-x-2">
        <Image src={logo} alt="FMI" width={28} height={28} />
        <span className="font-semibold text-sm">FMI studio</span>
      </div>
    </Link>
  );
}
