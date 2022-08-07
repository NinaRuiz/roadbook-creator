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
          id="ig-degrees"
          label="Grados:"
          label-for="ip-degrees"
      >
        <b-form-input
            id="ip-degrees"
            v-model="degrees"
            type="number"
            placeholder="Introduce los grados de giro"
        ></b-form-input>
      </b-form-group>
      <div style="text-align: center">
        <img v-if="selectedImg.src" :src="selectedImg.src"  :alt="selectedImg.name"/>
      </div>
      <b-button style="width: 100%" @click="onAddImageClick" variant="primary">Añadir imagen de dirección</b-button>
      <div v-if="this.info.length > 0" class="row">
        <div class="col" v-for="(inf, index) in info" :key="index">
          <div v-if="inf.type === 'string'">
            <h4>{{ inf.content }}</h4>
            <div style="text-align: end">
              <b-icon-trash style="cursor: pointer" @click="onDeleteInfo(index)"></b-icon-trash>
            </div>
          </div>
          <div v-if="inf.type === 'image'" style="text-align: center">
            <img v-if="inf.content.src" :src="inf.content.src"  :alt="inf.content.name"/>
            <div style="text-align: end">
              <b-icon-trash style="cursor: pointer" @click="onDeleteInfo(index)"></b-icon-trash>
            </div>
          </div>
        </div>
      </div>
      <b-button style="width: 100%" @click="onAddInfo">Añadir informacion</b-button>
    </b-form>
    <GalleryDialog ref="gallery" @select="onSelectImage" :is-info="true"/>
    <AddInfoDialog ref="info" @save="onSaveInfo"/>
    <template #modal-footer>
      <b-button @click="onSaveClick">Guardar</b-button>
      <b-button @click="onCancelClick">Cancelar</b-button>
    </template>
  </b-modal>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import GalleryDialog from "@/components/dialog/GalleryDialog.vue";
import AddInfoDialog from "@/components/dialog/AddInfoDialog.vue";

export default defineComponent({
  components: {GalleryDialog, AddInfoDialog},
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
      info: [] as any[],
      selectedImg: {},
      degrees: 0,
    }
  },
  watch: {
    indication() {
      if (this.indication != null) {
        this.totalkm = this.indication.totalkm;
        this.parcialKm = this.indication.parcialKm;
        if (typeof this.indication.info === 'string') {
          this.info.push({type: 'string', content: this.indication.info});
        } else {
          this.info = this.indication.info;
        }
        this.selectedImg = this.indication.directionSrc;
        this.degrees = this.indication.degrees;
      }
    }
  },
  methods: {
    onSaveInfo(info: any) {
      this.info.push(info);
    },
    onAddInfo() {
      (this.$refs["info"] as any).$refs.modal.show();
    },
    onDeleteInfo(index: number) {
      let copyInfo = this.info;
      delete copyInfo[index];
      this.info = copyInfo.filter((x) => x);
    },
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
        degrees: this.degrees,
      }
      this.$emit("save", indication);
      this.totalkm = 0;
      this.parcialKm = 0;
      this.info = [];
      this.selectedImg = {};
      this.degrees = 0;
      (this.$refs.modal as any).hide();
    },
    onCancelClick() {
      this.totalkm = 0;
      this.parcialKm = 0;
      this.info = "";
      this.selectedImg = {};
      this.degrees = 0;
      (this.$refs.modal as any).hide();
    }
  }
});
</script>

<style scoped>

</style>