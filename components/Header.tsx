"use client"
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About'},
    { href: '/chat', label: 'Chat' },
];

const Header: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState<string>('transparent');
  const [textColor, setTextColor] = useState<string>('#569199');

  const headerRef = useRef<HTMLDivElement>(null);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#569199');
      } else {
        setColor('transparent');
        setTextColor('#569199');
      }
    };

    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  useEffect(() => {
    // GSAP animation for text
    gsap.from(headerRef.current, { opacity: 0, y: -20, duration: 0.5 });
    gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.5, delay: 0.5 }); // Adjust duration and delay as needed
  }, []);

  return (
    <div
      ref={headerRef}
      style={{ backgroundColor: color }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='w-full flex justify-center md:justify-between items-center p-4'>
        <Link href='/'>
          <h1 style={{ color: textColor }} className='text-[#569199] font-bold text-2xl cursor-pointer hidden md:flex'>
            MedMinds Innovision
          </h1>
        </Link>
        <ul className='flex flex-row'>
            {navItems.map(({ href, label }, index) => (
                <NavItem key={index} href={href} label={label} />
            ))}
        </ul>
      </div>
    </div>
  );
};

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
    const currentPath = usePathname();

    // Define classes based on the comparison
    const linkClasses = currentPath === href ? 'text-[#569199] border-b-4 border-[#569199] cursor-pointer' : 'text-[#569199] cursor-pointer';
    return (
      <li className='p-4'>
        <Link className={`${linkClasses}`} href={href}>{label}</Link>
      </li>
    );
  };

export default Header;
