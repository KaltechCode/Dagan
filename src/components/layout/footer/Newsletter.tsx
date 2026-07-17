"use client";

import { SocialIcon } from "@/components/ui/shared/Icon/Icon";
import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    try {
      setLoading(true);

      // TODO:
      // await subscribe(email);

      setEmail("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-6 col-span-1 md:col-span-2 xl:col-span-3">
      <div>
        <h3 className="p-text font-semibold uppercase tracking-wide">
          Newsletter
        </h3>

        <p className="mt-3 p-text leading-7 text-white/75">
          Subscribe to receive updates, promotions and new arrivals.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex overflow-hidden rounded-md bg-white">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 flex-1 border-0 bg-transparent px-4 text-sm text-gray-900 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#8BC53F] px-4 2xl:px-6 text-sm font-semibold text-white transition hover:bg-[#74b02e]"
          >
            {loading ? "..." : "Join"}
          </button>
        </div>
      </form>

      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
          Follow Us
        </p>

        <div className="flex gap-2 sm:gap-3 md:col-span-2">
          <SocialIcon
            link="https://facebook.com"
            name="facebook"
            className="text-white"
            size={18}
          />
          <SocialIcon
            link="https://instagram.com"
            name="instagram"
            className="text-white"
            size={18}
          />
          <SocialIcon
            link="https://x.com"
            name="x"
            className="text-white"
            size={18}
          />
          <SocialIcon
            link="https://youbute.com"
            name="youtube"
            className="text-white"
            size={18}
          />
        </div>
      </div>
    </section>
  );
}
