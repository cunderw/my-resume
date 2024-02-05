import React, { ReactNode } from 'react'

type WrapperProps = {
  children: ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className=" w-full max-w-4xl overflow-auto rounded-lg bg-white p-6 shadow-lg md:h-[1200px]">
        {children}
      </div>
    </div>
  )
}

export default Wrapper
