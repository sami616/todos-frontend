import React from 'react'
import { UserRoutes } from './components'
import {
  Image,
  ResponsiveGrid,
  Loading,
  Heading,
  Transform,
} from '../../components'
import { axios } from '../../utils'
import { useParams } from 'react-router-dom'

//x//////////////////////////////////////////////////
// User
//x//////////////////////////////////////////////////

export const User = () => {
  const { userId } = useParams()
  const [loading, setLoading] = React.useState(true)
  const [user, setUser] = React.useState(null)
  const [todos, setTodos] = React.useState(null)

  React.useEffect(() => {
    axios
      .get(`/users/${userId}?_embed=todos`)
      .then(({ data: { todos, ...user } }) => {
        setUser(user)
        setTodos(todos)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [userId])

  if (loading) return <Loading text='Loading user data' fullPage />

  return (
    <Transform axis='y'>
      <Heading type='h1'>
        {user.fname} {user.lname}
      </Heading>

      <ResponsiveGrid min='300px'>
        <Image
          alt='Photo'
          width={800}
          height={400}
          src={`https://picsum.photos/id/${user.photoId}/800/400`}
        />
        <UserRoutes todos={todos} setTodos={setTodos} />
      </ResponsiveGrid>
    </Transform>
  )
}
