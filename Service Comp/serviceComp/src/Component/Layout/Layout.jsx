import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/banner';
import Footer from '../Footer/footer';
import Features from '../Features/features';
import Testimonials from '../Testimonial/testi';

export default function Layout() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    setToken(savedToken || '');
  }, []);

  return (
    <>
      <Banner token={token} setToken={setToken} />
      <Outlet />
      <Features/>
      <Testimonials/>
      <Footer />
    </>
  );
}
