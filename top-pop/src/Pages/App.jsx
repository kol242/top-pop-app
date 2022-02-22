import React from 'react'
import TopListStore from '../Stores/TopListStore'
import { observer } from 'mobx-react'
import Modal from '../Components/Modal'
import Sorter from '../Components/Sorter'
import List from '../Components/List'
import '../Common/Style/app.scss'
import { FaDeezer } from 'react-icons/fa'
import Footer from '../Components/Footer'
import Alert from '../Components/Alert'
import Spinner from '../Components/Spinner'

const App = observer(() => {
  return (
    <div className="main-container">
      <div className="body">
        <div className="container">
            <h1>Top Pop by <FaDeezer/></h1>
            <p>Top 10 songs on Deezer music platform.</p>
            <Sorter />
            { TopListStore.alert ? <Alert /> : null }
            { TopListStore.spinner ? <Spinner /> : <List /> }
          {TopListStore.modalChecker ? <Modal /> : null }    
        </div>
      </div> 
       <Footer />
    </div>
  )
})

export default App;
