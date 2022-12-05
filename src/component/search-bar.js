class SearchBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  
  
    get value() {
      return this.shadowDOM.querySelector('#searchElement').value;
    }
  
    render() {
      this.shadowDOM.innerHTML = `
      <style>
      .form-container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 10px;
        margin : 10px;
        text-align: center;
        text-transform: uppercase;
      }
    .formTag{
      margin: 20px;
      }
      #searchElement{
        width: 220px;
        border: solid 2px #FFBF00;
        border-radius: 10px;
        height: 33px;
      padding: 8px;
      }
      #searchElement :focus{
        outline: none;
        border: none;
        }
      .btn-submit{
        width: auto;
        height: auto;
        padding: 8px;
        border-radius: 4px;
        background-color:#FFBF00 ;
        border: none;
        cursor: pointer;
      }
      .btn-submit:hover{
        background-color: #FF7000;
        transition: all 1000ms;
      }
      </style>
      <div class="form-container" id="form">
      <form action="#">
          <p>Find Here</p>
          <h1 class="formTag" >Got Cocktail?</h1>
          <div id="search-container" class="search-container">
              <input placeholder="Search Cocktail" id="searchElement" type="search">
              <button id="searchButtonElement" class="btn-submit" type="submit">Search</button>
            </div>
          </form>
      </div>
      `;
  
      this.shadowDOM.querySelector('#searchButtonElement')
          .addEventListener('click', this._clickEvent);
    }
  }
  
  customElements.define('search-bar', SearchBar);