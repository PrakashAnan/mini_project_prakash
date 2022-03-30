import { useEffect } from "react";
import app_config from "./config";

const ListStudent = () =>{

const url =app_config.api_url;


const FetchData = ()  =>{
    fetch(url+'/login/getall',{
        method:'GET'
        // data hmko send ni krna hai isliye get method use karte hai
        .then(res => res.json())
        // res se json nikalne k liye
        .then(data =>{
            // dusra then jo hai json data read krne k liye 
            console.log(data);
            // data print krwa rhe hai
        })
    });

    useEffect(() => {
        FetchData();
      }, [])
    //   jaise hi ye page opn hoga fetch data chlega 
    

};
  
    return(
        <div>
        
        </div>
    )

}
export default ListStudent;