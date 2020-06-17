'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')

/**
*  @swagger
*  definitions:
*    AlbumBan:
*      type: object
*      properties:
*        id:
*          type: integer
*        band_id:
*          type: integer
*        album_id:
*          type: integer
*      required:
*        - band_id
*        - album_id
*/
class AlbumBan extends AbstractModel {
    static getRegisterFields(){
        return[
            'band_id',
            'album_id',
        ]
    }
    band(){
        return this.belongsTo('App/Models/Band')
    }
}

module.exports = AlbumBan
