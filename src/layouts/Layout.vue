<template>
  <component :is="layout"></component>
</template>

<script>
import DefaultLayout from "./DefaultLayout.vue"
import EmptyLayout from "./EmptyLayout.vue"
import {computed} from 'vue' // 상황에 맞게 계산해주는 역할?
import {useRoute} from 'vue-router'

export default {
  components: {DefaultLayout,EmptyLayout},
  setup(){
    const route = useRoute()
    const layout = computed(() => route.meta.layout || 'DefaultLayout')

    return {layout} // 위에서 사용하려면 리턴 필수 
  },
}
</script>

<style>

</style>