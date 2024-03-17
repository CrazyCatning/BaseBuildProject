<template>
  <NavBar />
  <router-view :key="$router.fullPath"/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import NavBar from "./components/NavBar.vue"
export default {
    name: "App",
    components: {
        NavBar,
    }
}

</script>

<style>


body{
    width: 100%;
}


</style>
