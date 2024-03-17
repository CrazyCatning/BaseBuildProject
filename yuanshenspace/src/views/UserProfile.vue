<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
                <UserProfileWrite @post_a_post="post_a_post" v-if="is_me"/>
            </div>
            <div class="col-9">
                <UserProfilePosts  :posts="posts" @click="delete_a_post"/>
            </div>
        </div>

    </ContentBase>

</template>

<script>
import UserProfileInfo from '@/components/UserProfileInfo.vue'
import ContentBase from "../components/ContentBase.vue"
import UserProfilePosts from '@/components/UserProfilePosts.vue'
import UserProfileWrite from '@/components/UserProfileWrite.vue'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import $ from 'jquery'
import { computed } from 'vue'
export default {
    name: "UserProfileView",
    components: {
        ContentBase,
        UserProfileInfo,
        UserProfilePosts,
        UserProfileWrite,
    },

    setup() {
        const route = useRoute();
        const store = useStore();

        const userId =  parseInt(route.params.userId);

        const user = reactive({});
        const posts = reactive({});

        $.ajax({
            url: 'https://app165.acapp.acwing.com.cn/myspace/getinfo/',
            type: "GET",
            data: {
                user_id: userId
            },
            headers: {
                'Authorization': "Bearer " + store.state.user.access,
            },
            success: resp => {
                user.id = resp.id;
                user.photo = resp.photo;
                user.username = resp.username;
                user.followerCount = resp.followerCount;
                user.is_follow = resp.is_follow;
            }

        });
        $.ajax({
            url: 'https://app165.acapp.acwing.com.cn/myspace/post/',
            type: "GET",
            data: {
                user_id: userId
            },
            headers: {
                'Authorization': "Bearer " + store.state.user.access,
            },
            success: resp => {
                posts.count = resp.length;
                posts.posts = resp; 
            }

        });



        const follow = () => {
            if (user.is_follow) return ;
            user.is_follow = true;
            user.followCount ++;
        };

        const unfollow = () => {
            if (!user.is_follow) return ;
            user.is_follow = false;
            user.followCount --;
        };




        const post_a_post = (content) => {
            posts.count ++;
            posts.posts.unshift({
                id: 1,
                userid: 1,
                content: content,
            })
        }


        const delete_a_post = post_id => {
            posts.posts = posts.posts.filter(posts_id => posts_id !== post_id);
            posts.count = posts.posts.length;
        }

        const is_me = computed(() => userId === store.state.user.id);


        return {
            user,
            follow,
            unfollow,
            posts,
            post_a_post,
            is_me,
            delete_a_post,
        }
    }
}
</script>

<style></style>