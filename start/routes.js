'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Rock API' }
})
Route.post('/users', 'UserController.store').prefix('api/v1')
Route.post('/users/token', 'UserController.token').prefix('api/v1')


Route.group(() => {

  Route.resource('/albums', 'AlbumController')
        .apiOnly()
        .validator(new Map([
            [['store', 'update'], 'Album']
        ]))

  Route.get('/albums/:id/bands', 'AlbumController.bands')
  Route.get('/albums/:id/tracks', 'AlbumController.tracks')

  Route.resource('/album-bands', 'AlbumBanController')
        .apiOnly()
        .validator(new Map([
            [['store', 'update'], 'AlbumBan']
        ]))


  Route.resource('/bands', 'BandController')
       .apiOnly()
       .validator(new Map([
           [['store', 'update'], 'Country']
       ]))

  Route.get('/bands/:id/albums', 'BandController.albums')

  Route.resource('/countries', 'CountryController')
        .apiOnly()
        .validator(new Map([
            [['store', 'update'], 'Country']
        ]))
  Route.get('/countries/:id/bands', 'CountryController.bands')

  Route.resource('/genres', 'GenreController')
       .apiOnly()
       .validator(new Map([
            [['store', 'update'], 'Genre']
        ]))
  Route.get('/genres/:id/bands', 'GenreController.bands')

  Route.resource('/genre-bands', 'GenreBandController')
        .apiOnly()
        .validator(new Map([
            [['store', 'update'], 'GenreBand']
        ]))

  Route.resource('/members', 'MemberController')
        .apiOnly()
        .validator(new Map([
            [['store', 'update'], 'Member']
        ]))

  Route.resource('/member-bands', 'MemberBandController')
        .apiOnly()
        .validator(new Map([
            [['store', 'update'], 'MemberBand']
        ]))

  Route.resource('/studios', 'StudioController')
        .apiOnly()
        .validator(new Map([
            [['store', 'update'], 'Studio']
        ]))

  Route.resource('/tracks', 'TrackController')
        .apiOnly()
        .validator(new Map([
            [['store', 'update'], 'Track']
        ]))
  Route.get('/tracks/:id/albums', 'TrackController.albums')

}).prefix('api/v1')

