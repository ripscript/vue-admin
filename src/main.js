import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'

// mdi font icon
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { VIcon, VNavigationDrawer, VApp, VAppBar, VAppBarNavIcon, VToolbarTitle, VMain, VCardTitle, VCardText, VCard, VBtn } from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDataTable, VDataTableServer } from 'vuetify/labs/VDataTable'

const vuetify = createVuetify({
    components: {
        VDataTable,
        VDataTableServer,
        VIcon,
        VApp,
        VNavigationDrawer,
        VAppBar,
        VAppBarNavIcon,
        VToolbarTitle,
        VMain,
        VCardTitle,
        VCardText,
        VCard,
        VBtn,
    },
    directives,
    icons: {
        defaultSet: 'mdi',
    },
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
