import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
  <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div >
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam similique placeat error! Vero amet aperiam nesciunt ratione magnam praesentium explicabo qui esse quisquam exercitationem quod, quam voluptatem illo maxime provident.</p>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate facilis nesciunt perspiciatis voluptate quos, ipsum corporis at vel! Amet magni neque atque accusantium natus dolorem voluptas possimus, nihil magnam nobis.</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
  </>
  )
}
