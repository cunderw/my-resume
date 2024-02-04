import React, { ReactNode } from 'react'

type WrapperProps = {
  children: ReactNode // Accepts any valid React child(ren)
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg">
        {children}
      </div>
    </div>
  )
}

export default Wrapper
