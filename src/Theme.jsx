import { useGlobalContext } from './Context';
import { FaMoon } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';
const Theme = () => {
  const { isDarkTheme, themeToggle } = useGlobalContext();

  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={themeToggle}>
        {isDarkTheme ? (
          <MdSunny className='toggle-icon' />
        ) : (
          <FaMoon className='toggle-icon' />
        )}
      </button>
    </section>
  );
};
export default Theme;
