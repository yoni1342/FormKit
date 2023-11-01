<template>
  <form @submit.prevent="handleAdd" class="flex flex-col space-y-6">
    <div v-for="(value, key) in field.detail" :key="key">
      <label v-if="value.label" for="">{{ value.label }}</label>
      <input
        v-if="value.type == 'text'"
        class="py-3 px-4 border rounded-md"
        type="text"
        :placeholder="value.placeHolder"
      />
      <input
        v-if="value.type == 'Number'"
        class="py-3 px-4 border rounded-md"
        type="number"
        :placeholder="value.placeHolder"
      />
    </div>
    <button class="py-3 bg-primary rounded-md">Add</button>
  </form>
</template>

<script setup>
const props = defineProps({
  field: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["addToArray"]);

const handleAdd = () => {
  console.log("handle add to array");
  emit("addToArray", props.field);
};
</script>
