import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import EndPoint from "../../api/Endpoint";

const Login = ()=>{
   

    const [user,setUser] = useState({email:'',password:''})
    const [responseObj,setResponce] = useState({show:false,message:'',type:'error'});

    const onChangeHandler = (event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
 //Ch019@test.com
    const onSubmit =()=>{
        axios.post(EndPoint.LOGIN_URL,user)
        .then((response)=>{
            console.log('success',response.data);
            setResponce({show:true,message:'Login Successfully',type:'success'});
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('user',JSON.stringify(response.data.user));
            setUser({email:'',password:''})
        },(error)=>{ console.log(error.response.data.message);  setResponce({show:true,message:error.response.data.message,type:'error'}); })
        .catch((e)=>console.log(e))
    }

    return(


<div className="main">
<section className="signup">
<div className="container">
<h2 className="text-center">Login</h2>
<div className="signup-content">
    
<form id="signup-form" className="signup-form">
{
responseObj.show?
<div className={responseObj.type == 'success'?'alert alert-success':'alert alert-danger'} role="alert">
  {responseObj.message}
</div>:''
}


<div className="form-group">
<label for="last_name">Email</label>
<input type="text" className="form-input" name="email" value={user.email} onChange={onChangeHandler} id="email" />
</div>

<div className="form-group">
<label for="password">Password</label>
<input type="password" className="form-input" name="password" value={user.password} onChange={onChangeHandler} id="password" />
</div>

<div className="form-row">
<div className="form-group">
   <p ><Link to='/register'>Register</Link></p>
</div>
<div className="form-group">
<input type="button" name="submit" id="submit" onClick={onSubmit} className="form-submit" value="Submit" />
</div>
</div>
</form>
</div>
</div>
</section>
</div>
    )
}

export default Login;