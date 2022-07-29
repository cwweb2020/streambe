import React from 'react'
import axios from 'axios'

export const UsersContext = React.createContext();

const UserProvider = ({children}) => {


    const [users, setUsers] = React.useState([]);

    const getUsers = async () => {
        try {
            const res = await axios.get('https://www.mockachino.com/06c67c77-18c4-45/users')
            setUsers(res.data.users)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        if(!users.length){
          getUsers();
        }
    }, [])

  return (
    <UsersContext.Provider value={{users,getUsers}}>
       {children}
    </UsersContext.Provider>
  )
}

export default UserProvider
