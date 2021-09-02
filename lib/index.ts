import { defineCustomElement } from 'vue'
import FancyButton from './components/FancyButton.ce.vue'

customElements.define('fancy-button', defineCustomElement(FancyButton))
