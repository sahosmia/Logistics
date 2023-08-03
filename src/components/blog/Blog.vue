<script setup>
defineProps({
  blogs: Object,
});
</script>

<template>
  <div data-aos="fade">
    <div class="container py-20">
      <div class="text-center px-10 pb-10">
        <h2 class="sub-heading">Industry Trends and News</h2>
        <p class="paragraf">
          Our blog is dedicated to providing valuable insights into the USA
          expedite logistics market, including industry news, updates, and
          analysis. We cover a range of topics related to expedite delivery,
          including changes in regulations, new technologies, and emerging
          trends.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(blog, index) in blogs"
          :key="blog.id"
          class="max-lg:max-w-sm mx-auto hover:-translate-y-4 duration-300"
        >
          <div class="rounded-box">
            <img :src="blog.img" alt="" class="h-60 w-full object-cover" />
          </div>
          <div class="py-5">
            <p class="font-bold text-sm pb-2 text-primary uppercase">Asset</p>

            <h2 class="title">{{ blog.title }}</h2>
            <p class="text-gray-500 mb-7">
              {{ blog.created_at }}
            </p>
          </div>
        </div>
      </div>

      <div class="text-center">
        <a href="#" class="primary-btn">Read More</a>
      </div>
    </div>
  </div>
</template>
