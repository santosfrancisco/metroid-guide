import React from 'react'
import styled from 'styled-components'
import { FaHeart } from 'react-icons/fa'


const Footer = styled(({ className }) => {
  return (
    <footer className={className}>
      <a
        href="https://www.linkedin.com/in/santos-francisco/"
        target="_blank"
        rel="noopener noreferrer"
      >
        with <FaHeart color="red" /> by Francisco Santos
      </a>
    </footer>
  )
})`
    width: 100%;
    height: 50px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;

  img {
    margin-left: 0.5rem;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

`

export default Footer
