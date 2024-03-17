<template>

    <div class="card">
        <div class="card-body">
            <div v-for="(post, index) in posts.posts" :key="index">

                <div class="card single-card">
                    <div class="card-body">
                        {{ post.content }}
                        <button v-if="is_me" @click="delete_a_post(post.id)" :user="user" type="button"
                            class="btn btn-danger btn-sm">删除</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>



<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
import $ from 'jquery'
export default {
    name: "UserProfilePosts",

    props: {
        posts: {
            type: Object,
            required: true,
        },
        user: {
            type: Object,
            required: true,
        }
    },

    setup(props, context) {
        const store = useStore();
        let is_me = computed(() => store.state.user.id === props.user.id);

        const delete_a_post = post_id => {
            $.ajax({
                url: 'https://app165.acapp.acwing.com.cn/myspace/post/',
                type: "DELETE",
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                data: {
                    post_id
                },
                success: resp => {
                    if (resp.result === "success") {
                        context.emit("delete_a_post", post_id);
                    }
                }
            })

        }
        return {
            is_me,
            delete_a_post,
        }
    }



}




</script>



<style scoped>
.single-card {
    margin-bottom: 10px;
}

button {
    float: right;
}
</style>