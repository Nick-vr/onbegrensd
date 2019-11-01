import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
  z-index: 99;
  display: flex;
  border-top: 10px solid #000;
  justify-content: center;
  height: 180px;
  ul {
    display: flex;
    list-style: none;
    text-decoration: none;
    padding: 0;
    li {
      margin: 50px 40px;
      font-size: 1.3em;
      a {
        color: #000;
        outline: none;
        font-weight: 300;
        transition: all 0.5s ease-in-out;
        &:hover {
          cursor: pointer;
          background-color: #000;
          color: #fff;
        }
      }
    }
  }
`

const Socials = styled.div`
  display: flex;
  justify-content: center;
  a {
    p {
      font-size: 2.5em;
      font-weight: 300;
      margin: 0 40px 50px;
      color: #000;
    }
  }
`

const navList = [
  {
    name: "Voorwaarden",
    link: "/voorwaarden",
  },
  {
    name: "Levering & Retourneren",
    link: "/levering-retourneren",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]

const navListItems = navList.map((item, index) => (
  <li key={index}>
    <Link
      to={item.link}
      activeStyle={{ backgroundColor: "#000", color: "#FFF" }}
    >
      {item.name}
    </Link>
  </li>
))

const Footer = () => (
  <>
    <Nav>
      <ul>{navListItems}</ul>
    </Nav>
    <Socials>
      <a
        href="//www.instagram.com/onbegrensdshop/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>F</p>
      </a>
      <a
        href="//www.instagram.com/onbegrensdshop/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>IG</p>
      </a>
    </Socials>
  </>
)

export default Footer
