import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect(){
    console.log('connected!')
    console.log(this.element)
  }
  getUrl(e) {
    navigator.clipboard.writeText(e.target.src)
  }
}