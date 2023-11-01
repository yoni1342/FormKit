<template>
  <div class="flex items-center">
    <!-- left -->
    <div class="flex-[20%] p-6 bg-gray-100 h-screen flex flex-col items-center">
      <div class="text-2xl font-bold">Select the form Fild</div>
      <SelectField @fieldSelected="Selected" />
      <FormField
        @addToArray="addToArray"
        v-if="showForm"
        :field="currentSelectedField"
      ></FormField>
    </div>
    <!-- right -->
    <div class="flex-[80%]">
      <p>{{ selectedFields }} fields value</p>
    </div>
  </div>
</template>
<script setup>
import SelectField from "./SelectField.vue"
import FormField from "./FormField.vue"
import { ref } from "vue";
const fields = ref([
  {
    type: "text",
    detail: {
      value: {
        type: "text",
        label: "Value",
        placeHolder: " value value",
      },
      label: {
        type: "text",
        label: "Label",
        placeHolder: " label value",
      },

      placeHolder: {
        type: "text",
        label: "Place Holder",
        placeHolder: "place holder value",
      },
      help: {
        type: "text",
        label: "Helper",
        help: "Helper value",
        placeHolder: " helper value",
      },
    },
  },
  {
    type: "button",
    detail: {
      name: {
        type: "text",
        label: "Button",
        placeHolder: "Button name",
      },
    },
  },
]);
const fieldSelected = (field) => {
  console.log(field, "from  app");
};

const selectedFields = ref([]);
const currentSelectedField = ref(null);
const showForm = ref(false);

const Selected = (name) => {
  console.log(name);
  currentSelectedField.value = fields.value.find((field) => field.type == name);
  console.log(currentSelectedField.value);
  showForm.value = true;
};

const addToArray = (field) => {
  selectedFields.value.push(field);
};
</script>
