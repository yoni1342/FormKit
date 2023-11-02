<template>
  <div @click="showDropDown" class="relative w-full">
    <div
      class="flex justify-between gap-x-4 items-center cursor-pointer rounded-md px-5 border"
    >
      <!-- <div class="text-white">Choose The field Type</div> -->
      <input
        class="bg-transparent w-full text-white py-3 focus:border-none focus:outline-none focus:ring-0 text-"
        type="text"
        placeholder="Choose The field Type "
        v-model="search"
      />
      <div>
        <Icon icon="teenyicons:down-outline" class="text-white" />
      </div>
    </div>
    <div
      v-if="isOpen"
      class="absolute w-full h-[20rem] overflow-y-scroll bg-white shadow-md rounded-md"
    >
      <ul class="flex flex-col items-start gap-4">
        <li
          class="cursor-pointer hover:bg-red-600 hover:text-white py-1 w-full px-3"
          v-for="(file, index) in resultFiles"
          :key="index"
          @click="handleSelect(file)"
        >
          {{ file }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, defineEmits, watch } from "vue";
import { Icon } from "@iconify/vue";
const files = [
  "text",
  "number",
  "button",
  "checkbox",
  "radio",
  "select",
  "search",
  "range",
  "password",
  "color",
  "date",
  "time",
  "month",
  "week",
  "tel",
  "email",
  "file",
];

const emit = defineEmits(["fieldSelected"]);
const resultFiles = ref(files);

const search = ref("");
watch(search, (newValue) => {
  console.log(newValue);
  const results = files.filter((file) => file.includes(newValue.toLowerCase()));

  resultFiles.value = results;
});

const isOpen = ref(false);

const showDropDown = () => {
  isOpen.value = !isOpen.value;
};

const handleSelect = (file) => {
  search.value = file;
  emit("fieldSelected", file);
};
</script>
