'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Track = use('App/Models/Track');

/**
 * Resourceful controller for interacting with tracks
 */
class TrackController {
/**
  * @swagger
  * /api/v1/tracks:
  *   get:
  *     tags:
  *       - Tracks
  *     summary: List All Tracks
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
  const { page, qty, title } = request.all()
  const query = Track.query()

  if(title) {
    query.where('title', 'like', '%'+title+'%')
  }
  return await query.paginate(page, qty)
}
/**
  * @swagger
  * /api/v1/tracks:
  *   post:
  *     tags:
  *       - Tracks
  *     summary: Create An Track
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: track
  *         description: Track Object
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Track'
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *             $ref: '#/definitions/Track'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {
    const registerFields = Track.getRegisterFields();
    const data = request.only(registerFields);
    return await Track.create(data);
  }
/**
  * @swagger
  * /api/v1/tracks/{id}:
  *   get:
  *     tags:
  *       - Tracks
  *     summary: Display Especific Track
  *     parameters:
  *       - name: id
  *         description: Track ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  */
  async show ({ params, request, response, view }) {
    return await Track.findOrFail(params.id);
  }

/**
  * @swagger
  * /api/v1/tracks/{id}/albums:
  *   get:
  *     tags:
  *       - Tracks
  *     summary: Display Especific Album Track
  *     parameters:
  *       - name: id
  *         description: Track ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  */
 async albums ({ params }) {
  const track = await Track.findOrFail(params.id)
  return track.albums().fetch();
}

/**
  * @swagger
  * /api/v1/tracks/{id}:
  *   put:
  *     tags:
  *       - Tracks
  *     summary: Update an Especifique Track
  *     parameters:
  *       - name: id
  *         description: Track ID
  *         in: path
  *         required: true
  *         type: integer
  *       - name: track
  *         description: Track Object
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Track'
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/definitions/TrackObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const track = await Track.findOrFail(params.id);
    const registerFields = Track.getRegisterFields();
    const data = request.only(registerFields);
    track.merge(data);
    await track.save();
    return track;
  }
/**
  * @swagger
  * /api/v1/tracks/{id}:
  *   delete:
  *     tags:
  *       - Tracks
  *     summary: Exclude an Specific Track
  *     parameters:
  *       - name: id
  *         description: Track ID
  *         in: path
  *         required: true
  *         type: integer
  *       - name: track
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/definitions/TrackObject'
  *       400:
  *         description: Bad Request
  */
  async destroy ({ params, request, response }) {
    const track = await Track.findOrFail(params.id);
    track.delete();
  }
}

module.exports = TrackController
