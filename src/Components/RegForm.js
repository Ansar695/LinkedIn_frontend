import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./register.css"
import {NavLink, useNavigate} from "react-router-dom"
import { useState } from 'react';
import Devider from "./Devider"

const RegForm = ({pageFirst}) => {
  const navigate = useNavigate()
    const[userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const submitData = (e) => {
        e.preventDefault()
        const{email, password} = userInfo
        if(email===""||password===""){
            alert("Both fields are required")
            return
        }
        if(email.length < 4){
            alert("Please enter valid email")
            return
        }
        if(password.length < 4 || password.length > 20){
            alert("Password should be 4 to 20 characters long")
            return
        }else{

        }
        pageFirst(userInfo, 2)
    }
    
    const handleChange = async(e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }    

    const SignWithGoogle = async() => {
      navigate("/auth/google/")
    }

  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={userInfo.email} onChange={handleChange} required />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Label>Password (4 or more characters)</Form.Label>
          <Form.Control type="password" name='password' onChange={handleChange} required />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        
        <Form.Text className="text-muted fs-6">
          By clicking Agree & Join, you agree to the LinkedIn, <NavLink to="#">User Agreement</NavLink>,
          <NavLink to="#">Privacy Policy</NavLink>
          and <NavLink to="#">Cookie Policy</NavLink>
        </Form.Text>

        <div className="mt-3 d-grid gap-2">
          <Button 
            onClick={submitData}
            type="submit"
            variant="primary" 
            size="lg" 
            style={{
              borderRadius: "30px", 
              fontWeight: "bold"
          }}>
                Agree & Join
          </Button>

        <Devider />
          <Button 
              onClick={SignWithGoogle}
              className='mb-3' 
              variant="light" 
              size="lg" 
              style={{borderRadius: "20px", border: "1px solid gray"}}>
                <i className="fa fa-google"></i>
                Continue with Gmail
          </Button>
      </div>

        <Form.Text className="text-muted fs-6 center">
          Already on LinkedIn?
          <NavLink to="#">Sign In</NavLink>
        </Form.Text>


      </Form>
  )
}

export default RegForm