import '../../style/1.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const TransportInput = () => {
    const navigate = useNavigate();
    const [transport, setTransport] = useState();

    const clickHandler = async () => {try{
        if(!transport || isNaN(transport)){

            alert("Please enter a valid transport cost.");
            return;
        }


        const token = localStorage.getItem("token");

        const body = {
            "transport_cost" : parseFloat(transport)
        };

        const response = await fetch("http://localhost:6543/api/transport_budget",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })

        if(!response.ok){
            const Data = await response.json();
            alert("Error Occured during api call" + data.message);
            
            return;
        }

        alert("transport cost inserted successfully");

        setTransport('');

        navigate('/dashboard')
         

    }catch(err){

        alert("Internal server error" || err.message);
    }
    
    }

    return (
        <div>
            <div className="card">
                <div className="budget-header">
                    <h4>Approximate Transport Cost </h4>
                </div>
                <div className="budget-display">
                    <p>{transport}</p><p>BDT</p>
                </div>
            </div>
            <br /><br />
            <div>
                <TextField id="outlined-basic" label="Transport Cost" variant="outlined" value={transport} onChange={(e) => 
                    setTransport(e.target.value)
                }/>
            </div>
            <br /><br />
            <div>
                <Button variant="contained" color="primary" onClick={clickHandler}>Finish</Button>
            </div>
        </div>
    )
}

export {TransportInput}; 