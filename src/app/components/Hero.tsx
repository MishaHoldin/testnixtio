import Container from './Container'

export default function Hero() {
  return (
    <Container className="relative w-full h-screen text-white">
      {/* Overlay */}
      <div className="flex z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-end justify-end h-full pb-[80px]">
          <div className="flex sm:flex-row flex-col w-full justify-between">
            <h1 className="font-primary text-white text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Investing in <br />
              Tomorrow. <span className="text-[#fff62d]">Today.</span>
            </h1>
            <div className='flex flex-col'>
              <p className="font-primary font-medium text-[20px] leading-[160%] tracking-[-0.02em] text-white max-w-[535px]">
                Our fund focus on new, innovative models in the consumer internet and business services.
              </p>

              <div className="flex gap-4 pt-4">
                <button className="flex gap-[8px] backdrop-blur-[40px] bg-white/10 rounded-[16px] px-[44px] pt-[10px] pb-[12px]  font-normal text-[16px] leading-[125%] tracking-[-0.02em] text-center text-white">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 15.043H10.272C8.742 15.043 7.5 13.801 7.5 12.271C7.5 10.741 8.742 9.49902 10.272 9.49902H16.365M15.0867 10.8936L16.4997 9.47159L15.0867 8.05859M14.7 21C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21H14.7Z" stroke="white"    />
                  </svg>
                  Apply
                </button>

              <button
                className="flex gap-[8px] rounded-[16px] px-[44px] pt-[10px] pb-[12px]  bg-[#fff62d] font-normal text-[16px] leading-[125%] tracking-[-0.02em] text-center text-black ">
                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7H1.5M5 13H3.5M5 10H2.5M5.63574 3.63581C8.20972 1.06183 12.0808 0.29183 15.4439 1.68486C18.8069 3.07789 20.9997 6.35961 20.9997 9.99977C20.9997 13.6399 18.8069 16.9217 15.4439 18.3147C12.0808 19.7077 8.20972 18.9377 5.63574 16.3637M12 5.5V6.5M12 6.5C12.964 6.43957 13.8542 7.01661 14.1927 7.92122M12 6.5C10.8807 6.3938 9.88145 7.20114 9.75 8.31778C9.75 9.03432 10.2558 9.65125 10.9584 9.79178L13.0416 10.2084C13.7442 10.349 14.25 10.9659 14.25 11.6824C14.1186 12.7991 13.1193 13.6062 12 13.5M12 14.5V13.5M12 13.5C11.036 13.5604 10.1458 12.9836 9.80729 12.079" stroke="black"    />
                  </svg>
                  Invest
                </button>
              </div>
            </div>
          </div>
      </div>
    </Container>
  )
}
