'use strict'
const AbstractValidator = use('App/Validators/AbstractValidator')

class Band extends AbstractValidator {
  get rules () {
    return {
      logo: 'required|max:500',
      name: 'required',
      history: 'required',
      year: 'integer|max:4',
      country_id: 'integer|min:1'
    }
  }
}

module.exports = Band
