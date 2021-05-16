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
                        <v-list min-width="100%" >
                            <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="50"
                                    width="100%"
                                    v-model="Notices.name"
                                >
                                <v-list-item>
                                    {{Notices.name}}
                                </v-list-item>
                                </v-sheet>

                                <v-text-field
                                    outlined
                                    name="title"
                                    type="text"
                                    class="mt-2"
                                    label="Title"
                                    v-model="Notices.title"
                                    required
                                />
                                <v-textarea
                                    solo
                                    type="text"
                                    name="input-7-4"
                                    label="Notification"
                                    outlined
                                    v-model="Notices.content"
                                    required
                                />
                                <v-select
                                    solo
                                    :items="filteredData"
                                    label="Department"
                                    v-model="Notices.department[0]"
                                    return-object
                                >
                                </v-select>
                                <v-btn @click.prevent="handleUpdateForm" left>Update</v-btn>
                        </v-list>
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
        let userObj = localStorage.getItem('userObj')
        userObj = JSON.parse(userObj)
        return {
            userCreate: userObj.user.name,
            checkDepartment:userObj.user.department,
            page: 1,
            department: [{text: 'Phòng Công tác học sinh, sinh viên (CTHSSV)', value: 'CTHSSV'}, {text: 'Phòng Sau đại học', value: 'SDH'},
            {text: 'Phòng khảo thí và kiểm định chất lượng', value: 'KDCL'},
            {text: 'TDT Creative Language Center', value: 'FE'},
            {text: 'Trung tâm đào tạo và phát triển xã hội (SDTC)', value: 'SDTC'},
            {text: 'Trung tâm hợp tác doanh nghiệp và cựu sinh viên Khoa luật', value: 'KL'},
            {text: 'Viện chính sách kinh tế và kinh doanh, Khoa Mỹ thuật công nghiệp', value: 'MTCN'},
            {text: 'Khoa Công nghệ thông tin', value: 'IT'},
            {text: 'Khoa Môi trường và bảo hộ lao động', value:'MTLD'},
            {text: 'Khoa Tài chính ngân hàng', value: 'TCNH'},
            {text: 'Phòng Đại học', value: 'PDH'},
            {text: 'Phòng Điện toán và máy tính', value: 'DTMT'},
            {text: 'Phòng tài chính', value: 'PTH'},
            {text: 'Trung tâm tin học', value: 'TTTH'},
            {text: 'Trung tâm phát triển khoa học quản lý và Ứng dụng công nghệ (ATEM)', value: 'ATEM'},
            {text: 'Trung tâm ngoại ngữ - tin học - bồi dưỡng văn hóa', value: 'NNTTBDVH'},
            {text: 'Khoa Điện - Điện tử', value: 'DDT'},
            {text: 'Khoa Quản trị kinh doanh', value: 'QTKD'},
            {text: 'Khoa Lao động công đoàn', value: 'LDCD'},
            {text: 'Khoa giáo dục quốc tế', value: 'GDQT'},
            ],
        }
    },
    components: {
        navbar,
        sidebar
    },
    computed: {
        ...mapGetters(['Notices']),
        filteredData(){
            let arr = []
            if(this.userCreate.includes('Admin') == true){
                return this.department
            } else {
                this.department.filter(department => {
                    for (let i of this.checkDepartment) {
                        if(i == department.value) {
                            arr.push(department)
                        }
                    }
                })
                return arr
            }
        }
    },
    methods: {
        ...mapActions(['editNotices', 'updateNotices']),
        handleUpdateForm() {
            this.updateNotices(this.Notices).then(res => {
                console.log(res)
                this.$router.push('/all-notification')
            }).catch(err => {
                console.log(err)
            })
        }
    },
    created() {
        this.editNotices()
    },
}
</script>