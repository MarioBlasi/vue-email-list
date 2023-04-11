const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Email list",
      emails: [],
    };
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.getEmail();
    }
  },
  methods: {
    //async per dichiarare che è una funzione asincrona.
    async getEmail() {
      // Il metodo fetch prende l'URL dell'API come argomento e restituisce una
      //promessa contenente la risposta alla richiesta.
      const response = await fetch(
        "https://flynn.boolean.careers/exercises/api/random/mail"
      );
      const data = await response.json();
      this.emails.push(data.response);
    },
  },
}).mount("#app");
