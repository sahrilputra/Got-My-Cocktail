
class IngredientsInfo extends HTMLElement{

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        })
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
      <style>

      .container-info{
        margin-top: 20px;
        width: 100%;
        height: 46vh;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .info img{
        width: 120px;
        height: 120px;
    }
    .info{
        display: flex;
        flex-direction: row;
        text-align: center;
        margin: auto;
        justify-content: center;
    }
    .paramTag{
        color: #FFBF00;
    }
     
      </style>

      <div class="container-info">
      <h1 class="popularTag">POPULAR INGREDIENTS</h1>
      <p class="paramTag">MOST USED INGREDIENTS</p>
      <div class="info">
          <div class="imgItem">
              <img src="https://www.thecocktaildb.com/images/ingredients/Vodka.png" alt="">
              <p>Vodka</p>
          </div>
          <div class="imgItem">
              <img src="https://www.thecocktaildb.com/images/ingredients/Gin.png" alt="">
              <p>Gin</p>
          </div>   <div class="imgItem">
              <img src="https://www.thecocktaildb.com/images/ingredients/Rum.png" alt="">
              <p>Rum</p>
          </div>

      </div>
      </div>
        `
    }
}

customElements.define('ingredients-info', IngredientsInfo)