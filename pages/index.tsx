import useSWR from 'swr'
import PersonComponent from '../components/Person'
import axios from 'axios';
import rates from './inflation.json'


export default function Index(rates) {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto text-center h-screen v-screen">    
    <h1 className="text-3xl font-bold underline  text-gray-500 dark:text-gray-300 mb-8">{rates.rates[0]} dönemine ait enflasyon verileri</h1>
      <p className=' text-gray-500 text-xl  dark:text-gray-300 mb-4'> %{rates.rates[1]} Yıllık</p>
      <p className=' text-gray-500 text-xl  dark:text-gray-300 mb-8'>%{rates.rates[2]} Aylık</p>
      <h2 className="text-2xl font-bold underline  text-gray-500 dark:text-gray-300 mb-8">Enflasyon nedir?</h2>
      <p className=' text-gray-500 text-xl  dark:text-gray-300'>Enflasyon budur</p>
    </div>
    </section>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      rates,
    },
  }
}