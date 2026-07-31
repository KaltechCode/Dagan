"use client";

import { useState } from "react";
import Link from "next/link";
import { useResendVerificationMutation } from "@/redux/api/authApi";

export default function ResendVerificationPage() {
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const [resendVerification, { isLoading }] = useResendVerificationMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage("");

    setError("");

    try {
      const response = await resendVerification({
        email,
      }).unwrap();

      setMessage(response.message);
    } catch (err: any) {
      setError(err?.data?.message ?? "Unable to send verification email.");
    }
  };

  return (
    <div>
      <h1>Resend Verification Email</h1>

      <p>
        Enter your email address and we'll send you a new verification email.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email Address"
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Verification Email"}
        </button>
      </form>

      {message && <p>{message}</p>}

      {error && <p>{error}</p>}

      <Link href="/login">Back to Login</Link>
    </div>
  );
}
