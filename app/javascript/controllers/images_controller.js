import { Controller } from "@hotwired/stimulus"
import { Toast } from "bootstrap"
export default class extends Controller {
  connect(){
  }
  getUrl(e) {
    navigator.clipboard.writeText(e.target.src)
    this.dispatch('copy', { detail: { content: 'Image URL has been copied!'}})
  }
}