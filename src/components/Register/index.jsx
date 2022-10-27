import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import EndPoint from "../../api/Endpoint";

const Register = ()=>{
   

    const [user,setUser] = useState({firstName:'',email:'',mobile:'',password:''})
    const [responseObj,setResponce] = useState({show:false,message:'',type:'error'});

    const onChangeHandler = (event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const onSubmit =()=>{
        axios.post(EndPoint.REGISTER_URL,user)
        .then((response)=>{
            console.log('success',response.data.data);
            setResponce({show:true,message:'Register Successfully',type:'success'});
            setUser({firstName:'',email:'',mobile:'',password:''})
        },(error)=>{ console.log(error.response.data.message);  setResponce({show:true,message:error.response.data.message,type:'error'}); })
        .catch((e)=>console.log(e))
    }

    return(


<div className="main">
<section className="signup">
<div className="container">
<h2 className="text-center">Register</h2>
<div className="signup-content">
    
<form id="signup-form" className="signup-form">
{
responseObj.show?
<div className={responseObj.type == 'success'?'alert alert-success':'alert alert-danger'} role="alert">
  {responseObj.message}
</div>:''
}

<div className="form-row">
<div className="form-group">
<label for="first_name">First name</label>
<input type="text" className="form-input" name="firstName" value={user.firstName} onChange={onChangeHandler} id="first_name" />
</div>
<div className="form-group">
<label for="last_name">Email</label>
<input type="text" className="form-input" name="email" value={user.email} onChange={onChangeHandler} id="email" />
</div>
</div>
<div class="form-group">
<label for="mobile">Phone number</label>
<input type="number" class="form-input" name="mobile"  value={user.mobile} onChange={onChangeHandler} id="mobile" />
</div>
<div className="form-row">
<div className="form-group">
<label for="password">Password</label>
<input type="password" className="form-input" name="password" value={user.password} onChange={onChangeHandler} id="password" />
</div>
<div className="form-group">
<label for="re_password">Repeat your password</label>
<input type="password" className="form-input" name="re_password" id="re_password" />
</div>
</div>
<div className="form-row">
<div className="form-group">
   <p ><Link to='/login'>Login</Link></p>
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

export default Register;