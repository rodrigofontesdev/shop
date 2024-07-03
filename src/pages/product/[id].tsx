import Image from 'next/image'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa
          corrupti sed maxime incidunt nemo doloremque ut? Minus explicabo fuga,
          laudantium doloremque, neque, expedita ad libero voluptates tempore a
          ut!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
