import React from 'react'
import TopListStore from '../Stores/TopListStore'
import { observer } from 'mobx-react'

const Sorter = observer(() => {
    const sortType = (e) => {
        e.preventDefault()
        const type = e.target.value
        TopListStore.sorter(type)
    }

  return (
    <select defaultValue={'default'} onChange={sortType} name="sorter" id="sorter">
        <option value="default" disabled>Sort...</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
        <option value="rank">By rank</option>
    </select>
  )
})

export default Sorter