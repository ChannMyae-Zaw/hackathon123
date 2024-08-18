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

     <v-navigation-drawer

      v-model="drawer"

      permanent

    >

      <v-list density="compact" nav>

        <v-list-item

          v-for="item in items"

          :key="item.title"

           @click="navigateTo(item.to)"

          :prepend-icon="item.icon"

          :title="item.title "

        />

      </v-list>

    </v-navigation-drawer>

    <v-app-bar color="primary" prominent elevation="0">

      <v-app-bar-nav-icon

        v-if="!$vuetify.display.mobile"

        variant="text"

        @click.stop="drawer = !drawer"

      ></v-app-bar-nav-icon>

      <v-app-bar-title>{{ name }}</v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>

      <slot></slot>

    </v-main>

  </v-app>

</template>