const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Email list",
      emails: [],
    };
  },
  mounted() {
    let emailList = [];
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          emailList.push(response.data);
          if (emailList.length === 10) {
            this.emails = emailList;
          }
        });
    }
  },
}).mount("#app");
