<template>
  <div>
    <b-card>
      <b-card-header>
        <div class="row">
          <div class="col">Crear Roadbook</div>
          <div class="col" style="text-align: end">
            <b-button @click="onDownloadClick">Descargar PDF</b-button>
          </div>
        </div>
      </b-card-header>
      <b-card-body>
        <b-form>
          <b-form-group
              id="ig-title"
              label="Título:"
              label-for="ip-title"
          >
            <b-form-input
                id="ip-title"
                v-model="title"
                type="text"
                placeholder="Introduce un título"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="ig-total-km"
              label="Kilometros totales:"
              label-for="ip-total-km"
          >
            <b-form-input
                id="ip-total-km"
                v-model="totalKm"
                type="number"
                placeholder="Introduce los kilometros totales"
                required
            ></b-form-input>
          </b-form-group>

          <div class="row">
            <div class="col">
              <b-form-group
                  id="ig-init"
                  label="Localidad de inicio:"
                  label-for="ip-init"
              >
                <b-form-input
                    id="ip-init"
                    v-model="initLocation"
                    type="text"
                    placeholder="Introduce la localidad de inicio"
                    required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col">
              <b-form-group
                  id="ig-end"
                  label="Localidad final:"
                  label-for="ip-end"
              >
                <b-form-input
                    id="ip-end"
                    v-model="endLocation"
                    type="text"
                    placeholder="Introduce la localidad final"
                    required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <b-form-group
              id="ig-des"
              label="Descripción:"
              label-for="ip-total-km"
          >
            <b-form-textarea
                id="ip-des"
                v-model="description"
                type="text"
                placeholder="Introduce una descripcion"
            ></b-form-textarea>
          </b-form-group>
        </b-form>
        <b-card>
          <b-card-header>
            <div class="row">
              <div class="col">Indicaciones</div>
              <div class="col" style="text-align: end">
                <b-button @click="onAddClick">+</b-button>
              </div>
            </div>
          </b-card-header>
          <b-card-body>
            <b-table v-if="indications.length > 0" :items="indications" :fields="tableFields">
              <template #cell(directionSrc)="data">
                <div style="text-align: center">
                  <img v-if="data.value.src" :src="data.value.src" :alt="data.value.name"/>
                </div>
              </template>
              <template #cell(actions)="data">
                <div style="text-align: end">
                  <b-icon-trash style="cursor: pointer" @click="onDeleteIndication(data.index)"></b-icon-trash>
                </div>
              </template>
            </b-table>
          </b-card-body>
        </b-card>
      </b-card-body>
    </b-card>
    <CreateIndicationDialog ref="indication-dialog" @save="onSaveIndication"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CreateIndicationDialog from "@/components/dialog/CreateIndicationDialog.vue";
import Routes from "@/core/routes";

export default defineComponent({
  components: {CreateIndicationDialog},
  data() {
    return {
      tableFields: [
        {key: 'totalkm', label: 'Kilometro total'},
        {key: 'parcialKm', label: 'Kilometro parcial'},
        {key: 'directionSrc', label: 'Dirección'},
        {key: 'info', label: 'Información'},
        {key: 'actions', label: ''}
      ],
      title: "",
      totalKm: 0,
      initLocation: "",
      endLocation: "",
      description: "",
      indications: [] as any[],
      finishedRoadbook: {},
    }
  },
  mounted() {
    let oldRoadbook = localStorage.getItem("cRoadbook");
    if (oldRoadbook) {
      const parsedRoadbook = JSON.parse(oldRoadbook);
      this.title = parsedRoadbook.title;
      this.totalKm = parsedRoadbook.totalKm;
      this.initLocation = parsedRoadbook.initLocation;
      this.endLocation = parsedRoadbook.endLocation;
      this.description = parsedRoadbook.description;
      this.indications = parsedRoadbook.indications;
    }
  },
  methods: {
    onDeleteIndication(index: number) {
      let copyIndications = this.indications;
      delete copyIndications[index];
      this.indications = copyIndications.filter((x) => x);
      this.saveRoadbook();
    },
    onDownloadClick() {
      this.saveRoadbook();
      Routes.createRoute(this.finishedRoadbook);
    },
    onAddClick() {
      (this.$refs["indication-dialog"] as any).$refs.modal.show()
    },
    onSaveIndication(indication: any) {
      this.indications.push(indication);
      this.saveRoadbook();
    },
    saveRoadbook() {
      this.finishedRoadbook = {
        title: this.title,
        totalKm: this.totalKm,
        initLocation: this.initLocation,
        endLocation: this.endLocation,
        description: this.description,
        indications: this.indications,
      }
      localStorage.setItem("cRoadbook", JSON.stringify(this.finishedRoadbook));
    }
  }
});
</script>

<style scoped>

</style>