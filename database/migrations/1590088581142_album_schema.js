'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlbumSchema extends Schema {
  up () {
    this.create('albums', (table) => {
      table.increments()
      table.string('name', 100).notNullable()
      table.integer('release_date').notNullable()
      table.string('cover', 500).notNullable()
      table.text('about').notNullable()
      table.integer('copies_sold')
      table.integer('studio_id').unsigned().references('id').inTable('studios').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('albums')
  }
}

module.exports = AlbumSchema
