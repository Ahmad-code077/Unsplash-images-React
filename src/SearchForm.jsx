import { useGlobalContext } from './Context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    let searchInput = e.target.elements.search.value;
    if (!searchInput) return;
    setSearchTerm(searchInput);
  };

  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form onSubmit={handleSubmit} className='search-form'>
        <input
          type='text'
          name='search'
          placeholder='cat'
          className='form-input search-input'
        />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
