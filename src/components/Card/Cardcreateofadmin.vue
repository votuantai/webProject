<template>
    <v-card
        class="mx-1 mt-3"
        elevation="2"
        outlined
        max-width="280"
        dense
    >
        <v-card-title class="headline">
            Department Account
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
                        Create Account
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                            label="Name"
                            name="name"
                            prepend-icon="fas fa-signature"
                            type="text"
                            color="teal accent-3"
                            v-model="name"
                          />
                          <v-text-field
                            label="Username"
                            name="username"
                            prepend-icon="fas fa-user"
                            type="text"
                            color="teal accent-3"
                            v-model="username"
                          />
                          <v-text-field
                            label="Email"
                            name="email"
                            prepend-icon="far fa-envelope"
                            type="text"
                            color="teal accent-3"
                            v-model="email"
                          />
                          <v-text-field
                            label="Password"
                            name="password"
                            prepend-icon="fas fa-lock"
                            type="password"
                            color="teal accent-3"
                            v-model="password"
                          />
                          <v-text-field
                            label="Confirm Password"
                            name="confirm-password"
                            prepend-icon="fas fa-check-circle"
                            type="password"
                            color="teal accent-3"
                            v-model="confirm_password"
                          />
                        </v-form>
                        <v-form>
                            <h3>Department</h3>
                            <v-row>
                            <v-col cols="6">
                                <v-form>
                                    <v-checkbox
                                        label="Phòng Công tác học sinh, sinh viên (CTHSSV)"
                                        id="CTHSSV"
                                        value="CTHSSV"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Phòng Sau đại học"
                                        id="SDH"
                                        value="SDH"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Phòng Khảo thí và kiểm định chất lượng"
                                        id="KDCL"
                                        value="KDCL"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="TDT Creative Language Center"
                                        id="FE"
                                        value="FE"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Trung tâm đào tạo và phát triển xã hội (SDTC)"
                                        id="SDTC"
                                        value="SDTC"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Trung tâm hợp tác doanh nghiệp và cựu sinh viên Khoa Luật"
                                        id="KL"
                                        value="KL"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Viện chính sách kinh tế và kinh doanh Khoa Mỹ Thuật công nghiệp"
                                        id="MTCN"
                                        value="MTCN"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Khoa Công nghệ thông tin"
                                        id="IT"
                                        value="IT"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Khoa Môi trường và bảo hộ lao động"
                                        id="MTLD"
                                        value="MTLD"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Khoa Tài chính ngân hàng"
                                        id="TCNH"
                                        value="TCNH"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                </v-form>
                            </v-col>
                            <v-col cols="6">
                                <v-form>
                                    <v-checkbox
                                        label="Phòng Đại học"
                                        id="PDH"
                                        value="PDH"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Phòng điện toán và máy tính"
                                        id="DTMT"
                                        value="DTMT"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Phòng Tài chính"
                                        id="PTH"
                                        value="PTH"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Trung tâm tin học"
                                        id="TTTH"
                                        value="TTTH"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Trung tâm phát triển Khoa học quản lý và Ứng dụng công nghệ (ATEM)"
                                        id="ATEM"
                                        value="ATEM"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Trung tâm ngoại ngữ - tin học - bồi dưỡng văn hóa"
                                        id="NNTTBDVH"
                                        value="NNTTBDVH"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Khoa Điện - Điện tử"
                                        id="DDT"
                                        value="DDT"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Khoa Quản trị kinh doanh"
                                        id="QTKD"
                                        value="QTKD"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Khoa Lao động công đoàn"
                                        id="LDCD"
                                        value="LDCD"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                    <v-checkbox
                                        label="Khoa giáo dục quốc tế"
                                        id="GDQT"
                                        value="GDQT"
                                        hide-details
                                        v-model="check_box"
                                    ></v-checkbox>
                                </v-form>
                            </v-col>
                            </v-row>
                        </v-form>
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
                            <template v-if="name && username && email && password && confirm_password && check_box !== null">
                                <v-btn
                                    @click.prevent="registerUser"
                                    color="green darken-1"
                                    text
                                    @click="dialog = false"
                                >
                                    Create
                                </v-btn>
                            </template>
                            <template v-else>
                                <v-btn
                                    @click.prevent="registerUser"
                                    color="green darken-1"
                                    text
                                    disabled
                                    @click="dialog = false"
                                >
                                    Create
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
        return {
            dialog: false,
            name: "",
            username: "",
            email: "",
            password: "",
            confirm_password: "",
            check_box: []
        }
    },
    methods: {
        ...mapActions(["register"]),
        registerUser() {
            let user = {
                name: this.name,
                username: this.username,
                email: this.email,
                password: this.password,
                confirm_password: this.confirm_password,
                department: this.check_box
            }
            this.register(user).then(res => {
                if(res.data.success) {
                    this.$router.push('/admin')
                }
            })
        }
    },
    watch: {
        dialog: function(val) {
            if(val) {
                this.name = ""
                this.username = ""
                this.email = ""
                this.password = ""
                this.confirm_password = ""
                this.check_box = []
            }
        }
    }
}
</script>