import { createStore } from 'vuex'

// Разделение на секции
type section = {
  name: string,
  products: string[]
}

export default createStore({
  actions: {
    fetchStorage: (ctx) => {
      ctx.commit('fetchStorage')
    }
  },
  mutations: {
    fetchStorage: (state): void => {
      const data = JSON.parse(localStorage.getItem('data') || '')

      state.products = data.products || ['рыба', 'греча']
      state.productsInSections = data.productsInSections || [{name: 'мясо', products: ['рыба'] }, {name: 'овощи', products: ['морковь', 'капуста'] }]
      state.dishes = data.dishes || [{name: 'рыба с гречкой', products: ['рыба','греча']}]
      state.shoppingList = data.shoppingList || ['рыба','греча']
    }
  },
  state: {
    // products состоит из объектов - разделов с продуктами
    products: [] as string[],
    productsInSections: [] as section[],
    dishes: [] as section[],
    shoppingList: [] as string[]
  },
  getters: {
    productsInSections: state => state.productsInSections,
  }
})
