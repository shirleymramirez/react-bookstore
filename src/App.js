import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body />
        <Footer copyright={2019} />
      </div>
    )
  }
}

export default App;
