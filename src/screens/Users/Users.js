import React from 'react'
import { UserGrid } from './components'
import { Loading, Heading, Transform } from '../../components'
import { axios } from '../../utils'

//x//////////////////////////////////////////////////
// Users
//x//////////////////////////////////////////////////

export const Users = () => {
  const [loading, setLoading] = React.useState(true)
  const [users, setUsers] = React.useState(null)

  React.useEffect(() => {
    axios
      .get('/users')
      .then(({ data: users }) => {
        setUsers(users)
        setLoading(false)
      })
      .catch(e => {
        setLoading(false)
      })
  }, [])

  return (
    <Transform>
      <Heading type='h1'>Users</Heading>
      {loading && <Loading text='Loading users data' />}
      {!loading && <UserGrid users={users} setUsers={setUsers} />}
    </Transform>
  )
}

export default Users
