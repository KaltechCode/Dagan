import Link from "next/link";
import Image from "next/image";

export default function HeaderLogo() {
  return (
    <Link href="/" className="shrink-0">
      <Image
        src="/Dagan-logo.png"
        alt="Store Logo"
        width={250}
        height={100}
        priority
        className="aspect-[7/2] w-[180px]"
      />
    </Link>
  );
}
