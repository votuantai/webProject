<template>
    <div class="TDTCenterE">
        <v-app id="inspire">
            <v-row no-gutters
            >
                <v-col
                    order="last"
                    cols="9"
                    md="9"
                >
                <!-- Create Navbar -->
                    <navbar/>
                    <v-row class="mt-3 mx-4">
                        <v-container>
                            <h1 class="text-center display-2 blue--text">
                                {{Notices.title}}
                            </h1>
                            <br>
                            <div>
                                <h4><i><u>{{Notices.department[0].text}}</u></i></h4>
                                <h5><i><u>Ngày đăng: {{Notices.date}}</u></i></h5>
                            </div>
                            <br>
                            <div>
                                <p>{{Notices.content}}</p>
                            </div>
                        </v-container>
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

import { mapActions, mapGetters } from 'vuex'
import navbar from '../components/NavbarPlugin/Navbar'
import sidebar from '../components/SideBarPlugin/Sidebar'
export default {
    data() {
        return {
            page: 1,
            items:[
                {title: 'Edit'},
                {title: 'Delete'}
            ],
        }
    },
    components: {
        navbar,
        sidebar
    },
    computed: mapGetters(['Notices']),
    methods: {
        ...mapActions(['editNotices'])
    },
    created() {
        this.editNotices()
    },
}
</script>