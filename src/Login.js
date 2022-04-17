import {useState} from 'react';
import axios from 'axios';

const Login=()=>{
    
    const[uname,setUname] = useState("");
    const[pass,setPass] = useState("");
    const[msg,setMsg] = useState("");

    const handleForm=(e)=>{

        e.preventDefault();

        var obj = {uname:uname,pass:pass};

        axios.post("http://localhost:8000/api/login",obj).then((succ)=>{

               // console.log(succ.data.login);
            if(succ.data.login === true){

                setMsg("Login Successfull....usertype "+succ.data.role);
            }

            else {

                setMsg("Login failed");
            }

        },(err)=>{
            setMsg("Username and password required");
        });

    }
    return(
        <center>
        <form onSubmit={handleForm}>
            <br/>
            <input type="text" value={uname} onChange={function(e){setUname(e.target.value)}} placeholder="Username"></input><br/>
            <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="Password"></input><br/>
            <input type="submit"></input><br/>
            <span>{msg}</span>
        </form>
        </center>
    )
}
export default Login;