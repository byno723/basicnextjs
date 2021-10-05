import { useRouter } from "next/router"
import { useEffect } from "react";

export default function Notfound (){
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        },2000)
    })
    return (
        <div>
            <h1 className="title-notfound">Ooops...</h1>
            <h1 className="title-notfound ">Halaman yang anda cari tidak ditemukan</h1>
        </div>
    )
}