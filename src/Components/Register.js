import Card from 'react-bootstrap/Card';
import "./register.css"
import { useState } from 'react';
import RegForm from './RegForm';
import FormSecond from './FormSecond';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  const[page, setPage] = useState(1);
  const[user, setUser] = useState()

  const pageFirst = (info, num) => {
    setPage(num)
    setUser(info)
  }

  const pageSec = async(info) => {
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          fname: info.fname,
          lname: info.lname,
          address: info.address,
          mobile: info.mobile,
          email: user.email,
          password: user.password
        })
      })
      const data = await res.json()
      if(res.status === 200){
        alert("Registeration successful...")
        navigate("/home/"+data._id)
      }
      if(res.status === 404){
        setPage(1)
        alert("Email already registered...")
      }
      else{
        alert("Registration failed...")
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Card className="card">
      {page===1&& <RegForm pageFirst={pageFirst} />}
      {page===2&& <FormSecond pageSec={pageSec} />}
    </Card>
  )
}

export default Register