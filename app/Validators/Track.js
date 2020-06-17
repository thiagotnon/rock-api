'use strict'
const AbstractValidator = use('App/Validators/AbstractValidator')

class Track extends AbstractValidator {
  get rules () {
    return {
      track_number: 'required|integer|min:1',
      title: 'required',
      track_duration: 'required',
      album_id: 'required|integer|min:1'

    }
  }
}

module.exports = Track
