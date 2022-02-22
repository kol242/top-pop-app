import { observer } from 'mobx-react'
import React from 'react'
import TopListStore from '../Stores/TopListStore'
import '../Common/Style/card.scss'

const ListItem = observer(({ item }) => {
  return (
    <ul onClick={() => TopListStore.modal(item)} className="card" key={item.id}>
        <div className="card-content">
          <div>
            <img src={item.cover} alt="cover" />
          </div>
        <div className="content-info">
          <p>{item.title}</p>
          <audio controls>
              <source src={item.preview} type="audio/mpeg"/>
          </audio>  
        </div>
        </div>
    </ul>
  )
})

export default ListItem