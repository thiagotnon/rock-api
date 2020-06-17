'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MemberSchema extends Schema {
  up () {
    this.create('members', (table) => {
      table.increments()
      table.string('name', 100).notNullable()
      table.string('image', 255)
      table.string('position', 100).notNullable()
      table.string('started', 255).notNullable()
      table.string('exit', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('members')
  }
}

module.exports = MemberSchema
