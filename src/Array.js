const faker = require('faker');

faker.locale = 'pt_BR';

const clients = [];

for (let index = 0; index <= 1000; index++) {
  const name = faker.name.findName();
  const birthday = faker.date.past(100, 2019);
  const lastpurchase = faker.date.between('1919-01-01', '2019-01-01');
  const countpurchase = faker.random.number(20);


  let client = {
    name,
    birthday,
    lastpurchase,
    countpurchase
  };

  clients.push(client);
}

/**
 * 1. Desenvolva, utilizando filter , uma função que, dado um caractere de entrada, retorne todos os registros de clientes cujo o nome inicia com o caractere.
 */

//const filtered = (letter) => clients.filter((el => el.name.charAt(0) === letter));
//console.log(filtered("M"));

/**
 * 2. Retorne o array de clientes
 */

//console.log(clients);

/**
 * 3. Desenvolva uma função que, dado o caractere de entrada, retorna apenas um número com o total de registros encontrados.
 */

//const filtered = (letter) => clients.map((el => el.name.split(" ")[0])).filter(el => el.includes(letter)).length;
//console.log(filtered("M"));

/**
 * 4. Desenvolva uma função que retorne apenas os nomes dos clientes.
 */

//const names = clients.map(el => el.name);
//console.log(names);

/**
 * 5. Desenvolva uma função que retorne apenas o primeiro nome dos clientes.
 */

//const filtered = clients.map((el => el.name.split(" ")[0]))
//console.log(filtered);

/**
 * 6. Desenvolva uma função que retorne apenas o primeiro nome dos clientes cujo os nomes começam com o caractere de entrada da função.
 */

//const filtered = (letter) => clients.map((el => el.name.split(" ")[0])).filter(el => el.includes(letter));
//console.log(filtered("M"));

/**
 * 7. Desenvolva uma função que retorne todos os usuários que são maiores de idade.
 */

//const filtered = clients.filter(el => el.birthday >= 1919);
//console.log(filtered);

/**
 * 8.Desenvolva uma função que, dado um nome de entrada, retorna se o nome está contido na lista.
 */
 
//const names = (name) => clients.some(el => el.name === name);
//console.log(names("Washington Silva"));

/**
 * 9. Implemente uma função que retorna o total de vendas realizadas somando as compras de todos os clientes.
 */

//const add = clients.map(el => el.countpurchase > 0).reduce((sum, buy) => sum + buy, 0);
//console.log(add);

/**
 * 10. Implemente uma função que retorne os dados dos clientes que não compram há mais de 1 ano.
 */
 
//const notBuy = clients.filter(el => el.lastpurchase < 2019);
//console.log(notBuy)

/**
 * 11.Implemente uma função que retorne os dados dos clientes que já realizaram mais de 15 compras.
 */
 
//const moreShopps = clients.filter(el => el.countpurchase > 15)
//console.log(moreShopps);