import "tailwindcss/tailwind.css";
import React from 'react';
import { SEO } from '../components/atoms/SEO';
import { SearchIngredients } from '../components/atoms/SearchIngredients';

const Welcome = () => {
  return (
    <>
      <SEO title={'Welcome to Puzzles'}/>

      <main>
        <div className={'flex flex-col w-screen h-screen justify-center items-center'}>
        <h1 className={'font-sans font-extrabold text-8xl'}>Puzzles</h1>
        <SearchIngredients/>
        </div>
      </main>
    </>
  )
}

export default Welcome;
