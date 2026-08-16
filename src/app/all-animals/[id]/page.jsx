const AnimalDetailsPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch('https://qurbanirhat-git-main-shahalamcse7-5675s-projects.vercel.app/data.json'); 
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