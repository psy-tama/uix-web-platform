import { useFetch } from 'hooks';
import React from 'react';

type Item = {
  title: string;
};

interface Results {
  results: Array<Item>;
}

const Home = () => {
  const { data, error } = useFetch<Results>({
    url: 'https://swapi.dev/api/films/'
  });

  if (error) return null;

  const results = data?.results;

  return (
    <main>
      <h1>The Starwars films</h1>
      <ul>
        {(results || []).map((item: Item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
