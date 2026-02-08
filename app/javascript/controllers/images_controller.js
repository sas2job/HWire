import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  static targets = ['image']

  connect(){
    const title = document.createElement('p')
    title.textContent = this.imageTarget.alt
    this.element.appendChild(title)
  }

  getUrl(e) {
    navigator.clipboard.writeText(e.target.src)
    this.dispatch('copy', { detail: { content: 'Image URL has been copied!'}})
  }

  // imageTargetConnected(element) {
  //   console.log(element)
  // }
}