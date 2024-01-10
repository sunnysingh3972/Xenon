import { useState } from "react";
import './sign.css';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar'
import {jwtDecode} from 'jwt-decode';
import {useNavigate} from 'react-router-dom'
import toast from "react-hot-toast";


const Sign = ({setUser})=>{
    const navigate = useNavigate();
    const [signUpInfo, setSignUpInfo] = useState({
        name:"",
        email:"",
        password:"",
        cpassword:""
    });

    const [inUser, setInUser] = useState({
        email: "",
        password:""
    })

    const [errMsg, setErrMsg] = useState();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!signUpInfo.name || !signUpInfo.email || !signUpInfo.password || !signUpInfo.cpassword){
            // setErrMsg("fill all fields !!")
            toast.error("fill all fiedls !!");
            console.log("user",signUpInfo);
            return;
        }
        if(signUpInfo.password!==signUpInfo.cpassword){
            // setErrMsg("password and confirm password should be same !!")
            toast.error("password and confirm password should be same !!");
            console.log("user",signUpInfo);
            return;
        }
        console.log("user",signUpInfo);
        axios.post('http://localhost:8000/api/user/register',signUpInfo).then(res=>{
            
            if(res.data.status=='Success'){
                setErrMsg("");
                setCd(!cd);
            }
            else{
                setErrMsg(res.data.message);
            }
            setSignUpInfo({
                name:"",
                email:"",
                password:"",
                cpassword:""
            })
            console.log("data saved",res);

        }).catch(err => console.log(err));
        
    }
    
    const handleLoginSubmit = (e)=>{
        e.preventDefault();
        if(!inUser.email || !inUser.password){
            // setErrMsg("fill the the fields!!");
            toast.error("fill the the fields!!");
        }
        console.log("inuser",inUser);
        axios.post('http://localhost:8000/api/user/login',inUser)
        .then(res =>{
            console.log(res);
            // alert(res.data.message);
            toast.success(res.data.message);
            if(res.data.token){
                const token = res.data.token;
                const user = jwtDecode(token);
                console.log(user);
                setUser(user);
                navigate("/sign");
            }          
            
        });
    }
    const [cd, setCd] = useState(true);
    return(

        <div class="container2">

        <div class="form2">
            <div class={cd? 'openRegistor inner-box' : 'openLogin inner-box'} id="card ">
                <div class="front-cov">
                    <h2>Login</h2>
                    <i className="fas fa-check-circle"></i>
                    <form >
                        <input type="email" class="input-box" placeholder="Email-Id" name = "email" value = {inUser.email} required onChange={(e)=>{
                            setInUser((prev)=>({...prev,[e.target.name]:e.target.value}));
                        }} />
                        <input type="password" class="input-box" placeholder="password" name = "password" value = {inUser.pass} required onChange={(e)=>{
                            setInUser((prev)=>({...prev,[e.target.name]:e.target.value}));
                        }}/>
                        <button type="submit" class="submit-btn" onClick={handleLoginSubmit}>Submit</button>
                        {/* <input type="checkbox" class="check" /><span>Remember me</span> */}
                    
                    </form>
                    <button class="submit-btn" id="front-btn" onClick={()=>{setCd(!cd)}}>I'm New here</button>
                    <a href="">Forgot password</a>
                    
                </div>
                <div class="back-cov" id="back-cov">
                    <h2>Registor</h2>
                    <i className="fas fa-check-circle"></i>
                    <form >
                        <input type="text" name="name" value = {signUpInfo.name} class="input-box" placeholder="Name" required onChange={(e)=>{
                            setSignUpInfo((prev) =>({...prev,[e.target.name]:e.target.value}));
                            console.log(e.target.name,e.target.value);
                        }} />
                        <input type="text" name="email" value = {signUpInfo.email} class="input-box" placeholder="Email-Id" required onChange={(e)=>{
                            setSignUpInfo((prev) =>({...prev,[e.target.name]:e.target.value}))
                        }} />
                        <input type="text" name="password" value = {signUpInfo.password} class="input-box" placeholder="password" required onChange={(e)=>{
                            setSignUpInfo((prev) =>({...prev,[e.target.name]:e.target.value}))
                        }}/>
                        <input type="text" name="cpassword" value = {signUpInfo.cpassword} class="input-box" placeholder="confirm password" required onChange={(e)=>{
                            setSignUpInfo((prev) =>({...prev,[e.target.name]:e.target.value}))
                        }}/>
                        <p className="errMsg">{errMsg}</p>
                        <button class="submit-btn" onClick={handleSubmit} type="submit">Submit</button>
                        {/* <div><input type="checkbox" class="check" /><span>Remember me</span></div> */}
                        
                    
                    </form>
                    <button class="submit-btn" id="back-btn" onClick={()=>{setCd(!cd)}}>Already have an account</button>
                    <a href="">Forgot password</a>
                </div>
            </div>
            

        </div>
    </div>
    )
}
export default Sign;