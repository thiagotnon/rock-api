'use strict'
const AbstractValidator = use('App/Validators/AbstractValidator')

class Country extends AbstractValidator {
  get rules () {
    return {
      country: 'unique:countries',
    }
  }
}

module.exports = Country
