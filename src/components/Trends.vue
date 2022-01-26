<template>
  <div class="hidden lg:block lg:w-2/5 px-4 py-2">
    <!-- tweet search input -->
    <div class="relative mb-5">
      <input type="text" class="pl-9 rounded-full w-full p-2 bg-gray-100 text-sm focus:ring-1 focus:ring-primary focus:bg-white focus:outline-none">
      <!-- focus:ring-1은 클릭시 테두리 생성 / focus:ring-primary 테두리 색상 변경 -->
      <i class="fas fa-search absolute left-0 ml-3 mt-2 text-sm text-light"></i>
      <!-- relative를 기준으로 absolute의 영역을 잡아줌 -->
    </div>
    <!-- trend for me -->
    <div class="w-full rounded-xl bg-gray-50">
      <div class="flex items-center justify-between px-3 py-1 border-b border-gray-100">
        <!-- items-center - 가운데 정렬 -->
        <span class="text-lg font-bold">나를 위한 트랜드</span>
        <i class="text-center fas fa-cog text-lg text-primary hover:bg-blue-50 p-2 rounded-full"></i>
      </div>
      <div class="border-b border-gray-100 hover:bg-gray-100 px-4 py-2 cursor-pointer" v-for="trend in 3" :key="trend">
        <div class="flex">
          <div class="flex-1 flex flex-col">
            <div class="text-gray-500">대한민국에서 트렌드 중</div>
            <div class="font-bold text-lg">러블리즈</div>
            <div class="text-gray-500">3,564 트윗</div>
          </div>
          <i class="fas fa-ellipsis-h text-gray-500"></i>
        </div>
      </div>
      <div class="px-4 py-2 hover:bg-gray-100">
        <span class="text-primary text-lg">더 보기</span>
      </div>
    </div>
    <!-- follow recommends -->
    <div class="mt-5 w-full rounded-xl bg-gray-50 mb-5">
      <div class="px-3 py-3 border-b border-gray-100">
        <!-- items-center - 가운데 정렬 -->
        <span class="text-lg font-bold">팔로우 추천</span>
      </div>
      <div class="border-b border-gray-100 hover:bg-gray-100 px-4 py-2 cursor-pointer" v-for="trend in 3" :key="trend">
        <div class="flex items-center">
          <!-- flex-col일 경우에는 justify-between 아닐 경우에는 items-center로 -->
          <div>
            <img src="http://picsum.photos/200" class="w-12 h-12 rounded-full mr-2 opacity-80"/>
          </div>
          <div class="flex-1 flex flex-col">
            <div class="font-bold text-lg">아이디</div>
            <div class="text-gray-500">@id</div>
          </div>
          <div>
            <button class="bg-white px-4 py-1 rounded-full hover:bg-blue-100 text-primary font-bold focus:outline-none border-2 border-primary">팔로우</button>
          </div>
        </div>
      </div>
      <div class="px-4 py-2 hover:bg-gray-100">
        <span class="text-primary text-lg">더 보기</span>
      </div>
    </div>
  </div>  
</template>