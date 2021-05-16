<template>
    <div class="TDTCenterE">
        <v-app id="inspire">
            <v-row no-gutters
            >
                <v-col
                    order="last"
                    cols="9"
                >
                <!-- Create Navbar -->
                    <navbar/>
                    <v-row class="mt-3 mx-4">
                        <h1>Phòng Công tác học sinh, sinh viên (CTHHSV)</h1>
                    </v-row>
                    <v-row class="mt-3 mx-4">
                        <v-form v-for="notices in Notices" :key="notices._id">
                            <template v-if="notices.department[0].value.includes('CTHSSV')">
                                <notices
                                    v-bind:department="notices.department[0].text"
                                    v-bind:title="notices.title"
                                    v-bind:content="notices.content"
                                    v-bind:date="notices.date"
                                    v-bind:_id="notices._id"
                                ></notices>
                                </template>
                            <template v-else>
                            </template>
                        </v-form>
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
import navbar from '../components/NavbarPlugin/Navbar'
import sidebar from '../components/SideBarPlugin/Sidebar'
import notices from '../components/Sheetnotices/Notices_sheet'
import {mapGetters, mapActions} from 'vuex'
export default {
    data() {
        return {
            page: 1,
        }
    },
    components: {
        navbar,
        sidebar,
        notices
    },
    computed: {
        ...mapGetters(['Notices']),
    },
    methods: {
        ...mapActions(['getNotices'])
    },
    created() {
        this.getNotices()
    },
}
</script>