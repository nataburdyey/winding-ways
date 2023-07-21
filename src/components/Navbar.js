import logo from '../images/winding-road.png';
import SocialLinks from './SocialLinks';
import PageLinks from './PageLinks';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='winding' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <PageLinks parentClass='nav-links' childClass='nav-link' />
        <SocialLinks parentClass='nav-icons' childClass='nav-icon' />
      </div>
    </nav>
  );
};

export default Navbar;
