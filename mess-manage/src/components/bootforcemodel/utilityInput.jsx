import '../../style/1.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const UtilityInput = () => {
    const navigate = useNavigate();
    const [utility, setUtility] = useState();

    const clickHandler = () => {
        navigate('/transportInput');
    }

    return (
        <div>
            <div className="card">
                <div className="budget-header">
                    <h4>Approximate Utility Cost </h4>
                </div>
                <div className="budget-display">
                    <p>{utility}</p><p>BDT</p>
                </div>
            </div>
            <br /><br />
            <div>
                <TextField id="outlined-basic" label="Utility Cost" variant="outlined" value={utility} onChange={(e) => 
                    setUtility(e.target.value)
                }/>
            </div>
            <br /><br />
            <div>
                <Button variant="contained" color="primary" onClick={clickHandler}>Next</Button>
            </div>
        </div>
    )
}

export {UtilityInput};
