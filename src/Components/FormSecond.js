import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./register.css"
import {NavLink} from "react-router-dom"
import { useState } from 'react';

const FormSecond = ({pageSec}) => {
    const[userInfo, setUserInfo] = useState({
        fname: "",
        lname: "",
        address: "",
        mobile: ""
    })

    const submitData = e => {
        e.preventDefault()
        if(isNaN(userInfo.mobile)){
            alert("Invalid mobile number")
            return
        }
        pageSec(userInfo)
    }
    
    const handleChange = async(e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({
        ...userInfo,
        [name]: value
    })
    }    

  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="fname" value={userInfo.fname} onChange={handleChange} required />
          <Form.Text className="text-muted">
            {/* Please enter your email address. */}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name='lname' value={userInfo.lname} onChange={handleChange} required />
          <Form.Text className="text-muted">
            {/* Please enter your password. */}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name='address' value={userInfo.address} onChange={handleChange} required />
          <Form.Text className="text-muted">
            {/* Please enter your password. */}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="mobile" name='mobile' value={userInfo.mobile} onChange={handleChange} required />
          <Form.Text className="text-muted">
            {/* Please enter your password. */}
          </Form.Text>
        </Form.Group>

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
                Continue
          </Button>
      </div>

      </Form>
  )
}

export default FormSecond