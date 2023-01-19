import React, {useEffect, useState} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/reduxHooks";
import {fetchUsers} from "./Redux/middlewares/fetchUsers";
import {UserCard} from "./components/UserCard";
import useDebounce from "./hooks/useDebounce";
import {Input} from "antd";

function App() {
    const {users: usersList, isLoading} = useAppSelector((state) => state.usersData)
    const [change, setChange] = useState(' ');
    const [data, loading] = useDebounce(change)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers(data))
    }, [data])

    const onChange = (values: any) => {
        setChange(values.target.value)
    };

    return (
        <div className="App">
            <Input style={{width: '200px'}} onChange={onChange} placeholder={'Search a github users'}/>
            <section className={'usersListContainer'}>
                {
                    usersList.map((user) => <UserCard user={user} loading={loading}/>)
                }
            </section>
        </div>
    );
}

export default App;
