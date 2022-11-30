import './App.css';
import React, {useState, useEffect} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import MyTea from './components/MyTea'
import TeaView from './components/TeaView'
import Create from './components/CreateTea'
import Update from './components/UpdateTea'

let baseURL = 'https://iroh-backend.herokuapp.com'

const  App = () => {
  const [teas, setTeas] = useState([])
  const [oneTea, setOneTea] = useState([])
  const [myTeas, setMyTeas] = useState([])

  const navigate = useNavigate()

  const getMyTeas = () => {
    fetch(baseURL + "/api/v1/tea/", {
      credentials: "include"
    })
    .then(res => {
      if (res.status === 200) {
        // console.log(res);
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      console.log(data.data)
      setMyTeas(data.data)
    })
    // try {
    //   console.log('something')
    // }
    // catch (err) {
    //   console.log('error:', err);
    // }
  }

  const loginUser = async (e) => {
    console.log("login")
    console.log(e.target.email.value)
    e.preventDefault()
    const url = baseURL + '/api/v1/user/login'
    const loginBody = {
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginBody),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      })
      console.log(response)
      console.log("BODY: ", response.body)

      if (response.status === 200) {
        console.log("logged in")
        getMyTeas()
        navigate("/")
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  const register = async (e) => {
    e.preventDefault()
    console.log(e.target)
    const url = baseURL + '/api/v1/user/register'
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value
          
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      if (response.status === 201) {
        console.log("registered user")
        navigate("login")
        
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  useEffect(() => {
    getMyTeas()
  }, [])

  const createTea = async (e) => {
    e.preventDefault()
    console.log(e.target)
    const url = baseURL + '/api/v1/tea/'
    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name: e.target.name.value,
          brew_time: e.target.brew_time.value,
          recipe: e.target.recipe.value,
          has_caffeine: e.target.has_caffeine.value,
          serve_iced: e.target.serve_iced.value,
          has_dairy: e.target.has_dairy.value
          
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      if (response.status === 201) {
        console.log("created tea")
        navigate("il-mio")
        
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  const updateTea = async (e) => {
    e.preventDefault()
    console.log(e)
    const url = baseURL + '/api/v1/tea/2'
    try {
      const response = await fetch(url, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify({
          name: e.target.name.value,
          brew_time: e.target.brew_time.value,
          recipe: e.target.recipe.value
          
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      if (response.status === 200) {
        console.log("updated tea")
        navigate("il-mio")
        
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }


  const deleteTea = async (id) => {
    console.log(id);
    const url = baseURL + '/api/v1/tea/' + id 
    try {
        const response = await fetch(url, {
            method: "DELETE",
            credentials: "include"
        })
        if (response.status === 200) {
          console.log("deleted")
          getMyTeas()
          navigate("/il-mio")
        }
    }
    catch (err) {
        console.log('err => ', err);
    }
  }

  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create createTea={createTea} />} />
        <Route path ="/update" element={<Update updateTea={updateTea}/>} />
        <Route path="login" element={<Login loginUser={loginUser} />} />
        <Route path="register" element={<Register register={register} />} />
        <Route path="il-mio" element={<MyTea myTeas={myTeas} />} />
        <Route path="/il-mio/:id" element={<TeaView deleteTea={deleteTea} />} />
      </Routes>
      
    </div>
  );
}

export default App;
