<template>
    <div class="Navbar">
    <div>
      <v-toolbar

      color="blue darken-4"
      dense
      >
          <v-app-bar-title></v-app-bar-title>
          <v-spacer></v-spacer><v-spacer></v-spacer>
          <v-toolbar-item>
              <v-btn plain color="white" @click.prevent="pushRouter"> Trang Chu</v-btn>
              <v-btn plain
                :disabled="loading"
                color="white"
              >
              <v-icon left color="white" v-model="navbarName">mdi-account</v-icon>
                {{ navbarName }}
              </v-btn>
              <v-btn
                plain
                color="white"
                @click.prevent="logoutUser"
              >
                <v-icon left>logout</v-icon>
                Logout
              </v-btn>
          </v-toolbar-item>
      </v-toolbar>
    </div>
    </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
  computed: {
  ...mapGetters['isLoggedIn']
  },
    data() {
      let userObj = localStorage.getItem('userObj')
      userObj = JSON.parse(userObj)
      return {
        navbarName: userObj.user.name,
        loading: false
      }
    },
    methods: {
        async remove () {
        this.loading = true

        await new Promise(resolve => setTimeout(resolve, 3000))

        this.loading = false
    },
    pushRouter() {
      let userObj = localStorage.getItem('userObj')
      userObj = JSON.parse(userObj)
      let checkName = userObj.user.name
      let checkUseremail = userObj.user.email
      if(checkName.includes('Admin') == true){
        this.$router.push('/admin')
      }
      else if(checkUseremail.includes('@student.tdtu.edu.vn') == true){
        this.$router.push('/')
      } else {
        this.$router.push('/department')
      }
    },
    ...mapActions(['logout']),
    logoutUser() {
      this.logout()
    }
  }
}
</script>