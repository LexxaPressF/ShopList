<template>
  <div class="bg_app">
    <SectionedList></SectionedList>
    <SectionedList></SectionedList>
    <SimpleList></SimpleList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SectionedList from "@/components/SectionedList.vue";
import SimpleList from "@/components/SimpleList.vue";


export default defineComponent({
  name: 'App',
  components: {
    SimpleList,
    SectionedList,
  },
  created() {
    this.$store.dispatch('fetchStorage')
  }
});
</script>

<style lang="scss">
#app{
  width: 100%;
  height: 100%;
}

.bg_app{
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  gap: 100px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body{
  height: 100%;
}
</style>
