'use strict'

class AbstractValidator {
  get validateAll() {
    return true;
  }
  get messages(){
    return {
      'required': 'The field {{field}} is required.',
      'max' : 'The value entered is greater than the maximum allowed.',
      'min' : 'The value entered is less than the minimum allowed.',
      'integer' : 'The {{field}} field must be integer.',
      'unique' : 'The record with the same value already exists.',
      'data': 'The date entered is not valid.',
      'time': 'The time entered is not valid.',
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }

}

module.exports = AbstractValidator
