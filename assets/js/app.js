

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
            button: 'btn btn-danger'
        }
    },
    methods: {
        changer(){
            if(this.titleColor == 'color' && this.button == 'btn btn-danger'){
                this.titleColor = 'colorChanged'
                this.button = 'btn btn-primary'
            } else {
                this.titleColor = 'color'
                this.button = 'btn btn-danger'
            }
        }
    }
}).mount('#app')