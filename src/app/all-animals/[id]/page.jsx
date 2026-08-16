const AnimalDetailsPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch('http://localhost:3000/data.json'); 
    const result = await res.json(); 
    const animal = result.find((animal) => animal.id === parseInt(id)); 
    console.log(animal);

  return (
    <div>
        <h1>Full details of Animals</h1>
    </div>
  );
};

export default AnimalDetailsPage;