/**
 * @copyright 2024 Aung Chan Myae
 * @license Apache-2.0
 */

/**
 * Node modules
 */



import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';


const Navbar = ({ navOpen }) => {

  const [activeSection, setActiveSection] = useState('home');
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const navRefs = useRef({});
   
  const initActiveBox = () => {
    if (lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
  }

  // Handle scroll to update active section
  const handleScroll = () => {
    const sections = ['home', 'about', 'work', 'reviews', 'contact'];
    const scrollPosition = window.scrollY + 200; // Adding offset for better UX

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          const activeNavItem = navRefs.current[section];
          if (activeNavItem && lastActiveLink.current !== activeNavItem) {
            lastActiveLink.current?.classList.remove('active');
            activeNavItem.classList.add('active');
            lastActiveLink.current = activeNavItem;
            initActiveBox();
          }
          break;
        }
      }
    }
  };

  useEffect(() => {
    // Initial setup
    initActiveBox();
    window.addEventListener('resize', initActiveBox);
    window.addEventListener('scroll', handleScroll);
    
    // Set initial active section
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', initActiveBox);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeCurrentLink = (event, section) => {
    event.preventDefault();
    const targetSection = document.getElementById(section);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
    
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;
    setActiveSection(section);
    initActiveBox();
  }
  

  const navItems = [{
    id: 'home',
    label: 'Home',
    link: '#home',
    className: 'nav-link',
    ref: (el) => {
      navRefs.current['home'] = el;
      if (el && activeSection === 'home') {
        lastActiveLink.current = el;
        el.classList.add('active');
      }
    }
  },{
    id: 'about',
    label: 'About',
    link: '#about',
    className: 'nav-link',
    ref: (el) => {
      navRefs.current['about'] = el;
      if (el && activeSection === 'about') {
        lastActiveLink.current = el;
        el.classList.add('active');
      }
    }
  },{
    id: 'work',
    label: 'Work',
    link: '#work',
    className: 'nav-link',
    ref: (el) => {
      navRefs.current['work'] = el;
      if (el && activeSection === 'work') {
        lastActiveLink.current = el;
        el.classList.add('active');
      }
    }
  },{
    id: 'reviews',
    label: 'Reviews',
    link: '#reviews',
    className: 'nav-link',
    ref: (el) => {
      navRefs.current['reviews'] = el;
      if (el && activeSection === 'reviews') {
        lastActiveLink.current = el;
        el.classList.add('active');
      }
    }
  },{
    id: 'contact',
    label: 'Contact',
    link: '#contact',
    className: 'nav-link md:hidden',
    ref: (el) => {
      navRefs.current['contact'] = el;
      if (el && activeSection === 'contact') {
        lastActiveLink.current = el;
        el.classList.add('active');
      }
    }
  }];
  return (
    <div>
      <nav className={'navbar ' + (navOpen ? 'active' : '')}>
        {navItems.map(({id, label, link, className, ref}) => (
          <a 
            key={id}
            href={link}
            ref={ref}
            className={className}
            onClick={(e) => activeCurrentLink(e, id)}
          >
            {label}
          </a>
        ))}
        <div className="active-box" ref={activeBox}></div>
      </nav>

    </div>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
}
export default Navbar
