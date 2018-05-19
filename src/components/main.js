import React from 'react'
import Header from './main/header'
import SubHeader from './main/sub-header'
import CompanyContainer from './main/company-container'

class Main extends React.Component {

  render(){
    return(
      <main className='main'>
        <Header />
        <SubHeader />
        <CompanyContainer />

      </main>
    )
  }
}

export default Main
