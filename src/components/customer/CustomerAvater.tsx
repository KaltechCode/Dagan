"use client";

import Image from "next/image";

interface CustomerAvatarProps {
  name: string;
  avatar?: string;
  size?: "sm" | "md" | "lg";
}

export default function CustomerAvatar({
  name,
  avatar,
  size = "lg",
}: CustomerAvatarProps) {
  if (!avatar) {
    return null;
  }

  return (
    <Image
      src={avatar}
      alt={name}
      width={96}
      height={96}
      className="rounded-full object-cover"
    />
  );
}
