import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Head from 'next/head'
import style from './Layout.module.css'


interface LayoutProps{
    children: ReactNode; 
    pageTitle : string;
}
export default function Layout (props:LayoutProps){
    const {children, pageTitle} = props;
    return(
        <>
          <Head>
            <title>NextJs basic |  {pageTitle}</title>
            <meta name="description" content="Website Next Js"></meta>
        </Head>

            <div className={style.container}>
                <Header />
                <div className={style.content}>{children}</div>
                <Footer/>
            </div>
        </>
    )
}