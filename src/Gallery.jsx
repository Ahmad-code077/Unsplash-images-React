import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './Context';
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h2>Loading....</h2>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className='image-container'>
        <h2>There is an Error</h2>
      </section>
    );
  }
  let results = response.data.results;

  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h2>No results found</h2>
      </section>
    );
  }
  return (
    <section className='image-container'>
      {results.map((item) => {
        let url = item.urls.regular;

        return (
          <img
            src={url}
            alt={item.alt_description}
            key={item.id}
            className='img'
          />
        );
      })}
    </section>
  );
};
export default Gallery;
