<template>
    <v-list width="850">
        <v-list-item link @click="$router.push({name: 'Detail', params: {id: _id}})">
            <v-list-item-content>
                <v-list-item-subtitle><i>
                    {{ department }} |Ngày đăng: {{ date }}
                </i></v-list-item-subtitle>
                <v-list-item-title>{{ title }}</v-list-item-title>
                <v-list-item-subtitle> {{ content }} </v-list-item-subtitle>
                </v-list-item-content>
                <template v-if="email.includes('@student.tdtu.edu.vn') == false">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                v-bind="attrs"
                                v-on="on"
                            >
                            <v-icon>fas fa-ellipsis-h</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                                <router-link :to="{name: 'Edit', params: {id: _id} }">
                                    <v-list-item
                                        link
                                    >Edit
                                    </v-list-item>
                                </router-link>
                            <v-list-item
                                @click.prevent="delete_notices(_id)"
                                link
                            >Delete
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
                <template v-else-if="checkName.include(name ) == true">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                v-bind="attrs"
                                v-on="on"
                            >
                            <v-icon>fas fa-ellipsis-h</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                                <router-link :to="{name: 'Edit', params: {id: _id} }">
                                    <v-list-item
                                        link
                                    >Edit
                                    </v-list-item>
                                </router-link>
                            <v-list-item
                                @click.prevent="delete_notices(_id)"
                                link
                            >Delete
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
                <template v-else-if="checkName.includes('Admin') == true">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                v-bind="attrs"
                                v-on="on"
                            >
                            <v-icon>fas fa-ellipsis-h</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                                <router-link :to="{name: 'Edit', params: {id: _id} }">
                                    <v-list-item
                                        link
                                    >Edit
                                    </v-list-item>
                                </router-link>
                            <v-list-item
                                @click.prevent="delete_notices(_id)"
                                link
                            >Delete
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
                <template v-else>
                </template>
            </v-list-item>
            <v-divider></v-divider>
        </v-list>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['department', 'title', 'content', 'date', '_id', 'name'],
    data() {
        let userObj = localStorage.getItem('userObj')
        userObj = JSON.parse(userObj)
        return {
            email: userObj.user.email,
            checkName: userObj.user.name
        }
    },
    computed: {
        ...mapGetters(['Notices'])
    },
    methods: {
        ...mapActions(['getNotices', 'deleteNotices']),
        delete_notices(id) {
            if(window.confirm("Do you really want to delete")) {
                this.deleteNotices(id)
            }
        },
    },
    created() {
        this.getNotices()
    }
}
</script>