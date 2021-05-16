<template>
  <div class="home">
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
              <cardnotification/>
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
import Sidebar from '../components/SideBarPlugin/Sidebar.vue'
import Navbar from '../components/NavbarPlugin/Navbar.vue'
import Cardstatus from '../components/Card/Cardstatus.vue'
import Cardpost from '../components/Card/Cardpost.vue'
import Cardnotification from '../components/Card/Cardnotification.vue'
/* import { mapGetters } from 'vuex' */
export default {
  data() {
    return {
    }
  },
  components: {
    Sidebar,
    Navbar,
    Cardstatus,
    Cardpost,
    Cardnotification,
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



