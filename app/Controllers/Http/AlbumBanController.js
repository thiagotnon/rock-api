'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const AlbumBan = use('App/Models/AlbumBan');

/**
 * Resourceful controller for interacting with albumbans
 */
class AlbumBanController {

  async index ({ request, response, view }) {
    return await AlbumBan.all();
  }

  async store ({ request, response }) {
    const registerFields = AlbumBan.getRegisterFields();
    const data = request.only(registerFields);
    return await AlbumBan.create(data);
  }

  async show ({ params, request, response, view }) {
    return await AlbumBan.query()
                          .where('id', params.id)
                          .with('band')
                          .fetch()
  }

  async update ({ params, request, response }) {
    const albumban = await AlbumBan.findOrFail(params.id);
    const registerFields = AlbumBan.getRegisterFields();
    const data = request.only(registerFields);
    albumban.merge(data);
    await albumban.save();
    return albumban;
  }

  async destroy ({ params, request, response }) {
    const albumban = await AlbumBan.findOrFail(params.id);
    albumban.delete();
  }
}

module.exports = AlbumBanController
