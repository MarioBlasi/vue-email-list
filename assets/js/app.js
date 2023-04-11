const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Email list",
      email: null,
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        console.log(response);
        this.email = response.data.response;
      });
  },
}).mount("#app");
