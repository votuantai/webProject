<template>
    <v-card
        class="mx-auto mt-3"
        elevation="2"
        outlined
        max-width="560"
    >
    <v-list dense
    rounded>
        <v-list-item>
            <v-list-item-avatar left>
                <v-img src='https://cdn.vuetifyjs.com/images/john.png'></v-img>
            </v-list-item-avatar>
            <v-dialog
                v-model="dialog"
                max-width="560"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-list-item
                        v-bind="attrs"
                        v-on="on"
                        link
                        v-model="statusName"
                    >
                        What's on your mind? {{ statusName }}
                    </v-list-item>
                </template>
                <v-card>
                    <v-card-title>
                        <b>Post</b>
                    </v-card-title>

                    <v-divider></v-divider>

                    <v-card-text>
                        <v-textarea
                            solo
                            name="input-7-4"
                            label="What on your mind"
                            v-model="textAreaStatus"
                        >
                        </v-textarea>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="disagree"
                            text
                            @click="dialog = false"
                        >
                            Disagree
                        </v-btn>
                        <template v-if="textAreaStatus != ''">
                            <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false"
                                @click.prevent="postStatus"
                            >
                                Agree
                            </v-btn>
                        </template>
                        <template v-else>
                            <v-btn
                                color="green darken-1"
                                text
                                disabled
                                @click="dialog = false"
                                @click.prevent="postStatus"
                            >
                                Agree
                            </v-btn>
                        </template>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
            <v-col cols='4'>
                <v-list-item link>
                    <v-icon left color="red">fas fa-video</v-icon>
                    <v-list-item-title>Live Video</v-list-item-title>
                </v-list-item>
            </v-col>
            <v-col cols='4'>
                <v-list-item link>
                    <v-icon left color="green">fas fa-file-image</v-icon>
                    <v-list-item-title>Photo/Video</v-list-item-title>
                </v-list-item>
            </v-col>
            <v-col cols='4'>
                <v-list-item link>
                    <v-icon left color="yellow">far fa-smile-wink</v-icon>
                    <v-list-item-title>Feelling/Act</v-list-item-title>
                </v-list-item>
            </v-col>
        </v-list-item>
    </v-list>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        let userObj = localStorage.getItem('userObj')
        userObj = JSON.parse(userObj)
        return {
            statusName: userObj.user.name,
            image:userObj.user.image,
            email: userObj.user.email,
            dialog: false,
            textAreaStatus: '',
        }
    },
    methods: {
        ...mapActions(['createStatus']),
        postStatus() {
            let createPost = {
                name: this.statusName,
                email: this.email,
                profileImg: this.image,
                content: this.textAreaStatus,
            }
            console.log(createPost)
            this.createStatus(createPost).then(res => {
                if(res.data.success) {
                    if(createPost.name.includes('Admin') == true){
                        this.$router.push('/admin')
                    } else if (createPost.email.includes('@student.tdtu.edu.vn') == true){
                        this.$router.push('/')
                    } else {
                        this.$router.push('/department')
                    }
                }
            }).catch(err => {
                console.log(err)
            })
        }
    },
    watch: {
        dialog: function(val) {
            if(val) {
                this.textAreaStatus = ''
            }
        }
    },
}
</script>
