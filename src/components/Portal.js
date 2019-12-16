import React from 'react'
import ReactDOM from 'react-dom'

//x//////////////////////////////////////////////////
// Portal
//x//////////////////////////////////////////////////

export const Portal = ({ children, className = 'custom', element = 'div' }) => {
  const [container] = React.useState(() => {
    const el = document.createElement(element)
    el.classList.add('portal')
    el.classList.add(className)
    return el
  })

  React.useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [container])

  return ReactDOM.createPortal(children, container)
}
