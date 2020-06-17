'use strict'

/*
|--------------------------------------------------------------------------
| MemberSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Member = use('App/Models/Member')

class MemberSeeder {
  async run () {
    await Member.createMany([


      {
        name: 'Lucas Guerra',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73307917_2458582954356722_2915492004605460480_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=nZm43NxXitUAX_MPash&oh=c7b400c5fe6357bb1f52ed785b4ba1f6&oe=5EF1F7CD',
        position: 'Vocal',
        started:2007,
        exit: 'currently',
      },
      {
        name: 'Ítalo Nonato',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/56645143_308619853163899_3006941410344566784_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=6Ve8pw7UiFkAX_JR8Jn&oh=fa20281c857850c9a890997a8ee9948d&oe=5EF22018',
        position: 'Guitarra, vocal de apoio',
        started:2012,
        exit: 'currently',
      },
      {
        name: 'Cristiano Souza',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/40394667_685714561792860_6329794411387420672_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=U3OrcpP-Ld4AX-oPBC9&oh=7a07951f1da394a147e66ec8f8977460&oe=5EF0DC01',
        position: 'Guitarra',
        started:2012,
        exit: 'currently',
      },
      {
        name: 'Judá Ramos',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/97245588_660992861128718_3579055380866531328_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=f88OtraLucoAX-ZP04n&oh=6c24f22921a9a008df7cb6780ab2d684&oe=5EEFACCF',
        position: 'Baixo',
        started:2007,
        exit: 'currently',
      },
      {
        name: 'Charles Taylo',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/75408744_540286670081862_5254462367156142080_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=gHAOqSTih38AX9827U1&oh=74e6c2dc8dea1f29c496234af3eee6a7&oe=5EF1CA47',
        position: 'Bateria',
        started:2017,
        exit: 'currently',
      },
      {
        name: 'Pedro Heringuer',
        image: '',
        position: 'Guitarra',
        started:2007,
        exit: '2012',
      },
      {
        name: 'Pedro Lucas "Pedrinho"',
        image: '',
        position: 'Guitarra',
        started:2008,
        exit: '2012',
      },
      {
        name: 'Marcius Guerra ',
        image: '',
        position: 'Bateria',
        started:2007,
        exit: '2013',
      },
      {
        name: 'Danilo Vilarino',
        image: '',
        position: 'Bateria',
        started:2013,
        exit: '2016',
      },
      {
        name: 'Tiago Garcia (Gotia)',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/101496938_189005765637848_5794717034780557312_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=MI0_MD5F8z4AX_gu-k1&oh=416374a1de27ede33385ecf290cbc999&oe=5F0E9EAA',
        position: 'Vocal',
        started:2003,
        exit: 'currently',
      },
      {
        name: 'Juliano Jover',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83895617_178083960072301_8919036250602602496_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=gFLy0LRomBQAX99Ltsb&oh=8e57e29a189c7b5b75dd1e7b43d22bb2&oe=5F0F9740',
        position: 'Guitarra',
        started:2003,
        exit: 'currently',
      },
      {
        name: 'Gustavo Marquardt',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83865395_640480906766511_2871042271367659520_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=Dpt-8_UQ4aQAX-Ize37&oh=238183e39ae3e6b1329bd3a4e3d2165d&oe=5F110A40',
        position: 'Bateria',
        started:2003,
        exit: 'currently',
      },
      {
        name: 'Gui Ouriques',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66137903_870694529980990_7802964495948578816_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=ZpHdRBC8B84AX_rvx36&oh=4f129d93d7317c710818eee1e93000ad&oe=5F1119AC',
        position: 'Baixo',
        started:2003,
        exit: 'currently',
      },
      {
        name: 'Chorão',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Chor%C3%A3o_em_algum_show_2008.jpg/250px-Chor%C3%A3o_em_algum_show_2008.jpg',
        position: 'Vocal',
        started:1992,
        exit: '2013',
      },
      {
        name: 'Champignon',
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/aa/Champignon_%28m%C3%BAsico%29.jpg/250px-Champignon_%28m%C3%BAsico%29.jpg',
        position: 'Baixo',
        started:1992,
        exit: '2013',
      },
      {
        name: 'Thiago Castanho',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Charlie_Brown_Jr._ao_vivo_em_Guarulhos%2C_SP_%2819_Julho_2008%29_-_04.jpg/200px-Charlie_Brown_Jr._ao_vivo_em_Guarulhos%2C_SP_%2819_Julho_2008%29_-_04.jpg',
        position: 'Guitarra',
        started:1993,
        exit: '2013',
      },
      {
        name: 'Marcão',
        image: 'https://imagens1.ne10.uol.com.br/blogsne10/social1/uploads/2016/01/Marcão_Britto-Divulgação-4-1.jpg',
        position: 'Guitarra',
        started:1992,
        exit: '2013',
      },
      {
        name: 'Bruno Graveto',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/85164152_2977161725681700_7337126819696476160_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=8VzAKtSmddsAX8VCWgI&oh=a0e8d2ba667fabb7cb35d2c6dcee666a&oe=5F0EDE1D',
        position: 'Bateria',
        started:2008,
        exit: '2013',
      },
      {
        name: 'Heitor Gomes',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Charlie_Brown_Jr._ao_vivo_em_Guarulhos%2C_SP_%2819_Julho_2008%29_-_03.jpg/200px-Charlie_Brown_Jr._ao_vivo_em_Guarulhos%2C_SP_%2819_Julho_2008%29_-_03.jpg',
        position: 'Baixo',
        started:2005,
        exit: '2011',
      },
      {
        name: 'Renato Pelado',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/11265079_1606577232928371_1955333560_a.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=I1zrG7YPaZMAX90rvKZ&oh=829db207d466010e4175acf06a1df458&oe=5F11399F',
        position: 'Bateria',
        started:1992,
        exit: '2005',
      },
      {
        name: 'André Pinguim Ruas',
        image: 'https://pbs.twimg.com/profile_images/589289683521253377/VI0Ka1h-_400x400.jpg',
        position: 'Bateria',
        started:2005,
        exit: '2008',
      },
      {
        name: 'Teco Martins',
        image: '',
        position: 'Vocal',
        started:'No Info',
        exit: 'No Info',
      },
      {
        name: 'Candinho Uba',
        image: '',
        position: 'Guitarra',
        started:'No Info',
        exit: 'No Info',
      },
      {
        name: 'Rodrigo Caggegi',
        image: '',
        position: 'Baixo e Vocal',
        started:'No Info',
        exit: 'No Info',
      },
      {
        name: 'Ale Iafelice',
        image: '',
        position: 'Bateria e Vocal',
        started:'No Info',
        exit: 'No Info',
      },
      {
        name: 'Renan',
        image: '',
        position: 'Baixo',
        started:'No Info',
        exit: 'No Info',
      },
      {
        name: 'Edu Viana',
        image: '',
        position: 'Guitarra',
        started:'No Info',
        exit: 'No Info',
      },
      {
        name: 'Thito Duarte',
        image: '',
        position: 'Bateria',
        started:'No Info',
        exit: 'No Info',
      },
      {
        name: 'Conrado Grandino',
        image: '',
        position: 'Baixo',
        started:'No Info',
        exit: 'No Info',
      },
      {
        name: 'Marcelo Cabelera',
        image: '',
        position: 'Guitarra',
        started:'No Info',
        exit: 'No Info',
      },
      {
        name: 'Alemão ',
        image: '',
        position: 'Baixo',
        started:'No Info',
        exit: 'No Info',
      },
      {
        name: 'Gustavo Teixeira',
        image: '',
        position: 'Guitarra',
        started:'No Info',
        exit: 'No Info',
      },
      {
        name: 'Digão',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/77131633_603745233707788_4432081811937427456_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=s-ArjvguDx8AX-EE_bt&oh=06613d2b7dd62b5f29a9735d457dfd37&oe=5F12695F',
        position: 'Guitarra',
        started:1992,
        exit: 'currently',
      },
      {
        name: 'Canisso',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/34561534_442149262913000_1260515731066322944_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=JR1SiY4JjLYAX_BcyHe&oh=a993b8b2d274b3ef7bb388c233ce4084&oe=5F1209D1',
        position: 'Baixo e Vocal de Apoio',
        started:1987,
        exit: 'currently',
      },
      {
        name: 'Marquim',
        image: 'https://scontent.fbsb4-1.fna.fbcdn.net/v/t1.0-9/68960477_2395211160534012_1012702985739829248_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_eui2=AeEq1xSKUyk161YJrTlZNJKfuiRPEfBIKMW6JE8R8EgoxV4z5CR628Sdfr2SNT_8nVI97wzepTKh2Bme8zOIKyJS&_nc_ohc=2W8jVVg9fLsAX9-q1-W&_n',
        position: 'Guitarra e Vocal de Apoio',
        started:2002,
        exit: 'currently',
      },
      {
        name: 'Caio',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/31128585_342790909576438_5836807108690968576_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=eE_0jCnE8A4AX_HfYt5&oh=d0c65541691052fa172fc36510fa1e64&oe=5F0FC551',
        position: 'Bateria e Vocal de Apoio',
        started:2007,
        exit: 'currently',
      },
      {
        name: 'Rodolfo Abrantes',
        image: 'https://discobrindo.com.br/wp-content/uploads/2019/07/rodolfo-abrantes-divulgacao-768x419.jpg',
        position: 'Vocal e Guitarra',
        started:1987,
        exit: '2001',
      },
      {
        name: 'Alf',
        image: 'https://statig4.akamaized.net/bancodeimagens/5u/x3/mz/5ux3mz2muaajcckmlcdzvjks7.jpg',
        position: 'Baixo',
        started:2003,
        exit: '2006',
      },
      {
        name: 'Tico Santa Cruz',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/69678820_303346390529635_5056562579237765120_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=6P4OR2am0toAX-FDopC&oh=171b6f1a774ba014fe6c6c735097646e&oe=5F1020F4',
        position: 'Vocal',
        started:2009,
        exit: '2010',
      },
      {
        name: 'Lucas Taboada',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73420428_391587515062373_1056704887032643584_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=AaDvdfHvdmwAX_Z9aA0&oh=0f221ace1f53dd39f4083b051e089236&oe=5F10B89A',
        position: 'Bateria',
        started:2017,
        exit: 'currently',
      },
      {
        name: 'Fau',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/68895411_533817670703675_5835194825212690432_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=G4wma7GletAAX_OpjRv&oh=5e48390013da946a91892bb4a8de6b9e&oe=5F114F0D',
        position: 'Baixo',
        started:2017,
        exit: 'currently',
      },
      {
        name: 'Felipe Taboada',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/25014088_286683448520944_3416499106460205056_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=TlqLC7ssGZ8AX-F2kBZ&oh=ada1d82f21891ca0e37cdda45bdbb034&oe=5F0F66F8',
        position: 'Guitarra',
        started:2017,
        exit: 'currently',
      },
      {
        name: 'Dijjy',
        image: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83714458_182188493020368_8220161444235182080_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=UI_xAgfUvTsAX8DBQu7&oh=e6977aaf3ff908f29d9555914c45b9e2&oe=5F123BF2',
        position: 'Vocal',
        started:2017,
        exit: 'currently',
      }

    ])
  }
}

module.exports = MemberSeeder
