import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers} from '../redux'

function UserContainer({userData,fetchUsers}) {
    useEffect(() => {
        fetchUsers()
    }, [])//empty dependency array so that fetchusers is dispatched only once
    return userData.loading ? (<h2>Loading</h2>) : userData.error ?(<h2>{userData.error}</h2>):(<div>
        <h2>Users List</h2>{userData && userData.users && userData.users.map(user => <p>{user.name}</p>)}</div>)
}

const mapStateToProps = state =>{
    return{
        userData: state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
