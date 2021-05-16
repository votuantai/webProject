<template>
    <v-card
        class="mx-1 mt-3"
        elevation="2"
        outlined
        max-width="280"
        dense
    >
        <v-card-title class="headline">
            Create Notification
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
            <v-dialog
                v-model="dialog"
                max-width="760"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="indigo darken-4"
                        dark
                        v-bind="attrs"
                        v-on="on"
                    >
                        Create
                    </v-btn>
                </template>
                <v-card dense >
                    <v-card-title>
                        Post Notification
                    </v-card-title>
                    <v-card-text>
                        <v-card-content>
                            <v-form>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="50"
                                    width="100%"
                                    v-model="userCreate"
                                >
                                <v-list-item>
                                    {{userCreate}}
                                </v-list-item>
                                </v-sheet>

                                <v-text-field
                                    outlined
                                    name="title"
                                    type="text"
                                    class="mt-2"
                                    label="Title"
                                    v-model="title"
                                />
                                 <v-textarea
                                    solo
                                    type="text"
                                    name="input-7-4"
                                    label="Notification"
                                    outlined
                                    v-model="content"
                                />
                                <v-select
                                    solo
                                    :items="filteredData"
                                    label="Department"
                                    v-model="selectDepartment"
                                    return-object
                                >
                                </v-select>
                            </v-form>
                        </v-card-content>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="disagree"
                                text
                                @click="dialog = false"
                            >
                                Close
                            </v-btn>
                            <template v-if="selectDepartment && title && content != null">
                                <template>
                                <v-btn
                                    color="green darken-1"
                                    text
                                    @click="dialog = false"
                                    @click.prevent="postNotify"
                                >
                                    Post
                                </v-btn>
                                </template>
                            </template>
                            <template v-else>
                                <v-btn
                                    color="green darken-1"
                                    text
                                    disabled
                                    @click="dialog = false"
                                    @click.prevent="postNotify"
                                >
                                    Post
                                </v-btn>
                            </template>
                        </v-card-actions>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        let userObj = localStorage.getItem('userObj')
        userObj = JSON.parse(userObj)
        return {
            dialog: false,
            userCreate: userObj.user.name,
            checkDepartment:userObj.user.department,
            name:'',
            title: '',
            content: '',
            selectDepartment: null,
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
    methods: {
        ...mapActions(["createNotices"]),
        postNotify() {
            let notify = {
                name: this.userCreate,
                title: this.title,
                content: this.content,
                department: this.selectDepartment
            }
            this.createNotices(notify).then(res => {
                if(res.data.success) {
                    if(notify.name.includes('Admin') == true){
                        this.$router.push('/admin')
                    } else {
                        this.$router.push('/department')
                    }
                }
            }).catch(err => {
                console.log(err)
            })
        },
    },
    watch: {
        dialog: function(val) {
            if(val) {
                this.name = ''
                this.title = ''
                this.content = ''
                this.selectDepartment = null;
            }
        }
    },
    computed: {
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
    }
}
</script>