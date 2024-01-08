<script setup>
import { textCutter } from '@/stores/TextCutter';

</script>
<template>
  <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    <div class="grid grid-cols-2 gap-4 mb-4">
      <form @submit.prevent>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <textarea v-model="textCutter.inputVal"  rows="9" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..."></textarea>
          </div>
          <div class="flex items-center gap-4 px-3 py-2 border-t dark:border-gray-600">
            <button @click="textCutter.PasteAll" type="button" highLightCopyText="Paste All" class="customCopy relative inline-flex items-center p-3 cursor-pointer font-bold text-xl text-center text-black  border-indigo-300 border-2 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-black hover:text-white"><i class="fa-solid fa-paste"></i></button>
            <button @click="textCutter.textReplace" type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">Submit</button>
          </div>
        </div>
      </form>

      <form>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <textarea v-model="textCutter.symbolReplaceVal"  rows="9" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..."></textarea>
          </div>
          <div class="flex items-center gap-4 px-3 py-2 border-t dark:border-gray-600">
            <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">Line Brack</button>
            <button @click="textCutter.symbolReplaceText" type="button" :highLightCopyText="textCutter.highLightText1" class="customCopy relative inline-flex items-center p-3 text-xl font-bold text-center  border-2 border-indigo-400 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-black hover:text-white"><i :class="textCutter.copyText ? 'fa-solid fa-check' : 'fa-regular fa-clone'"></i></button>
          </div>
        </div>
      </form>
    </div>

    <!-- Complete Content -->
    <form>
      <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <textarea v-model="textCutter.LineBreakVal"  rows="9" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..."></textarea>
        </div>
        <div class="flex items-center gap-4 px-3 py-2 border-t dark:border-gray-600">
          <button @click="textCutter.lineBreakText" type="button" :highLightCopyText="textCutter.highLightText2"  class="customCopy relative inline-flex items-center p-3 text-xl font-bold text-center  border-2 border-indigo-400 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-black hover:text-white"><i :class="textCutter.lineBreak ? 'fa-solid fa-check' : 'fa-regular fa-clone'"></i></button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>

.customCopy:hover::after{
  content: attr(highLightCopyText);
    position: absolute;
    top: -2.6rem;
    left: -14px;
    background: #fff;
    color: black;
    font-size: 10px;
    width: 4.3rem !important;
    height: 27px;
    border-radius: 5px;
    border: 2px dotted;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.customCopy:hover::before{
  width: 20px;
    height: 20px;
    position: absolute;
    content: '';
    background: white;
    transform: rotate(45deg);
    top: -1.8rem;
    border: 2px dotted gray;
}
</style>