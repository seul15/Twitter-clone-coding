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
      <img
        :src="currentUser.profile_image_url"
        class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
      />
      <div class="ml-2 flex-1 flex-col">
        <textarea
          v-model="tweetBody"
          placeholder="무슨 일이 일어나고 있나요?"
          class="w-full text-lg font-bold focus:outline-none resize-none"
        ></textarea>
        <!-- 안드로이드 스튜디오에서 texthint 같은 느낌 -->
        <div class="text-right">
          <button
            v-if="!tweetBody.length"
            class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full"
          >
            트윗
          </button>
          <button
            v-else
            @click="onAddTweet"
            class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full"
          >
            트윗
          </button>
          <!-- padding -> 내부 간격 설정 / margin -> 외부 간격 설정 -->
        </div>
      </div>
    </div>
    <!-- tweets -->
    <Tweet v-for="tweet in 20" :key="tweet" :currentUser="currentUser" />
  </div>
  <!-- trend part -->
  <Trends />
</template>

<script>
import Trends from "../components/Trends.vue";
import Tweet from "../components/Tweet.vue";
import { ref, computed } from "vue";
import store from "../store";
import { TWEET_COLLECTION } from "../firebase";

export default {
  components: { Trends, Tweet },
  setup() {
    const tweetBody = ref("");
    const currentUser = computed(() => store.state.user);

    const onAddTweet = async () => {
      try {
        const doc = TWEET_COLLECTION.doc();
        await doc.set({
          id: doc.id,
          tweet_body: tweetBody.value,
          uid: currentUser.value.uid,
          created_at: Date.now(),
          num_comments: 0,
          num_retweets: 0,
          num_likes: 0,
        });
        tweetBody.value = "";
      } catch (e) {
        console.log("on add tweet error on homepage:", e);
      }
    };

    return { currentUser, tweetBody, onAddTweet };
  },
};
</script>

<style></style>
