'use strict'
const User = use('App/Models/User')

class UserController {

    async store ({ request }){
      const registerFields = ['username', 'email', 'password'];
      const data = request.only(registerFields);

      return await User.create(data);
    }

    async token({ request, auth }){
      const { email, password } = request.all();
      const token = await auth.attempt(email, password);

      return token;
    }
}

module.exports = UserController
