<template>
  <div class="row">
    <div class="col-3" :key="image.id" v-for="image in images">
      <img :src="image.src"  :alt="image.name"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      images: [],
    }
  },
  mounted() {
    this.images = this.$store.getters.images;
  },
})
</script>

<style scoped>

</style>