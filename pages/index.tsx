import useSWR from 'swr'
import PersonComponent from '../components/Person'
import axios from 'axios';
import rates from './inflation.json'


export default function Index(rates) {
  return (
    <div>
    <h1 className="text-3xl font-bold underline">{rates.rates[0]} dönemine ait enflasyon verileri</h1>
      <p>%{rates.rates[1]} Yıllık</p>
      <p>%{rates.rates[2]} Aylık</p>
    </div>
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