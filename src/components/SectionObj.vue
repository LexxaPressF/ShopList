<template>
<div class="wrapper">
  <div class="name">
    {{name}}
  </div>
  <div class="recipe">
    <button class="ingredient" v-for="item in recipe" :key="item" >
      {{item}}
    </button>
    <button>ADD</button>
  </div>
</div>
</template>

<script>
export default {
  name: "SectionObj",
  props: {
    name: {
      type: String,
      required: true
    },
    recipe: {
      type: Array,
      required: false
    }
},

}
</script>

<style scoped lang="scss">
.wrapper{
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
}

.name{
  text-align: center;
  font-size: 1.3em;
  width: 100%;
  background: aquamarine;
}

</style>