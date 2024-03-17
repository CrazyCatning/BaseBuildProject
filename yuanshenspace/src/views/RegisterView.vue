<template>
    <ContentBase>
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col col-lg-2">
                    <form>
                        <div class="mb-3">
                            <label for="username" class="form-label">用户名</label>
                            <input type="text" class="form-control" id="username">

                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">密码</label>
                            <input type="password" class="form-control" id="password">
                        </div>
                        <div class="mb-3">
                            <label for="password_confirm" class="form-label">确认密码</label>
                            <input type="password" class="form-control" id="password_confirm">
                        </div>
                        <div>{{ error_message }}</div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </ContentBase>

</template>

<script>
import ContentBase from "../components/ContentBase.vue"
import $ from 'jquery'
import { ref } from 'vue'
import { useStore } from "vuex"
import router from "@/router/index"
export default {
    name: "RegisterView",
    components: {
        ContentBase,
    },

    setup() {
        const store = useStore();
        let username = ref('');
        let password = ref('');
        let confirm_password = ref('');
        let error_message = ref('')
        const register = () => {
            error_message = "";
            $.ajax({
                url: 'https://app165.acapp.acwing.com.cn/myspace/user/',
                type: "post",
                data: {
                    username: username.value,
                    password: password.value,
                    password_confirm: confirm_password.value,
                },
                success: resp => {
                    if (resp.result === "success") {
                        store.dispatch("login", {
                            username: username.value,
                            password: password.value,
                            success() { router.push({ name: 'userlist_index' }) },
                            error() {error_message.value = "系统异常,请稍候充值"}
                        })
                    } else {
                        error_message.value = resp.result;
                    }
                }
            });
        }
        return {
            error_message,
            register,
        }
    }
} 


</script>

<style scoped>
button {
    width: 100%;
}
</style>