import { Controller } from "@hotwired/stimulus"
import { patch } from '@rails/request.js'
import Sortable from 'sortablejs';

export default class extends Controller {
  static targets = [ 'position' ]
  connect() {
    this.sortable = new Sortable(this.element)
  }
}
