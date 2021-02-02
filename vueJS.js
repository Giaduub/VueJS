new Vue({
    el: '#api',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get('https://fakestoreapi.com/products')
        .then(response => (this.info = response))
    }
  })
  
    
      var app = new Vue({
        el: "#app",
        data: {
          user: " ",
          produits: ["Pizza", "Hamburger", "Cheeseburger", "Tacos"],
          commandes: [],
          affichage: "display-20"
        },
        methods: {
          commander: function (produit) {
            this.commandes.push(produit);
  
          }
        }
      })
  
      