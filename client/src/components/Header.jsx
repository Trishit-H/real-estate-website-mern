import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons
import { Link } from "react-router-dom"; // Importing Link component for routing

// Header component definition
function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      {/* Container for header content with padding and centering */}
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        {/* Logo with a link to the home page */}
        <Link to='/'>
          <h1 className='font-bold text-xl md:text-3xl flex flex-wrap'>
            {/* Main logo text with different colors */}
            <span className='text-black'>Hazra</span>
            <span className='text-amethyst-500'>Estate</span>
          </h1>
        </Link>

        {/* Search form with input and icon */}
        <form className='bg-slate-100 p-2 sm:p-3 rounded-lg flex items-center'>
          {/* Search input with width adjustment for different breakpoints */}
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 md:w-64'
          // w-24: width 6rem by default
          // md:w-64: width 16rem on medium screens and up
          />
          <FaSearch className='text-slate-600' />
        </form>

        {/* Navigation links */}
        <ul className='flex gap-4'>
          {/* Home link (hidden on small screens, visible on medium and up) */}
          <Link to='/'>
            <li className='hidden sm:inline text-slate-600 hover:underline cursor-pointer'>
              Home
              {/* hidden: hidden on all screen sizes
                  sm:inline: visible as inline on small screens (640px and up) */}
            </li>
          </Link>

          {/* About link (hidden on small screens, visible on medium and up) */}
          <Link to='/about'>
            <li className="hidden sm:inline text-slate-600 hover:underline hover:cursor-pointer">
              About
              {/* hidden: hidden on all screen sizes
                  sm:inline: visible as inline on small screens (640px and up) */}
            </li>
          </Link>

          {/* Sign In link (always visible) */}
          <Link to='/sign-in'>
            <li className="text-slate-600 hover:underline hover:cursor-pointer">
              Sign In
              {/* Always visible regardless of screen size */}
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
