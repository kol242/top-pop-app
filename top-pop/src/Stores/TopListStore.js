import { makeAutoObservable } from 'mobx'
import axios from 'axios'

class TopListStore {
    songs = []
    modalChecker = false
    alert = false
    selectedSong = []
    spinner = false

    constructor(){
        makeAutoObservable(this)
        this.getSongs()
    }

    modal = (data) => {
        this.modalChecker ? this.modalChecker = false : this.modalChecker = true
        this.selectedSong = data
    }

    timeFormater = (time) => {
        const minutes = Math.floor(time / 60)
        let seconds = time - minutes * 60
        return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    }

    getSongs = async () => {
        try {
            this.alert = false
            this.spinner = true
            await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
            .then(res => {
                const data = res.data
                console.log(data.tracks.data)
                this.songs = data.tracks.data.map(song => {
                    return {
                        id: song.id,
                        title: song.title,
                        artist: song.artist.name,
                        duration: song.duration,
                        time: this.timeFormater(song.duration),
                        cover: song.album.cover_big,
                        position: song.position,
                        preview: song.preview
                    }
                })
            }) 
            this.spinner = false
        } catch {
            this.alert = true
        }
        
    }

    sorter = (type) => {
        switch (type) {
            case 'asc':
                this.songs.sort(function (a, b) {
                    return a.duration - b.duration
                })
            break
            case 'desc':
                this.songs.sort(function (a, b) {
                    return b.duration - a.duration
                })
            break
            case 'rank':
                this.songs.sort(function (a, b) {
                    return a.position - b.position
                })
            break
            default: return null
        }
    }
}

export default new TopListStore()