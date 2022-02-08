<template>
  <!-- <h1 class="text-xl bg-gray-900 text-white ml-10 mt-4 pl-3 pt-3 hover:bg-gray-600 hover:text-red-600 ">hello world</h1>  -->
  <!-- bg - 배경 text - 텍스트 색 ml - 왼쪽 마진 mt - 위쪽 마진 pl - 왼쪽 여백 pt - 위쪽 여백 hover 마우스 올렸을 경우-->
  <div class="flex h-screen container mx-auto relative">
    <!-- container - 화면의 크기가 일정 이상으로 늘어났을때 여백이 존재  / mx-auto - 여백이 오른쪽 왼쪽에 고루 존재-->
    <!-- side section -->
    <!-- h-screen으로 높이는 화면 전체로 선택 -->
    <div
      class="w-20 xl:w-1/4 pt-5 xl:ml-10 flex flex-col justify-between border-r border-gray-100"
    >
      <!-- justify-between - div 사이에 내용들을 일정한 간격으로 띄어놓음 -->
      <div class="flex flex-col items-center xl:items-start">
        <!-- xl: - 화면이 확장됬을때를 의미 -->
        <!-- twitter logo -->
        <i class="fab fa-twitter text-3xl text-primary xl:ml-4 mb-3"></i>
        <!-- sidemenu icons -->
        <div class="flex flex-col items-start space-y-1">
          <!-- flex-col은 가로로 정렬 / items-start는 텍스트와 이미지만 적용 / space-y-1은 아이콘 사이에 간격을 1씩 부여-->
          <router-link
            :to="route.path"
            :class="`hover:text-primary hover:bg-blue-50 p-2 xl:px-4 xl:py-2 rounded-full cursor-pointer ${
              router.currentRoute.value.name == route.name
                ? 'text-primary'
                : ' '
            }`"
            v-for="route in routes"
            :key="route"
          >
            <!-- px는 왼쪽 오른쪽에 padding / py는 위쪽 아래쪽에 padding / rounded-full 테두리 둥글게-->
            <div v-if="route.meta.isMenu">
              <i :class="route.icon"></i>
              <!-- 홈 버튼 / fa-fw 너비를 일정히-->
              <span class="ml-5 text-xl hidden xl:inline-block">{{
                route.title
              }}</span>
              <!-- hidden xl:inline-block는 화면 크기에 따라 글을 숨김 -->
            </div>
          </router-link>
        </div>
        <!-- tweet button -->
        <div class="w-full xl:pr-3 flex justify-center">
          <!-- justify - 가로축 items - 세로축 -->
          <!-- 오른쪽에 마진을 3을 줌 -->
          <button
            class="mt-3 bg-primary text-white xl:w-full w-12 h-12 rounded-full hover:bg-dark focus:outline-none"
          >
            <span class="hidden xl:block">트윗</span>
            <i class="fas fa-plus xl:hidden"></i>
            <!-- 일정 크기 이상이 되면 트윗 글씨 대신에 plus 아이콘이 나타남 -->
          </button>
          <!-- 사이트 크기에 따라 버튼의 크기도 반응해야 하므로 w를 지정하는 것이 아닌 full로 입력해주어야 함 -->
        </div>
      </div>
      <!-- profile button -->
      <div class="xl:pr-3 mb-3 relative" @click="showProfileDropdown = true">
        <!-- 오른쪽에 마진을 3을 줌 -->
        <button
          class="hidden xl:flex mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 items-center"
        >
          <!-- flex를 통해서 하나로 묶는다고 볼 것 / items-center 밑의 태그들을 중간에 배치 -->
          <img
            :src="currentUser.profile_image_url"
            class="w-10 h-10 rounded-full"
          />
          <div class="xl:ml-2 hidden xl:block">
            <div class="text-sm font-bold">{{ currentUser.email }}</div>
            <div class="text-xs text-gray-500 text-left">
              @{{ currentUser.username }}
            </div>
          </div>
          <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs"></i>
        </button>
        <!-- 사이트 크기에 따라 버튼의 크기도 반응해야 하므로 w를 지정하는 것이 아닌 full로 입력해주어야 함 -->
        <div class="xl:hidden flex justify-center">
          <!-- 화면이 커질때 프로필 상태 -->
          <img
            :src="currentUser.profile_image_url"
            class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
          />
          <!-- cursor-pointer - 커서를 올렸을때 포인터로 바뀜 / opacity - 투명도 -->
        </div>
      </div>
    </div>
    <!-- w-1/4는 너비 4분의 1만 선택 2xl은 텍스트 크기 설정  -->
    <!-- main section -->
    <div class="flex-1 flex h-screen">
      <!-- 스크린 높이에 맞춤 -->
      <router-view />
    </div>
    <!-- w-3/4로 나머지 부분을 선택해도 되고 flex-1 -->
    <!-- profile dropdown menu -->
    <div
      class="absolute bottom-20 left-10 shadow rounded-lg w-60 bg-white"
      v-if="showProfileDropdown"
      @click="showProfileDropdown = false"
    >
      <button
        class="hover:bg-gray-50 border-b border-gray-100 flex p-3 w-full items-center"
      >
        <img
          :src="currentUser.profile_image_url"
          class="w-10 h-10 rounded-full"
        />
        <div class="ml-2">
          <div class="font-bold text-sm">{{ currentUser.email }}</div>
          <div class="text-left text-gray-500 text-sm">
            @{{ currentUser.username }}
          </div>
        </div>
        <i class="fas fa-check text-primary ml-auto"></i>
      </button>
      <button
        class="p-3 w-full text-left text-sm hover:bg-gray-50"
        @click="onLogout"
      >
        @{{ currentUser.username }} 계정에서 로그아웃
      </button>
    </div>
  </div>
</template>

<script>
// 메뉴 router 연결
import { ref, onBeforeMount, computed } from "vue";
import router from "../router";
import { auth } from "../firebase";
import store from "../store";

export default {
  setup() {
    const routes = ref([]);
    const showProfileDropdown = ref(false);

    const currentUser = computed(() => store.state.user);

    const onLogout = async () => {
      await auth.signOut();
      store.commit("SET_USER", null);
      await router.replace("/login");
    };
    onBeforeMount(() => {
      routes.value = router.options.routes.filter((route) => route.meta.isMenu == true);
    });

    return { routes, showProfileDropdown, currentUser, onLogout, router };
  },
};
</script>
