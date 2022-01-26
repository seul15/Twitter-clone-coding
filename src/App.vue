<template>
  <!-- <h1 class="text-lg bg-gray-900 text-white ml-10 mt-4 pl-3 pt-3 hover:bg-gray-600 hover:text-red-600 ">hello world</h1>  -->
  <!-- bg - 배경 text - 텍스트 색 ml - 왼쪽 마진 mt - 위쪽 마진 pl - 왼쪽 여백 pt - 위쪽 여백 hover 마우스 올렸을 경우-->
  <div class="flex h-screen">
    <!-- side section -->
    <!-- h-screen으로 높이는 화면 전체로 선택 -->
    <div class="w-1/4 pt-5 ml-10 flex flex-col justify-between border-r border-gray-100">
    <!-- justify-between - div 사이에 내용들을 일정한 간격으로 띄어놓음 -->
      <div class="flex flex-col items-center lg:items-start">
        <!-- lg: - 화면이 확장됬을때를 의미 -->
        <!-- twitter logo -->
        <i class="fab fa-twitter text-3xl text-primary lg:ml-4 mb-3"></i>
        <!-- sidemenu icons -->
        <div class="flex flex-col items-start space-y-1">
          <!-- flex-col은 가로로 정렬 / items-start는 텍스트와 이미지만 적용 / space-y-1은 아이콘 사이에 간격을 1씩 부여-->
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="fas fa-home fa-fw text-2xl"></i>
            <!-- 홈 버튼 / fa-fw 너비를 일정히-->
            <span class="ml-5 text-lg hidden lg:inline-block">홈</span>
            <!-- hidden lg:inline-block는 화면 크기에 따라 글을 숨김 -->
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="fas fa-hashtag fa-fw text-2xl"></i>
            <!-- 홈 버튼 -->
            <span class="ml-5 text-lg hidden lg:inline-block">탐색하기</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="far fa-bell fa-fw text-2xl"></i>
            <!-- 홈 버튼 -->
            <span class="ml-5 text-lg hidden lg:inline-block">알림</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="far fa-envelope fa-fw text-2xl"></i>
            <!-- 홈 버튼 -->
            <span class="ml-5 text-lg hidden lg:inline-block">쪽지</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="far fa-bookmark fa-fw text-2xl"></i>
            <!-- 홈 버튼 -->
            <span class="ml-5 text-lg hidden lg:inline-block">북마크</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="far fa-list-alt fa-fw text-2xl"></i>
            <!-- 홈 버튼 -->
            <span class="ml-5 text-lg hidden lg:inline-block">리스트</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <i class="far fa-user fa-fw text-2xl"></i>
            <!-- 홈 버튼 -->
            <span class="ml-5 text-lg hidden lg:inline-block">프로필</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
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
    <div class="flex-1 ">
      <div class="flex h-screen">
        <!-- 스크린 높이에 맞춤 -->
        <!-- main section -->
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
        <!-- trend section -->
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
      </div>
    </div>
    <!-- w-3/4로 나머지 부분을 선택해도 되고 flex-1 -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>