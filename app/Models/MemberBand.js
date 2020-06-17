'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')

/**
*  @swagger
*  definitions:
*    MemberBand:
*      type: object
*      properties:
*        id:
*          type: integer
*        member_id:
*          type: integer
*        band_id:
*          type: integer
*      required:
*        - member_id
*        - band_id
*/
class MemberBand extends AbstractModel {
    static getRegisterFields(){
        return[
            'member_id',
            'band_id',
            'name'
        ]
    }
}

module.exports = MemberBand
