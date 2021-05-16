<template>
<!-- <v-card> -->
    <v-navigation-drawer
        permanent
        color="blue-grey darken-4"
        dark
        width="100%"
        height="100%"
    >
    <template v-slot:prepend>
      <v-list-item
        tag="center"
      >
        <v-list-item-title>
          THÔNG BÁO
        </v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense
      rounded>
      <v-list-item>
        <v-list-item-icon>
          <v-icon left> mdi-account </v-icon>
        </v-list-item-icon>
        <!-- Content -->
        <v-list-item-title v-model="sidebarName"> {{ sidebarName }} </v-list-item-title>
      </v-list-item>
      </v-list>
    </template>
    <v-divider></v-divider>
    <v-list
      dense
      rounded
    >
          <v-list-item
          link
          @click.prevent="pushRouter"
          >
          <v-list-item-icon>
            <v-icon left> home </v-icon>
          </v-list-item-icon>
            <v-list-item-title>Trang chủ </v-list-item-title>
          </v-list-item>
          <v-list-group
            color="white"
            :value="false"
            prepend-icon="fas fa-list"
          >
            <template v-slot:activator>
              <v-list-item-title> Phân loại thông báo</v-list-item-title>
            </template>
            <v-list-item link @click="$router.push('/all-department')">
              <v-list-item-icon>
                <v-icon left>fas fa-users</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Phòng ban</v-list-item-title>
            </v-list-item>

            <v-list-item link @click="$router.push('/all-notification')">
              <v-list-item-icon>
                <v-icon left>far fa-list-alt</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Tất cả thông báo</v-list-item-title>
            </v-list-item>
          </v-list-group>

          <v-list-item link>
              <v-list-item-icon>
                <v-icon left>fas fa-sign-in-alt</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Cổng thông tin</v-list-item-title>
            </v-list-item>
      </v-list>
    </v-navigation-drawer>
<!-- </v-card> -->
</template>

<script>
export default {
  data () {
    let userObj =  localStorage.getItem('userObj')
    userObj = JSON.parse(userObj)
    return {
      sidebarName: userObj.user.name
    }
  },
  methods: {
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
    }
  },
}
</script>