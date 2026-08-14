"use client";

import Link from "next/link";

const NotFound = () => {
    return (
        <section className="min-h-screen bg-green-50 flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">
                {/* 404 */}
                <div className="relative">
                    <h1 className="text-[150px] sm:text-[200px] font-black leading-none text-green-100">
                        404
                    </h1>

                    {/* Animal Emoji */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-7xl sm:text-9xl animate-bounce">
                            🐄
                        </div>
                    </div>
                </div>

                {/* Content */}
                <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900">
                    Oops! Page Not Found
                </h2>

                <p className="mt-4 max-w-lg mx-auto text-gray-600 leading-7">
                    The page you're looking for doesn't exist or may have been moved.
                    Don't worry, you can return to our livestock marketplace and
                    continue browsing.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="rounded-xl bg-green-600 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-green-700 hover:-translate-y-0.5"
                    >
                        ← Back to Home
                    </Link>

                    <Link
                        href="/animals"
                        className="rounded-xl border border-green-600 px-7 py-3.5 font-semibold text-green-700 transition hover:bg-green-100"
                    >
                        Browse Animals 🐐
                    </Link>
                </div>

                {/* Bottom Message */}
                <div className="mt-12 rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                    <p className="text-sm text-gray-500">
                        Looking for a Qurbani animal?
                    </p>

                    <p className="mt-1 font-semibold text-green-700">
                        Find healthy cows and goats from trusted sellers.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NotFound;