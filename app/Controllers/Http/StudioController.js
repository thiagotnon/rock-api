'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Studio= use('App/Models/Studio');

/**
 * Resourceful controller for interacting with studios
 */
class StudioController {
/**
  * @swagger
  * /api/v1/studios:
  *   get:
  *     tags:
  *       - Studios
  *     summary: List All Studios
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
  const query = Studio.query()

  if(name) {
    query.where('name', 'like', '%'+name+'%')
  }
  return await query.paginate(page, qty)
}
/**
  * @swagger
  * /api/v1/studios:
  *   post:
  *     tags:
  *       - Studios
  *     summary: Create An Studio
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: studio
  *         description: Studio Object
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Studio'
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *             $ref: '#/definitions/Studio'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {
    const registerFields = Studio.getRegisterFields();
    const data = request.only(registerFields);
    return await Studio.create(data);
  }

/**
  * @swagger
  * /api/v1/studios/{id}:
  *   get:
  *     tags:
  *       - Studios
  *     summary: Display Especific Studio
  *     parameters:
  *       - name: id
  *         description: Studio ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  */
  async show ({ params, request, response, view }) {
    return await Studio.findOrFail(params.id);
  }
/**
  * @swagger
  * /api/v1/studios/{id}:
  *   put:
  *     tags:
  *       - Studios
  *     summary: Update an Especifique Studio
  *     parameters:
  *       - name: id
  *         description: Studio ID
  *         in: path
  *         required: true
  *         type: integer
  *       - name: studio
  *         description: Studio Object
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Studio'
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/definitions/StudioObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const studio = await Studio.findOrFail(params.id);
    const registerFields = Studio.getRegisterFields();
    const data = request.only(registerFields);
    studio.merge(data);
    await studio.save();
    return studio;
  }
/**
  *  @swagger
  * /api/v1/studios/{id}:
  *   delete:
  *     tags:
  *       - Studios
  *     summary: Exclude an Specific Studio
  *     parameters:
  *       - name: id
  *         description: Studio ID
  *         in: path
  *         required: true
  *         type: integer
  *       - name: studio
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/definitions/StudioObject'
  *       400:
  *         description: Bad Request
  */
  async destroy ({ params, request, response }) {
    const studio = await Studio.findOrFail(params.id);
    studio.delete();
  }
}

module.exports = StudioController
