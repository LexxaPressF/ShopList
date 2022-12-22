<template>
  <div class="list">
    <div class="icons">dad</div>
    <div class="list_wrapper">
      <h1>Продукты</h1>
      <div class="section_wrapper">
        <SectionObj v-for="section in productsInSections" :key="section.name"
                    :name='section.name'
                    :recipe='section.products'/>
      </div>
    </div>
  </div>
</template>

<script>
import SectionObj from "@/components/SectionObj.vue";
import { mapGetters } from 'vuex'

export default {
  name: "SectionedList",
  components: {SectionObj},
  data() {
    return{

  }
  },
  computed: {
    ...mapGetters({
      productsInSections: "productsInSections"
    }),
  },
}
</script>

<style scoped>
.icons{
  width: 100%;
  margin-top: 20px;
  text-align: end;
}

.list{
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 100%;
}

.list_wrapper{
  width:100%;
  height:100%;

  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  place-items: center;
  border: aquamarine solid 5px;
  border-radius: 10px;
}

.section_wrapper{
  margin: 30px 0 40px 0;
  width: 100%;
}


</style>