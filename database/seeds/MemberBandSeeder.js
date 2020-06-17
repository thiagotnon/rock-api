'use strict'

/*
|--------------------------------------------------------------------------
| MemberBandSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const MemberBand = use('App/Models/MemberBand')

class MemberBandSeeder {
  async run () {
    await MemberBand.createMany([
      { member_id: 1, band_id: 1, },
      { member_id: 2, band_id: 1, },
      { member_id: 3, band_id: 1, },
      { member_id: 4, band_id: 1, },
      { member_id: 5, band_id: 1, },
      { member_id: 6, band_id: 1, },
      { member_id: 7, band_id: 1, },
      { member_id: 8, band_id: 1, },
      { member_id: 9, band_id: 1, },
      { member_id: 10, band_id: 2, },
      { member_id: 11, band_id: 2, },
      { member_id: 12, band_id: 2, },
      { member_id: 13, band_id: 2, },
      { member_id: 14, band_id: 4, },
      { member_id: 15, band_id: 4, },
      { member_id: 16, band_id: 4, },
      { member_id: 17, band_id: 4, },
      { member_id: 18, band_id: 4, },
      { member_id: 19, band_id: 4, },
      { member_id: 20, band_id: 4, },
      { member_id: 21, band_id: 4, },
      { member_id: 22, band_id: 5, },
      { member_id: 23, band_id: 5, },
      { member_id: 24, band_id: 5, },
      { member_id: 25, band_id: 5, },
      { member_id: 26, band_id: 5, },
      { member_id: 27, band_id: 5, },
      { member_id: 28, band_id: 5, },
      { member_id: 29, band_id: 5, },
      { member_id: 30, band_id: 5, },
      { member_id: 31, band_id: 5, },
      { member_id: 32, band_id: 5, },
      { member_id: 33, band_id: 6, },
      { member_id: 34, band_id: 6, },
      { member_id: 35, band_id: 6, },
      { member_id: 36, band_id: 6, },
      { member_id: 37, band_id: 6, },
      { member_id: 38, band_id: 6, },
      { member_id: 39, band_id: 6, },
      { member_id: 40, band_id: 3, },
      { member_id: 41, band_id: 3, },
      { member_id: 42, band_id: 3, },
      { member_id: 43, band_id: 3, }
    ])
  }
}

module.exports = MemberBandSeeder
