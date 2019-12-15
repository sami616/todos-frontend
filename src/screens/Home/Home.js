import React from 'react'
import { Heading, Transform } from '../../components'

//x//////////////////////////////////////////////////
// Home
//x//////////////////////////////////////////////////

export const Home = () => (
  <Transform>
    <Heading type='h1'>Home</Heading>
    <div>
      <div>
        <h4>USES:</h4>
        <ol>
          <li>Hooks</li>
          <li>Code splitting (Suspense)</li>
          <li>Routing (React Router)</li>
          <li>CSSinJS (Styled Components)</li>
          <li>Themes (Styled Components)</li>
          <li>Formatting (Prettier)</li>
          <li>REST (JSON Server)</li>
          <li>SVG Icons</li>
          <li>Fragments</li>
          <li>PWA Support</li>
          <li>Build (Create React App)</li>
          <li>Notifications (React Toastify)</li>
          <li>Environment variables</li>
          <li>Error boundaries</li>
          <li>Animation (Framer Motion)</li>
          <li>Refs</li>
        </ol>
      </div>

      <div>
        <h4>DOESNT USE:</h4>
        <ol>
          <li>Portals</li>
          <li>Context</li>
          <li>Reducers</li>
          <li>Auth</li>
          <li>GraphQL</li>
        </ol>
      </div>
    </div>
  </Transform>
)
