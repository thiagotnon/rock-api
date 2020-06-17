# Rock Adonis API application

Rock API Backend with NodeJS and AdonisJS.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Create a Data Base on your SGDB. Exemple with MySQL:

```bash
CREATE SCHEMA `rockapi` DEFAULT CHARACTER SET utf8;
```

To config the project, run the following commands below: 

```bash
git clone https://github.com/thiagotnon/rock-api.git
cd rock-api
npm i
```
Copy the `.env.exemple` and rename to `.env`

### Migrations and Seeders

Run the following command to run startup migrations with seeders:

```js
adonis key:generate
adonis migration:run
adonis migration:refresh && adonis seed:sync
```

### Documentation
After to start the project, see the doccuments in: http://127.0.0.1:3333/docs
