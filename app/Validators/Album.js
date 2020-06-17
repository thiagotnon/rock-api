'use strict'
const AbstractValidator = use('App/Validators/AbstractValidator')

class Album extends AbstractValidator {
  get rules () {
    return {
      name: 'required|max:50|min:2',
      release_date: 'required|max:4|min:4',
      cover: 'required|max:500',
      about: 'required',
      copies_sold: 'integer|min:1',
      studio_id: 'required|min:1'
    }
  }
}

module.exports = Album
