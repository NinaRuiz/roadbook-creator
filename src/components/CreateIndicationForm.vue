<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
          id="ig-total-km"
          label="Kilometros totales:"
          label-for="ipt-total-km"
          description="El kilometro de la ruta en la que se encuentra esta indicación"
      >
        <b-form-input
            id="ipt-total-km"
            v-model="form.totalkm"
            type="number"
            placeholder="Indica el kilometro"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="ig-partial-km" label="Kilometros parciales:" label-for="ipt-partial-km" description="Los kilometros de diferencia entre la indicación anterior.">
        <b-form-input
            id="ipt-partial-km"
            v-model="form.parcialKm"
            placeholder="Indica los kilometros parciales"
            required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <GalleryComponent />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import GalleryComponent from "@/components/GalleryComponent.vue";

export default defineComponent({
  components: {GalleryComponent},
  data() {
    return {
      form: {
        totalkm: 0,
        parcialKm: 0,
        directionImage: "",
        informationImage: "",
      },
      show: true
    }
  },
  methods: {
    onSubmit(event: any) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event: any) {
      event.preventDefault()
      this.form.totalkm = 0;
      this.form.parcialKm = 0;
      this.form.directionImage = "";
      this.form.informationImage = "";
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
});
</script>