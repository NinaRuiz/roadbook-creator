<template>
<div>
  <textarea v-model="route"></textarea>
  <button @click="onCreate">Create</button>
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import routes from "@/core/routes";

export default defineComponent({
  name: "CreateRoute",
  data() {
    return {
      route: ""
    }
  },
  methods: {
    onCreate() {
      routes.createRoute(this.route);
    }
  }
})
</script>

<style scoped>

</style>