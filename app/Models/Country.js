'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')

/**
*  @swagger
*  definitions:
*    Country:
*      type: object
*      properties:
*        name:
*          type: string
*      required:
*        - name

*    CountryObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        name:
*          type: string
*          maxLength: 100
*/
class Country extends AbstractModel {
    static getRegistrationFields(){
        return [
            'country'
        ]
    }
    bands(){
      return this.hasMany('App/Models/Band')
      }
}

module.exports = Country
