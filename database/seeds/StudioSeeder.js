'use strict'

/*
|--------------------------------------------------------------------------
| StudioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Studio = use('App/Models/Studio')

class StudioSeeder {
  async run () {
    await Studio.createMany([
      {
        name: 'Estúdio Guerra',
        logo: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/37879849_2276431265910565_3045227281397055488_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=LmhmhIW74OUAX9-laGI&oh=facfcb09a65f14327f3d3e78aa3038b6&oe=5EF7B2B4',
      },
      {
        name: 'Independent',
        logo: null,
      },
      {
        name: 'Burning London Records',
        logo: null,
      },
      {
        name: 'Together Records',
        logo: null,
      },
      {
        name: 'Pense',
        logo: null,
      },
      {
        name: 'AML Estúdio',
        logo: null,
      },
      {
        name: 'EMI',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/EMI_logo.svg/200px-EMI_logo.svg.png',
      },
      {
        name: 'Deckdisc',
        logo: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/29/Deck_logo.jpg/180px-Deck_logo.jpg',
      },
      {
        name: 'Warner Music',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Warner_Music_Global.svg/180px-Warner_Music_Global.svg.png',
      },
      {
        name: 'ST2 Records',
        logo: 'https://img.discogs.com/nq-6nxHrGy0i_brSAWBHk-tCK1I=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/L-15528-001.jpg.jpg',
      },
      {
        name: 'Som Livre',
        logo: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4e/Som_Livre.png/100px-Som_Livre.png',
      }

    ])
  }
}

module.exports = StudioSeeder
