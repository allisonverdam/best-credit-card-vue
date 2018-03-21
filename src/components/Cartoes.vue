<template>
<div class='container'>
  <h1 class='text-center'>Cartões</h1>
  <button class="btn btn-primary" v-on:click='deslogar'>Deslogar</button>

      <table class='table is-bordered' v-if='cartoes.length'>
        <thead>
          <tr>
            <th class='center-align bordas-titulo'>Numero</th>
            <th class='center-align bordas-titulo'>Data Vencimento</th>
            <th class='center-align bordas-titulo'>CVV</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='cartao of cartoes' v-bind:key='cartao.id'>
            <td class='center-align'>
              {{cartao.number}}
            </td>
            <td class='center-align'>
              {{cartao.expiration_month}}/{{cartao.expiration_year}}
            </td>
            <td class='center-align'>
             {{cartao.cvv}}
            </td>
          </tr>
        </tbody>
      </table>
</div>
</template>

<script>
import axios from 'axios';
const url = process.env.URL;
export default {
  name: 'Cartoes',
  beforeMount() {
    this.obterToken();
  },
  data() {
    return {
      token: '',
      cartoes: []
    };
  },
  methods: {
    obterToken() {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Você precisa estar autenticado.')
        this.$router.push('/login');
        return;
      }
      this.token = token;
      this.obterCartoes();
    },
    obterCartoes() {
      axios
        .get(`${url}/v1/cards`, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        .then(res => (this.cartoes = res.data))
        .catch(e => alert(e));
    },
    deslogar(){
      localStorage.clear();
      this.$router.push('/login');
    }
  }
};
</script>

<style lang='scss'>
h1 {
  font-weight: normal;
}
</style>
