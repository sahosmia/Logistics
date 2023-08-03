<script setup>
import data from "../data/data.json";
import Blog from "../components/blog/Blog.vue";
</script>
<template>
  <div class="bg-gradient-to-b from-red-50 via-blue-50 to-green-50">
    <!-- Hero Section  -->
    <div class="py-20">
      <div
        class="container grid grid-cols-1 md:grid-cols-2 items-center gap-10"
      >
        <div class="mr-28">
          <h2 class="large-heading">Why 4U?</h2>
          <p class="mb-6 font-semibold font-primary">
            Leave the logistics to us
          </p>
          <p class="paragraf">
            We love what we are doing. We value those with whom we work - our
            customers, drivers, employees, and receive the same return from
            them. Therefore, the most important thing for us is to do everything
            at the highest level and with pleasure FOR YOU.
          </p>
          <a href="#" class="primary-btn">About Us</a>
        </div>

        <div class="rounded-box">
          <img class="" src="/img/hero.png" alt="" />
        </div>
      </div>
    </div>
    <!-- Hero Section end  -->

    <div data-aos="fade">
      <div class="container py-20">
       
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(blog, index) in data.blogs"
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

        
      </div>
    </div>
  </div>
</template>
