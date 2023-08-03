<script setup>
import Hero from "../components/about/Hero.vue";
</script>
<template>
  <div class="bg-gradient-to-b from-red-50 via-blue-50 to-green-50">
    <Hero />

    <div class="sub-container py-20">
      <div class="">
        <h2 class="primary-heading">Our corporate values</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 m-auto gap-20">
        <div>
          <div class="rounded-box mb-5">
            <img
              class="w-full h-72 object-cover"
              src="/img/corporate/corporate-1.png"
              alt=""
            />
          </div>
          <h4 class="title">Live cargo tracking:</h4>
          <p class="paragarf">
            We keep a close eye on your deliveries to ensure everything runs
            smoothly. Our team tracks the progress of your deliveries, providing
            you and our clients with real-time updates on shipment status.
          </p>
        </div>

        <div>
          <div class="rounded-box mb-5">
            <img
              class="w-full h-72 object-cover"
              src="/img/corporate/corporate-2.png"
              alt=""
            />
          </div>
          <h4 class="title">Dedicated Customer Support:</h4>
          <p class="paragarf">
            We keep a close eye on your deliveries to ensure everything runs
            smoothly. Our team tracks the progress of your deliveries, providing
            you and our clients with real-time updates on shipment status.
          </p>
        </div>
        <div>
          <div class="rounded-box mb-5">
            <img
              class="w-full h-72 object-cover"
              src="/img/corporate/corporate-3.png"
              alt=""
            />
          </div>
          <h4 class="title">Customized Solutions:</h4>
          <p class="paragarf">
            We keep a close eye on your deliveries to ensure everything runs
            smoothly. Our team tracks the progress of your deliveries, providing
            you and our clients with real-time updates on shipment status.
          </p>
        </div>

        <div>
          <div class="rounded-box mb-5">
            <img
              class="w-full h-72 object-cover"
              src="/img/corporate/corporate-4.png"
              alt=""
            />
          </div>
          <h4 class="title">Seamless End-to-End Service:</h4>
          <p class="paragarf">
            We keep a close eye on your deliveries to ensure everything runs
            smoothly. Our team tracks the progress of your deliveries, providing
            you and our clients with real-time updates on shipment status.
          </p>
        </div>
        <div>
          <div class="rounded-box mb-5">
            <img
              class="w-full h-72 object-cover"
              src="/img/corporate/corporate-5.png"
              alt=""
            />
          </div>
          <h4 class="title">Cost-Effective Solutions:</h4>
          <p class="paragarf">
            We keep a close eye on your deliveries to ensure everything runs
            smoothly. Our team tracks the progress of your deliveries, providing
            you and our clients with real-time updates on shipment status.
          </p>
        </div>

        <div>
          <div class="rounded-box mb-5">
            <img
              class="w-full h-72 object-cover"
              src="/img/corporate/corporate-6.png"
              alt=""
            />
          </div>
          <h4 class="title">Transparency and Trust:</h4>
          <p class="paragarf">
            We keep a close eye on your deliveries to ensure everything runs
            smoothly. Our team tracks the progress of your deliveries, providing
            you and our clients with real-time updates on shipment status.
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
