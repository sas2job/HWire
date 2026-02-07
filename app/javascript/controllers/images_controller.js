import { Controller } from "@hotwired/stimulus"
import { Toast } from "bootstrap"
export default class extends Controller {
  connect(){
    console.log('connected!')
    console.log(this.element)
    this.toast = new Toast(
      document.getElementById('copyToast')
    )
  }
  getUrl(e) {
    navigator.clipboard.writeText(e.target.src)
    this.toast.show
  }
}