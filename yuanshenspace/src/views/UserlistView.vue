<template>
    <ContentBase>
        <div class="card" v-for="user in users" :key="user.id" @click="open_user_profile(user.id)">
            <div class="card-body">
                <div class="card-info">
                    <div class="row">
                        <div class="col-1">
                            <img class="img-fluid" :src="user.photo" alt="">
                        </div>
                        <div class="col-11">
                            <div class="username">{{ user.username }}</div>
                            <div class="follow-coutn">{{ user.followerCount }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ContentBase>

</template>

<script>
import $ from 'jquery'
import ContentBase from "../components/ContentBase.vue"
import { ref } from 'vue'
import router from "@/router/index"
import { useStore } from 'vuex'
export default {
    name: "UserlistView",
    components: {
        ContentBase,
    },
    setup() {
        const store = useStore();
        let users = ref([]);
        $.ajax({
            url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
            type: 'GET',
            success: resp => {
                users.value = resp;
            },
        });

        const open_user_profile = userId => {
            if (store.state.user.is_login) {
                router.push({
                    name: 'userprofile',
                    params: {
                        userId,
                    }
                });
            } else {
                router.push({
                    name: 'login_index',
                });
            }
        }


        return {
            users,
            open_user_profile
        }
    }

}
</script>





<style scoped>




img {
    border-radius: 50%;
}

.username {
    font-weight: bold;
    height: 50%;
}

.follow-count {
    font-size: 12px;
    color: gray;
    height: 50%;
}

.card {
    margin-bottom: 10px;
    cursor: pointer;
}
.card:hover {
    scale: 1.01;
    box-shadow: 2px 2px 10px lightgray;
    transition: 400ms;
}


</style>