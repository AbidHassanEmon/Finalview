import {useState} from 'react';
import axios from 'axios';

const Register=()=>{
    const [name,setName] = useState("");
    const [username,setusername] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setphone] = useState("");
    const [password,setpassword] = useState("");
    const [confirm_password,setconfirm_password] = useState("");
    //const [file,setFile] = useState("");
    const[msge,setMsge] = useState("");
    const handleForm=(e)=>{
        e.preventDefault();
        var obj = {name:name,username:username,email:email,
            phone:phone,password:password,confirm_password:confirm_password};

        axios.post("http://localhost:8000/api/admin/registration",obj).then((resp)=>{

            if(resp.data.st === true){

                setMsge(resp.data.msg);
            }

            else {

                setMsge("May have error");
            }
            
        },(err)=>{setMsge("Fill up the form properly");});

    }
    // <input type="file"  onChange={(e)=>{setFile(e.target.files[0])}} placeholder='Profile'></input><br/>
    //,image:file
    return(
        <center>
    <form onSubmit={handleForm}>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Name'></input> <br/>
        <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder='username'></input><br/>
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'></input><br/>
        <input type="text" value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder='Phone'></input><br/>
        <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='password'></input><br/>
        <input type="password" value={confirm_password} onChange={(e)=>{setconfirm_password(e.target.value)}} placeholder='confirm_password'></input><br/>
       
        <input type="submit" value="Submit"/>
        <br/>
        <span>{msge}</span>
        <br/>
    </form>
    </center>
    )

}
export default Register;
