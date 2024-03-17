<template>
    <div class="playground">
        <GameMap />
    </div>

</template>


<script>
import GameMap from './GameMap'
export default {
    name: "PlayGround",
    component: {
        GameMap,
    }
}

</script>


<style>
div.playground {
    width: 60vw;
    height: 70vh;
    background-color: aquamarine;
    margin: 40px auto;
}

</style>