import React from 'react'
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom'
import { Loading, Heading } from '../../../components'
import { UserNav } from './'

const Incomplete = React.lazy(() => import('../../Incomplete'))
const Complete = React.lazy(() => import('../../Complete'))

//x//////////////////////////////////////////////////
// UserRoutes
//x//////////////////////////////////////////////////

export const UserRoutes = ({ todos, setTodos }) => {
  const match = useRouteMatch()

  const complete = todos.filter(todo => todo.completed)
  const incomplete = todos.filter(todo => !todo.completed)

  return (
    <div>
      <Heading type='h2'>Todos</Heading>
      <UserNav
        completeCount={complete.length}
        incompleteCount={incomplete.length}
      />
      <React.Suspense fallback={<Loading text='Loading user route' />}>
        <Switch>
          <Route exact path={`${match.path}/incomplete`}>
            <Incomplete setTodos={setTodos} todos={incomplete} />
          </Route>
          <Route exact path={`${match.path}/complete`}>
            <Complete setTodos={setTodos} todos={complete} />
          </Route>
          <Route path='*'>
            <Redirect to={`${match.url}/incomplete`} />
          </Route>
        </Switch>
      </React.Suspense>
    </div>
  )
}
