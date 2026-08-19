
import Image from "next/image";
import Link from "next/link";

const FeaturedAnimals = async () => {
    const res = await fetch("https://qurbanirhat-neon.vercel.app/data.json");
    const photos = await res.json();
    const featuredAnimals = photos.slice(0, 4);
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <span className="font-semibold uppercase tracking-wider text-green-600">
                            Our Collection
                        </span>

                        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                            Featured Animals
                        </h2> 

                        <p className="mt-3 max-w-2xl text-gray-600">
                            Explore our carefully selected healthy cows and goats from
                            trusted farms and sellers.
                        </p>
                    </div>

                    <Link
                        href="/animals"
                        className="font-semibold text-green-600 transition hover:text-green-700"
                    >
                        View All →
                    </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {featuredAnimals.map((animal) => (
                        <div
                            key={animal.id}
                            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                <Image
                                    src={animal.image}
                                    alt={animal.name}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-green-700 shadow backdrop-blur">
                                    {animal.type}
                                </span>

                            </div>

                            <div className="p-5">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">
                                            {animal.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            {animal.breed}
                                        </p>
                                    </div>

                                    <span className="rounded-lg bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">
                                        Healthy
                                    </span>
                                </div>

                                <div className="mt-5 grid grid-cols-2 gap-3 border-y border-gray-100 py-4">
                                    <div>
                                        <p className="text-xs text-gray-400">Weight</p>
                                        <p className="mt-1 text-sm font-semibold text-gray-700">
                                            {animal.weight}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-400">Age</p>
                                        <p className="mt-1 text-sm font-semibold text-gray-700">
                                            {animal.age}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-400">Location</p>
                                        <p className="mt-1 text-sm font-semibold text-gray-700">
                                            {animal.location}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-400">Availability</p>
                                        <p className="mt-1 text-sm font-semibold text-green-600">
                                            Available
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-5 flex items-center justify-between gap-3">
                                    <div>
                                        <p className="text-xs text-gray-400">Price</p>

                                        <p className="text-xl font-extrabold text-green-700">
                                            ৳{animal.price.toLocaleString("en-BD")}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/all-animals/${animal.id}`}
                                        className="rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedAnimals;