'use strict'

const { format } = require('mysql');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Band = use('App/Models/Band');
const Database = use('Database');

/**
 * Resourceful controller for interacting with bands
 */
class BandController {
 /**
  * @swagger
  * /api/v1/bands:
  *   get:
  *     tags:
  *       - Bands
  *     summary: List All Bands
  *     parameters:
  *       - name: name
  *         description: Filter by partial name
  *         in: query
  *         required: false
  *         type: string
  *       - name: page
  *         description: Númber of Page
  *         in: query
  *         required: false
  *         type: integer
  *       - name: qty
  *         description: Númber of Records
  *         in: query
  *         required: false
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  */
  async index ({ request, response, view }) {
    const { page, qtd, name } = request.all()
    const query = Database.select('id', 'logo', 'name', 'history')
                          .from('bands')

    if(name){
      query.where('name', 'like', '%'+name+'%')
    }

    return await query.paginate(page, qtd)
  }
  /**
  * @swagger
  * /api/v1/bands:
  *   post:
  *     tags:
  *       - Bands
  *     summary: Create a Band
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: band
  *         description: Band Object
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Band'
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *             $ref: '#/definitions/Band'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {
    const registerFields = Band.getRegisterFields();
    const data = request.only(registerFields);

    return await Band.create(data);

  }

  /**
  * @swagger
  * /api/v1/bands/{id}:
  *   get:
  *     tags:
  *       - Bands
  *     summary: Display Especific Band
  *     parameters:
  *       - name: id
  *         description: Band ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  */
  async show ({ params, request, response, view }) {
    return await Band.query()
                     .where('id', params.id)
                     .with('members')
                     .with('albums')
                     .with('country')
                     .with('genre')
                     .first()
  }

  /**
  * @swagger
  * /api/v1/bands/{id}/albums:
  *   get:
  *     tags:
  *       - Bands
  *     summary: Display all Albums of a Band
  *     parameters:
  *       - name: id
  *         description: Band ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  */
  async albums({ params }){
    const band = await Band.findOrFail(params.id)
    return band.albums().fetch()
  }

  /**
  * @swagger
  * /api/v1/bands/{id}:
  *   put:
  *     tags:
  *       - Bands
  *       - Auth
  *     security:
  *       - bearerAuth: []
  *     summary: Update an Especifique Band
  *     parameters:
  *       - name: id
  *         description: Band ID
  *         in: path
  *         required: true
  *         type: integer
  *       - name: band
  *         description: Band Object
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Band'
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/definitions/BandObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const band = await Band.findOrFail(params.id);
    const registerFields = Band.getRegisterFields();
    const data = request.only(registerFields);
    band.merge(data);
    await band.save();
    return band;
  }
/**
  * @swagger
  * /api/v1/bands/{id}:
  *   delete:
  *     tags:
  *       - Bands
  *     security:
  *       - bearerAuth: []
  *     summary: Exclude an Specific Band
  *     parameters:
  *       - name: id
  *         description: Band ID
  *         in: path
  *         required: true
  *         type: integer
  *       - name: band
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/definitions/BandObject'
  *       400:
  *         description: Bad Request
  */
  async destroy ({ params, request, response }) {
    const band = await Band.findOrFail(params.id);
    band.delete();
  }
}

module.exports = BandController
