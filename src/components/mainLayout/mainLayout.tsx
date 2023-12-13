import React from 'react'
import Header from './header'
import { Outlet } from "react-router-dom";
import Footer from './footer';
import ParticlesContainer from '../page/ParticlesContainer';

const MainLayout = () => {
  return (
    <>
      <ParticlesContainer />
      <Header />
      <main>developingdeveloping
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout;