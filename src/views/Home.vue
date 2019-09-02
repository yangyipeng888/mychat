<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <input v-model="sendTxt">
        <button @click="sendMsg">send message</button>
        <textarea>{{myMsg}}</textarea>
        <button @click="login">login test</button>

    </div>
</template>

<script>
    // @ is an alias to /src
    import axios from 'axios'

    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        data() {
            return {
                sendTxt: "",
                myMsg: "",
            }
        },
        mounted() {
            let that = this;
            socket.on('getMsg', (msg) => {
                this.myMsg = msg;
            })
        },
        methods: {
            sendMsg() {
                socket.emit('sendMsg', this.sendTxt)
            },
            login(){
                axios.post("/api/v1/login", {
                    name: '123',
                }).then(res => {
                    if (res.data.success) {
                        console.log('success')

                    } else {
                        console.log('fail')

                    }
                }).catch(err => {
                    console.log(err)

                });
            }
        }
    }
</script>
