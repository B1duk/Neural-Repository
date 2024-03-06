import axios from "axios";
import { useEffect, useState } from "react"
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, Routes} from 'react-router-dom'
import {NetworkPersonalCard} from "../pages/NetworkPersonalCard"


export const NetworkList=()=>{

    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetch = async ()=>{
            try{
            const response = await axios.get("https://localhost:44340/api/Ai");
            setData(response.data);}
            catch(error){
                console.log(error);
            }
        }
        fetch();
    },[]);

    //data null
    if (data ===null || typeof(data) ==="undefined"){
        return <div>Loading...</div>
    }
    //!data
    if (!data){
        return <div>No data received!</div>
    }
    return(
        <div>
            {  
                data.map((d)=>( 
                    <Link key={d.idAi} to={`/NetworkPersonalCard/${d.idAi}`}>
                        <div key={d.aiName}>
                             <p>{d.neuralNetworkType}</p>
                             <p>{d.aiName}</p>
                        </div>
                    </Link>                 
                ))
                        
            }
                  {/* <Link path="/NetworkPersonalCard/:id" element={<NetworkPersonalCard/>}/> */}
            </div>
    );
};

