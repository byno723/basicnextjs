import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

export default function Home(){
  return(
    <>
      <Layout pageTitle="Home Page">
        <Image src="/user.jpg" width={200} height={200} alt="Profile"/>
        <h1 className={styles['title-homepage']}>Gorbyno</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa omnis eveniet illum delectus quod natus similique, obcaecati neque dolore nostrum eius odio qui quasi aspernatur fugiat vel, dolor doloribus earum!</p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quam exercitationem consequuntur, illo, natus quaerat id debitis ea iusto sit recusandae maiores cumque laboriosam temporibus officia tempora ipsum unde nobis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quam exercitationem consequuntur, illo, natus quaerat id debitis ea iusto sit recusandae maiores cumque laboriosam temporibus officia tempora ipsum unde nobis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quam exercitationem consequuntur, illo, natus quaerat id debitis ea iusto sit recusandae maiores cumque laboriosam temporibus officia tempora ipsum unde nobis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quam exercitationem consequuntur, illo, natus quaerat id debitis ea iusto sit recusandae maiores cumque laboriosam temporibus officia tempora ipsum unde nobis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quam exercitationem consequuntur, illo, natus quaerat id debitis ea iusto sit recusandae maiores cumque laboriosam temporibus officia tempora ipsum unde nobis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quam exercitationem consequuntur, illo, natus quaerat id debitis ea iusto sit recusandae maiores cumque laboriosam temporibus officia tempora ipsum unde nobis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quam exercitationem consequuntur, illo, natus quaerat id debitis ea iusto sit recusandae maiores cumque laboriosam temporibus officia tempora ipsum unde nobis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quam exercitationem consequuntur, illo, natus quaerat id debitis ea iusto sit recusandae maiores cumque laboriosam temporibus officia tempora ipsum unde nobis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quam exercitationem consequuntur, illo, natus quaerat id debitis ea iusto sit recusandae maiores cumque laboriosam temporibus officia tempora ipsum unde nobis?</p>
      </Layout>
    </>
    );
}