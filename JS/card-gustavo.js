'use strict'

class card extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.imagem__mockup = null
    this.imagem__background = null
  }

  static get observedAttributes() {
    return [
      'imagem__background',
    ]
  }


  attributeChangedCallback(nameAttr, oldValue, newValue) {
    this[nameAttr] = newValue
  }

  connectedCallback() {
    this.shadow.appendChild(this.component())
    this.shadow.appendChild(this.styles())
  }

  styles() {
    const css = document.createElement('style')
    css.textContent = `

    .container {
      width:60%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgb(5,14,39);
      background: linear-gradient(30deg, rgba(5,14,39,1) 0%, rgba(26,56,140,1) 35%, rgba(255,255,255,1) 100%);
      border-radius: 32px;
    }
    
    .container__image {
      height: 100%;
      width: 80%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .background {
      width: 100%;
      height: fit-content;
      
    }
    @media (max-width: 768px) {
      .container {
        width: 38vh;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(5,14,39);
        background: linear-gradient(30deg, rgba(5,14,39,1) 0%, rgba(26,56,140,1) 35%, rgba(255,255,255,1) 100%);
        border-radius: 32px;
      }
      
      .container__image {
        width: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .background {
        width: 100%;        
      }
    }
    
      
        `

    return css
  }

  component() {
    const container = document.createElement('div')
    container.classList.add('container')

    const container__image = document.createElement('div')
    container__image.classList.add('container__image')

    const background = document.createElement('img')
    background.src = this.imagem__background
    background.classList.add('background')

    container__image.append( background)
    container.append(container__image)

    return container
  }
}

customElements.define('card-gustavo', card)
