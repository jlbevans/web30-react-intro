import React from 'react';
import { useState } from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {

  const [data, setData] = useState({
    name: 'jacob',
    location: 'southern utah'
  })

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
