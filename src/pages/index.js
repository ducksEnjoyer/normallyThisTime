// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
import Link from "next/link"
import PokemonHead from "@/components/head"
import WhateverIwant from "@/components/nameIwant"
export default function Home() {
  return (
    <>
    <PokemonHead name={""}/>
    <WhateverIwant>
      <h1>Hello World</h1>
      <Link href="pokemons/abra">u re gonna be redirected to abra</Link>
      </WhateverIwant>
    </>
      
  )
}
