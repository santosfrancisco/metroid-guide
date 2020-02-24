import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import styled from 'styled-components'
import GameCard from '../components/game-card'
import { H1, H2 } from '../components/headings'

const GAMES = [
  {
    name: "Metroid (NES)",
    link: "/metroid",
    image: "/metroid/metroid_logo.png"
  },
  {
    name: "Super Metroid (SNES)",
    link: "/super-metroid",
    image: "/super-metroid/super_metroid_logo.png"
  },
  {
    name: "Metroid Fusion (GBA)",
    link: "/metroid-fusion",
    image: "/metroid-fusion/metroid_fusion_logo.png"
  },
  {
    name: "Metroid Zero Mission (GBA)",
    link: "/zero-mission",
    image: "/zero-mission/metroid_zero_mission_logo.png"
  }
]

const Home = styled(({ className }) => (
  <Layout pageTitle="Home" className={className}>
    <Container className="container">
      <Row className="header">
        <Col>
          <H1>Metroid guide</H1>
          <p>
            Follow your journey by checking the items you've already picked up right on the screen!
          </p>
          <H2>
            How to use?
          </H2>
          <p>
            Choose your map and to check the items already collected, just click on it on the map. 
            To remove a check from the map, simply click on it again. The checks will be saved in your
            browser's <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank" rel="noopener noreferrer" >
            localStorage</a>, so if you close or refresh, you will not lose your checks
          </p>
          <H2>
            About
          </H2>
          <p>
            I made this site for my own use, because I felt the need to monitor the collection of items
            and thus avoid returning to pick up items that I thought I had forgotten. However,
            I thought it would be useful for other players who follow these maps and could feel the same need.
          </p>
          <p>
            The map credits are in the images.
          </p>
          <p>
            All logos were obtained from <a
              href="https://thegamesdb.net/search.php?name=metroid"
              target="_blank"
              rel="noopener noreferrer"  
            >
              The games DB
            </a> website.
          </p>
          <p>
            Want to contribute? Go to our repository on <a
              href="https://github.com/santosfrancisco/metroid-guide"
              target="_blank"
              rel="noopener noreferrer"  
            >
              GitHub
            </a> and feel free to send us a pullrequest.
          </p>
        </Col>
      </Row>
      <Row>
        {GAMES.map(game => (
          <Col key={game.link}  align="center">
            <Link href={game.link}>
              <a className="game-card-link">
                <GameCard image={game.image} name={game.name} />
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  </Layout>
))`
  .header {
    margin-bottom: 24px;
  }
  .game-card-link {
    text-decoration: none;
    color: #fff;
  }
  p {
    margin-bottom: 16px;
  }
`

export default Home
