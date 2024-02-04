import React from 'react'

type PictureProps = {
  src: string
  alt: string
}

const Picture: React.FC<PictureProps> = ({ src, alt }) => {
  return (
    <div className="mb-4 flex justify-center">
      <img src={src} alt={alt} className="size-48 rounded-full object-cover" />
    </div>
  )
}

export default Picture
