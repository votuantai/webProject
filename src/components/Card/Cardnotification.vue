<template>
    <v-card
        class="mx-1 mt-3"
        elevation="2"
        outlined
        max-width="280"
        height="470"
    >
        <v-list dense rounded>
            <v-list-item>
                <v-list-item-title>THÔNG BÁO MỚI</v-list-item-title>
                <v-spacer></v-spacer>
                <div class="rounded-pill text-no-wrap">
                    <v-list-item link @click="$router.push('/all-notification')">
                        <v-list-item-subtitle>
                           <u><i>xem tất cả</i></u>
                        </v-list-item-subtitle>
                    </v-list-item>
                </div>
            </v-list-item>
            <v-divider></v-divider>
            <v-list max-height="400"
                class="overflow-y-auto"
            >
                <v-form v-for="notices in Notices" :key="notices._id">
                    <v-list-item
                        link
                        @click="$router.push({name: 'Detail', params: {id: notices._id}})"
                        three-line
                    >
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                <i>{{ notices.department[0].text }}</i>
                            </v-list-item-subtitle>
                            <v-list-item-title>
                                <b>{{ notices.title}}</b>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ notices.content }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                </v-form>
            </v-list>
        </v-list>
    </v-card>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data() {
        return {
        }
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