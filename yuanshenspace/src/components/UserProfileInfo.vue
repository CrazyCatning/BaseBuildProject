<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3 img-field">
                    <img class="img-fluid" :src="user.photo" alt="">
                </div>
                <div class="col-9">
                    <div class="username">{{ user.username }}</div>
                    <div class="fans">粉丝:{{ user.followCount }}</div>
                    <button @click="follow" v-if="!user.is_follow" class="btn btn-outline-warning">关注</button>
                    <button @click="unfollow" v-if="user.is_follow" class="btn btn-outline-warning">取消关注</button>
                </div>
            </div>
        </div>
    </div>


</template>



<script>
import $ from 'jquery'
import { useStore } from 'vuex';

export default {
    name: "UserProfileInfo",
    props: {
        user: {
            type: Object,
            required: true,
        },
    },

    setup(props, context) {
        const follow = () => {
            const store = useStore();
            $.ajax({
                url: 'https://app165.acapp.acwing.com.cn/myspace/follow/',
                type: "post",
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                data: {
                    target_id: props.user.id
                },
                success: () => {
                    context.emit('follow');
                }
            })

        };

        const unfollow = () => {
            const store = useStore();
            $.ajax({
                url: 'https://app165.acapp.acwing.com.cn/myspace/follow/',
                type: "post",
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                data: {
                    target_id: props.user.id
                },
                success: () => {
                    context.emit('unfollow');
                }
            })
        };

        return {
            follow,
            unfollow,
        };
    },
};


</script>



<style scoped>
img {
    border-radius: 50%;
}

.username {
    font-weight: bold;
}

.fans {
    font-size: 12px;
    color: gray;
}

button {
    padding: 2px 4px;
    font-size: 12px;
    width: 80%;
}

.img-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card {
    margin-bottom: 10px;
}

</style>