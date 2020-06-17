'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Album = use('App/Models/Album');


/**
 * Resourceful controller for interacting with albums
 */
class AlbumController {
 /**
  * @swagger
  * /api/v1/albums:
  *   get:
  *     tags:
  *       - Albums
  *     summary: List All Albums
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
    const query = Album.query()

    if(name) {
      query.where('name', 'like', '%'+name+'%')
    }
    return await query.paginate(page, qty)
  }

   /**
  * @swagger
  * /api/v1/albums:
  *   post:
  *     tags:
  *       - Albums
  *     summary: Create An Album
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: album
  *         description: Album Object
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Album'
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *             $ref: '#/definitions/Album'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {
    const registerFields = Album.getRegisterFields();
    const data = request.only(registerFields);
    return await Album.create(data);
  }

/**
  * @swagger
  * /api/v1/albums/{id}:
  *   get:
  *     tags:
  *       - Albums
  *     summary: Display Especific Album
  *     parameters:
  *       - name: id
  *         description: Album ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  */
  async show ({ params, request, response, view }) {
    return await Album.query()
                      .where('id', params.id)
                      .with('tracks')
                      .first()


  }

/**
  * @swagger
  * /api/v1/albums/{id}/bands:
  *   get:
  *     tags:
  *       - Albums
  *     summary: Display Especific Band Album
  *     parameters:
  *       - name: id
  *         description: Album ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  */
  async bands ({ params }) {
    const album = await Album.findOrFail(params.id)
    return album.bands().fetch();
  }
/**
  * @swagger
  * /api/v1/albums/{id}/bands:
  *   get:
  *     tags:
  *       - Albums
  *     summary: Display Especific Album Tracks
  *     parameters:
  *       - name: id
  *         description: Album ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  */
  async tracks ({ params }) {
    const album = await Album.findOrFail(params.id)
    return album.tracks().fetch();
  }

/**
  * @swagger
  * /api/v1/albums/{id}:
  *   put:
  *     tags:
  *       - Albums
  *     summary: Update an Especifique Album
  *     parameters:
  *       - name: id
  *         description: Album ID
  *         in: path
  *         required: true
  *         type: integer
  *       - name: album
  *         description: Album Object
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Album'
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/definitions/AlbumObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const album = await Album.findOrFail(params.id);
    const registerFields = Album.getRegisterFields();
    const data = request.only(registerFields);
    album.merge(data);
    await album.save();
    return album;
  }

/**
  * @swagger
  * /api/v1/albums/{id}:
  *   delete:
  *     tags:
  *       - Albums
  *     summary: Exclude an Specific Album
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
    const album = await Album.findOrFail(params.id);
    album.delete();
  }
}

module.exports = AlbumController
