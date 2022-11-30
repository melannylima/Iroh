import {useNavigate, Link} from 'react-router-dom'

const MyTea = (props) => {
    const navigate = useNavigate()

    let baseURL = 'https://iroh-backend.herokuapp.com'

    

    return (
        <>
            <h2>My Tea recipes</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Brew time</th>
                        <th>Created on</th>
                    </tr>
                    { props.myTeas.map((tea, i) => {
                        return (
                            <tr key={tea.id}>
                                <td onClick={() => {navigate(`${tea.id}`)}}>
                                    { tea.name }
                                </td>
                                <td>
                                    { tea.brew_time }
                                </td>
                                <td>
                                    { tea.post_time }
                                </td>
                                
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
            <Link to="/create" >Create</Link>
            <button onClick={() => {props.logoutUser()}} >LOG OUT</button>
        </>
    )
}

export default MyTea