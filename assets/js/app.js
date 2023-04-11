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
          emailList.push(response.data.response);
          if (emailList.length === 10) {
            this.emails = emailList;
          }
          console.log(emailList);
        });
    }
  },
}).mount("#app");
