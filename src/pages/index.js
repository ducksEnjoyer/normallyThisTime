// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
import { GetStaticProps } from "next";
import Link from "next/link";
import PokemonHead from "@/components/head";
import WhateverIwant from "@/components/nameIwant";
import { getSortedPostsData } from "@/../lib/posts"; //this is my function not getstaticprops
export default function Home({ allPostsData }) {
  return (
    <>
      <PokemonHead name={""} />
      <WhateverIwant>
        <h1>Hello World</h1>
        <Link href="pokemons/abra">u re gonna be redirected to abra</Link>
      </WhateverIwant>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li  key={id}>
            {title}
            <br />
            <Link href={`/posts/${id}`}>{id}</Link>
            <br />
            {date}
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
