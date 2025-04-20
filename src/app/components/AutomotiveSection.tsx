import Container from './Container'

export default function AutomotiveSection() {
  return (
    <section className="relative w-full min-h-screen bg-[url('/second-section-bg.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30" />
      <Container className="flex sm:flex-row flex-col items-end justify-between">
        <div className="relative z-10 flex sm:flex-row flex-col items-end justify-between h-screen pb-[80px] w-full">
          <h2 className="text-[#fff] font-medium text-[76px] leading-[108%] tracking-[-0.07em]">
            We Develop<br />
            <span className="text-[#fff62d]">Automotive Retail.</span>
          </h2>
          <div className='flex gap-[24px] flex-col'>
            <p className="font-primary font-medium text-[20px] leading-[160%] tracking-[-0.02em] text-white max-w-[535px]">
              Our fund focus on new, innovative models in the consumer internet and business services.
            </p>
            <button className="flex gap-[8px] backdrop-blur-[40px] max-w-[228px] bg-white/10 rounded-[16px] px-[44px] pt-[10px] pb-[12px]  font-normal text-[16px] leading-[125%] tracking-[-0.02em] text-center text-white">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 11H13.5M11.5 14L14.5 11L11.5 8M11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21Z" stroke="white"   />
              </svg>
              Go to Website
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
} 