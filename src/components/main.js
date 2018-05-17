import React from 'react'
import Header from './main/header'
import SubHeader from './main/sub-header'

class Main extends React.Component {

  render(){
    return(
      <main className='main'>
        <Header />
        <SubHeader />
      </main>
    )
  }
}

export default Main
