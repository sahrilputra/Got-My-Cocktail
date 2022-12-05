class DrinkItem extends HTMLElement {

    
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        })
    }

    set drink(drink){
        this._drink = drink
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        
<style>

.card{
    width: 240px;
    height: auto;
    text-align: center;
    justify-items: center;
    gap: 10px;
    border-radius: 11px;
    background: #ffffff;
    box-shadow:  12px 12px 42px #e8e8e8, -12px -12px 42px #ffffff;
    border: none;
}
.card-body{
    padding: 10px;
    gap: 10px;
    color: #2d2d2d;
    margin-bottom: 20px;
    max-height: auto;
    min-height: auto;
}
.card-title{
    font-size: 16px;
    font-weight: bold;
    margin: 10px;
    text-transform: uppercase;
}
.card img{
    border-radius: 11px 11px 11px 11px;
    width: 240px;
    height: 240px;
}
.tags{
    min-width: 12px;
    height: auto;
    padding : 4px;
    background-color: #FFBF00;
    text-align: center;
    margin: auto;
    margin-top: 10px;
    border-radius: 4px;
    text-transform: uppercase;
}
</style>

            <div class="card" id="itemDrink">
                <img src="${this._drink.strDrinkThumb}" class="card-img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this._drink.strDrink}</h5>
                    <div id="ingredient">
                    </div>
                    <p class="card-text">${this._drink.strInstructions}</p>
                    <p class="tags">${this._drink.strAlcoholic}</p>
                </div>
            </div>
        `

    }
}

customElements.define('drink-item', DrinkItem)
