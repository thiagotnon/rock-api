'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MemberBandSchema extends Schema {
  up () {
    this.create('member_bands', (table) => {
      table.increments()
      table.integer('member_id').unsigned().references('id').inTable('members').notNullable()
      table.integer('band_id').unsigned().references('id').inTable('bands').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('member_bands')
  }
}

module.exports = MemberBandSchema
