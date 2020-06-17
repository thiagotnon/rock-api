'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')

/**
*  @swagger
*  definitions:
*    GenreBand:
*      type: object
*      properties:
*        id:
*          type: integer
*        genre_id:
*          type: integer
*        band_id:
*          type: integer
*      required:
*        - genre_id
*        - band_id
*/
class GenreBand extends AbstractModel {
    static getRegisterFields(){
        return [
            'genre_id',
            'band_id'
        ]
    }
}

module.exports = GenreBand
