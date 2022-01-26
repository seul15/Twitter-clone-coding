<template>
  <div class="flex-1 flex">
    <!-- chat list -->
    <div class="w-2/5 border-r border-gray-100 overflow-y-auto">
      <div class="flex flex-col justify-between ">
        <div class="p-3 font-bold text-lg border-b border-gray-100">쪽지</div>
        <!-- a chat list -->
        <div class="flex px-3 py-4 hover:bg-gray-200 border-b border-gray-100 items-center" v-for="message in 10" :key="message">
          <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 mr-3">
          <div class="flex flex-col">
            <div class="flex space-x-1">
              <div class="font-bold">닉네임</div>
              <div class="text-gray-500">@아이디</div>
              <div class="text-gray-500">날짜</div>
            </div>
            <div class="text-gray-500">채팅내용</div>
          </div>
        </div>
      </div>
    </div>
    <!-- chatting -->
    <div class="w-3/5 border-r border-gray-100"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>