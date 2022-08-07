<template>
  <b-modal id="modal-1" title="Añadir información" ref="modal" scrollable centered>
    <b-form-select v-model="selectedType" :options="types"></b-form-select>
    <div v-if="selectedType === 'string'">
      <b-form-group
          id="ig-info"
          label="Información:"
          label-for="ip-info"
      >
        <b-form-input
            id="ip-info"
            v-model="content"
            type="text"
            placeholder="Introduce la información"
        ></b-form-input>
      </b-form-group>
    </div>
    <div v-if="selectedType === 'image'">
      <div style="text-align: center" v-if="content.src">
        <img v-if="content.src" :src="content.src"  :alt="content.name"/>
      </div>
      <b-button style="width: 100%" @click="onAddImageClick" variant="primary">Añadir imagen</b-button>
    </div>
    <GalleryDialog ref="gallery" @select="onSelectImage"/>
    <template #modal-footer>
      <b-button @click="onSaveClick">Guardar</b-button>
      <b-button @click="onCancelClick">Cancelar</b-button>
    </template>
  </b-modal>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import GalleryDialog from "@/components/dialog/GalleryDialog.vue";

export default defineComponent({
  components: { GalleryDialog },
  data() {
    return {
      types: [
        { value: null, text: 'Selecciona un tipo' },
        { value: 'string', text: 'Texto' },
        { value: 'image', text: 'Imagen' },
      ],
      selectedType: null,
      content: "",
    }
  },
  methods: {
    onAddImageClick() {
      (this.$refs["gallery"] as any).$refs.modal.show();
    },
    onSelectImage(image: any) {
      this.content = image;
    },
    onSaveClick() {
      let info = {
        type: this.selectedType,
        content: this.content,
      }
      this.$emit("save", info);
      this.selectedType = null;
      this.content = "";
      (this.$refs.modal as any).hide();
    },
    onCancelClick() {
      this.selectedType = null;
      this.content = "";
      (this.$refs.modal as any).hide();
    }
  }
});
</script>

<style scoped>

</style>