<template>
  <!-- <h1 class="text-lg bg-gray-900 text-white ml-10 mt-4 pl-3 pt-3 hover:bg-gray-600 hover:text-red-600 ">hello world</h1>  -->
  <!-- bg - 배경 text - 텍스트 색 ml - 왼쪽 마진 mt - 위쪽 마진 pl - 왼쪽 여백 pt - 위쪽 여백 hover 마우스 올렸을 경우-->
  <div class="flex h-screen container mx-auto">
    <!-- container - 화면의 크기가 일정 이상으로 늘어났을때 여백이 존재  / mx-auto - 여백이 오른쪽 왼쪽에 고루 존재-->
    <!-- side section -->
    <!-- h-screen으로 높이는 화면 전체로 선택 -->
    <div class="w-20 lg:w-1/4 pt-5 lg:ml-10 flex flex-col justify-between border-r border-gray-100">
    <!-- justify-between - div 사이에 내용들을 일정한 간격으로 띄어놓음 -->
      <div class="flex flex-col items-center lg:items-start">
        <!-- lg: - 화면이 확장됬을때를 의미 -->
        <!-- twitter logo -->
        <i class="fab fa-twitter text-3xl text-primary lg:ml-4 mb-3"></i>
        <!-- sidemenu icons -->
        <div class="flex flex-col items-start space-y-1">
          <!-- flex-col은 가로로 정렬 / items-start는 텍스트와 이미지만 적용 / space-y-1은 아이콘 사이에 간격을 1씩 부여-->
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="fas fa-home fa-fw text-2xl"></i>
            <!-- 홈 버튼 / fa-fw 너비를 일정히-->
            <span class="ml-5 text-lg hidden lg:inline-block">홈</span>
            <!-- hidden lg:inline-block는 화면 크기에 따라 글을 숨김 -->
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="fas fa-hashtag fa-fw text-2xl"></i>
            <!-- 홈 버튼 -->
            <span class="ml-5 text-lg hidden lg:inline-block">탐색하기</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="far fa-bell fa-fw text-2xl"></i>
            <!-- 홈 버튼 -->
            <span class="ml-5 text-lg hidden lg:inline-block">알림</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="far fa-envelope fa-fw text-2xl"></i>
            <!-- 홈 버튼 -->
            <span class="ml-5 text-lg hidden lg:inline-block">쪽지</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="far fa-bookmark fa-fw text-2xl"></i>
            <!-- 홈 버튼 -->
            <span class="ml-5 text-lg hidden lg:inline-block">북마크</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="far fa-list-alt fa-fw text-2xl"></i>
            <!-- 홈 버튼 -->
            <span class="ml-5 text-lg hidden lg:inline-block">리스트</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="far fa-user fa-fw text-2xl"></i>
            <!-- 홈 버튼 -->
            <span class="ml-5 text-lg hidden lg:inline-block">프로필</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
            <!-- 홈 버튼 -->
            <span class="ml-5 text-lg hidden lg:inline-block">더보기</span>
          </div>
        </div>
        <!-- tweet button -->
        <div class="w-full lg:pr-3 flex justify-center"> 
          <!-- justify - 가로축 items - 세로축 -->
          <!-- 오른쪽에 마진을 3을 줌 -->
          <button class="mt-3 bg-primary text-white lg:w-full w-12 h-12 rounded-full hover:bg-dark focus:outline-none">
            <span class="hidden lg:block">트윗</span>
            <i class="fas fa-plus lg:hidden"></i>
            <!-- 일정 크기 이상이 되면 트윗 글씨 대신에 plus 아이콘이 나타남 -->
          </button>
        <!-- 사이트 크기에 따라 버튼의 크기도 반응해야 하므로 w를 지정하는 것이 아닌 full로 입력해주어야 함 -->
        </div>
      </div>
      <!-- profile button -->
      <div class="lg:pr-3 mb-3"> 
          <!-- 오른쪽에 마진을 3을 줌 -->
        <button class="hidden lg:flex mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 items-center">
          <!-- flex를 통해서 하나로 묶는다고 볼 것 / items-center 밑의 태그들을 중간에 배치 -->
          <img src="http://picsum.photos/10" class="w-10 h-10 rounded-full"/>
          <div class="lg:ml-2 hidden lg:block">
            <div class="text-sm font-bold">seul.com</div>
            <div class="text-xs text-gray-500 text-left">@seul</div>
          </div>
          <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs"></i> 
        </button>
        <!-- 사이트 크기에 따라 버튼의 크기도 반응해야 하므로 w를 지정하는 것이 아닌 full로 입력해주어야 함 -->
        <div class="lg:hidden flex justify-center">
          <!-- 화면이 커질때 프로필 상태 -->
          <img src="http://picsum.photos/10" class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"/>
          <!-- cursor-pointer - 커서를 올렸을때 포인터로 바뀜 / opacity - 투명도 -->
        </div>
      </div>
    </div>
    <!-- w-1/4는 너비 4분의 1만 선택 2xl은 텍스트 크기 설정  -->
    <!-- main section -->
    <div class="flex-1 flex h-screen">
        <!-- 스크린 높이에 맞춤 -->
      <Messages/>
    </div>
    <!-- w-3/4로 나머지 부분을 선택해도 되고 flex-1 -->
  </div>
</template>

<script>
import Messages from './pages/Messages.vue'
import Notifications from './pages/Notifications.vue'
export default {
  components:{Notifications,Messages},
  setup(){},
}
</script>

<style>

</style>