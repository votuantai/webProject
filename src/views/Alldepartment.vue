<template>
    <div class="alldepartment">
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
                        <h1>Danh sách phòng ban</h1>
                    </v-row>
                    <v-row class="mt-3 mx-4">
                        <v-col cols="6">
                            <v-form>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                >
                                    <v-list-item link @click="$router.push('/all-department/cthhsv')">
                                        <p>Phòng Công tác học sinh sinh viên (CTHSSV)</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item link @click="$router.push('/all-department/sdh')">
                                        <p>Phòng sau đại học</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/kdcl')"
                                        link
                                    >
                                        <p>Phòng khảo thí và kiểm định chất lượng</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item link @click="$router.push('/all-department/language-center')">
                                        <p>TDT Creative Language Center</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/sdtc')"
                                        link
                                    >
                                        <p>Trung tâm đào tạo và phát triển xã hội (SDTC)</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/kl')"
                                        link
                                    >
                                        <p>Trung tâm hợp tác doanh nghiệp và cựu sinh viên Khoa Luật</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/mtcn')"
                                        link
                                    >
                                        <p>Viện chính sách kinh tế và kinh doanh, Khoa Mỹ thuật công nghiệp</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/cntt')"
                                        link>
                                        <p>Khoa Công nghệ thông tin</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/mtld')"
                                        link
                                    >
                                        <p>Khoa Môi trường và bảo hộ lao động</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/tcnh')"
                                        link
                                    >
                                        <p>Khoa Tài chính ngân hàng</p>
                                    </v-list-item>
                                </v-sheet>
                            </v-form>
                        </v-col>
                        <v-col cols="6">
                            <v-form>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/pdh')"
                                        link>
                                        <p>Phòng Đại học</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/dtmt')"
                                        link
                                    >
                                        <p>Phòng điện toán và máy tính</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/pth')"
                                        link
                                    >
                                        <p>Phòng Tài chính</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/ttth')"
                                        link
                                    >
                                        <p>Trung tâm tin học</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/atem')"
                                        link
                                    >
                                        <p>Trung tâm phát triển Khoa học quản lý và Ứng dụng công nghệ (ATEM) </p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/nnthbdvh')"
                                        link
                                    >
                                        <p>Trung tâm ngoại ngữ - tin học - bồi dưỡng văn hóa</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/gdqt')"
                                        link
                                    >
                                        <p>Khoa giáo dục quốc tế</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/ddt')"
                                        link
                                    >
                                        <p>Khoa Điện - Điện tử</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/qtkd')"
                                        link
                                    >
                                        <p>Khoa Quản trị kinh doanh</p>
                                    </v-list-item>
                                </v-sheet>
                                <v-sheet
                                    color="white"
                                    elevation="1"
                                    height="63"
                                    width="100%"
                                    class="mt-2"
                                >
                                    <v-list-item
                                        @click="$router.push('/all-department/ldcd')"
                                        link
                                    >
                                        <p>Khoa Lao động công đoàn</p>
                                    </v-list-item>
                                </v-sheet>
                            </v-form>
                        </v-col>
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
export default {
    data() {
        return {
        }
    },
    components: {
        navbar,
        sidebar
    }
}
</script>