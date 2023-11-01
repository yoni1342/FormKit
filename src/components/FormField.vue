<template>
  <form @submit.prevent="handleAdd" class="flex flex-col space-y-6">
    <div v-for="(value, key) in field.detail" :key="key">
      <label v-if="value.label" for="">{{ value.label }}</label>
      <input
        v-if="value.type == 'text'"
        class="py-3 px-4 border rounded-md"
        type="text"
        :placeholder="value.placeHolder"
        :id="key"
      />
      <input
        v-if="value.type == 'Number'"
        class="py-3 px-4 border rounded-md"
        type="number"
        :placeholder="value.placeHolder"
        :id="key"
      />
      <input
        v-if="value.type == 'checkbox'"
        class="mx-3 border-primary rounded-md"
        type="checkbox"
        :id="key"
      />
    </div>
    <button class="py-3 bg-red-500 text-white rounded-md">Add</button>
  </form>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";

const props = defineProps({
  field: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["addToArray"]);

const handleAdd = () => {
  let finalJson = {
    $formkit: props.field.type,
  };

  for (let key in props.field.detail) {
    const element = document.getElementById(key);

    if (element && element.value != "") {
      finalJson[key] = element.value;
    }
  }

  console.log(finalJson);

  console.log("handle add to array");
  emit("addToArray", finalJson);
};
</script>
