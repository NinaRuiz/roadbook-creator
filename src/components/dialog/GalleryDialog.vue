<template>
  <b-modal ref="modal" size="xl" scrollable centered title="Galeria">
    <div class="row">
      <div class="col-3" :key="image.id" v-for="image in images">
        <img :src="image.src"  :alt="image.name" @click="onImageClick(image)" height="100" width="100"/>
      </div>
    </div>
  </b-modal>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    isInfo: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data() {
    return {
      images: [],
    }
  },
  mounted() {
    if (!this.isInfo) {
      this.importAll(require.context('../../assets/res/fia/', true, /\.svg$/));
      this.importAll(require.context('../../assets/res/fia/', true, /\.gif$/));
      this.importAll(require.context('../../assets/res/fia/', true, /\.png$/));
    } else {
      this.importAll(require.context('../../assets/res/galery/', true, /\.gif$/));
      this.importAll(require.context('../../assets/res/objects/', true, /\.gif$/));
      this.importAll(require.context('../../assets/res/objects/', true, /\.png$/));
      this.importAll(require.context('../../assets/res/objects/', true, /\.svg$/));
    }
  },
  watch: {
    isInfo() {
      this.images = [];
      if (!this.isInfo) {
        this.importAll(require.context('../../assets/res/fia/', true, /\.svg$/));
        this.importAll(require.context('../../assets/res/fia/', true, /\.gif$/));
        this.importAll(require.context('../../assets/res/fia/', true, /\.png$/));
      } else {
        this.importAll(require.context('../../assets/res/galery/', true, /\.gif$/));
        this.importAll(require.context('../../assets/res/objects/', true, /\.gif$/));
        this.importAll(require.context('../../assets/res/objects/', true, /\.png$/));
        this.importAll(require.context('../../assets/res/objects/', true, /\.svg$/));
      }
    }
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.images.push({ src: r(key), name: key, id: this.images.length })));
    },
    onImageClick(image) {
      this.$emit("select", image);
      this.$refs.modal.hide();
    }
  }
});
</script>

<style scoped>

</style>