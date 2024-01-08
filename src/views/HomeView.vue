
  <script setup>
  import { ref, defineComponent, onMounted } from "vue";
  import { QuillEditor } from "@vueup/vue-quill";
  // import BlotFormatter from "quill-blot-formatter";
  import "@vueup/vue-quill/dist/vue-quill.snow.css";
  
  const editorContent = ref("");
  
  // Modules
  // const modules = {
  //   name: "blotFormatter",
  //   module: BlotFormatter,
  //   scrollingContainer: "#scrolling-container",
  //   blotFormatter: {},
  //   options: {},
  // };
  
  // Get LocalStore Content
  onMounted(() => {
    const getContent = localStorage.getItem("saveContent");
    if (getContent) {
      editorContent.value = JSON.parse(getContent);
    }
  });
  
  // Save to Local Storage
  function saveLocalStore() {
    localStorage.setItem("saveContent", JSON.stringify(editorContent.value));
  }
  </script>
  
  <template>
    <div class="p-3">
      <QuillEditor
        class="shadow-xl shadow-indigo-200"
        theme="snow"
        v-model:content="editorContent"
        contentType="html"
        placeholder="Enter Your Text Here ...."
        toolbar="full"
        :toolbar="toolbarOptions"
        @update:content="saveLocalStore"
      />
    </div>
  </template>
  
  <style scoped>
  /* Add your custom styles if needed */
  </style>