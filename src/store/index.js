import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    records: [
      {
        _id: "",
        kata: "",
        keterangan: "",
        tipe: "",
      },
    ],

    artiNama: [
      {
        id: "",
        judul_nama: "",
        kelamin_nama: null,
        asal_nama: "",
        isi_nama: "",
        perfix_nama: "",
      },
    ],

    glosarium: [
      {
        id_glos: "",
        judul_glos: "",
        bid_glos: [],
        isi_glos: "",
      },
    ],

    Indglosarium: [
      {
        id_glos: "",
        judul_eng_glos: "",
        judul_ind_glos: "",
        isi_eng_glos: "",
        isi_ind_glos: "",
        bid_glos: [],
      },
    ],

    adv: [
      {
        id: "",
        title: "",
        image: "",
        detail: "",
      },
    ],

    engIn: [
      {
        id: "",
        judul_artikel: "",
        isi_artikel: "",
      },
    ],

    inEng: [
      {
        id: "",
        judul_artikel: "",
        isi_artikel: "",
      },
    ],
  },

  getters: {
    getField,
  },

  mutations: {
    updateField,

    addRecordsRow(state) {
      state.records.push({
        kata: "",
        keterangan: "",
        tipe: "",
      });
    },

    addArtiNamaRow(state) {
      state.artiNama.push({
        judul_nama: "",
        kelamin_nama: null,
        asal_nama: "",
        isi_nama: "",
        perfix_nama: "",
      });
    },

    addGlosRow(state) {
      state.glosarium.push({
        judul_glos: "",
        bid_glos: [],
        isi_glos: "",
      });
    },

    addIndglosariumRow(state) {
      state.Indglosarium.push({
        judul_eng_glos: "",
        judul_ind_glos: "",
        isi_eng_glos: "",
        isi_ind_glos: "",
        bid_glos: [],
      });
    },

    addEngin(state) {
      state.engIn.push({
        judul_artikel: "",
        isi_artikel: "",
      });
    },

    addInEng(state) {
      state.inEng.push({
        judul_artikel: "",
        isi_artikel: "",
      });
    },
  },
  actions: {},
  modules: {},
});
