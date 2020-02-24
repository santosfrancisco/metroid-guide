import React from 'react'
import styled from 'styled-components'

const GameCard = styled(({ className, image, name }) => (
  <div className={className}>
    <div className="logo-wrapper">
      <img src={image} alt={name} />
    </div>
    <p>{name}</p>
  </div>
))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 16px;
  padding: 16px;
  border: 1px solid #443e3e;
  border-radius: 5px;

  min-height: 150px;
  min-width: 250px;
  text-align: center;

  .logo-wrapper {
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 200px;
      margin: 8px;
    }
  }
  
  p {
    text-transform: uppercase;
    text-align: center;
  }
`

export default GameCard
