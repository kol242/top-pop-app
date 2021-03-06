import React from 'react'
import TopListStore from '../Stores/TopListStore'
import { observer } from 'mobx-react'
import ListItem from './ListItem'

const List = observer(() => {
  return (
    <div>
        {TopListStore.songs.map((song) => (
            <ListItem key={song.id} song={song} />
        ))}
    </div>
  )
})

export default List