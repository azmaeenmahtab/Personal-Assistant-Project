import TextField from "@mui/material/TextField"

const Login = () => {


    return <>
    <div style={{display:'flex' , flexDirection:'column', gap:'10px'}}>

<TextField id="outlined-basic" label="Email" variant="outlined" />
<TextField id="outlined-basic" label="Password" variant="outlined" />


    </div>
    
    
    </>

}

export {Login}