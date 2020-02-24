import React, { useState } from 'react'
import styled from 'styled-components'

const Check = React.forwardRef(({ className, idx, handleClick }, ref) => {
  const [ checkID, setCheckID ] = useState(idx)
  const onCheckClick = () => handleClick(checkID)
  return (
    <div ref={ref} onClick={onCheckClick} className={className}>
      <img src="/samus-helmet.png" alt="check" />
    </div>
  )
})

export default styled(Check)`
  position: absolute;
  transform: translate(-50%, -50%);
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  img {
    width: 25px;
    height: 25px;
  }
`
