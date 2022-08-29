import React, { useState, useEffect } from 'react';

type Item = {
  title: string;
};

const Home = () => {
  const [data, setData] = useState<Array<Item>>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();
      setData(data.results);
    };
    getData();
  }, []);

  return (
    <main>
      <h1>The Starwars films</h1>
      <ul>
        {data.map((item: Item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
