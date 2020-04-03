import axios from 'axios';

class Api {

  static async getAddress(cep) {
    const response = new Address((await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data);
    return response
  }

}

class Address{
  constructor ({logradouro, bairro, localidade, uf}){
    this.logradouro = logradouro,
    this.bairro = bairro,
    this.localidade = localidade,
    this.uf = uf
  }
}

Api.getAddress('96025010').then(v => {console.log(v)});
