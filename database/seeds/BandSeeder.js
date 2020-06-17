'use strict'

/*
|--------------------------------------------------------------------------
| BandSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Band = use('App/Models/Band')

class BandSeeder {
  async run () {
    await Band.createMany([
      {
        logo: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/79525522_480716025970289_6853913140283834368_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=4WRdDonRglMAX_6Vvh4&oh=5d59b84a16b936541ba0fe4709f86331&oe=5EF0A254',
        name: 'Pense',
        history: 'Pense é uma banda de Hardcore de Belo Horizonte - MG formada em 2007, com a proposta de fazer um som veloz, original e com letras que tenham alguma relevância, agregando ao seu som peso, melodia e velocidade.',
        year:2007,
        country_id:23,
      },
      {
        logo: 'https://f4.bcbits.com/img/0005108897_21.jpg',
        name: 'Display',
        history: 'A Display é considerada uma das maiores bandas de hardcore melódico do sul do país. Formada em novembro de 2003, quando o guitarrista Juliano Jover e o vocalista Tiago Garcia, conheceram o baterista Elvis Volpato (ex-Teahupoo), e o convidaram para um ensaio. Depois de alguns ajustes, o baixista Márcio Rocha (ex-Teahupoo) foi convidado a acompanhar um ensaio da banda, e no mesmo dia já foi ‘selecionado’ como novo membro da Display. Em quase cinco anos de história, a banda de Balneário Camboriú já fez mais de centenas de shows, em todo o Brasil. Entre os de maior destaque estão a abertura dos shows da banda NXZero, em Porto Belo (SC), em fevereiro de 2008, e da banda americana MXPX, um dos maiores nomes o punk rock mundial, em novembro de 2004.',
        year:2003,
        country_id:23,
      },
      {
        logo: 'https://i1.sndcdn.com/avatars-000424244034-8yblel-t200x200.jpg',
        name: 'Ponto Nulo no Céu',
        history: 'Nasce no início de 2007 a Ponto Nulo no Céu, banda Catarinense formada por Dijjy, Vinícius, Júlio e Henrique. No meio do mesmo ano a banda entra em fase de composição resultando em suas primeiras músicas chamadas \'Fim do Dia\' e \'O Sangue Que Te Cega\', gravadas e disponibilizadas de forma demo na internet. Daí pra frente o projeto se consolida de tal maneira que os membros passam a encarar a banda de forma mais séria.\\n As composições continuaram e no início de 2008 estavam prontos para começar gravar suas primeiras composições em forma de E.P. Sendo uma banda underground independente e distante dos bons centros de música alternativa, muita dificuldade foi encontrada pelo caminho, porém, movidos pela vontade de mostrar seu trabalho, estes quatro guerreiros conseguem apresentar um material de nível nacional em seu primeiro trabalho chamado de \'Ciclo Interminável\'.\\n Cercado de letras profundas que expressam sentimentos de desgosto em relação ao mundo em que vivemos, este trabalho não entrega ao ouvinte apenas os problemas de um planeta em decadência, mas busca fazer com que as pessoas arranquem as forças necessárias de si próprias para lutarem, enfrentarem os obstáculos da vida e se tornarem vencedoras de seus próprios desafios.\\n Em meados de 2009 a banda se apresenta por vários estados nacionais, em alguns festivais já consagrados no meio underground e logo depois lança a single \'Na Sombra do Ego\'. Assim, a eleita \'Melhor banda 2009\' pelo público na revista Hornsup começa 2010 com força total, na luta contínua por força e respeito ao underground e com o apoio de um novo membro na família, André Bresiani, um guitarrista talentoso que chega com muita vontade de fazer realmente a coisa acontecer.\\n A Ponto Nulo no Céu não se resume em ser uma banda, em um som e sim uma família unida por um mesmo objetivo, a mudança, pela qual não esperamos apenas sentados, esperamos fazer parte dessa mudança.',
        year:2007,
        country_id:23,
      },
      {
        logo: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/28751683_822024534665882_3804038669912768512_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=04u5nCj9fMoAX_o7aZM&oh=087693851a47238b20d3d909661e1fdd&oe=5F0C30E6',
        name: 'Charlie Brown Jr.',
        history: 'Charlie Brown Jr. foi uma banda brasileira de rock formada em Santos no ano de 1992. As canções da banda misturavam vários gêneros musicais como o rock alternativo, hardcore punk, reggae, rap, e skate punk, criando assim um estilo próprio e original. Suas letras faziam diversas críticas à sociedade, além de uma abordagem da perspectiva do universo jovem contemporâneo. Todos os membros da banda eram naturais da cidade de Santos, exceto o vocalista Chorão, que nasceu em São Paulo.\\n No dia 6 de março de 2013, Chorão, o vocalista do grupo, morreu em seu apartamento em São Paulo devido a uma overdose de cocaína e álcool. Os membros remanescentes da banda decidiram não mais usar o nome Charlie Brown Jr., assim mudando-se para A Banca, na intenção de preservar a memória de Chorão com o antigo nome e homenageá-lo. Porém o novo grupo se extinguiu já em setembro de 2013, quando na madrugada do dia 9 desse mês, após pouco mais de seis meses da morte de Chorão, o baixista-fundador do Charlie Brown Jr. e vocalista d\'A Banca, Champignon, foi encontrado morto em sua casa, em São Paulo, vitima de suicídio.\\n Em julho de 2015, um levantamento da plataforma de streaming Deezer revelou que o Charlie Brown Jr. é a segunda banda brasileira de rock mais ouvida no exterior, atrás apenas do Sepultura. Em setembro de 2015, levantamento similar da Billboard Brasil divulgou uma lista similar com 47 brasileiros e o CBJr. apareceu na 31ª posição, o quarto grupo (depois do Sepultura, Natiruts e Tribalistas).\\n Em 2019, Marcão, Heitor Gomes e André Pinguim Ruas fizeram uma turnê com convidados nos vocais.',
        year:1992,
        country_id:23,
      },
      {
        logo: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/79525522_480716025970289_6853913140283834368_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=4WRdDonRglMAX_6Vvh4&oh=5d59b84a16b936541ba0fe4709f86331&oe=5EF0A254',
        name: 'Rancore',
        history: 'O Rancore surgiu em 2001 quando Candinho (bateria) convidou Teco Martins (guitarra e vocal) e Renan (ex-baixista) para fazer um som em sua casa após a aula. A banda começou com o proposito de se divertir, mas começaram a "acreditar" na sua música e mudaram pela primeira vez a formação da banda. Na nova formação, Teco Martins assumiria apenas os vocais e Candinho passou para a guitarra. Completaram a banda: Edu (guitarra), Renan (baixo) e Grillo (bateria). O primeiro trabalho da banda foi uma demo chamada "Galo Insano", que foi gravada de forma caseira. A formação que gravou o EP contava com: Teco Martins (Vocal e Baixo), Candinho Uba (guitarra), Edu (Guitarra) e Grillo (bateria). Como Teco não era baixista, e Renan havia saído da banda, quem assumiu o baixo da bando foi Conrado Grandino (atualmente no NX Zero, e na época chamado de TxGx (uma abreviatura para Touro Grandino). Antes de gravar o primeiro álbum oficial da banda, Yoga, Stress e Cafeína, mais dois integrantes deixaram a banda: Grillo (bateria) e Edu (guitarra). Nos seus lugares entraram, respectivamente, Alê Iafelice e Marcelo Cabelera.\\n O Albúm então foi lançado em 2006, com músicas como "Cicatrizes", "MEI", "Yoga, Stress e Cafeína" e outros O disco tinha uma temática mais adolescente e melancólica. Antes do segundo álbum, mais uma perda, TxGx (baixo), também deixa a banda. Em seu lugar entra André Mineli (Alemão). Liberta, foi lançado em 2008, o disco alcançou um sucesso absurdo para uma banda independente, dessa vez uma temática voltada a causas sociais, politicas e ecológicas, e foi o disco que "deu forma a banda". Com dois discos lançados de forma independente na bagagem e mais duas mudanças na formação, a banda assinou em 2010 com a Deckdisc, dando início aos ensaios para a criação daquele que acabaria por ser o seu terceiro álbum, "Seiva". A formação da banda que gravou o "Seiva" inclui Alê Iafelice (bateria), Candinho Uba (guitarra), Caggegi (baixo), Gustavo Teixeira (guitarra) e Teco Martins (vocal). "Seiva" foi masterizado para CD e vinil no estúdio Bernie Grundman Mastering, em Los Angeles, cujo dono, Bernie Grundman, é um dos três maiores masterizadores dos Estados Unidos. Rodrigo Lima, vocalista do Dead Fish, faz participação especial na canção "Seleção Natural". O álbum tem gerado ótima repercussão e fez aumentar o número de fãs da banda. O Rancore lançou um videoclipe para o primeiro single do álbum, "Jeito Livre". A banda fez uma participação junto com o NX Zero e One Night Only no VMB 2011. Em 29 de maio de 2011 a banda se apresentou no Sampa Music Festival, sendo uma das três principais atrações do festival, ao lado das populares bandas Fresno e Gloria. Outro feito da banda, foi conseguir emplacar o single "Mãe" do álbum "Seiva" na Trilha sonora da série Malhação.\\n Em abril de 2014, com a ida de Candinho para outro país, a banda anunciou hiato por tempo indeterminado e uma turnê de despedida.\\n Em 2017, a banda se reuniu para uma turnê especial de 17 shows pelo Brasil entre os meses de janeiro e fevereiro.',
        year:2001,
        country_id:23,
      },
      {
        logo: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/47693585_605620536566358_5643071596508741632_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=R0_UW2RRuYQAX8a9GNN&oh=8aa01af2eb5d93e2bae6e07779a47985&oe=5F0C0A7E',
        name: 'Raimundos',
        history: 'Raimundos é uma banda de rock brasileira formada em Brasília em 1987. O nome é derivado de uma de suas maiores influências, a banda Ramones. Com 8 discos autorais, 30 anos de estrada e mais de 5 milhões de cópias vendidas, os Raimundos estão marcados na história como uma das principais bandas de rock no Brasil.',
        year:1987,
        country_id:23,
      },
      {
        logo: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/64978372_498616847557269_4677810454448308224_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=hAKlzd4vkwkAX_RbYT5&oh=22a64b15680c9bf3a56b84f841065339&oe=5F0BC641',
        name: 'Fresno',
        history: 'Fresno é uma banda de rock surgida em Porto Alegre no ano de 1999. A banda tem em sua formação inicial Leandro Pereira como vocalista, que saiu do projeto e deu lugar ao cearense Lucas Silveira em 2001, (vocal e guitarra), pelo também gaúcho Gustavo Mantovani (guitarra) e pelos pernambucanos Mário Camelo (teclado) e Thiago Guerra (bateria). Atualmente, os integrantes da banda estão radicados em São Paulo. Em 2006, para substituir o baixista, Rodrigo Tavares foi convidado a entrar na banda. Em 2008, o baterista Rodrigo Ruschel, também conhecido como "Bell", substituiu Cuper. Em 2012, o tecladista Mario Camelo, que está com a banda desde 2010 foi efetivado na Fresno. A banda foi um quinteto por pouco tempo, pois dias depois o baixista Rodrigo Tavares saiu para dar total atenção a seu projeto solo, Esteban. A banda optou por não substituir o antigo baixista. Em agosto de 2013, a banda anunciou a troca do baterista Bell Ruschel por Thiago Guerra.\\n As composições da banda tratam basicamente de desilusões amorosas e sentimentos em sua fase inicial, tendo com o álbum Redenção algumas músicas voltadas para o pop. A partir de 2010, a banda começou uma nova fase. Com o lançamento do álbum Revanche e posteriormente o EP Cemitério das Boas Intenções a banda começa a ter gêneros como o hard rock e rock industrial como principais influências. Ocorre também as mudanças nos temas de suas músicas, falando mais sobre superações, realizações e assuntos sociais ao todo.',
        year:1999,
        country_id:23,
      },
      {
        logo: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/88276750_136397251029948_3392742199237017600_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=HuJeLps8DqEAX8zlTLA&oh=49253db97446c7c9b4fbc773fe84714f&oe=5F0E04E8',
        name: 'CPM 22',
        history: 'CPM 22 é uma banda brasileira de hardcore formada em 1995 na cidade de Barueri, São Paulo. Os membros, Badauí (vocal), Japinha (bateria), Luciano (guitarra) e Phil (guitarra) já abriram shows de bandas internacionais como Lagwagon, No Fun at All, Down by Law e System of a Down (Rock in Rio 6, onde comemoravam 20 anos da banda). Foi uma das poucas bandas brasileiras de hardcore a ganhar um disco de ouro e fazer sucesso no mainstream, e com isso, abriu as portas para uma nova geração de bandas brasileiras de rock. Em 2008 ganharam um Grammy Latino de melhor álbum de rock brasileiro.',
        year:1995,
        country_id:23,
      },
      {
        logo: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/32148225_1815954041783725_8119629780392869888_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=i89jfbA1BysAX9LqFPx&oh=66088f1d75e7ebb7d7d2b0e229429bf2&oe=5F0C9FA3',
        name: 'Angra',
        history: 'Angra é uma banda brasileira de power metal, formada na cidade de São Paulo em 1991, pelo vocalista, tecladista e multi-instrumentista Andre Matos e os guitarristas Rafael Bittencourt e André Linhares, após se conhecerem na Faculdade Santa Marcelina, onde cursavam composição e regência. Andre Matos havia feito parte do Viper (entre 1985 e 1990) e Rafael Bittencourt fazia parte da banda Spitfire. Após a formação inicial da banda, entraram os músicos Luis Mariutti (baixo) e Marco Antunes (bateria), e André Linhares cedeu lugar a André Hernandes, e posteriormente a Kiko Loureiro. Apenas os guitarristas Rafael Bittencourt e Kiko Loureiro foram os únicos integrantes a tocarem em todos os álbuns da banda. O Angra já vendeu aproximadamente mais de 5 milhões de cópias pelo mundo.',
        year:1995,
        country_id:23,
      },
      {
        logo: 'https://instagram.fbsb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/26151763_1041709939300248_5672060504042897408_n.jpg?_nc_ht=instagram.fbsb4-1.fna.fbcdn.net&_nc_ohc=D77neyoCCH0AX9xLXcc&oh=4fd9c0c4c54c3946fb3931914d3a8e39&oe=5F0B2F1A',
        name: 'Hateen',
        history: 'Hateen é uma banda brasileira de hardcore melódico fundada na Zona Leste de São Paulo em 1994 por Rodrigo Koala, Japinha e Cesinha Santisteban.\\n O Hateen tem sete álbuns gravados ao todo, os quatro primeiros com todas as músicas em inglês. A partir do quinto álbum, Procedimentos de Emergência, lançado em 2006, passaram a incluir no repertório músicas em português, influenciados pelo sucesso das composições feitas pelo vocalista Rodrigo Koala para a banda CPM 22.',
        year:1994,
        country_id:23,
      }

    ])

  }
}

module.exports = BandSeeder
