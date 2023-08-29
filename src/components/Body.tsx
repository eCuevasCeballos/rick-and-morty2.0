import { useState, useEffect } from 'react';
import axios from 'axios';

/* This object access the origin object in the API */
type Origin = {
  name: string;
  url: string;
};

/* This object access the location object in the API */
type Location = {
  name: string;
  url: string;
};

/* Character information from API */
type Character = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  origin: Origin;
  location: Location;
};

const Body = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);

  const fetchCharacters = async (currentPage: number) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );
      console.log('API Response:', response.data.results);
      setCharacters(response.data.results);
    } catch (error) {
      console.error('Error fetching characters:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const previousPage = () => {
    const newPage = page - 1;
    setPage(newPage);
    console.log(newPage);
  };

  const nextPage = () => {
    const newPage = page + 1;
    setPage(newPage);
  };

  return (
    <section className="bg-blue-400 py-10">
      <div
        className="grid gap-5 mx-auto sm:grid-cols-2 sm:max-w-2xl md:grid-cols-3 
      md:max-w-4xl xl:grid-cols-4 xl:max-w-6xl"
      >
        {characters.map((character) => (
          <div key={character.id} className="max-w-xs mx-auto relative group">
            <img
              src={character.image}
              alt={`${character.name} picture`}
              className="w-full h-auto rounded-2xl"
            />
            <div className="hidden group-hover:block w-full h-full bg-white p-5 rounded-2xl top-0 absolute cursor-pointer transform hover:scale-110 hover:duration-150">
              <div className="flex items-center gap-3">
                <img
                  src={character.image}
                  alt={`${character.name} picture`}
                  className="w-10 h-10 border-2 border-black rounded-full"
                />
                <h2 className="font-bold text-xl">{character.name}</h2>
              </div>
              <div className="flex flex-col mt-2">
                <p>
                  <span className="font-bold">Species:</span>&nbsp;
                  {character.species}
                </p>
                <p>
                  <span className="font-bold">Gender:</span>&nbsp;
                  {character.gender}
                </p>
                <p>
                  <span className="font-bold">Type:</span>&nbsp;
                  {character.type === ''
                    ? (character.type = 'N/A')
                    : character.type}
                </p>
                <p>
                  <span className="font-bold">Status:</span>&nbsp;
                  {character.status}
                </p>
                <p>
                  <span className="font-bold">Origin:</span>&nbsp;
                  {character.origin.name}
                </p>
                <p>
                  <span className="font-bold">Location:</span>&nbsp;
                  {character.location.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex mx-auto justify-between items-center
      sm:max-w-2xl md:max-w-4xl xl:max-w-6xl p-7"
      >
        <button
          className="font-bold text-sm uppercase bg-gray-100 p-2 rounded-lg"
          onClick={() => previousPage()}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="font-bold text-sm uppercase bg-gray-100 p-2 rounded-lg"
          onClick={() => nextPage()}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Body;
