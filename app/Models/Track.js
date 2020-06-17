'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')

/**
*  @swagger
*  definitions:
*    Track:
*      type: object
*      properties:
*        track_number:
*          type: integer
*        title:
*          type: string
*          maxLength: 100
*        track_duration:
*          type: time
*        album_id:
*          type: integer
*      required:
*        - track_number
*        - title
*        - track_duration
*        - album_id
*    TrackObject:
*      type: object
*      properties:
*        track_number:
*          type: integer
*        title:
*          type: string
*          maxLength: 100
*        track_duration:
*          type: time
*        album_id:
*          type: integer
*/
class Track extends AbstractModel {
  static getRegisterFields(){
    return [
      'track_number',
      'title',
      'track_duration',
      'album_id'
    ]
  }
  albums(){
    return this.belongsTo('App/Models/Album')
}
}

module.exports = Track
