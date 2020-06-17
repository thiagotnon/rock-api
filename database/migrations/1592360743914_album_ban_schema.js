'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlbumBanSchema extends Schema {
  up () {
    this.create('album_bans', (table) => {
      table.increments()
      table.integer('band_id').unsigned().references('id').inTable('bands').notNullable()
      table.integer('album_id').unsigned().references('id').inTable('albums').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('album_bans')
  }
}

module.exports = AlbumBanSchema
