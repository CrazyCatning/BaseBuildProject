<template>

    <div ref="parent" class="gamemap">
        <canvas ref="canvas"></canvas>
    </div>

</template>

<script>
import { GameMap }from '../assets/acripts/GameMap.js'
import { ref, onMounted } from 'vue'
export default {
    name: "GameMap",


    setup() {
        let parent = ref(null);
        let canvas = ref(null);
        onMounted(() => {
            new GameMap(canvas.value.getContext('2d'), parent.value);
        })
        return {
            parent,
            canvas,
        }
    }
}

</script>

<style scoped></style>