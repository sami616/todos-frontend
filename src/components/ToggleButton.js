import React from 'react'
import { Button } from './Button'

//x//////////////////////////////////////////////////
// ToggleButton
//x//////////////////////////////////////////////////

export const ToggleButton = ({ children, label, secondary, small, margin }) => {
  const [isOn, setIsOn] = React.useState(false)
  const setOn = () => setIsOn(true)
  const setOff = () => setIsOn(false)
  return (
    <>
      <Button
        margin={margin}
        small={small}
        secondary={secondary}
        onClick={setOn}>
        {label}
      </Button>
      {children({ isOn, setOff })}
    </>
  )
}
