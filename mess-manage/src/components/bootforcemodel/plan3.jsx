import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Plan3 = () => {

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/utilityInput');
    }


    return (
        <div>
           <div className="card">
                <div className="budget-header">
                    <h4>Approximate Food Cost </h4>
                </div>
                <div className="budget-display">
                    <p>0</p><p>BDT</p>
                </div>
            </div>
            <br /><br />
            <div>
                <TextField id="outlined-basic" label="Food Cost" variant="outlined" />
            </div>
            <br /><br />
            <div>
                <Button variant="contained" color="primary" onClick={clickHandler}>Next</Button>
            </div>
        </div>
    )
}

export {Plan3};
