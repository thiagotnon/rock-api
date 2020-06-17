'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')

/**
*  @swagger
*  definitions:
*    Studio:
*      type: object
*      properties:
*        name:
*          type: string
*          maxLength: 100
*        logo:
*          type: integer
*          maxLength: 500
*      required:
*        - name
*    StudioObject:
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
*/
class Studio extends AbstractModel {
    static getRegisterFields(){
        return [
            'name',
            'logo'
        ]
    }
}

module.exports = Studio
