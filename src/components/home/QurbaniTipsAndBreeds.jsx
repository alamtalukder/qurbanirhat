import Image from "next/image";
import Link from "next/link";

const tips = [
    {
        icon: "🐄",
        title: "Choose a Healthy Animal",
        description:
            "Check the animal carefully and make sure it looks healthy, active, and well-fed.",
    },
    {
        icon: "⚖️",
        title: "Check Age & Weight",
        description:
            "Make sure the animal meets the required age and condition for Qurbani.",
    },
    {
        icon: "🔍",
        title: "Inspect Before Buying",
        description:
            "Check the eyes, teeth, legs, body condition, and overall health before booking.",
    },
];

const breeds = [
    {
        name: "Red Chittagong",
        type: "Cow",
        description: "Popular Bangladeshi cattle breed known for quality meat.",
        image:
            "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=700&q=80",
    },
    {
        name: "Black Bengal",
        type: "Goat",
        description: "A popular local goat breed with excellent meat quality.",
        image:
            "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=700&q=80",
    },
    {
        name: "Sahiwal",
        type: "Cow",
        description: "Well-known breed with strong body structure and good growth.",
        image:
            "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&w=700&q=80",
    },
    {
        name: "Jamunapari",
        type: "Goat",
        description: "Large-sized goat breed with distinctive long ears.",
        image:
            "https://i0.wp.com/minenetazez.com/wp-content/uploads/2023/11/1000020309.jpg?fit=952%2C580&ssl=1",
    },
];

const QurbaniTipsAndBreeds = () => {
    return (
        <>
            {/* ================= QURBANI TIPS ================= */}
            <section className="bg-green-50 py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header */}
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="font-semibold uppercase tracking-wider text-green-600">
                            Helpful Guide
                        </span>

                        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                            Qurbani Tips
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Everything you need to know before choosing and purchasing your
                            Qurbani animal.
                        </p>
                    </div>

                    {/* Tips */}
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {tips.map((tip, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                                    {tip.icon}
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-900">
                                    {tip.title}
                                </h3>

                                <p className="mt-3 leading-7 text-gray-600">
                                    {tip.description}
                                </p>

                                <Link
                                    href="/qurbani-guide"
                                    className="mt-5 inline-block font-semibold text-green-600 hover:text-green-700"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= TOP BREEDS ================= */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <div>
                            <span className="font-semibold uppercase tracking-wider text-green-600">
                                Popular Selection
                            </span>

                            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                                Top Breeds
                            </h2>

                            <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                                Discover some of the most popular cattle and goat breeds
                                available in Bangladesh.
                            </p>
                        </div>

                        <Link
                            href="/breeds"
                            className="font-semibold text-green-600 hover:text-green-700"
                        >
                            View All Breeds →
                        </Link>
                    </div>

                    {/* Breed Cards */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {breeds.map((breed) => (
                            <Link
                                href={`/breeds/${breed.name
                                    .toLowerCase()
                                    .replaceAll(" ", "-")}`}
                                key={breed.name}
                                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={breed.image}
                                        alt={breed.name}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />

                                    {/* Type */}
                                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-green-700 shadow backdrop-blur">
                                        {breed.type}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-gray-900 transition group-hover:text-green-700">
                                        {breed.name}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-gray-500">
                                        {breed.description}
                                    </p>

                                    <div className="mt-4 font-semibold text-green-600">
                                        Explore Breed →
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default QurbaniTipsAndBreeds;