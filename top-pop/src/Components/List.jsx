import React from 'react'
import TopListStore from '../Stores/TopListStore'
import { observer } from 'mobx-react'

const List = observer(() => {
  return (
    <div>
        {TopListStore.songs.map((song) => (
            <ul key={song.id}>
                <li>Title: {song.title}</li>
                <img src={song.cover} alt="cover" />
                <br />
                <button onClick={() => TopListStore.modal(song)}>More info</button>
            </ul>
        ))}
    </div>
  )
})

export default List