<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
                <UserProfileWrite @post_a_post="post_a_post" />

            </div>
            <div class="col-9">
                <UserProfilePosts  :posts="posts"/>
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
export default {
    name: "UserProfileView",
    components: {
        ContentBase,
        UserProfileInfo,
        UserProfilePosts,
        UserProfileWrite,
    },

    setup() {
        const user = reactive({
            id: 1,
            username: "nnns",
            lastName: "nnn",
            firstName: "s",
            is_follow: false,
            followCount: 0,

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


        const posts = reactive({
            count: 3,
            posts: [
                {
                    id: 1,
                    userid: 1,
                    content: "1111111111111",
                },
                {
                    id: 1,
                    userid: 1,
                    content: "22222222222222",
                },
                {
                    id: 1,
                    userid: 1,
                    content: "33333333333333333",
                }
            ]
        });

        const post_a_post = (content) => {
            posts.count ++;
            posts.posts.unshift({
                id: 1,
                userid: 1,
                content: content,
            })
        }




        return {
            user,
            follow,
            unfollow,
            posts,
            post_a_post,
        }
    }
}
</script>

<style></style>