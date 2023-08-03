<script setup>
import { ref } from "vue";

const isMenu = ref(false);
</script>
<template>
  <header class="p-6 relativebg-white">
    <nav class="container m-auto flex justify-between items-center">
      <!-- logo  -->
      <div>
        <router-link :to="{ name: 'home' }">
          <img class="" src="/img/logo.png" alt="logo" />
        </router-link>
      </div>

      <!-- Menu Bar  -->
      <div class="block lg:hidden duration-700">
        <span v-if="!isMenu" @click="isMenu = true" class="text-2xl"
          ><i class="fa-solid fa-bars"></i
        ></span>
        <span v-else @click="isMenu = false" class="text-2xl"
          ><i class="fa-solid fa-close"></i
        ></span>
      </div>

      <!-- menu  -->
      <div class="menu hidden lg:block">
        <ul class="flex justify-center">
          <li>
            <router-link
              class="text-gray-900 font-primary font-semibold px-3 hover:text-indigo-500 duration-300"
              :to="{ name: 'about' }"
              >About us</router-link
            >
          </li>
          
          <li>
            <router-link
              class="text-gray-900 font-primary font-semibold px-3 hover:text-indigo-500 duration-300"
              :to="{ name: 'drivers' }"
              >For drivers</router-link
            >
          </li>
          <li>
            <router-link
              class="text-gray-900 font-primary font-semibold px-3 hover:text-indigo-500 duration-300"
              :to="{ name: 'fleet' }"
              >Fleet </router-link
            >
          </li>
          
          <li>
            <router-link
              class="text-gray-900 font-primary font-semibold px-3 hover:text-indigo-500 duration-300"
              :to="{ name: 'news' }"
              >News </router-link
            >
          </li>

          <li>
            <a
              class="text-white font-primary font-semibold px-3 py-2 rounded-lg bg-primary   duration-300"
              href="#"              
              >Contact Us </a
            >
          </li>
        </ul>
      </div>

      <!-- Mobaile Menu  -->
      <div
        :class="isMenu ? 'top-16' : '-top-96'"
        class="bg-primary transform transition-all ease-in-out lg:hidden absolute w-full left-0 right-0 p-10 duration-300"
      >
        <ul class="flex flex-col justify-center items-center">
          <li>
            <router-link
              class="text-white font-semibold py-3 block hover:text-black duration-300"
              :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              class="text-white font-semibold py-3 block hover:text-black duration-300"
              to="/about"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              class="text-white font-semibold py-3 block hover:text-black duration-300"
              to="/service"
              >Service</router-link
            >
          </li>
          <li>
            <router-link
              class="text-white font-semibold py-3 block hover:text-black duration-300"
              to="/country"
              >Country</router-link
            >
          </li>
        </ul>
      </div>

      <!-- btn  -->
      <!-- <div>
        <a href="#" class="primary-btn">Get Strated</a>
      </div> -->
    </nav>
  </header>
</template>
