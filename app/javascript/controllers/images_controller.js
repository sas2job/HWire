import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  static targets = ['image', 'title', 'save']

  connect(){
    const title = document.createElement('p')
    title.textContent = this.imageTarget.alt
    title.contentEditable = true
    title.dataset.imagesTarget = 'title'
    title.dataset.action = 'click->images#editTitle'
    this.element.appendChild(title)
  }

  editTitle(e){
    if(!this.hasSaveTarget) {
      const btn = document.createElement('button')
      btn.textContent = 'Save'
      btn.classList = 'btn btn-primary btn-sm'
      btn.dataset.imagesTarget = 'save'
      btn.dataset.action = 'click->images#saveTitle'
      e.target.insertAdjcentElement('afterend', btn)
    }
  }

  saveTitle(e){
    e.preventDefault()
    e.target.disabled = true
  }

  getUrl(e) {
    navigator.clipboard.writeText(e.target.src)
    this.dispatch('copy', { detail: { content: 'Image URL has been copied!'}})
  }

  // imageTargetConnected(element) {
  //   console.log(element)
  // }

  titleTargetConnected(element) {
    console.log(element)
  }
}