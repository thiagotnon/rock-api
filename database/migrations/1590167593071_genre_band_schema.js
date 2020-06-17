'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GenreBandSchema extends Schema {
  up () {
    this.create('genre_bands', (table) => {
      table.increments()
      table.integer('genre_id').unsigned().references('id').inTable('genres').notNullable()
      table.integer('band_id').unsigned().references('id').inTable('bands').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('genre_bands')
  }
}

module.exports = GenreBandSchema
