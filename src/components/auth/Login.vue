<template>
  <form v-on:submit.prevent='autenticar' class='container text-center'>
    <div>
      <img src='https://privacy.google.com/images/animations/your-security/last-frame-1.svg'>
    </div>
    <input class='input email-input' type='text' placeholder='Login' v-model='username' required>
    <input class='input password-input' type='text' placeholder='Senha' v-model='password' required>
    <button class='btn btn-primary'>Entrar</button>
  </form>
</template>

<script>
import axios from "axios";
const url = process.env.URL;
export default {
  name: "login-modal",
  beforeMount() {
    if (this.obterToken()) {
      this.$router.push("/cartoes");
    }
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    autenticar() {
      axios
        .post(`${url}/v1/login`, {
          username: this.username,
          password: this.password
        })
        .then(res => {
          this.salvarToken(res.data.token);
          this.$router.push("/cartoes");
        })
        .catch(e => alert(e.response.data.message));
    },
    salvarToken(token) {
      localStorage.setItem("token", token);
    },
    obterToken() {
      return localStorage.getItem("token");
    }
  }
};
</script>

<style lang='scss'>

</style>
