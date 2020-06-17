'use strict'
const AbstractValidator = use('App/Validators/AbstractValidator')

class AlbumBan extends AbstractValidator {
  get rules () {
    return {
      band_id: 'required|min:1',
      album_id: 'required|min:1'
    }
  }
}

module.exports = AlbumBan
