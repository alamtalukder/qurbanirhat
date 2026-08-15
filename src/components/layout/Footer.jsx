import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-extrabold text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600">
                🐄
              </span>

              Qurbani<span className="text-green-500">Bazar</span>
            </Link>

            <p className="mt-5 max-w-xl leading-7 text-gray-400">
              Qurbani Bazar is a trusted online livestock marketplace where
              you can find healthy cows and goats from trusted farmers and
              sellers. Choose your preferred animal and make your Qurbani
              booking easily and securely.
            </p>

            {/* Social Links */}
            <div className="mt-7">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Follow Us
              </h3>

              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-sm font-bold transition hover:bg-blue-600 hover:text-white"
                >
                  f
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-sm font-bold transition hover:bg-pink-600 hover:text-white"
                >
                  ◎
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-sm font-bold transition hover:bg-red-600 hover:text-white"
                >
                  ▶
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-sm font-bold transition hover:bg-blue-700 hover:text-white"
                >
                  in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-green-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/animals"
                  className="transition hover:text-green-500"
                >
                  Browse Animals
                </Link>
              </li>

              <li>
                <Link
                  href="/breeds"
                  className="transition hover:text-green-500"
                >
                  Top Breeds
                </Link>
              </li>

              <li>
                <Link
                  href="/qurbani-guide"
                  className="transition hover:text-green-500"
                >
                  Qurbani Guide
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-green-500"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-5">

              {/* Address */}
              <div className="flex gap-3">
                <span className="text-xl">📍</span>

                <div>
                  <p className="text-sm text-gray-400">
                    Address
                  </p>

                  <p className="mt-1 text-gray-200">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <span className="text-xl">📞</span>

                <div>
                  <p className="text-sm text-gray-400">
                    Phone
                  </p>

                  <a
                    href="tel:+8801700000000"
                    className="mt-1 block text-gray-200 transition hover:text-green-500"
                  >
                    +880 1700-000000
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <span className="text-xl">✉️</span>

                <div>
                  <p className="text-sm text-gray-400">
                    Email
                  </p>

                  <a
                    href="mailto:info@qurbanibazar.com"
                    className="mt-1 block break-all text-gray-200 transition hover:text-green-500"
                  >
                    info@qurbanibazar.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-3">
                <span className="text-xl">🕒</span>

                <div>
                  <p className="text-sm text-gray-400">
                    Working Hours
                  </p>

                  <p className="mt-1 text-gray-200">
                    Sat - Thu: 9:00 AM - 10:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm sm:flex-row lg:px-8">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Qurbani Bazar. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-green-500"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-green-500"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;