<template>
    <v-card
        class="mx-auto mt-3"
        elevation="2"
        outlined
        max-width="560"
    >
        <v-list dense rounded>
            <v-row>
                <v-col cols="4">
                    <v-list-item link>
                        <v-avatar size="40">
                            <img :src="userPost"/>
                        </v-avatar>
                        <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title v-model="postName">
                                    {{ name }}
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    {{date}}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item>
                </v-col>
                <v-col cols="6">
                </v-col>
                <v-col cols="2" class="mt-2 mx-auto">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-list-item
                                v-on="on"
                                v-bind="attrs"
                                link
                                dense
                            >
                                <v-icon left>fas fa-ellipsis-h</v-icon>
                            </v-list-item>
                        </template>
                        <v-list>
                            <v-dialog
                                v-model="dialog"
                                max-width="560"
                            >
                                <template v-slot:activator="{ on, attrs }"
                                v-if="postName.includes(name) == true"
                                >
                                    <v-list-item
                                        v-bind="attrs"
                                        v-on="on"
                                        link
                                        v-model="statusName"
                                        @click="created(_id)"
                                    >
                                        Edit
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
                                            v-model="listEditStatus.content"
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
                                        <v-btn
                                            color="green darken-1"
                                            text
                                            @click="dialog = false"
                                            @click.prevent="updated()"
                                        >
                                            Update
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-list-item
                                link
                                @click="delete_status(_id)"
                            >
                                Delete
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
            </v-row>
            <v-row>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{content}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-row>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="3">
                    <v-list-item>
                        <v-list-item link>
                            <v-icon left>far fa-thumbs-up</v-icon>
                            <v-list-item-title>Like</v-list-item-title>
                        </v-list-item>
                    </v-list-item>
                </v-col>
                <v-col cols="5">
                </v-col>
                <v-col cols="4">
                    <v-list-item>
                        <v-list-item link>
                            <v-icon left>far fa-comment-alt</v-icon>
                            <v-list-item-title>Comment</v-list-item-title>
                        </v-list-item>
                    </v-list-item>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="4" class="mt-1">
                    <v-list-item link>
                        <v-list-item-title>View 6 more comment</v-list-item-title>
                    </v-list-item>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list-item>
                        <v-avatar size="40">
                            <img src='https://cdn.vuetifyjs.com/images/john.png' />
                        </v-avatar>
                        <div class="rounded-xl pa-1 text-no-wrap grey lighten-2">
                            <v-list-item-content>
                                <v-list-item-title v-model="postName">
                                    {{ postName }}
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    .
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </div>
                        <div class="rounded-pill text-no-wrap">
                             <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-list-item
                                        v-on="on"
                                        v-bind="attrs"
                                        link
                                        dense
                                    >
                                        <v-icon left>fas fa-ellipsis-h</v-icon>
                                    </v-list-item>
                                </template>
                                <v-list>
                                    <v-list-item
                                        link
                                    >
                                        Edit
                                    </v-list-item>
                                    <v-list-item
                                        link
                                    >
                                        Delete
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-list-item>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field
                        v-model="messagge"
                        outlined
                        clearable
                        label="Message"
                        type="text"
                        dense
                    >
                        <template slot="append">
                            <v-icon left>far fa-smile-beam</v-icon>
                            <v-icon left>fas fa-sticky-note</v-icon>
                            <v-icon left>fas fa-camera</v-icon>
                        </template>
                    </v-text-field>
                </v-col>
            </v-row>
        </v-list>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    props: ['date', 'name', 'content', 'image', '_id'],
    data() {
        let userObj = localStorage.getItem('userObj')
        userObj = JSON.parse(userObj)
        return {
            postName: userObj.user.name,
            userPost: this.image,
            dialog: false,
        }
    },
    computed: mapGetters(['listEditStatus', 'listStatus']),
    methods: {
        ...mapActions(['deleteStatus', 'editStatus', 'updateStatus']),
        delete_status(id) {
            if(window.confirm("Do you really want to delete")) {
                this.deleteStatus(id)
            }
        },

        created: function(id) {
            this.editStatus(id)
        },
        updated: function() {
            this.updateStatus(this.listEditStatus)
        },
    }
}
</script>