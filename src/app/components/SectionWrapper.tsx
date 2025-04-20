type SectionWrapperProps = {
  children: React.ReactNode
  className?: string
}

export default function SectionWrapper({ children, className = '' }: SectionWrapperProps) {
  return (
    <div className={`max-w-[1440px] w-full mx-auto px-4 ${className}`}>
      {children}
    </div>
  )
}
