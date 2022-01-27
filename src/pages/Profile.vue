<template>
  <div class="flex-1 flex">
    <!-- profile section -->
    <div class="flex-1 flex flex-col border-r border-color">
      <!-- title -->
      <div class="px-3 py-1 flex border-color border-b">
        <button class="mr-4">
          <i class="fas fa-arrow-left text-primary p-3 rounded-full hover:bg-blue-50"></i>
        </button>
        <div class="flex flex-col">
          <span class="font-extrabold text-lg">닉네임</span>
          <span class="text-gray text-xs">200 트윗</span>          
        </div>

      </div>
      <!-- background image -->
      <div class="bg-gray-300 h-40 relative flex-none">
        <div class="w-28 h-28 border-4 border-white bg-gray-200 rounded-full absolute -bottom-14 left-2">
          <img src="http://picsum.photos/200" class="rounded-full opacity-90 hover:opacity-100 cursor-pointer"/>
        </div>
      </div>
      <!-- profile edit button -->
      <div class="text-right mt-2 mr-2">
        <!-- text-right - 오른쪽 정렬 -->
        <button class="border text-sm border-primary px-3 py-2 font-bold hover:bg-blue-50 bg-white text-primary rounded-full ">프로필 수정</button>
      </div>
      <!-- user info -->
      <div class="mx-3 mt-2">
        <div class="font-extrabold text-lg">닉네임</div>
        <div class="text-gray">@아이디</div>
        <div>
          <span class="text-gray mr-1">가입일:</span>
          <span class="text-gray">2022년 1월</span>
        </div>
        <div>
          <span class="font-bold mr-1">28</span>
          <span class="text-gray mr-3">팔로우 중</span>
          <span class="font-bold mr-1">7</span>
          <span class="text-gray">팔로워</span>
        </div>
      </div>
      <!-- tab -->
      <div class="flex border-b border-color mt-3">
        <div class="py-3 text-primary font-bold border-b border-primary text-center w-1/4 hover:bg-blue-50 cursor-pointer hover:text-primary">트윗</div>
        <div class="py-3 text-gray font-bold text-center w-1/4 hover:bg-blue-50 cursor-pointer hover:text-primary">트윗</div>
        <div class="py-3 text-gray font-bold text-center w-1/4 hover:bg-blue-50 cursor-pointer hover:text-primary">트윗</div>        
        <div class="py-3 text-gray font-bold text-center w-1/4 hover:bg-blue-50 cursor-pointer hover:text-primary">트윗</div>
      </div>
      <!-- trend section -->
      <div class="overflow-y-auto">
        <Tweet v-for="tweet in 10" :key="tweet"/>
      </div>
    </div>
    <!-- trend section -->
    <Trends/>
  </div>
</template>

<script>
import Trends from "../components/Trends.vue";
import Tweet from "../components/Tweet.vue";
export default {
    components: { Trends,Tweet },
}
</script>

<style>

</style>