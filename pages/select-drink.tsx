import { GetStaticProps } from 'next';

const SelectIngredient = ({ ingredients }: any) => {
  // Render posts...
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      ingredients: [],
    },
  }
}

export default SelectIngredient