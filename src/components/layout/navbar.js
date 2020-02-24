import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { GoMarkGithub } from 'react-icons/go'

const Navbar = styled(({ className }) => (
  <nav className={className}>
    <Link href="/">
      <a>
        <img src="/samus-helmet.png" alt="" />
        <span>Metroid Guide</span>
      </a>
    </Link>
    <Link href="https://github.com/santosfrancisco/metroid-guide">
      <a><GoMarkGithub size={32} /></a>
    </Link>
  </nav>
))`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #3a3838;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  a {
    display: inherit;
    align-items: center;
    text-decoration: none;
    color: #fff;
    img {
      margin-left: 8px;
      margin-right: 8px;
    }
  }
`;

export default Navbar
