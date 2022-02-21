import React from 'react'
import TopListStore from '../Stores/TopListStore'
import { observer } from 'mobx-react'
import Modal from '../Components/Modal'
import Sorter from '../Components/Sorter'
import List from '../Components/List'

const Homepage = observer(() => {
  return (
    <div>
        <h1>Top Pop</h1>
        <Sorter />
        <List />
       {TopListStore.modalChecker ? <Modal /> : null }    
    </div>
  )
})

export default Homepage