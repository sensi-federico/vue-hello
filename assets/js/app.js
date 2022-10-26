

// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const {createApp} = Vue 

createApp({
    data(){
        return{
            title: 'Hello World!',
            titleColor: 'color',
            button: 'btn btn-danger',
            image: './assets/img/anonymous.jpeg'
        }
    },
    methods: {
        changer(){
            if(this.titleColor == 'color' && this.button == 'btn btn-danger' && this.image == './assets/img/anonymous.jpeg'){
                this.titleColor = 'colorChanged'
                this.button = 'btn btn-primary'
                this.image = './assets/img/fsociety.jpeg'
            } else {
                this.titleColor = 'color'
                this.button = 'btn btn-danger'
                this.image = './assets/img/anonymous.jpeg'
            }
        }
    }
}).mount('#app')