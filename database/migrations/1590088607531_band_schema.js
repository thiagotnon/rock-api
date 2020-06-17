'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BandSchema extends Schema {
  up () {
    this.create('bands', (table) => {
      table.increments()
      table.string('logo', 500).notNullable()
      table.string('name', 100).notNullable().unique()
      table.text('history').notNullable()
      table.integer('year').notNullable()
      table.integer('country_id').unsigned().references('id').inTable('countries').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('bands')
  }
}

module.exports = BandSchema
