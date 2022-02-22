import { observer } from 'mobx-react'
import React from 'react'
import TopListStore from '../Stores/TopListStore'
import '../Common/Style/card.scss'

const ListItem = observer(({ item }) => {
  return (
    <ul onClick={() => TopListStore.modal(item)} className="card" key={item.id}>
        <div className="card-content">
        <p>{item.title}</p>
        <img src={item.cover} alt="cover" />
        <audio controls>
            <source src={item.preview} type="audio/mpeg"/>
        </audio>
        </div>
    </ul>
  )
})

export default ListItem