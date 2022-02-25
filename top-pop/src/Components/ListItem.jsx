import { observer } from 'mobx-react'
import React from 'react'
import TopListStore from '../Stores/TopListStore'
import '../Common/Style/card.scss'

const ListItem = observer(({ song }) => {
  return (
    <ul onClick={() => TopListStore.modal(song)} className="card" key={song.id}>
        <div className="card-content">
          <div>
            <img src={song.cover} alt="cover" />
          </div>
        <div className="content-info">
          <p>{song.title}</p>
          <audio controls>
              <source src={song.preview} type="audio/mpeg"/>
          </audio>  
        </div>
        </div>
    </ul>
  )
})

export default ListItem