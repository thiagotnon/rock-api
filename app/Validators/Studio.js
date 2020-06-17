'use strict'
const AbstractValidator = use('App/Validators/AbstractValidator')

class Studio extends AbstractValidator {
  get rules () {
    return {
      name: 'required',
      logo: 'max:500'
    }
  }
}

module.exports = Studio
