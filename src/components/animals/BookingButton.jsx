"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function BookingButton() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleBooking = () => {
    if (!session?.user) {
      router.push("/signin");
      return;
    }

    router.push("/booknow");
  };

  return (
    <button
      type="button"
      onClick={handleBooking}
      disabled={isPending}
      className="mt-4 rounded bg-green-600 px-4 py-2 text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      Book Now
    </button>
  );
}
