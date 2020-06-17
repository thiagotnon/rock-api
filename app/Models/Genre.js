'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')

/**
*  @swagger
*  definitions:
*    Genres:
*      type: object
*      properties:
*        name:
*          type: string
*          maxLength: 100
*      required:
*        - name
*    GenreObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        name:
*          type: string
*          maxLength: 100
*/
class Genre extends AbstractModel{
    static getRegisterFields(){
        return [
            'name'
        ]
    }
    bands(){
      return this.belongsToMany('App/Models/Band').pivotTable('genre_bands')
  }
}

module.exports = Genre
