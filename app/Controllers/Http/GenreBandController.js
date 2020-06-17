'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const GenreBand = use('App/Models/GenreBand');

/**
 * Resourceful controller for interacting with genrebands
 */
class GenreBandController {

  async index ({ request, response, view }) {
    return await GenreBand.all();
  }

  async store ({ request, response }) {
    const registerFields = GenreBand.getRegisterFields();
    const data = request.only(registerFields);
    return await GenreBand.create(data);
  }


  async show ({ params, request, response, view }) {
    return await GenreBand.findOrFail(params.id);
  }

  async update ({ params, request, response }) {
    const genreBand = await GenreBand.findOrFail(params.id);
    const registerFields = GenreBand.getRegisterFields();
    const data = request.only(registerFields);
    genreBand.merge(data);
    await genreBand.save();
    return genreBand;
  }


  async destroy ({ params, request, response }) {
    const genreBand = await GenreBand.findOrFail(params.id);
    genreBand.delete();
  }
}

module.exports = GenreBandController
