import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import styles from '../styles/Home.module.css'
import jsonProducts from '../data/products.json'
import { IProduct } from '../interface'
import { useState } from 'react'

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>(jsonProducts)
  console.log(products)
  return (
    <div className="px-8">
      <Head>
        <title>Space Jelly Shop</title>
        <meta name="description" content="Space Jelly Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-16 flex flex-col justify-center items-center">
        <h1 className="text-7xl leading-tight text-center font-bold">
          Space Jelly Shop
        </h1>

        <p className="my-16 leading-normal text-2xl text-center">
          The best space jellyfish swag in the universe!
        </p>

        <ul className="flex flex-wrap items-stretch justify-centers max-w-[316px] md:max-w-2xl xl:max-w-6xl">
          {products.map((product) => {
            const { id, title, description, image, price } = product

            return (
              <li
                key={id}
                className="m-4 p-6 text-left border border-[#eaeaea] rounded-lg max-w-[300px]"
              >
                <a
                  href="#"
                  className="hover:text-[#0070f3] focus:text-[#0070f3] active:text-[#0070f3]"
                >
                  <Image
                    src={image}
                    alt={title}
                    width="800"
                    height="800"
                    className="w-full h-auto"
                  />
                  <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
                  <p>{price} SEK</p>
                  <p className="text-xl leading-normal">{description}</p>
                </a>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
