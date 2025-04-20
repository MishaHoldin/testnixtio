'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Image from 'next/image';

interface CountryData {
  id: string;
  name: string;
  representatives: number;
  coordinates: { x: number; y: number };
}

const countryData: CountryData[] = [
  { id: 'usa', name: 'USA', representatives: 15, coordinates: { x: 15, y: 35 } },
  { id: 'uk', name: 'UK', representatives: 6, coordinates: { x: 38, y: 32 } },
  { id: 'france', name: 'France', representatives: 2, coordinates: { x: 43, y: 38 } },
  { id: 'germany', name: 'Germany', representatives: 1, coordinates: { x: 46, y: 32 } },
  { id: 'poland', name: 'Poland', representatives: 2, coordinates: { x: 49, y: 26 } },
  { id: 'ukraine', name: 'Ukraine', representatives: 4, coordinates: { x: 64, y: 40 } },
  { id: 'china', name: 'China', representatives: 10, coordinates: { x: 73, y: 38 } },
];

const GlobalPresence = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animationComplete, setAnimationComplete] = useState(false);

  const mapVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  const countryVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        delay: custom * 0.2,
        duration: 0.5
      }
    })
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.8
      }
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-[56px] leading-[107%] tracking-[-0.04em] text-center text-black/40 font-medium">
            We Operate Successfully
            <br />
            <span className=' text-[#000]'>Even Outside the USA</span>
          </h2>
          <p className="text-[16px] leading-[162%] tracking-[-0.02em] text-center text-black/70 font-normal mt-[32px] max-w-[750px] flex items-center justify-center mx-auto">
            Stevens Ventures is a venture capital and investment firm based in Milford, CT. Our primary focus is
            on early-stage companies that provide innovative solutions to everyday problems faced by
            consumers and/or businesses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-8">
            <button className="border border-black/10 rounded-[16px] px-[44px] pt-[10px] pb-[12px] text-[16px] leading-[125%] tracking-[-0.02em] text-center justify-center text-black font-normal flex items-center gap-2 hover:border hover:border-black/40">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2 13.043H8.772C7.242 13.043 6 11.801 6 10.271C6 8.74102 7.242 7.49902 8.772 7.49902H14.865M13.5867 8.89359L14.9997 7.47159L13.5867 6.05859M13.2 19C17.7 19 19.5 17.2 19.5 12.7V7.3C19.5 2.8 17.7 1 13.2 1H7.8C3.3 1 1.5 2.8 1.5 7.3V12.7C1.5 17.2 3.3 19 7.8 19H13.2Z" stroke="black"    />
              </svg>
              Apply
            </button>
            <button className="rounded-[16px] px-[44px] pt-[10px] pb-[12px] bg-black text-white text-[16px] leading-[125%] justify-center tracking-[-0.02em] text-center font-normal flex items-center gap-2 transition-all duration-300 hover:bg-[#34668a]  hover:border-[#34668A] ">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 7H1M4.5 13H3M4.5 10H2M5.13574 3.63581C7.70972 1.06183 11.5808 0.29183 14.9439 1.68486C18.3069 3.07789 20.4997 6.35961 20.4997 9.99977C20.4997 13.6399 18.3069 16.9217 14.9439 18.3147C11.5808 19.7077 7.70972 18.9377 5.13574 16.3637M11.5 5.5V6.5M11.5 6.5C12.464 6.43957 13.3542 7.01661 13.6927 7.92122M11.5 6.5C10.3807 6.3938 9.38145 7.20114 9.25 8.31778C9.25 9.03432 9.75576 9.65125 10.4584 9.79178L12.5416 10.2084C13.2442 10.349 13.75 10.9659 13.75 11.6824C13.6186 12.7991 12.6193 13.6062 11.5 13.5M11.5 14.5V13.5M11.5 13.5C10.536 13.5604 9.64583 12.9836 9.30729 12.079" stroke="white"    />
              </svg>
              Invest
            </button>
          </div>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={mapVariants}
          onAnimationComplete={() => setAnimationComplete(true)}
          className="relative w-full aspect-[2/1] mb-16"
        >
          <div className="absolute inset-0">
            <Image
              src="/map.svg"
              alt="World Map"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
            />
          </div>

          {countryData.map((country, index) => (
            <motion.div
              key={country.id}
              custom={index}
              variants={countryVariants}
              className="absolute"
              style={{
                left: `${country.coordinates.x}%`,
                top: `${country.coordinates.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 10
              }}
            >
              <div className="relative group">
                <div className="sm:w-10 sm:h-10 w-5 h-5 bg-yellow-300 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
                  {country.representatives}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={statsVariants}
          initial="hidden"
          animate={animationComplete ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 justify-between max-w-4xl sm:gap-0 gap-[20px] mx-auto text-center"
        >
          <div className='flex flex-col items-center'>
            <h6 className="sm:text-[110px] text-[78px] leading-[71%] tracking-[-0.02em] text-center text-black font-normal">12</h6>
            <p className="backdrop-blur-[50px] bg-[#e0eaef] rounded-[12px] px-[16px] pt-[12px] pb-[14px] max-w-[122px] sm:ml-[20px] w-full text-[16px] leading-[162%] tracking-[-0.02em] text-center text-black/70 font-normal">countries</p>
          </div>
          <div className='flex flex-col items-center'>
            <h6 className="sm:text-[110px] text-[78px] leading-[71%] tracking-[-0.02em] text-center text-black font-normal">15K<span className="text-[#6e97b4]">+</span></h6>
            <p className="backdrop-blur-[50px] bg-[#e0eaef] rounded-[12px] px-[16px] pt-[12px] pb-[14px] max-w-[122px] sm:ml-[20px] w-full text-[16px] leading-[162%] tracking-[-0.02em] text-center text-black/70 font-normal">investors</p>
          </div>
          <div className='flex flex-col items-center'>
            <h6 className="sm:text-[110px] text-[78px] leading-[71%] tracking-[-0.02em] text-center text-black font-normal">38</h6>
            <p className="backdrop-blur-[50px] bg-[#e0eaef] rounded-[12px] px-[16px] pt-[12px] pb-[14px] max-w-[122px] sm:ml-[20px] w-full text-[16px] leading-[162%] tracking-[-0.02em] text-center text-black/70 font-normal">Companies</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresence; 