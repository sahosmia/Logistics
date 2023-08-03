<script setup>
import Blog from "../components/blog/Blog.vue";
import data from "../data/data.json";
import Hero from "../components/home/Hero.vue";
import Partner from "../components/home/Partner.vue";
</script>
<template>
  <div class="bg-gradient-to-b from-red-50 via-blue-50 to-green-50">
    <Hero/>

    <!-- Counter start -->
    <div class="sub-container py-20">
      <!-- c  -->
      <div
        class="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-3 justify-center items-center gap-5 text-center"
      >
        <div
          class="rounded-box shadow p-10 bg-gradient-to-r from-red-50 via-blue-50 to-green-50"
        >
          <h4 class="font-semibold text-5xl text-gray-500 pb-2">400+</h4>
          <h6 class="font-semibold text-lg text-gray-500">Customers</h6>
        </div>
        <div
          class="rounded-box shadow p-10 bg-gradient-to-r from-red-50 via-blue-50 to-green-50"
        >
          <h4 class="font-semibold text-5xl text-gray-500 pb-2">500+</h4>
          <h6 class="font-semibold text-lg text-gray-500">Loads delivered</h6>
        </div>
        <div
          class="rounded-box shadow p-10 bg-gradient-to-r from-red-50 via-blue-50 to-green-50"
        >
          <h4 class="font-semibold text-5xl text-gray-500 pb-2">60 000+</h4>
          <h6 class="font-semibold text-lg text-gray-500">Miles covered</h6>
        </div>
      </div>
      <!-- c  -->

      <div class="container grid grid-cols-3 gap-5 py-5">
        <div
          class="text-center py-10 rounded-box shadow bg-gradient-to-r from-red-50 via-blue-50 to-green-50 col-span-2"
        >
          <img class="block m-auto" src="/img/card-1.png" alt="" />
          <h6 class="font-semibold text-lg text-gray-500">
            24/7 Dispatch Services
          </h6>
        </div>
        <div
          class="text-center py-10 rounded-box shadow bg-gradient-to-r from-indigo-50 via-orange-50 to-pink-50"
        >
          <img class="block m-auto" src="/img/card-2.png" alt="" />
          <h6 class="font-semibold text-lg text-gray-500">Tax management</h6>
        </div>
        <div
          class="text-center py-10 rounded-box shadow bg-gradient-to-r from-blue-50 via-yellow-50 to-gray-50 col-span-3"
        >
          <h6 class="font-semibold text-lg text-gray-500">
            Exceptional Customer Services
          </h6>
          <img class="block m-auto" src="/img/card-3.png" alt="" />
        </div>
      </div>
    </div>
    <!-- Counter end -->

    <div class="sub-container py-20">

      <div class="text-center px-10">
        <h2 class="large-heading">
          Delivered as promised!
          <span class="text-primary text-5xl">leave the logistics to us</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        <div class="pr-16">
          <h6 class="title">Services</h6>
          <p class="paragraf">Our team of logistics experts specializes in the safe and efficient transportation of goods utilizing cargo vans, box trucks, and sprinter vans. Our services are fully customizable to meet the unique needs of your business, ensuring that your shipments arrive at their destination quickly and securely.</p>
          <a href="#" class="link-title underline">learn more</a>
        </div>
        <div><img src="/img/item-2.png" alt="item"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        <div><img src="/img/item-1.png" alt="item"></div>
        <div class="pl-16">
          <h6 class="title">Join Our Team - For Drivers</h6>
          <p class="paragraf">As a driver for our expedite delivery service, you will play a critical role in our success and have the opportunity to work with a team of logistics experts committed to providing exceptional service to our clients. Also, we provide the most competitive $/mile offers on a market, contact us for more information.</p>
          <a href="#" class="link-title underline">learn more</a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        <div class="pr-16">
          <h6 class="title">Tailored Solutions</h6>
          <p class="paragraf">Our team of logistics experts specializes in the safe and efficient transportation of goods utilizing cargo vans, box trucks, and sprinter vans. Our services are fully customizable to meet the unique needs of your business, ensuring that your shipments arrive at their destination quickly and securely.</p>
          <a href="#" class="link-title underline">learn more</a>
        </div>
        <div><img src="/img/item-3.png" alt="item"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        <div><img src="/img/item-4.png" alt="item"></div>
        <div class="pl-16">
          <h6 class="title">Fleet for customer</h6>
          <p class="paragraf">As a driver for our expedite delivery service, you will play a critical role in our success and have the opportunity to work with a team of logistics experts committed to providing exceptional service to our clients. Also, we provide the most competitive $/mile offers on a market, contact us for more information.</p>
          <a href="#" class="link-title underline">learn more</a>
        </div>
      </div>
    </div>

    <Blog :blogs="data.blogs" />
    <Partner/>


    <div class="container text-center py-28 ">
      <h4 class="large-heading">Start Logistics with 4U Today!</h4>
      <div class="flex gap-5 justify-center py-10">
        <a href="#" class="primary-btn">Request a quote</a>
        <a href="#" class="primary-btn">For Driver</a>
      </div>

    </div>
  </div>
</template>
