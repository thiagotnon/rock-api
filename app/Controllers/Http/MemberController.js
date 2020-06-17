'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Member= use('App/Models/Member');

/**
 * Resourceful controller for interacting with members
 */
class MemberController {
/**
  * @swagger
  * /api/v1/members:
  *   get:
  *     tags:
  *       - Members
  *     summary: List All Members
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
    const query = Member.query()

    if(name) {
      query.where('name', 'like', '%'+name+'%')
    }
    return await query.paginate(page, qty)
  }
/**
  * @swagger
  * /api/v1/members:
  *   post:
  *     tags:
  *       - Members
  *     summary: Create An Member
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: member
  *         description: Member Object
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Member'
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *             $ref: '#/definitions/Member'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {
    const registerFields = Member.getRegisterFields();
    const data = request.only(registerFields);
    return await Member.create(data);
  }
/**
  * @swagger
  * /api/v1/members/{id}:
  *   get:
  *     tags:
  *       - Members
  *     summary: Display Especific Member
  *     parameters:
  *       - name: id
  *         description: Member ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  */
  async show ({ params, request, response, view }) {
    return await Member.query()
                      .where('id', params.id)
                      .with('band')
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
  const member = await Member.findOrFail(params.id)
  return member.bands().fetch();
}

/**
  * @swagger
  * /api/v1/members/{id}:
  *   put:
  *     tags:
  *       - Members
  *     summary: Update an Especifique Member
  *     parameters:
  *       - name: id
  *         description: Member ID
  *         in: path
  *         required: true
  *         type: integer
  *       - name: member
  *         description: Member Object
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Member'
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/definitions/MemberObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const member = await Member.findOrFail(params.id);
    const registerFields = Member.getRegisterFields();
    const data = request.only(registerFields);
    member.merge(data);
    await member.save();
    return member;
  }
/**
  * @swagger
  * /api/v1/members/{id}:
  *   delete:
  *     tags:
  *       - Members
  *     summary: Exclude an Specific Member
  *     parameters:
  *       - name: id
  *         description: Member ID
  *         in: path
  *         required: true
  *         type: integer
  *       - name: member
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/definitions/MemberObject'
  *       400:
  *         description: Bad Request
  */
  async destroy ({ params, request, response }) {
    const member = await Member.findOrFail(params.id);
    member.delete();
  }
}

module.exports = MemberController
