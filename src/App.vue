<template>
    <div id="app">
        <!--    <div id="nav">-->
        <!--      <router-link to="/">Home</router-link> |-->
        <!--      <router-link to="/about">About</router-link>-->
        <!--    </div>-->
        <router-view/>
    </div>
</template>

<style>
    #app {
        /*解决login界面margin-top影响父元素*/
        /*position: absolute;*/
        /*height: 1334px;*/
        /*background: #123;*/
        /*width: 750px;*/
        /*width: 750px;*/
        /*height: 1334px;*/
        /*width: 100%;*/
        /*height: 100%;*/
        overflow: hidden;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
