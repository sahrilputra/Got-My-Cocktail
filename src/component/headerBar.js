
class HeaderBar extends HTMLElement{

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

      #headerTag{
        font-family: 'Roboto', sans-serif;
        display: flex;
        height: 50vh;
        width: 100%;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        text-transform: uppercase;
        background-color: gray;
        background-image: url('https://wallpaperaccess.com/full/1663381.jpg');
        background-position: -50px -80px;
        background-repeat: no-repeat;
        color: white;
        align-items: center;
    
    }
    
    .tagLine{
        font-size: 15px;
        width: 120px;
        outline: none;
        background-color: #FFBF00;
        border: none;
        height: auto;
        padding: 5px;
        margin: 10px;
        border-radius: 2px;
    }
      </style>

      <div id="headerTag">
      <h1>The Best Cocktail In Here</h1>
      <h1 class="tagLine">Find in Here</h1>
      </div>
        `
    }
}

customElements.define('header-bar', HeaderBar)