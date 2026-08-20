import BookingButton from "@/components/animals/BookingButton";

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch('https://qurbanirhat-neon.vercel.app/data.json');
  const result = await res.json();
  const animal = result.find((animal) => animal.id === parseInt(id));

  return (
    <div className="mx-auto max-w-7xl p-10 lg:px-8">
      <div className="grid grid-cols-2 gap-10 border border-gray-300 rounded-lg p-8 shadow-lg">
        <div className="left-size">
          <img
            src={animal.image}
            alt={animal.name}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="right-size py-6 space-x-0 space-y-2 text-green-700">
          <h1>{animal.name}</h1>
          <p><span className="font-bold">Type:</span> {animal.type}</p>
          <p><span className="font-bold">Breed:</span> {animal.breed}</p>
          <p><span className="font-bold">Age:</span> {animal.age}</p>
          <p><span className="font-bold">Weight:</span> {animal.weight}</p>
          <p><span className="font-bold">Price:</span> ${animal.price.toFixed(2)}</p>
          <p><span className="font-bold">Location:</span> {animal.location}</p>
          <p><span className="font-bold">Color:</span> {animal.color}</p>
          <p><span className="font-bold">Health Status:</span> {animal.healthStatus}</p>
          <p><span className="font-bold">Vaccinated:</span> {animal.vaccinated ? 'Yes' : 'No'}</p>
          <p><span className="font-bold">Description:</span> {animal.description}</p>

          <BookingButton />
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;