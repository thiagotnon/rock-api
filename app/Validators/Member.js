'use strict'
const AbstractValidator = use('App/Validators/AbstractValidator')

class Member extends AbstractValidator {
  get rules () {
    return {
      name: 'required',
      image: 'max:500',
      position: 'required',
      started: 'required',
      exit: 'required'
    }
  }
}

module.exports = Member
