const valores = [4,1,2,3,4,5]
const valores2 = [8,7,9,12]

const cliente = {
  nome: 'Matheus kroning',
  cpf: '123.123.123.11',
  nascimento: '05/08/1994',
  telefone: '991203941',
  endereco: {
    rua: 'Afonso Arinos',
    cidade: 'Pelotas',
    estado: 'RS',
    pais:'Brasil',
  },
}

//Rest e Spread

/**
 * Pegar nome do cliente mas não descartar o rest
 */
const {nome, ...rest} = cliente;
console.log('nome: ', nome);
console.log('resto: ', rest);

/**
 * função que soma N valores
 */
function sum (...valores){
  return valores.reduce((acc, next)=> acc + next);
}

console.log('soma(3,4): ', sum(3,4,4,5));

/**
 * Concatenando arrays
 */
const arr = [...valores, ...valores2];
console.log('arr: ', arr);

/**
 * Adiciona elemente no início de array
 */

 const arr2 = [99, ...valores, 88];
console.log('arr2: ', arr2);

/**
 * função que recebe um array de valores, 
 * multiplica o primeiro por todos os outrso
 */
function x ([primeiro,...resto]){
  return resto.map( v => v * primeiro)
}
console.log('x(valores): ', x(valores));

/**
 * Adiciona novo atributo no objeto cliente: updated
 */
const cli = {... cliente, updatedAt: new Date()}
console.log('cli: ', cli);

/**
 * Altera o telefone do cliente para '1111111111'
 */

 const cli2 = { ...cliente, telefone: '111111111'}
 console.log('cli2: ', cli2);