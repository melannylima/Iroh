import React, {useState, useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';

const TeaView = (props) => {
    let [tea, setTea] = useState({});
    let {id} = useParams()

    const navigate = useNavigate()

    let baseURL = 'https://iroh-backend.herokuapp.com'

    const getOneTea = (id) => {
        fetch(baseURL + "/api/v1/tea/" + id,{
          credentials: "include"
        })
        .then(res => {
          if(res.status === 200) {
            return res.json()
          } else {
            return []
          }
        }).then(data => {
          console.log(data.data)
          setTea(data.data)
        })
      }

      useEffect(()=>{
        getOneTea(id)
      },[])
      
      
      

    return (
        <>
        <h1>{tea.name} Tea</h1>
        <h2>Brew Time: </h2> <h3>{tea.brew_time} minutes</h3>
        <h2>Recipe: </h2> <h3>{tea.recipe}</h3>
        <button onClick={() => {props.deleteTea(tea.id)}} >DELETE</button>
        <Link to="/update" >Update</Link>
        
        </>
    )
}

export default TeaView