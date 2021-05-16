<template>
  <div class="admin">
    <v-app id="inspire">
      <v-row no-gutters
      >
        <v-col
          order="last"
          cols="9"
        >
          <!-- Create Navbar -->
          <navbar/>
          <v-row no-gutters>
            <v-col order="last" cols="4"
            >
            <cardcreateofadmin/>
            <cardcreatenotifi/>
            </v-col>
            <v-col
              order="first"
              cols="8"
              justify="center"
            >
              <cardstatus/>
              <v-form v-for="list in listStatus" :key="list._id">
              <cardpost
                v-bind:name="list.name"
                v-bind:image="list.profileImg"
                v-bind:date="list.date"
                v-bind:content="list.content"
                v-bind:_id="list._id"
              />
            </v-form>
            </v-col>
          </v-row>
        </v-col>
        <!-- the first -->
        <v-col order="first" cols="3">
          <sidebar/>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import navbar from '../components/NavbarPlugin/Navbar'
import sidebar from '../components/SideBarPlugin/Sidebar'
import cardpost from '../components/Card/Cardpost'
import cardstatus from '../components/Card/Cardstatus'
import cardcreateofadmin from '../components/Card/Cardcreateofadmin'
import cardcreatenotifi from '../components/Card/Cardcreate_notify'

/* import { mapGetters } from 'vuex' */
export default {
 /*  computed:{
    ...mapGetters['isLoggedIn']
  },
  name: 'admin', */
  data() {
    return {
    }
  },
  components: {
    navbar,
    sidebar,
    cardpost,
    cardstatus,
    cardcreateofadmin,
    cardcreatenotifi
  },
  computed: mapGetters(['listStatus']),
  methods: {
    ...mapActions(['getStatus'])
  },
  created() {
    this.getStatus()
  },
}
</script>