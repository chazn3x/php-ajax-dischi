const app = new Vue({
    el: '#app',
    data: {
        albums: []
    },
    created() {
        axios.get('./dischi.php')
        .then(response => {
            this.albums = response.data
            console.log(this.albums)
        })
    }
})