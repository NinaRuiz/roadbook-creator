import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const images = [
  {id: 1, name: "000a", src: require("@/assets/res/galery/01-duas/000a.gif")},
  {id: 1, name: "000a2", src: require("@/assets/res/galery/01-duas/000a2.gif")},
  {id: 1, name: "000b1", src: require("@/assets/res/galery/01-duas/000b1.gif")},
  {id: 1, name: "000b2", src: require("@/assets/res/galery/01-duas/000b2.gif")},
  {id: 1, name: "000c", src: require("@/assets/res/galery/01-duas/000c.gif")},
  {id: 1, name: "000d", src: require("@/assets/res/galery/01-duas/000d.gif")},
  {id: 1, name: "001a1", src: require("@/assets/res/galery/01-duas/001a1.gif")},
  {id: 1, name: "001a2", src: require("@/assets/res/galery/01-duas/001a2.gif")},
  {id: 1, name: "001b1", src: require("@/assets/res/galery/01-duas/001b1.gif")},
  {id: 1, name: "001b2", src: require("@/assets/res/galery/01-duas/001b2.gif")},
  {id: 1, name: "001c", src: require("@/assets/res/galery/01-duas/001c.gif")},
  {id: 1, name: "001d", src: require("@/assets/res/galery/01-duas/001d.gif")},
  {id: 1, name: "001e1", src: require("@/assets/res/galery/01-duas/001e1.gif")},
  {id: 1, name: "001e2", src: require("@/assets/res/galery/01-duas/001e2.gif")},
  {id: 1, name: "001f1", src: require("@/assets/res/galery/01-duas/001f1.gif")},
  {id: 1, name: "001f2", src: require("@/assets/res/galery/01-duas/001f2.gif")},
  {id: 1, name: "002a", src: require("@/assets/res/galery/01-duas/002a.gif")},
  {id: 1, name: "002b", src: require("@/assets/res/galery/01-duas/002b.gif")},
  {id: 1, name: "002c", src: require("@/assets/res/galery/01-duas/002c.gif")},
  {id: 1, name: "002d", src: require("@/assets/res/galery/01-duas/002d.gif")},
  {id: 1, name: "003a", src: require("@/assets/res/galery/01-duas/003a.gif")},
  {id: 1, name: "003b", src: require("@/assets/res/galery/01-duas/003b.gif")},
  {id: 1, name: "003c", src: require("@/assets/res/galery/01-duas/003c.gif")},
  {id: 1, name: "003d", src: require("@/assets/res/galery/01-duas/003d.gif")},
  {id: 1, name: "004a", src: require("@/assets/res/galery/01-duas/004a.gif")},
  {id: 1, name: "004b", src: require("@/assets/res/galery/01-duas/004b.gif")},
  {id: 1, name: "004c", src: require("@/assets/res/galery/01-duas/004c.gif")},
  {id: 1, name: "004d", src: require("@/assets/res/galery/01-duas/004d.gif")},
  {id: 1, name: "004e", src: require("@/assets/res/galery/01-duas/004e.gif")},
  {id: 1, name: "004f", src: require("@/assets/res/galery/01-duas/004f.gif")},
  {id: 1, name: "004g", src: require("@/assets/res/galery/01-duas/004g.gif")},
  {id: 1, name: "004h", src: require("@/assets/res/galery/01-duas/004h.gif")},
  {id: 1, name: "005a", src: require("@/assets/res/galery/01-duas/005a.gif")},
  {id: 1, name: "005b", src: require("@/assets/res/galery/01-duas/005b.gif")},
  {id: 1, name: "005c", src: require("@/assets/res/galery/01-duas/005c.gif")},
  {id: 1, name: "005d", src: require("@/assets/res/galery/01-duas/005d.gif")},
  {id: 1, name: "006a", src: require("@/assets/res/galery/01-duas/006a.gif")},
  {id: 1, name: "006b", src: require("@/assets/res/galery/01-duas/006b.gif")},
  {id: 1, name: "006c", src: require("@/assets/res/galery/01-duas/006c.gif")},
  {id: 1, name: "006d", src: require("@/assets/res/galery/01-duas/006d.gif")},
  {id: 1, name: "015a", src: require("@/assets/res/galery/01-duas/015a.gif")},
  {id: 1, name: "015b", src: require("@/assets/res/galery/01-duas/015b.gif")},
  {id: 1, name: "015c", src: require("@/assets/res/galery/01-duas/015c.gif")},
  {id: 1, name: "015d", src: require("@/assets/res/galery/01-duas/015d.gif")},
  {id: 1, name: "025a", src: require("@/assets/res/galery/01-duas/025a.gif")},
  {id: 1, name: "025b", src: require("@/assets/res/galery/01-duas/025b.gif")},
  {id: 1, name: "030a", src: require("@/assets/res/galery/01-duas/030a.gif")},
  {id: 1, name: "030b", src: require("@/assets/res/galery/01-duas/030b.gif")},
  {id: 1, name: "031a", src: require("@/assets/res/galery/01-duas/031a.gif")},
  {id: 1, name: "031b", src: require("@/assets/res/galery/01-duas/031b.gif")},
  {id: 1, name: "032a", src: require("@/assets/res/galery/01-duas/032a.gif")},
  {id: 1, name: "032b", src: require("@/assets/res/galery/01-duas/032b.gif")},
  {id: 1, name: "520a", src: require("@/assets/res/galery/01-duas/520a.gif")},
  {id: 1, name: "520b", src: require("@/assets/res/galery/01-duas/520b.gif")},
  {id: 1, name: "520c", src: require("@/assets/res/galery/01-duas/520c.gif")},
  {id: 1, name: "520d", src: require("@/assets/res/galery/01-duas/520d.gif")},
]

export default new Vuex.Store({
  state: {
  },
  getters: {
    images() {
      return images;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})