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

  const lastActiveLink = useRef();
  const activeBox = useRef();
  const [sections, setSections] = useState([])


   
  const initActiveBox = () =>{

    if (!lastActiveLink.current) return;

    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  }

  // useEffect(initActiveBox, [])
  // window.addEventListener('resize', initActiveBox);

  const activeCurrentLink = (event) =>{
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';

  }

  useEffect(() => {
    const sectionElements = Array.from(document.querySelectorAll("section"));
    setSections(sectionElements);

    const handleScroll = () => {
      sectionElements.forEach((section) => {
        const { top } = section.getBoundingClientRect();
        if (top <= window.innerHeight / 2 && top >= -window.innerHeight / 2) {
          const activeLink = document.querySelector(`a[href="#${section.id}"]`);
          if (activeLink && lastActiveLink.current !== activeLink) {
            lastActiveLink.current?.classList.remove("active");
            activeLink.classList.add("active");
            lastActiveLink.current = activeLink;
            initActiveBox();
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", initActiveBox);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  const navItems = [{
    label: 'Home',
    link: '#home',
    className: 'nav-link active',
    ref: lastActiveLink
  },{
    label :'About',
    link: '#about',
    className: 'nav-link'
  },{
    label: 'Work',
    link: '#work',
    className: 'nav-link'
  },{
    label:'Reviews',
    link:'#reviews',
    className: 'nav-link'
  },{
    label:'Contact',
    link:'#contact',
    className: 'nav-link md:hidden'
  }

  ];
  return (
    <div>
      <nav className={'navbar ' + (navOpen ? 'active' : '')}>
        {navItems.map(({label, link, className, ref},key) => (
          <a href={link}
          key={key}
          ref={ref} 
          className={className}
          onClick={activeCurrentLink}>
            {label}
          </a>
        ))
      }
      <div className="active-box"
      ref={activeBox}></div>
      </nav>

    </div>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};
export default Navbar
