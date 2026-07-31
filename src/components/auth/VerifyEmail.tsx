"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useVerifyEmailMutation } from "@/redux/api/authApi";
import Link from "next/link";

export function VerifyEmail() {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const [verifyEmail] = useVerifyEmailMutation();

  const [loading, setLoading] = useState(true);

  const [success, setSuccess] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setLoading(false);
      setMessage("Verification token is missing.");
      return;
    }

    const verify = async () => {
      try {
        const response = await verifyEmail({
          token,
        }).unwrap();

        setSuccess(true);

        setMessage(response.message);
      } catch (error: any) {
        setSuccess(false);

        setMessage(error?.data?.message ?? "Verification failed.");
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [token, verifyEmail]);
  if (loading) {
    return <p>Verifying your email...</p>;
  }
  if (success) {
    return (
      <>
        <h1>Email Verified</h1>

        <p>{message}</p>

        <Link href="/login">Go to Login</Link>
      </>
    );
  }
  return (
    <>
      <h1>Verification Failed</h1>

      <p>{message}</p>

      <Link href="/resend-verification">Resend Verification Email</Link>
    </>
  );
}
