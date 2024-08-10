![cover](https://github.com/user-attachments/assets/16fd9822-3090-4d14-8c33-241dad22f8be)

# Ignite Shop

A t-shirt store where you can find and buy unique and stylish designs.

The goal is to develop an application using the Next.js framework and understand concepts such as SPA, server-side rendering (SSR), and static site generation (SSG).

## Prerequisites

- Node.js
- Git
- Stripe

## Getting Started

- Clone the repository (`git clone git@github.com:rodrigofontesdev/shop.git`)
- Install dependencies (`npm install`)
- Copy .env.example file (`cp .env.example .env.local`)
- Add Stripe public and secret keys to the .env.local file. Refer to the [How to Use](#how-to-use) section for details
- Run application (`npm run dev`)

## Features

- List products
- Buy a product
- Pay via Stripe Checkout

## How to Use

### Configure Stripe Account

1. Go to https://dashboard.stripe.com, sign in to your Stripe account
2. Change the environment to **TEST MODE** and create a new account
3. Go to [developers page](https://dashboard.stripe.com/test/developers), and select **"API Keys"**
4. Copy both the **public and secret keys**. Paste them into the .env.local file

### Create Products

Unfortunately, Stripe doesn't provide a way to import products, so you have to create them manually. Below, I share a table with some product data that you can use. However, feel free to create your own products, just remember to choose the **"one-off"** payment type.

Go to the [product catalog page](https://dashboard.stripe.com/test/products) and start adding a new product.

| Name | Description | Image | Price | Payment |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Camiseta Igniter Aboard | As soft as a hug, our products are made with the purest Brazilian cotton, perfect for climates from North to South. All colors are 100% cotton, except for the heathers which are 88% cotton and 12% polyester. | [igniter-aboard.png](/src/assets/products/igniter-aboard.png) | 79.90 | one-off |
| Camiseta Ignite Lab | As soft as a hug, our products are made with the purest Brazilian cotton, perfect for climates from North to South. All colors are 100% cotton, except for the heathers which are 88% cotton and 12% polyester. | [ignite-lab.png](/src/assets/products/ignite-lab.png) | 89.90 | one-off |
| Camiseta Maratona Explorer | As soft as a hug, our products are made with the purest Brazilian cotton, perfect for climates from North to South. All colors are 100% cotton, except for the heathers which are 88% cotton and 12% polyester. | [maratona-explorer.png](/src/assets/products/maratona-explorer.png) | 69.90 | one-off |
| Camiseta Maratona Explorer 2.0 | As soft as a hug, our products are made with the purest Brazilian cotton, perfect for climates from North to South. All colors are 100% cotton, except for the heathers which are 88% cotton and 12% polyester. | [maratona-explorer-20.png](/src/assets/products/maratona-explorer-20.png) | 74.90 | one-off |

### Buy a Product

Once you've created the products, return to the project homepage, select a product, and click the green **"Buy"** button. You will be redirected to Stripe Checkout, fill in your email and provide a card to simulate a payment.

> [!IMPORTANT]
> To simulate a payment, Stripe provides test cards, such as `4242 4242 4242 4242` for a successful transaction. See [other cards options here](https://docs.stripe.com/testing?testing-method=card-numbers#cards).

## I've Learned

- Undestand differences between SPA, SSR and SSG
- When to choose Next.js for a project
- Create routes using the Pages Router
- Create API routes and how to fetch data on the server side
- Understand the differences between `getStaticProps()`, `getStaticPaths()`, and `getServerSideProps()`
- Image Optimization (`next/image`)
- Metadata and SEO (`next/head`)

## Built With

- Next.js
- TypeScript
- Stitches
- Stripe

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
