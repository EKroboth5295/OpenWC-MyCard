import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard extends LitElement {
  static properties = {
    image: { type: String },
    alt: { type: String },
    header: { type: String },
    details: { type: String },
    dark: { type: Boolean, reflect: true }
  }

  static styles = css`
  
.wrapper {
  width: 400px;
  border: 2px solid black;
  display: inline-flex;
  height: 600px;
}

.image {
  width: 400px;
}

.header {
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
}

.buttons button:focus,
.buttons button:hover {
  background-color: CornflowerBlue;
}


.buttons button:active {
  background-color: CornflowerBlue;
}

button {
  padding: 6px;
  font-size: 16px;
}

details {
  padding: 10px;
}

.details summary {
  font-size: 20px;
  font-weight: bold;
}

:host([dark]) .container {
  background-color: darkgray;
}

@media only screen and (max-width: 1200px){
  .wrapper {
    background-color: pink;
  }
}

@media only screen and (max-width: 600px){
  .wrapper {
    background-color: blue;
  }
}

@media only screen and (max-width: 425px){
  .wrapper {
    font-weight: normal;
  }
  .wrapper .header h3 {
    font-size: 12px;
  }
  .wrapper .header h4 {
    font-size: 10px !important;
  }
  details {
    display: none;
  }
}

.desc-txt ::slotted(img) {
  max-width: 100px;
  display: block;
  margin: 0 auto;
}
  `;

  constructor() {
    super();
    this.alt = 'Mario Image Card';
    this.header = 'My Card: Mario';
    this.image = 'https://mcdn.wallpapersafari.com/medium/71/81/0VgmpU.jpg';
    this.details = 'My card is displaying one of my favorite video game characters ever, Mario. I chose this character because it is a character that means a lot to me through my life. This card design has the title at the top, displayed in the top-center of the card, with a photo beneath it. The photo itself displays mario jumping upwards, with a light blue background that contrasts well with the rest of the card.';
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="container">
          <img class="image" src="${this.image}" alt="${this.alt}"/>
            <div class="header">
            <h1>${this.header}</h1>
            </div>
              <details class="details">
              <summary>Details</summary>
                <div class="desc-txt">
                  <p>${this.details}</p>
                  <slot name='Header'></slot>
                </div>
              </details>
        </div>
      </div>
    `;
  }
}

customElements.define('my-card', MyCard);