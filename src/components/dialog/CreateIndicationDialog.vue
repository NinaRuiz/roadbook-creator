<template>
  <b-modal id="modal-1" title="Crear indicación" ref="modal" scrollable centered>
    <b-form>
      <b-form-group
          id="ig-km-total"
          label="Kilometro total:"
          label-for="ip-total"
      >
        <b-form-input
            id="ip-total"
            v-model="totalkm"
            type="number"
            placeholder="Introduce el kilometro en el que te encontrarás"
            :disabled="indication != null"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group
          id="ig-km-parcial"
          label="Kilometro parcial:"
          label-for="ip-parcial"
      >
        <b-form-input
            id="ip-parcial"
            v-model="parcialKm"
            type="number"
            placeholder="Introduce la diferencia entre el kilometro anterior y el actual"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group
          id="ig-info"
          label="Información extra:"
          label-for="ip-info"
      >
        <b-form-input
            id="ip-info"
            v-model="info"
            type="text"
            placeholder="Introduce información extra"
        ></b-form-input>
      </b-form-group>
      <div style="text-align: center">
        <img v-if="selectedImg.src" :src="selectedImg.src"  :alt="selectedImg.name"/>
      </div>
      <b-button style="width: 100%" @click="onAddImageClick">Añadir imagen de dirección</b-button>
    </b-form>
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
  components: {GalleryDialog},
  props: {
    indication: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      totalkm: 0,
      parcialKm: 0,
      info: "",
      selectedImg: {},
    }
  },
  watch: {
    indication() {
      if (this.indication != null) {
        this.totalkm = this.indication.totalkm;
        this.parcialKm = this.indication.parcialKm;
        this.info = this.indication.info;
        this.selectedImg = this.indication.directionSrc;
      }
    }
  },
  methods: {
    onAddImageClick() {
      (this.$refs["gallery"] as any).$refs.modal.show();
    },
    onSelectImage(image: any) {
      this.selectedImg = image;
    },
    onSaveClick() {
      let indication = {
        totalkm: this.totalkm,
        parcialKm: this.parcialKm,
        info: this.info,
        directionSrc: this.selectedImg,
      }
      this.$emit("save", indication);
      this.totalkm = 0;
      this.parcialKm = 0;
      this.info = "";
      this.selectedImg = {};
      (this.$refs.modal as any).hide();
    },
    onCancelClick() {
      this.totalkm = 0;
      this.parcialKm = 0;
      this.info = "";
      this.selectedImg = {};
      (this.$refs.modal as any).hide();
    }
  }
});
</script>

<style scoped>

</style>