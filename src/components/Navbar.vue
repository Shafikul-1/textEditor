<script setup>
import { ref, reactive } from 'vue'
//import  from '.'
const showMenu = ref(false)
</script>

<template>
    <!-- Main Menu -->
    <div class="">
        <nav class="flex items-center justify-between flex-wrap bg-black px-3 py-2 mb-5">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <i class="fa-solid fa-bars  cursor-pointer font-bold text-[2rem] hover:text-indigo-400 transition-all" @click="showMenu = !showMenu"></i>
            </div>
            <div class="block lg:hidden">
                <!-- Mobile Menu -->
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <RouterLink to="/" class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold  transition-all ml-6 text-xl hover:text-indigo-400"> Home</RouterLink>
                    <RouterLink to="/text-cutter" class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-indigo-400 transition-all ml-6 text-xl  "> Text Cutter</RouterLink>
                    <RouterLink to="/" class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold  transition-all ml-6  text-xl hover:text-indigo-400"> Other</RouterLink>
                </div>
                <div>
                    <button class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 cursor-pointer">Download</button>
                </div>
            </div>
        </nav>
    </div>

    <!-- Show Hide Menu -->

    <div class="relative z-10" v-if="showMenu">
        <span class="absolute text-white text-4xl top-5 left-4 cursor-pointer">
            <i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
        </span>
        <div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
            <div class="text-gray-100 text-xl">
                <div class="flex justify-between ">
                    <div class="p-2.5 mt-1 flex items-center">
                        <i class="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
                        <h1 class="font-bold text-gray-200 text-[15px] ml-3">TailwindCSS</h1>
                        <i class="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
                    </div>
                    <i class="fa-solid fa-x mt-5 pr-4 cursor-pointer" @click="showMenu = !showMenu"></i>
                </div>
                <div class="my-2 bg-gray-600 h-[1px]"></div>
            </div>
            <div class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
                <i class="bi bi-search text-sm"></i>
                <input type="text" placeholder="Search" class="text-[15px] ml-4 w-full bg-transparent focus:outline-none" />
            </div>
            <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i class="bi bi-house-door-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
            </div>
            <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i class="bi bi-bookmark-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
            </div>
            <div class="my-4 bg-gray-600 h-[1px]"></div>
            <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i class="bi bi-chat-left-text-fill"></i>
                <div class="flex justify-between w-full items-center">
                    <span class="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
                    <span class="text-sm rotate-180" id="arrow">
                        <i class="bi bi-chevron-down"></i>
                    </span>
                </div>
            </div>
            <div class="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold" id="submenu">
                <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    Social
                </h1>
                <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    Personal
                </h1>
                <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    Friends
                </h1>
        </div>
        <div
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <i class="bi bi-box-arrow-in-right"></i>
            <span class="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
        </div>
    </div>
</div></template>

<style scoped></style>