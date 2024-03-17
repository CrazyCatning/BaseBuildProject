<template>
    <div class="card">
        <div class="card-body">

            <div class="form-floating">
                <textarea v-model="content" class="form-control" placeholder="Leave a comment here" id="book"
                    style="height: 100px"></textarea>
                <label for="book"></label>
            </div>
            <button @click="post_a_post" class="btn btn-info">发帖</button>
        </div>
    </div>


</template>



<script>
import { ref } from 'vue'
import $ from 'jquery'
import { useStore } from 'vuex';
export default {
    name: "UserProfileWrite",

    setup(props, context) {
        let content = ref('');
        const store = useStore();
        const post_a_post = () => {
            $.ajax({
                url: 'https://app165.acapp.acwing.com.cn/myspace/post/',
                type: "POST",
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                data: {
                    content: content.value
                },
                success: resp => {
                    if(resp.result === "success") {
                        context.emit('post_a_post', content.value);
                        content.value = "";
                    } 
                }
            })

            
        }
        
        return {
            content,
            post_a_post,
        }

    }



}
</script>



<style scoped>

button {
    margin-top: 10px;
    width: 100%;
}

</style>