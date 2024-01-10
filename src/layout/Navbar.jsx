import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <Link to='/catalogue'>CATALOGUE</Link>
      </li>
      <li>
        <Link to='/fashion'>FASHION</Link>
      </li>
      <li>
        <Link to='/favourite'>FAVOURITE</Link>
      </li>
      <li>
        <Link to='/lifestyle'>LIFESTYLE</Link>
      </li>
    </>
  );
  return (
    <div className='navbar bg-neutral text-neutral-content'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </div>
          <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52'>
            {navLink}
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost text-2xl md:text-4xl'>
          FASHION
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 font-medium text-xl'>{navLink}</ul>
      </div>
      <div className='navbar-end '>
        <Link to='/signup' className='md:text-2xl font-medium bg-black px-4 py-2 rounded'>
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
