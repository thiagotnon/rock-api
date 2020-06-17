'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const MemberBand= use('App/Models/MemberBand');

/**
 * Resourceful controller for interacting with memberbands
 */
class MemberBandController {

  async index ({ request, response, view }) {
    return await MemberBand.all();
  }

  async store ({ request, response }) {
    const registerFields = MemberBand.getRegisterFields();
    const data = request.only(registerFields);
    return await MemberBand.create(data);
  }

  async show ({ params, request, response, view }) {
    return await MemberBand.query()
                            .where('id', params.id)
                            .with('member')
                            .with('band')
                            .fetch()
  }


  async update ({ params, request, response }) {
    const memberBand = await MemberBand.findOrFail(params.id);
    const registerFields = MemberBand.getRegisterFields();
    const data = request.only(registerFields);
    memberBand.merge(data);
    await memberBand.save();
    return memberBand;
  }


  async destroy ({ params, request, response }) {
    const memberBand = await MemberBand.findOrFail(params.id);
    memberBand.delete();
  }
}

module.exports = MemberBandController
