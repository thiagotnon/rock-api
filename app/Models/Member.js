'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')

/**
*  @swagger
*  definitions:
*    Member:
*      type: object
*      properties:
*        id:
*          type: integer
*        name:
*          type: string
*        image:
*          type: string
*        position:
*          type: string
*        started:
*          type: string
*        exit:
*          type: string
*      required:
*        - name
*        - position
*        - started
*        - exit
*/
class Member extends AbstractModel {
    static getRegisterFields(){
        return [
            'name',
            'image',
            'position',
            'started',
            'exit'
        ]
    }
    band(){
        return this.belongsToMany('App/Models/Band').pivotTable('member_bands')
    }


}

module.exports = Member
