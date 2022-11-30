import React, {useState, useEffect} from 'react'
import {useParams, NavLink} from 'react-router-dom'

const Update = (props) => {
    let [tea, setTea] = useState({});
    let {id} = useParams()

    let baseURL = 'https://iroh-backend.herokuapp.com'

    const getOneTea = (id) => {
        fetch(baseURL + "/api/v1/tea/2" ,{
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
            <form id="create-form" onSubmit={props.updateTea}>
                <h3>Create</h3>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" />
                <label htmlFor="name">Brew Time: </label>
                <input type="text" id="brew_time" name="brew_time" />
                <label htmlFor="name">Recipe: </label>
                <input type="text" id="recipe" name="recipe" />
                <input type="submit" value="update" />
            </form>
            <NavLink to="/" >Home</NavLink>
        </>
    )
}

export default Update;