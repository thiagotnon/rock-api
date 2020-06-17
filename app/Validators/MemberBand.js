'use strict'
const AbstractValidator = use('App/Validators/AbstractValidator')

class MemberBand extends AbstractValidator {
  get rules () {
    return {
      member_id: 'required|integer|min:1',
      band_id: 'required|integer|min:1'
    }
  }
}

module.exports = MemberBand
