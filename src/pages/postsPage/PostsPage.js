import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { UsersList } from "../../components/usersList/UsersList";
import { getUsersAction, postUsersAction, showAndHideText } from "../../redux/actions/actions";


function PostsPage () {
    const text = useSelector(state => state.titleReducer.title)
    const users = useSelector(state => state.usersReducer.users)

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        name: ""
    })

    // const handleText = () => {
    //     dispatch(showAndHideText())
    // }

    const handleUsers = () => {
        dispatch(getUsersAction())
    }

    const onChangeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const postUsers = () => {
        const data = {
            name: user.name
        }
        dispatch(postUsersAction(data))
    }

    return (
        <>
            {/* <h1>{text}</h1>

            <button onClick={handleText}>
                show text
            </button> */}

            <button onClick={handleUsers}>get users</button>

            <UsersList users={users}/>
            
            <input onChange={onChangeInput} name="name" type="text"/>
            <button onClick={postUsers}>post user</button>
        </>
    )
}

export default PostsPage;