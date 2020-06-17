'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Country = use('App/Models/Country');


/**
 * Resourceful controller for interacting with countries
 */
class CountryController {
/**
  * @swagger
  * /api/v1/countries:
  *   get:
  *     tags:
  *       - Countries
  *     summary: List All Countries
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
    const { page, qty, name } = request.all()
    const query = Country.query()

    if(name) {
      query.where('name', 'like', '%'+name+'%')
    }
    return await query.paginate(page, qty)
  }

   /**
  * @swagger
 * /api/v1/countries:
  *   post:
  *     tags:
  *       - Countries
  *     summary: Create a Country
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: country
  *         description: Country Object
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Country'
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *             $ref: '#/definitions/Country'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {
    const registerFields = Country.getRegisterFields();
    const data = request.only(registerFields);
    return await Country.create(data);
  }

  /**
  * @swagger
  * /api/v1/countries/{id}:
  *   get:
  *     tags:
  *       - Countries
  *     summary: Display Especific Country
  *     parameters:
  *       - name: id
  *         description: Country ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  */
  async show ({ params, request, response, view }) {
    return await Country.findOrFail(params.id);
  }

/**
  * @swagger
  * /api/v1/countries/{id}/bands:
  *   get:
  *     tags:
  *       - Countries
  *     summary: Display Bands of Specific Country
  *     parameters:
  *       - name: id
  *         description: Country ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  */
 async bands ({ params }) {
  const country = await Country.findOrFail(params.id)
  return country.bands().fetch();
}
/**
  * @swagger
  * /api/v1/countries/{id}:
  *   put:
  *     tags:
  *       - Countries
  *     summary: Update an Especifique Country
  *     parameters:
  *       - name: id
  *         description: Album ID
  *         in: path
  *         required: true
  *         type: integer
  *       - name: country
  *         description: Country Object
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Country'
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/definitions/CountryObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const country = await Country.findOrFail(params.id);
    const registerFields = Country.getRegisterFields();
    const data = request.only(registerFields);
    country.merge(data);
    await country.save();
    return country;
  }
/**
  * @swagger
  * /api/v1/countries/{id}:
  *   delete:
  *     tags:
  *       - Countries
  *     summary: Exclude an Specific Country
  *     parameters:
  *       - name: id
  *         description: Album ID
  *         in: path
  *         required: true
  *         type: integer
  *       - name: album
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/definitions/AlbumObject'
  *       400:
  *         description: Bad Request
  */
  async destroy ({ params, request, response }) {
    const country = await Country.findOrFail(params.id);
    country.delete();
  }
}

module.exports = CountryController
