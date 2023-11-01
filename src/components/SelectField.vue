<template>
  <div @click="showDropDown" class="relative">
    <div class="flex items-center gap-3 cursor-pointer">
      <div>Choose The filde Type</div>
      <div>
        <Icon icon="teenyicons:down-outline" class="w-3 h-3" />
      </div>
    </div>
    <div v-if="isOpen" class="absolute w-full h-fit bg-white shadow-md">
      <ul class="flex flex-col items-start gap-2">
        <li
          class="cursor-pointer hover:shadow-md w-full px-3"
          v-for="(fild, index) in files"
          :key="index"
          @click="handleSelect(index)"
        >
          {{ fild }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const files = ["text", "button", "checkbox", "color", "date", "email"];
const emit = defineEmits(["fieldSelected"]);

const isOpen = ref(false);

const showDropDown = () => {
  isOpen.value = !isOpen.value;
};

const handleSelect = (index) => {
  emit("fieldSelected", files[index]);
};
</script>
