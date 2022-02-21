import { makeAutoObservable } from 'mobx'
import axios from 'axios'

class TopListStore {
    songs = []
    modalChecker = false
    selectedSong = []

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
        return `0${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    }

    getSongs = async () => {
        await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
        .then(res => {
            const data = res.data
            this.songs = data.tracks.data.map(song => {
                return {
                    id: song.id,
                    title: song.title,
                    artist: song.artist.name,
                    duration: song.duration,
                    time: this.timeFormater(song.duration),
                    cover: song.album.cover,
                    position: song.position,
                    preview: song.preview
                }
            })
        })
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