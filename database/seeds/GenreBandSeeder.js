'use strict'

/*
|--------------------------------------------------------------------------
| GenreBandSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const GenreBand = use('App/Models/GenreBand')


class GenreBandSeeder {
  async run () {
    await GenreBand.createMany([

      {
        genre_id:103,
        band_id:1,
      },
      {
        genre_id:132,
        band_id:1,
      },
      {
        genre_id:132,
        band_id:2,
      },
      {
        genre_id:7,
        band_id:4,
      },
      {
        genre_id:213,
        band_id:4,
      },
      {
        genre_id:132,
        band_id:4,
      },
      {
        genre_id:198,
        band_id:4,
      },
      {
        genre_id:199,
        band_id:4,
      },
      {
        genre_id:212,
        band_id:4,
      },
      {
        genre_id:84,
        band_id:4,
      },
      {
        genre_id:103,
        band_id:4,
      },
      {
        genre_id:197,
        band_id:4,
      },
      {
        genre_id:196,
        band_id:4,
      },
      {
        genre_id:103,
        band_id:5,
      },
      {
        genre_id:170,
        band_id:5,
      },
      {
        genre_id:6,
        band_id:5,
      },
      {
        genre_id:193,
        band_id:6,
      },
      {
        genre_id:103,
        band_id:6,
      },
      {
        genre_id:242,
        band_id:6,
      },
      {
        genre_id:6,
        band_id:6,
      },
      {
        genre_id:7,
        band_id:6,
      },
      {
        genre_id:199,
        band_id:6,
      },
      {
        genre_id:7,
        band_id:3,
      }

    ])
  }
}

module.exports = GenreBandSeeder
