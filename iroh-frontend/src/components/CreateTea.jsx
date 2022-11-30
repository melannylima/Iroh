import React from 'react'
import {NavLink} from 'react-router-dom'

const Create = (props) => {
    

    return (
        <>
            <form id="create-form" onSubmit={props.createTea} >
                <h3>Create</h3>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" />
                <label htmlFor="name">Brew Time: </label>
                <input type="text" id="brew_time" name="brew_time" />
                <label htmlFor="name">Recipe: </label>
                <input type="text" id="recipe" name="recipe" />
                <label htmlFor="name">Caffeine: </label>
                <input type="text" id="has_caffeine" name="has_caffeine" />
                <label htmlFor="name">Iced: </label>
                <input type="text" id="serve_iced" name="serve_iced" />
                <label htmlFor="name">Dairy: </label>
                <input type="text" id="has_dairy" name="has_dairy" />
                <input type="submit" value="create" />
                
            </form>
            <NavLink to="/" >Home</NavLink>
        </>
    )
}

export default Create;