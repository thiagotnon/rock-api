'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')

/**
*  @swagger
*  definitions:
*    Band:
*      type: object
*      properties:
*        name:
*          type: string
*        logo:
*          type: string
*        history:
*          type: string
*        year:
*          type: integer
*        country_id:
*          type: integer
*      required:
*        - name
*        - logo
*        - history
*        - year
*        - country_id
*    BandObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        name:
*          type: string
*          maxLength: 100
*        logo:
*          type: string
*          maxLength: 500
*        history:
*          type: string
*        year:
*          type: integer
*        contry_id:
*          type: integer
*/
class Band extends AbstractModel {
    static getRegisterFields(){
        return [
            'logo',
            'name',
            'history',
            'year',
            'country_id',
        ]
    }
    albums(){
        return this.belongsToMany('App/Models/Album').pivotTable('album_bans')
    }
    country(){
        return this.belongsTo('App/Models/Country')
    }
    members(){
        return this.belongsToMany('App/Models/Member').pivotTable('member_bands')
    }
    genre(){
        return this.belongsToMany('App/Models/Genre').pivotTable('genre_bands')
    }

}

module.exports = Band
