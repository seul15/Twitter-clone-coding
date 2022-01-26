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
    <div class="flex px-3 py-3 border-b border-gray-100" v-for="tweet in 10" :key="tweet">
      <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"/>
      <div class="ml-3 flex-1 flex flex-col space-y-1">
        <div class="text-sm space-x-1">
          <!-- space-x-1 - 각각의 요소 사이마다 간격을 줌 -->
          <span class="font-bold">닉네임</span>
          <span class="text-gray-500 text-xs">@아이디</span>
          <span>.</span>
          <span class="text-gray-500 text-xs">시간</span>
        </div>
        <!-- tweet body -->
        <div>대충 내용~~~~</div>
        <!-- tweet actions -->
        <div class="flex justify-between">
          <div class="text-gray-500 hover:text-primary">
            <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
            <span class="ml-1 text-sm">1</span>
          </div>
          <div class="text-gray-500 hover:text-green-500">
            <i class="fas fa-retweet hover:bg-green-50 rounded-full p-2"></i>
            <span class="ml-1 text-sm">2</span>
          </div>
          <div class="text-gray-500 hover:text-red-500">
            <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
            <span class="ml-1 text-sm">3</span>
          </div>                
          <div class="text-gray-500 hover:text-primary">
            <i class="far fa-share-square hover:bg-blue-50 rounded-full p-2"></i>
          </div>                                           
        </div>
      </div>
    </div>
  </div>
  <!-- trend part -->
  <Trends/>  
</template>

<script>
import Trends from '../components/Trends.vue'
export default {
  components:{Trends},
}
</script>

<style>

</style>