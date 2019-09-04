<template>
    <div class="login-box">
        <div class="select_div">
            <div @click="loginHandler" class="select_login" :class="{'active':isLoginBtn,'inActive':!isLoginBtn}">登 录
            </div>
            <div @click="registerHandler" class="select_register" :class="{'active':!isLoginBtn,'inActive':isLoginBtn}">
                注 册
            </div>
        </div>
        <div class="title_huanying">欢迎使用</div>
        <div class="title_gongdi">&nbsp&nbsp&nbsp airchat</div>

        <div class="content_div" style="margin-top: 96px;">
            <input class="content_input" placeholder="请输入用户名" v-model="loginForm.name"></input>
        </div>
        <div class="content_div" style="margin-top: 70px;position: relative">
            <input class="content_input" placeholder="请输入密码" :type="pwdType" v-model="loginForm.password"></input>
            <svg @click="seeSecret" v-if="showPws" class="pwd_icon" t="1562664420753" viewBox="0 0 1024 1024"
                 version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3273" width="32" height="32">
                <path d="M1023.997 511.831c0 99.79-211.129 312.67-511.999 312.67C218.787 824.501 0 615.125 0 511.831c0-103.279 219.73-312.334 511.999-312.334 303.234 0.001 512.071 209.057 511.999 312.335L1023.998 511.831zM512.45 256.529C376.184 256.529 265.72 370.913 265.72 512c0 141.089 110.463 255.471 246.729 255.471 136.307 0 246.774-114.383 246.774-255.471C759.223 370.913 648.756 256.529 512.45 256.529L512.45 256.529zM511.999 348.901c-86.778 0-157.126 72.827-157.126 162.673 0 89.836 70.348 162.677 157.126 162.677s157.097-72.841 157.097-162.677C669.096 421.727 598.776 348.901 511.999 348.901L511.999 348.901z"
                      p-id="3274" fill="#8a8a8a"></path>
            </svg>
            <svg @click="seeSecret" v-if="!showPws" class="pwd_icon" t="1562664206158" viewBox="0 0 1024 1024"
                 version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2948" width="32" height="32">
                <path d="M512.022187 546.417778c-184.177778 0-368.071111-55.921778-499.114667-167.537778a37.575111 37.575111 0 0 1-3.498667-53.162667 37.944889 37.944889 0 0 1 53.418667-3.470222c231.082667 198.826667 668.302222 198.826667 898.389333 0a37.944889 37.944889 0 0 1 53.418667 3.470222c13.767111 15.644444 12.231111 39.452444-3.498667 53.191111C880.093298 490.496 696.199964 546.417778 512.022187 546.417778z m-136.760889 164.522666a30.833778 30.833778 0 0 1-6.741334 0c-10.325333-1.422222-19.626667-7.111111-25.543111-15.644444-5.944889-8.561778-7.964444-19.228444-5.632-29.354667l24.945778-146.631111a37.973333 37.973333 0 0 1 43.918222-30.805333 37.831111 37.831111 0 0 1 30.947556 43.747555l-24.945778 146.602667a37.376 37.376 0 0 1-36.949333 32.085333z m561.009778-74.581333c-9.955556 0-19.512889-4.039111-26.453334-11.178667l-123.022222-124.245333a37.176889 37.176889 0 0 1 16.042667-64.455111 37.546667 37.546667 0 0 1 37.091555 12.259556l123.050667 124.245333c14.592 14.563556 14.592 38.144 0 52.707555-7.224889 6.826667-16.782222 10.638222-26.737778 10.666667z m-848.497778 0a38.997333 38.997333 0 0 1-24.945778-10.666667 37.176889 37.176889 0 0 1 0-52.707555l123.022222-124.245333a37.518222 37.518222 0 0 1 67.470222 14.136888 37.205333 37.205333 0 0 1-15.815111 38.058667l-123.022222 124.245333a37.006222 37.006222 0 0 1-26.709333 11.178667z m562.744889 74.581333a37.376 37.376 0 0 1-36.693334-30.833777l-24.945777-146.631111a37.176889 37.176889 0 0 1 9.756444-38.826667 37.546667 37.546667 0 0 1 39.424-7.68c13.539556 5.319111 22.755556 17.92 23.694222 32.341333l24.945778 146.631111c1.820444 9.728-0.341333 19.768889-6.030222 27.904-5.688889 8.135111-14.364444 13.653333-24.177778 15.36a30.805333 30.805333 0 0 1-5.973333 1.706667z"
                      fill="#707070" p-id="2949"></path>
            </svg>
        </div>
        <div class="secret_div" >
            <img v-show="isLoginBtn"  @click="secretHandler" class="secret_icon" :src="selectImg">
            <span v-show="isLoginBtn" class="secret_text">记住密码</span>
        </div>
        <button class="submit_btn" @click="btnClick">{{btnTxt}}</button>
    </div>
