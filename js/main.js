const app = new Vue({
    el: '#app',
    data: {
        albums: [],
        genres: [],
        genreToSearch: null
    },
    methods: {
        searchGenre() {
            axios.get('./dischi.php', {
                params: {genre: this.genreToSearch}
            })
            .then(response => {
                this.albums = response.data
            })
        }
    },
    created() {
        axios.get('./dischi.php')
        .then(response => {
            this.albums = response.data
            this.albums.forEach(album => {
                !this.genres.includes(album.genre) ? this.genres.push(album.genre) : ''
            });
            console.log(this.albums)
        })
    }
})