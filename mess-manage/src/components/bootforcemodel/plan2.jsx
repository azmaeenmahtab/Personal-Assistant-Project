import { useState } from 'react';
import '../../style/1.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



const Plan2 = () => {
    const navigate = useNavigate();

    const [rental, setRental] = useState();

    const clickHandler = () => {

        navigate('/plan3');
    }


    return (
        <div>
           <div className="card">
                <div className="budget-header">
                    <h4>Approximate Seat Rental </h4>
                </div>
                <div className="budget-display">
                    <p>{rental}</p><p>BDT</p>
                </div>
            </div>
            <br /><br />
            <div>
                <TextField  id="outlined-basic" label="Seat Rent" variant="outlined" value={rental} onChange={(e) => 
                    setRental(e.target.value)
                }/>
            </div>
            <br /><br />
            <div>
                <Button variant="contained" color="primary" onClick={clickHandler}>Next</Button>
            </div>
        </div>
    )
}
export {Plan2}
