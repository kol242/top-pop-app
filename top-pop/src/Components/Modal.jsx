import React from 'react'
import '../Common/Style/modal.scss'
import { observer } from 'mobx-react'
import TopListStore from '../Stores/TopListStore'

const Modal = observer(() => {
    const song = TopListStore.selectedSong
  return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <h3>{song.position}. {song.title}</h3>
                <p>{song.artist}</p>
                <p>{song.time}</p>  
                <div onClick={TopListStore.modal} className="close">
                X
                </div>
            </div>
        </div>
  )
})

export default Modal