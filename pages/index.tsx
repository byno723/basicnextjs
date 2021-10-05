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
        <p>tes deploy </p>
        <p>vercel keren amat</p>
      </Layout>
    </>
    );
}