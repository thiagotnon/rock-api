'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudioSchema extends Schema {
  up () {
    this.create('studios', (table) => {
      table.increments()
      table.string('name', 100).notNullable()
      table.string('logo', 500)
      table.timestamps()
    })
  }

  down () {
    this.drop('studios')
  }
}

module.exports = StudioSchema
