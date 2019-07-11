import React from 'react';
import Body from './Components/Body';
import Footer from './Components/Footer';


class App extends React.Component {

  render() {
    return (
      <div className="main-Container">
        <Body />
        <Footer copyright="Shirley Ramirez 2019" />
      </div>
    )
  }
}

export default App;
