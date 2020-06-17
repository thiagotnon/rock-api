'use strict'
const AbstractValidator = use('App/Validators/AbstractValidator')

class Genre extends AbstractValidator {
  get rules () {
    return {
      name: 'required'
    }
  }
}

module.exports = Genre
