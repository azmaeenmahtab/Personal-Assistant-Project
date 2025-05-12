import '../../style/1.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const TransportInput = () => {
    const navigate = useNavigate();
    const [transport, setTransport] = useState();

    const clickHandler = () => {
        navigate('/dashboard');  // Navigate back to dashboard after completing all inputs
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