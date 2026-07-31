import Link from "next/link";
import Image from "next/image";

export default function HeaderLogo() {
  return (
    <Link href="/" className="shrink-0">
      <Image
        src="/dagan-internation-market-logo.png"
        alt="Store Logo"
        width={250}
        height={100}
        priority
        className=" w-[180px]"
      />
    </Link>
  );
}
