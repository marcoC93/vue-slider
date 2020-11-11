var app = new Vue({
  el: '#root',

  data: {
    // message: 'Hello Vue!'
    indiceImmagine :0,
    // imgCarousel : './img/1.png',



    imgCarousel : [
        'img/1.png',
        'img/2.jpg',
        'img/3.jpg',
    ],

    // imgPallini: '<i class="far fa-circle"></i>' ,
    // pallini : [1,2,3,4]

},
  methods: {


// questa funzione serve per poter scorrere le varie immagini in successione, questo evento si verificherá al click della freccia destra
    imgSuccessiva()
    {
        // in questo step aumento di 1 il contatore dell'indice immagine presente nel "data" in modo da poter passare l'indice sull'immagine successiva
        this.indiceImmagine = this.indiceImmagine + 1;
        // qui di seguito é scritta la condizione per la quale se l'indice dell'immagine é maggiore della lunghezza dell'array di immagini (il -1 ha senso perché gli indici partono da 0  ed il contatore deve progredire in base all'indice e non alla lunghezza dell'array)
        if(this.indiceImmagine>this.imgCarousel.length - 1)
        {
        //se la condizione appena enunciata si dovesse verificare, il contatore verrá resettato a 0 garantendo di fatto il poter scorrere in loop la galleria
            this.indiceImmagine = 0;
        }
    },
// questa funzione é analoga
    imgPrecedente()
    {
        // in questo caso rispetto allo scorrere in avanti della galleria il contatore diminuisce e dunque permette di scorrere la galleria all'indietro
        this.indiceImmagine -= 1;
        // se l'indice é minore di 0 (numero che fa riferimento al primo elemento) verrá resettato il contatore che andrá sull ultimo elemento
        if(this.indiceImmagine <  0)
        {
        //imgCarousel.length rappresenta la lunghezza dell'elemento -1 perché gli indici a differenza della lunghezza partono da 0 e non da 1
        this.indiceImmagine= this.imgCarousel.length -1;
        }
    },

        // questa funzione permette di rintracciare l'indice del pallino ed associarlo a quello delle immagini dove "indiceImmagine" viene associando dandogli come valore l'indice "index" ,che sará il parametro di questa funzione, del pallino e permettendo di saltare da un immagine all'altra, senza l'ausilio delle frecce, senza che siano direttamente successive o precedenti
    cambioImg(index) {
        this.indiceImmagine = index;
        // console.log('pallino cliccato' + index );
    }
  }
})



// prova(){
//     alert('Il click funziona')
// }
