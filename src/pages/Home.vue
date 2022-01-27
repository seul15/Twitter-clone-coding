<template>
  <!-- main part -->
  <div class="flex-1 border-r border-gray-100 overflow-y-auto">
    <!-- overflow-y-auto - 메인 섹션에서 오버플로우가 일어났을때 스크롤 생성 -->
    <div class="flex flex-col">
      <!-- page title -->
      <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">홈</div>
    </div>
    <!-- tweeting section -->
    <div class="flex px-3 py-3 border-b-8 border-gray-100">
      <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"/>
      <div class="ml-2 flex-1 flex-col">
        <textarea placeholder="무슨 일이 일어나고 있나요?" class="w-full text-lg font-bold focus:outline-none resize-none "></textarea>
        <!-- 안드로이드 스튜디오에서 texthint 같은 느낌 -->
        <div class="text-right">
          <button class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
          <!-- padding -> 내부 간격 설정 / margin -> 외부 간격 설정 -->
        </div>
      </div>
    </div>
    <!-- tweets -->
    <Tweet/>
  </div>
  <!-- trend part -->
  <Trends/>  
</template>

<script>
import Trends from '../components/Trends.vue'
import Tweet from '../components/Tweet.vue'
export default {
  components:{Trends,Tweet},
}
</script>

<style>

</style>