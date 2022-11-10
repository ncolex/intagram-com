import React from 'react'
import { useState, useEffect } from 'react'
import insta1 from '../../assets/insta1.png'
import insta2 from '../../assets/insta2.png'
import insta3 from '../../assets/insta3.png'
import insta4 from '../../assets/insta4.png'

const Images = () => {

  const images = [insta1, insta2, insta3, insta4];
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(number => (number + 1) % (images.length))
    }, 1000);
    return () => clearInterval(interval)
  }, []);

  return (
    <div className='w-screen'>
      <img className='ml-32' style={{ marginTop: 2 }} src={images[number]} alt="Error image loading.." srcSet="" />
    </div>
  )
}

export default Images