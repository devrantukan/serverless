import useSWR from 'swr'
import PersonComponent from '../components/Person'
import type { Person } from '../interfaces'



export default function Index(rates) {
  

  console.log(rates)

  return (
    <div >
    <h1 className="text-2xl font-bold underline">{rates.rates[0]} dönemine ait enflasyon verileri</h1>
      <p>%{rates.rates[1]} Yıllık</p>
      <p>%{rates.rates[2]} Aylık</p>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/inflation.json')
  const rates = await res.json()
 //console.log(rates)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      rates,
    },
  }
}