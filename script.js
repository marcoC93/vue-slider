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

    imgPallini: '<i class="far fa-circle"></i>' 

},
  methods: {


// questa funzione serve per poter scorrere le varie immagini in successione, questo evento si verificherá al click della freccia destra
    imgSuccessiva()
    {
        this.indiceImmagine += 1;
        if(this.indiceImmagine>this.imgCarousel.length - 1)
        {
            this.indiceImmagine = 0;
        }
    },
    imgPrecedente()
    {
        this.indiceImmagine -= 1;
        if(this.indiceImmagine <  0)
        {
        this.indiceImmagine= this.imgCarousel.length -1;
        }
    }
  }
})
