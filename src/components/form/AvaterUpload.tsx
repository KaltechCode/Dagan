"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { useCustomer } from "@/hooks/customer/useCustomer";
import { Button } from "../ui/shared/Button";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export default function AvatarUpload() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { customer, uploadAvatar } = useCustomer();

  const [preview, setPreview] = useState<string>();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setPreview(customer?.avatar);
  }, [customer]);

  const chooseFile = () => {
    inputRef.current?.click();
  };

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setError("");

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError("Please choose a JPG, PNG or WEBP image.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("Image must be smaller than 5MB.");
      return;
    }

    const objectUrl = URL.createObjectURL(file);

    setPreview(objectUrl);

    try {
      setUploading(true);

      await uploadAvatar(file);

      URL.revokeObjectURL(objectUrl);
    } catch {
      setError("Unable to upload avatar.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-32 w-32 overflow-hidden rounded-full border bg-gray-100">
        {preview ? (
          <Image src={preview} alt="Avatar" fill className="object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            No Avatar
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={handleFile}
      />

      <Button type="button" loading={uploading} onClick={chooseFile}>
        Change Avatar
      </Button>

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
