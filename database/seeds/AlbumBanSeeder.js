'use strict'

/*
|--------------------------------------------------------------------------
| AbSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const AlbumBan = use('App/Models/AlbumBan')

class AlbumBanSeeder {
  async run () {
    await AlbumBan.createMany([

      { band_id: 1, album_id: 1,  },
      { band_id: 1, album_id: 2,  },
      { band_id: 1, album_id: 3,  },
      { band_id: 1, album_id: 4,  },
      { band_id: 2, album_id: 5,  },
      { band_id: 2, album_id: 6,  },
      { band_id: 2, album_id: 7,  },
      { band_id: 2, album_id: 8,  },
      { band_id: 3, album_id: 9,  },
      { band_id: 3, album_id: 10,  },
      { band_id: 3, album_id: 11,  },
      { band_id: 3, album_id: 12,  },
      { band_id: 4, album_id: 13,  },
      { band_id: 4, album_id: 14,  },
      { band_id: 4, album_id: 15,  },
      { band_id: 4, album_id: 16,  },
      { band_id: 4, album_id: 17,  },
      { band_id: 4, album_id: 18,  },
      { band_id: 4, album_id: 19,  },
      { band_id: 4, album_id: 20,  },
      { band_id: 4, album_id: 21,  },
      { band_id: 4, album_id: 22,  },
      { band_id: 4, album_id: 23,  },
      { band_id: 4, album_id: 24,  },
      { band_id: 4, album_id: 25,  },
      { band_id: 5, album_id: 26,  },
      { band_id: 5, album_id: 27,  },
      { band_id: 5, album_id: 28,  },
      { band_id: 5, album_id: 29,  },
      { band_id: 6, album_id: 30,  },
      { band_id: 6, album_id: 31,  },
      { band_id: 6, album_id: 32,  },
      { band_id: 6, album_id: 33,  },
      { band_id: 6, album_id: 34,  },
      { band_id: 6, album_id: 35,  },
      { band_id: 6, album_id: 36,  },
      { band_id: 6, album_id: 37,  },
      { band_id: 6, album_id: 38,  },
      { band_id: 6, album_id: 39,  },
      { band_id: 6, album_id: 40,  },
      { band_id: 6, album_id: 41,  },
      { band_id: 6, album_id: 42,  }

    ])
  }
}

module.exports = AlbumBanSeeder
