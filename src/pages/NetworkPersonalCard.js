import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const NetworkPersonalCard = () => {

    const [data, setData] = useState([]);

    const {id} = useParams();
    useEffect(()=>{
        const fetch = async () => {
            try{
                const response = await axios.get(`https://localhost:44340/api/Ai/GetAiById/${id}`);
                setData(response.data);
                console.log(response.data);
            } catch(error){
                console.log(error);
            }
        }
        fetch();
    }, [id])

    if (data === null || typeof data === 'undefined') {
        return <div>Loading...</div>;
    }
    
    if (!data) {
        return <div>No data received!</div>;
    }

    return (
        <div>
            {
                data.map((item, index)=>(
                <div key={index}>
                    <p>{item.neuralNetworkType || 'Not available'}</p>
                    <p>{item.aiName || 'Not available'}</p>
                    <p>{item.aiDescription || 'Not available'}</p>    
                </div>
            ))}
        </div>
    );
};