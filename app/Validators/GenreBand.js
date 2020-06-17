'use strict'
const AbstractValidator = use('App/Validators/AbstractValidator')

class GenreBand extends AbstractValidator {
  get rules () {
    return {
      genre_id: 'required|min:1',
      band_id: 'required|min:1',
    }
  }
}

module.exports = GenreBand
