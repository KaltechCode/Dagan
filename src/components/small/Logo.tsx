import Image from "next/image";

function Logo({ light }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={light ? "/Dagan-light-logo.svg" : "/Dagan-logo.svg"}
        alt="Logo"
        width={200}
        height={50}
      />
    </div>
  );
}

export default Logo;
