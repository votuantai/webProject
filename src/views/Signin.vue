<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window>
                <v-window-item >
                  <v-row>
                    <v-col cols="8" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 black--text text--accent-3">
                            Sign in to TDTU
                        </h1>
                        <h4 class="text-center mt-4">Enter username and password to login</h4>
                        <form >
                        <v-form>
                          <v-text-field
                            label="Username"
                            name="Username"
                            prepend-icon="mdi-account"
                            type="text"
                            color="teal accent-3"
                            v-model="username"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            v-model="password"
                          />
                        </v-form>
                        <h3 class="text-center mt-3">Forgot your password ?</h3>
                        <div class="text-center mt-3">
                            <div class="messageError"
                            v-for="error in errors"
                            :key="errors.indexOf(error)"
                            v-html="error">
                              {{error}}
                            </div>
                            <br>
                            <v-btn rounded color="grey darken-4 white--text"
                              value="Login"
                              @click.prevent="loginUser"
                            >SIGN IN
                            </v-btn>
                        </div>
                        </form>
                      </v-card-text>
                    </v-col>
                    <v-col cols="4" md="4" class="grey darken-4">
                      <v-card-text class="white--text mt-12">
                        <div class="text-center">
                          <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">
                            <v-btn width="200px" class="mt-3 white--text" color="red" >
                              <v-icon>fab fa-google-plus-g</v-icon>
                            </v-btn>
                          </GoogleLogin>
                      </div>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'
import GoogleLogin from 'vue-google-login'

export default {
  data() {
    return {
      params: {
        client_id: "650221979150-ar09occ77mgk5oi0ob11nlebka2m7g7q.apps.googleusercontent.com"
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      },
      username: "",
      password: "",
      errors: []
    }
  },
  methods: {
    ...mapActions(['login', 'loginGoogle']),
    loginUser(){
      let user = {
        username: this.username,
        password: this.password
      }
        this.login(user)
        .then(res => {
          if(res.data.success) {
            if(user.username.includes('admin') == true) {
              this.$router.push('/admin')
            } else {
            this.$router.push('/department')
            }
          }
        }).catch(err => {
          if(err.response.status == 404){
            this.errors.push('Invalid account or password')
          }
        })
    },
    onSuccess(googleUser){
      if(googleUser.ft.Qt.includes('@student.tdtu.edu.vn') == true){
        this.loginGoogle(googleUser)
        .then(res => {
          if(res.data.success){
            this.$router.push('/')
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.errors.push('Please use a student account')
      }
    }
  },
  components: {
    GoogleLogin
  }
}
</script>

<style scoped>
  .messageError {
    color: red;
  }
</style>