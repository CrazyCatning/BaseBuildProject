<template>

    <div class="card">
        <div class="card-body">
            <div v-for="(post, index) in posts.posts" :key="index">

                    <div class="card single-card">
                        <div class="card-body">
                            {{ post.content }}
                        </div>

                    </div>


            </div>
        </div>
    </div>


</template>



<script>


export default {
    name: "UserProfilePosts",

    props: {
        posts: {
            type: Object,
            required: true,
        }
    },



}




</script>



<style scoped>
.single-card {
    margin-bottom: 10px;
}


</style>