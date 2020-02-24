import React from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import Navbar from './navbar'
import Footer from './footer'
import GlobalStyle from '../../styles/globalstyle'
import ResetCSS from '../../styles/resetcss'

const Layout = ({ className, pageTitle = 'Metroid Guide', children }) => {
  return (
    <div className={className}>
      <ResetCSS />
      <GlobalStyle />
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default styled(Layout)`
  main {
    margin: 58px 8px 8px;
    min-height: calc(100vh - 116px);
  }
`;
