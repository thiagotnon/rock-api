'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Genre = use('App/Models/Genre');


/**
 * Resourceful controller for interacting with genres
 */
class GenreController {

  /**
  * @swagger
  * /api/v1/genres:
  *   get:
  *     tags:
  *       - Genres
  *     summary: List All Genres
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
  const query = Genre.query()

  if(name) {
    query.where('name', 'like', '%'+name+'%')
  }
  return await query.paginate(page, qty)
}

 /**
  * @swagger
  * /api/v1/genres:
  *   post:
  *     tags:
  *       - Genres
  *     summary: Create An Genre
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: genre
  *         description: Genre Object
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Genre'
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *             $ref: '#/definitions/Genre'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {
    const registerFields = Genre.getRegisterFields();
    const data = request.only(registerFields);
    return await Genre.create(data);
  }
/**
  * @swagger
  * /api/v1/genres/{id}:
  *   get:
  *     tags:
  *       - Genres
  *     summary: Display Especific Genre
  *     parameters:
  *       - name: id
  *         description: Genre ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  */
  async show ({ params, request, response, view }) {
    return await Genre.findOrFail(params.id);
  }

/**
  * @swagger
  * /api/v1/genres/{id}/bands:
  *   get:
  *     tags:
  *       - Genres
  *     summary: Display Especific Band Genre
  *     parameters:
  *       - name: id
  *         description: Genre ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  */
 async bands ({ params }) {
  const genre = await Genre.findOrFail(params.id)
  return genre.bands().fetch();
}

/**
  * @swagger
  * /api/v1/genres/{id}:
  *   put:
  *     tags:
  *       - Genres
  *     summary: Update an Especifique Genre
  *     parameters:
  *       - name: id
  *         description: Genre ID
  *         in: path
  *         required: true
  *         type: integer
  *       - name: genre
  *         description: Genre Object
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Genre'
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/definitions/GenreObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const genre = await Genre.findOrFail(params.id);
    const registerFields = Genre.getRegisterFields();
    const data = request.only(registerFields);
    genre.merge(data);
    await genre.save();
    return genre;
  }
/**
  * @swagger
  * /api/v1/genres/{id}:
  *   delete:
  *     tags:
  *       - Genres
  *     summary: Exclude an Specific Genre
  *     parameters:
  *       - name: id
  *         description: Genre ID
  *         in: path
  *         required: true
  *         type: integer
  *       - name: genre
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/definitions/GenreObject'
  *       400:
  *         description: Bad Request
  */
  async destroy ({ params, request, response }) {
    const genre = await Genre.findOrFail(params.id);
    genre.delete();
  }
}

module.exports = GenreController
