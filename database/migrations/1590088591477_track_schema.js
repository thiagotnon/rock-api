'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TrackSchema extends Schema {
  up () {
    this.create('tracks', (table) => {
      table.increments()
      table.integer('track_number').notNullable()
      table.string('title', 100).notNullable()
      table.time('track_duration').notNullable()
      table.integer('album_id').unsigned().references('id').inTable('albums').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tracks')
  }
}

module.exports = TrackSchema
