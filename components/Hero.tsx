"use client"
import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import Link from 'next/link';

const Hero: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(contentRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: Power3.easeOut,
    })
      .from(
        [headingRef.current, paragraphRef.current, buttonRef.current],
        {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.5,
          ease: Power3.easeOut,
        },
      );
      tl.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.2,
        ease: Power3.easeOut,
      })
        .to(
          [headingRef.current, paragraphRef.current, buttonRef.current],
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.5,
            delay: 0.5,
            ease: Power3.easeOut,
          },
        );

    return () => {
      tl.kill(); // Clean up timeline
    };
  }, []);

  return (
    <div className='flex items-center justify-start h-screen bg-fixed bg-center bg-cover'>
      <div ref={contentRef} className='p-10 text-[#569199]'>
        <h2 ref={headingRef} className='text-5xl font-bold'>
          Your Trusted Healthcare Partner
        </h2>
        <p ref={paragraphRef} className='py-5 text-xl max-w-[900px]'>
        At the forefront of AI healthcare, MedMind Innovision pioneers transformative diagnostics, leveraging advanced algorithms to detect rare diseases early, revolutionizing patient care.
        </p>
        <button ref={buttonRef} className='px-8 py-2 border hover:bg-gradient-to-br hover:from-[#569199] hover:to-[#a4dad2] transition-all hover:text-white'>
          <Link href="/chat" className='bg-transparent'>Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
