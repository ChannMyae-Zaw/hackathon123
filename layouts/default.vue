<script>

export default {

  data: () => ({

    drawer: false,

    name: "IT",

    items: [

      {

        title: "Home",

        icon: "mdi-home",

        to: "/",

      },

      {

        title: "Two page",

        icon: "mdi-star",

        to: "/two",

      },

    ],

  }),

  methods: {

    navigateTo(page) {

      this.$router.push(page);

    },

  },

};

</script>

<template>

  <v-app>

    <v-main>

      <slot></slot>

    </v-main>

  </v-app>

</template>