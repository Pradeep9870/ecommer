import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Container className="a_tbdr">
        <Header></Header>
        

        <main>
            <Outlet></Outlet>
        </main>

        <Footer></Footer>
      </Container>
    </>
  )
}
