import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RootNav, Loading, ErrorBoundary } from '.'

const Home = React.lazy(() => import('../screens/Home'))
const Users = React.lazy(() => import('../screens/Users'))
const User = React.lazy(() => import('../screens/User'))
const NotFound = React.lazy(() => import('../screens/NotFound'))

//x//////////////////////////////////////////////////
// RootRoutes
//x//////////////////////////////////////////////////

export const RootRoutes = () => (
  <Router>
    <RootNav />
    <ErrorBoundary fallback='Something went wrong'>
      <React.Suspense fallback={<Loading text='Loading chunk' fullPage />}>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/users' exact>
            <ErrorBoundary fallback='Couldnt load users'>
              <Users />
            </ErrorBoundary>
          </Route>
          <Route path='/users/:userId'>
            <ErrorBoundary fallback='Couldnt load user'>
              <User />
            </ErrorBoundary>
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </React.Suspense>
    </ErrorBoundary>
  </Router>
)
