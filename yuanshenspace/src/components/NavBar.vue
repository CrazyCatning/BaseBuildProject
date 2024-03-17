<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" :to="{ name: 'home' }">原神启动</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">首页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'userlist_index' }">好友列表</router-link>
                    </li>

                </ul>
                <ul class="navbar-nav" v-if="!$store.state.user.is_login">
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="{ name: 'login_index' }">登录</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'register_index' }">注册</router-link>
                    </li>

                </ul>
                <ul class="navbar-nav" v-else>
                    <li class="nav-item">
                        <router-link class="nav-link active"
                            :to="{ name: 'userprofile', params: { userId: $store.state.user.id } }">{{
                $store.state.user.username }}</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="logout" :to="{ name: 'register_index' }"
                            style="cursor: pointer">退出</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

</template>


<script>
import { useStore } from 'vuex';
export default {
    name: "NavBar",

    setup() {
        const store = useStore();
        const logout = () => {
            store.commit("logout");
        }


        return {
            logout,
        }
    }
}


</script>


<style scoped></style>