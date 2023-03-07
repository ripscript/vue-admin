<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" class="pr-10">
      <div id="logoSidebar" class="flex gap-2 items-center justify-start px-2 py-4">
        <div class="logo w-9 h-9">
          <img src="https://vitejs.dev/logo-with-shadow.png" alt="" class="w-full h-full">
        </div>

        <h2 class="uppercase">vue admin</h2>
      </div>
      <ul v-for="(menu, index) in sidebarMenu">
        <li v-if="menu.isMenu">
          <router-link :to="{name: menu.pathName}" :class="{
              'text-white bg-gradient-to-r from-blue-300 to-blue-500 hover:from-[#93c4fdf3] hover:to-[#3B82F6f3]': menu.isActive(), 
              'hover:bg-slate-100' : !menu.isActive()
            }" class="flex items-end justify-start gap-3 py-2 px-3 w-full rounded-r-full transition-all ease-linear duration-200">
            <v-icon :icon="menu.menuIcon"></v-icon>
            <div class="menu-title">
              {{ menu.menuTitle }}
            </div>
          </router-link>
        </li>
        <li v-else>
          <DividerWithTitle :title="menu.menuTitle"></DividerWithTitle>
        </li>
      </ul>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon v-on:click="sidebarActivate"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { ref, onMounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import DividerWithTitle from './components/DividerWithTitle.vue';

  export default {
    setup() {
      const route = useRoute();
      const routeName = ref(undefined);

      const sidebar = ref(true);

      const sidebarMenu = [
        {
          menuTitle: "Dashboard",
          menuIcon: "mdi-home",
          pathName: "dashboard",
          isMenu: true,
          isActive: function () {
            const pathName = this.pathName;
            let isActive = ref(false);
            watchEffect(() => {
              routeName.value = route.name;
              if (routeName.value == pathName) {
                isActive.value = true;
              } else {
                isActive.value = false;
              }
            });
            return isActive.value;
          }
        },
        {
          menuTitle: "user",
          pathName: undefined,
          isMenu: false,
        },
        {
          menuTitle: "Public",
          menuIcon: "mdi-account",
          pathName: "user.public",
          isMenu: true,
          isActive: function () {
            const pathName = this.pathName;
            let isActive = ref(false);
            watchEffect(() => {
              routeName.value = route.name;
              if (routeName.value == pathName) {
                isActive.value = true;
              } else {
                isActive.value = false;
              }
            });
            return isActive.value;
          }
        },
        {
          menuTitle: "Admin",
          menuIcon: "mdi-account-key",
          pathName: "user.admin",
          isMenu: true,
          isActive: function () {
            const pathName = this.pathName;
            let isActive = ref(false);
            watchEffect(() => {
              routeName.value = route.name;
              if (routeName.value == pathName) {
                isActive.value = true;
              } else {
                isActive.value = false;
              }
            });
            return isActive.value;
          }
        },
      ];

      return {
        sidebar,
        sidebarMenu
      }
    },
    components: {
      DividerWithTitle
    },
    methods: {
      sidebarActivate () {
        this.sidebar = !this.sidebar
      },
    },
  }
</script>