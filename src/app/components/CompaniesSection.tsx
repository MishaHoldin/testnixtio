"use client"

import Container from './Container'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ALL_COMPANIES = [
  { id: 1, name: 'MIAMI', image: '/image (4).svg', category: 'Rental Properties' },
  { id: 2, name: 'yodle', image: 'image (5).svg', category: 'Technology&Marketing' },
  { id: 3, name: 'Stevens Ford of Milford', image: '/card.svg', category: 'Automotive Retail' },
  { id: 4, name: 'TattooPro', image: '/image (6).svg', category: 'Technology&Marketing' },
  { id: 5, name: 'STEVENS', image: '/image (7).svg', category: 'Automotive Retail' },
  { id: 6, name: 'iPunchey', image: '/image (8).svg', category: 'Technology&Marketing' },
  { id: 7, name: 'Company 7', image: '/image (4).svg', category: 'Films' },
  { id: 8, name: 'Company 8', image: '/image (4).svg', category: 'Short Term Accomodations' },
  { id: 9, name: 'Company 9', image: '/image (4).svg', category: 'Investors' },
]

const CATEGORIES = [
  'All Companies',
  'Technology&Marketing',
  'Automotive Retail',
  'Investors',
  'Rental Properties',
  'Short Term Accomodations',
  'Films'
]

interface CompanyCardProps {
  tag: string;
  title: string;
  description: string;
  backgroundImage: string;
}

const CompanyCard = ({ tag, title, description, backgroundImage }: CompanyCardProps) => {
  return (
    <motion.div 
      className="relative group cursor-pointer w-full aspect-square rounded-3xl overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image with Gradient */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8">
        <div className="flex flex-col justify-between h-full items-center transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100  backdrop-blur-[50px] bg-white/10 rounded-[16px] p-[40px]">
          <span className="backdrop-blur-[20px]   bg-[#fff62d]/20 rounded-[30px] pt-[0px] pb-[2px] text-[12px] leading-[133%] tracking-[-0.03em] text-center text-[#fff62d] font-normal py-[5px] px-[12px]">
            {tag}
          </span>
          <h3 className="mt-[10px] text-[36px] leading-[111%] tracking-[-0.03em] text-center text-white font-medium">
            {title}
          </h3>
          <p className="mt-[20px] text-[14px] leading-[171%] tracking-[-0.02em] text-center text-white/70 font-normal">
            {description}
          </p>
        <button className="bg-[#fff62d] rounded-[12px] px-[32px] pt-[10px] pb-[12px] text-center text-[14px] leading-[100%] tracking-[-0.02em] text-black font-normal mt-[40px]">
          Details
        </button>
        </div>
        
      </div>
    </motion.div>
  );
};

export default function CompaniesSection() {
  const [activeCategory, setActiveCategory] = useState('All Companies')
  const [showAll, setShowAll] = useState(false)

  const filteredCompanies = ALL_COMPANIES.filter(company => 
    activeCategory === 'All Companies' || company.category === activeCategory
  )

  const displayedCompanies = showAll ? filteredCompanies : filteredCompanies.slice(0, 6)

  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="text-center sm:mb-[60px] mb-[24px] flex justify-center items-center">
          <h2 className="font-medium text-[56px] leading-[107%] tracking-[-0.04em] text-center text-[rgba(0,0,0,0.4)] max-w-[750px]">Welcome to <span className='text-[#000]'>Stevens Global Companies</span></h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-8 py-[13px] border border-black/10 rounded-[12px] transition-colors
                font-normal text-[14px] leading-[100%] tracking-[-0.02em] text-center
                ${activeCategory === category 
                  ? 'bg-black text-white' 
                  : 'bg-white text-[#000] hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              tag={company.category}
              title={company.name}
              description={company.category}
              backgroundImage={company.image}
            />
          ))}
        </div>

        {/* Show More Button */}
        {filteredCompanies.length > 6 && (
          <div className="text-center sm:mt-12 mt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 mt-[60px] py-3 border border-black/10 rounded-[16px]  pt-[10px] pb-[12px] text-[16px] leading-[125%] tracking-[-0.02em] text-center text-black font-normal"
            >
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 8.5V14.5M9.5 12.5L12.5 15.5L15.5 12.5M2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12Z" stroke="black"   />
                </svg>
              {showAll ? 'Show Less' : 'Show More'}

            </button>
          </div>
        )}
      </Container>
    </section>
  )
} 