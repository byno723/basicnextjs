import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import style from '../../styles/user.module.css'


interface UsersProps{
    dataUsers : Array<any>;
}
export default function index(props: UsersProps){
    const {dataUsers} =props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    console.log(dataUsers);
    return(
        <Layout pageTitle="Users">
           {dataUsers.map((user) =>{
               return (
                   <div key={user.id} onClick={()=>router.push(`/users/${user.id}`)} className={style.card}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                   </div>
               )
           })}
        </Layout>
      
    )
}

// get static props tidak cocok untuk data dinamis

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    return{
        props :{
            dataUsers,  
        }
    }
}