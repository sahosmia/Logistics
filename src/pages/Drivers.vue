<script setup>
import Hero from "../components/drivers/Hero.vue";
</script>
<template>
  <div class="bg-gradient-to-b from-red-50 via-blue-50 to-green-50">
    <Hero />

    <div class="container p-20">
      <div class="text-center py-10">
        <h2 class="primary-heading">Benefits To Work Work With 4U Logistics</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto gap-10">
       
          <div class="rounded-box mb-5 border p-4">
            <img
              class="pb-4 m-auto"
              src="/img/service/service-1.png"
              alt=""
            />
            <h4 class="title">24/7 Support</h4>
            <p class="paragarf text-gray-500">
             Our drivers have access to a dedicated support team available around the clock. Whether you have a question about a delivery, need help with a route, or encounter any unexpected challenges on the road, our support staff is just a phone call away.
            </p>
          </div>
          <div class="rounded-box mb-5 border p-4">
            <img
              class="pb-4 m-auto"
              src="/img/service/service-2.png"
              alt=""
            />
            <h4 class="title">Clean POD</h4>
            <p class="paragarf text-gray-500">
             Our drivers have access to a dedicated support team available around the clock. Whether you have a question about a delivery, need help with a route, or encounter any unexpected challenges on the road, our support staff is just a phone call away.
            </p>
          </div>
          <div class="rounded-box mb-5 border p-4">
            <img
              class="pb-4 m-auto"
              src="/img/service/service-3.png"
              alt=""
            />
            <h4 class="title">Competitive Compensation</h4>
            <p class="paragarf text-gray-500">
             Our drivers have access to a dedicated support team available around the clock. Whether you have a question about a delivery, need help with a route, or encounter any unexpected challenges on the road, our support staff is just a phone call away.
            </p>
          </div>
          <div class="rounded-box mb-5 border p-4">
            <img
              class="pb-4 m-auto"
              src="/img/service/service-4.png"
              alt=""
            />
            <h4 class="title">Referral Program</h4>
            <p class="paragarf text-gray-500">
             Our drivers have access to a dedicated support team available around the clock. Whether you have a question about a delivery, need help with a route, or encounter any unexpected challenges on the road, our support staff is just a phone call away.
            </p>
          </div>
          <div class="rounded-box mb-5 border p-4">
            <img
              class="pb-4 m-auto"
              src="/img/service/service-5.png"
              alt=""
            />
            <h4 class="title">Safety First</h4>
            <p class="paragarf text-gray-500">
             Our drivers have access to a dedicated support team available around the clock. Whether you have a question about a delivery, need help with a route, or encounter any unexpected challenges on the road, our support staff is just a phone call away.
            </p>
          </div>
          <div class="rounded-box mb-5 border p-4">
            <img
              class="pb-4 m-auto"
              src="/img/service/service-6.png"
              alt=""
            />
            <h4 class="title">Work-Life Balance </h4>
            <p class="paragarf text-gray-500">
             Our drivers have access to a dedicated support team available around the clock. Whether you have a question about a delivery, need help with a route, or encounter any unexpected challenges on the road, our support staff is just a phone call away.
            </p>
          </div>
  

        
      </div>
    </div>

     <div class="container p-20 ">
      <div class="w-4/5 text-center m-auto pb-10">
        <h2 class="primary-heading">
          To arrange a delivery, call us or submit application form.
        </h2>
        <h4 class="title">HR Department: 754-778-7877</h4>
      </div>

      <div class="rounded-box bg-white py-20 px-40 border ">
        <div class="flex flex-col gap-3 pb-3">
          <label class="font-semibold" for="name">Name/SureName</label>
          <input
            type="text"
            class="from-input rounded border border-gray-300 focus:ring-0 focus:border-primary"
            id="name"
          />
        </div>
        <div class="flex flex-col gap-3 pb-3">
          <label class="font-semibold" for="phone">Phone</label>
          <input
            type="text"
            class="from-input rounded border border-gray-300 focus:ring-0 focus:border-primary"
            id="phone"
          />
        </div>
        <div class="flex flex-col gap-3 pb-3">
          <label class="font-semibold" for="email">Email</label>
          <input
            type="email"
            class="from-input rounded border border-gray-300 focus:ring-0 focus:border-primary"
            id="email"
          />
        </div>
        <div class="flex flex-col gap-3 pb-3">
          <label class="font-semibold" for="password">MC/FF Number</label>
          <input
            type="password"
            class="from-input rounded border border-gray-300 focus:ring-0 focus:border-primary"
            id="password"
          />
        </div>
        <div class="flex flex-col gap-3 pb-3">
          <label class="font-semibold" for="description"
            >Load Description</label
          >
          <textarea
            class="from-input rounded border border-gray-300 focus:ring-0 focus:border-primary"
            id="description" rows="5"
          ></textarea>
        </div>
<div class=" text-center pt-10">

    
    <button class="primary-btn">Submit</button>
</div>
      </div>
    </div>
  </div>
</template>
