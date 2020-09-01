Vue.component('img-comp', {
props: ['image','title'],
template: `
    <div>
     <img width="200" :src="image"  style="-webkit-border-radius: 30px;-moz-border-radius: 30px;border-radius: 30px;padding:0px;" v-bind:alt="title"/>
     <h3>{{ title }}</h3>
    </div>
    `
})

new Vue({
    el: '#app',
    data: {
        books: [
            {title: 'Teoria del todo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1DdR-iv4PL9tRdI7k00j-LCq2XeDxXBX0ng&usqp=CAU' },
            {title: 'El gran diseño', image: 'https://www.planetadelibros.com.co/usuaris/libros/fotos/171/m_libros/170453_el-gran-diseno-rca_9788498924275.jpg'},
            {title: 'Breve historia del tiempo', image: 'https://images.cdn3.buscalibre.com/fit-in/360x360/c1/d5/c1d562eb8d27c7af22c9f981f4de04f1.jpg'},
            {title: 'La clave secreta del universo', image: 'https://i.blogs.es/b4405b/51tvcais32l/450_1000.jpg'},
            {title: 'Agujeros negros y pequeños universos', image: 'https://lh3.googleusercontent.com/proxy/q0Cg1rg1A91XyHGlcdN7PP2nWoLenDpnnSH8Zuw0b9giTDfkSQumhV20ZmdXUCQLTv48k2UY4gMUvPDtNzpOQaTEGlRkQ8xNUEqRRGKhCGuCtjaOWuYQzKgWm6ut'},
            {title: 'El universo de Stephen Hawking', image: 'https://pics.filmaffinity.com/into_the_universe_with_stephen_hawking-350910572-large.jpg'},
        ]
        

    }
})