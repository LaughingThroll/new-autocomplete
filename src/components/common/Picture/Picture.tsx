import React from 'react'

export interface PictureProps {
  src: string
  alt: string
  srcWebp?: string
} 


const Picture: React.FC<PictureProps> = ({  src, alt, srcWebp }) => {

  return (
    <picture>
      { srcWebp && <source srcSet={srcWebp}  /> } 
      <img src={src} alt={alt} />
    </picture>
  )
}

export default Picture
