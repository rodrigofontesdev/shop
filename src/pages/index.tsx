import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import camisetaOneImg from '../assets/camisetas/1.png'
import camisetaTwoImg from '../assets/camisetas/2.png'
import camisetaThreeImg from '../assets/camisetas/3.png'
import { HomeContainer, Product } from '../styles/pages/home'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camisetaOneImg} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisetaTwoImg} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisetaThreeImg} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisetaThreeImg} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