</template>
<script>

    export default {
        name: "Login",
        computed: {
            selectImg() {
                return this.loginForm.remember ? require("../assets/login/login_dagou1.png") : require("../assets/login/login_dagou.png");
            },
            btnTxt() {
                return this.isLoginBtn ? "登 录" : "注 册"
            },
        },
        mounted() {

        },
        data: function () {
            return {
                loginForm: {
                    name: '',
                    password: '',
                    remember: false
                },
                pwdType: "password",
                showPws: false,
                isLoginBtn: true,
            }
        },
        created() {

        },
        methods: {
            seeSecret() {
                this.showPws = !this.showPws;
                this.pwdType = this.showPws ? "text" : "password"
            },
            secretHandler() {
                this.loginForm.remember = !this.loginForm.remember;
            },
            loginHandler() {
                this.isLoginBtn = true;
                this.loginForm.password = "";
                this.loginForm.name = "";
            },
            registerHandler() {
                this.isLoginBtn = false;
                this.loginForm.password = "";
                this.loginForm.name = "";
            },
            btnClick() {
                if (this.isLoginBtn) {
                    this.http.post("/api/v1/login", {
                        name: this.loginForm.name,
                        password: this.loginForm.password
                    }, (res) => {
                        if (res.data.success) {
                            //登录成功
                            this.$router.push('/home')
                        } else {
                            console.log(res.data.message)
                        }
                    })
                } else {
                    this.http.post("/api/v1/register", {
                        name: this.loginForm.name,
                        password: this.loginForm.password
                    }, (res) => {
                        if (res.data.success) {
                            //注册成功

                        } else {

                        }
                    })
                }

            }
        }
    }
</script>
<style scoped="scoped">

    .login-box {
        box-sizing: border-box;
        padding-top: 180px;
        margin-left: 76px;
        margin-right: 76px;
        /*width: 100%;*/
        height: 100%;
        /*box-shadow: 0 0 2px #909399;*/
        position: relative;
    }


    .title_huanying {
        font-size: 48px;
        font-weight: 400;
    }

    .title_gongdi {
        font-size: 48px;
        font-weight: 400;
    }

    .select_div {
        font-size: 32px;
        color: dodgerblue;
        position: relative;
        height: 100px;
    }

    .select_login {
        position: absolute;
        left: 200px;
    }

    .select_register {
        position: absolute;
        right: 200px;
    }

    .content_div {
        border-bottom: 1px solid #979797;
        padding: 30px 18px 22px 18px;
    }

    .content_input {
        font-size: 34px;
        font-weight: 400;
        width: 100%;
        height: 100%;
        border: none;
        background: transparent;
    }

    .content_input:focus {
        outline: none;
        background: transparent;
    }

    .secret_div {
        /*padding: 38px 0 48px 30px;*/
        height: 126px;
        position: relative;
    }

    .secret_icon {
        position: absolute;
        left: 30px;
        top: 38px;
    }

    .login-register {
        font-size: 28px;
        color: dodgerblue;
        position: absolute;
        right: 100px;
        top: 38px;
    }

    .secret_text {
        position: absolute;
        font-size: 26px;
        font-weight: 900;
        color: black;
        opacity: 0.8;
        left: 94px;
        top: 40px;
    }

    .submit_btn {
        width: 590px;
        height: 100px;
        background-color: #5ebbfe;
        display: block;
        margin: 0 auto;
        border-radius: 20px;
        font-size: 36px;
        color: white;
    }

    .pwd_icon {
        position: absolute;
        right: 30px;
    }

    .active {
        color: #39ace7;
    }

    .inActive {
        color: #544354;
    }
</style>