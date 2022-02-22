import React from 'react'
import TopListStore from '../Stores/TopListStore'
import { observer } from 'mobx-react'
import Modal from '../Components/Modal'
import Sorter from '../Components/Sorter'
import List from '../Components/List'
import '../Common/Style/app.scss'
import { FaDeezer } from 'react-icons/fa'

const App = observer(() => {
  return (
    <div className="main-container">
      <div className="container">
          <h1>Top Pop by <FaDeezer/></h1>
          <p>Top 10 songs on Deezer music platform.</p>
          <Sorter />
          <List />
        {TopListStore.modalChecker ? <Modal /> : null }  
        <p>Developed and designed by <span className="bolded">V. Kolinger</span></p>  
      </div>
    </div>
  )
})

export default App;
