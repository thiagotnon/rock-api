'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')


/**
*  @swagger
*  definitions:
*    Album:
*      type: object
*      properties:
*        name:
*          type: string
*        release_date:
*          type: integer
*        cover:
*          type: string
*        about:
*          type: string
*        copies_sold:
*          type: integer
*        studio_id:
*          type: integer
*      required:
*        - name
*        - release_date
*        - cover
*        - about
*        - studio_id
*    AlbumObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        name:
*          type: string
*          maxLength: 100
*        release_date:
*          type: integer
*        cover:
*          type: string
*          maxLength: 500
*        about:
*          type: string
*        copies_sold:
*          type: integer
*        studio_id:
*          type: integer
*/
class Album extends AbstractModel {
    static getRegisterFields(){
        return [
            'name',
            'release_date',
            'cover',
            'about',
            'copies_sold',
            'studio_id'
        ]
    }

    bands(){
        return this.belongsToMany('App/Models/Band').pivotTable('album_bans')
    }
    genre(){
        return this.belongsToMany('App/Models/Genre').pivotTable('genre_bands')
    }
    tracks(){
      return this.hasMany('App/Models/Track')
    }

}

module.exports = Album
