<template>
  <div class="department">
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
import sidebar from '../components/SideBarPlugin/Sidebar'
import cardstatus from '../components/Card/Cardstatus'
import cardpost from '../components/Card/Cardpost'
import cardcreatenotifi from '../components/Card/Cardcreate_notify'
import navbar from '../components/NavbarPlugin/Navbar'
export default {
    data() {
        return {
        }
    },
    components: {
        sidebar,
        cardstatus,
        cardpost,
        cardcreatenotifi,
        navbar
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