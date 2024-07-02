import Image from 'next/image'

import camisetaOneImg from '../assets/camisetas/1.png'
import camisetaTwoImg from '../assets/camisetas/2.png'
import camisetaThreeImg from '../assets/camisetas/3.png'
import { HomeContainer, Product } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camisetaOneImg} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product>
        <Image src={camisetaTwoImg} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
