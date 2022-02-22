import React from 'react'
import '../Common/Style/modal.scss'
import { observer } from 'mobx-react'
import TopListStore from '../Stores/TopListStore'
import { IoClose } from 'react-icons/io5'
import { FaItunesNote } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'
import { BiTimer } from 'react-icons/bi'

const Modal = observer(() => {
    const song = TopListStore.selectedSong
  return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div onClick={TopListStore.modal} className="close">
                <IoClose />
                </div>
                <h4><FaItunesNote /> Position & song title:</h4>
                <p>{song.position} - {song.title}</p>
                <h4><BsPersonFill /> Artist:</h4>
                <p>{song.artist}</p>
                <h4><BiTimer /> Duration:</h4>
                <p>{song.time}</p> 
            </div>
        </div>
  )
})

export default Modal