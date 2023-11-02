<template>
  <form @submit.prevent="handleSubmit" class="w-full pt-6">
    <div class="flex flex-col space-y-6">
      <div
        v-for="(value, key) in fieldWithValue.detail"
        :key="key"
        class="flex flex-col items-start"
      >
        <label class="text-white" v-if="value.label" for="">{{
          value.label
        }}</label>

        <input
          v-if="value.type == 'text'"
          class="py-3 px-4 border rounded-md w-full focus:border-red-500 focus:ring-0 focus:outline-none"
          type="text"
          :placeholder="value.placeHolder"
          :id="key"
          v-model="value.value"
        />
        <input
          v-if="value.type == 'number'"
          class="py-3 px-4 border rounded-md w-full focus:border-red-500 focus:ring-0 focus:outline-none"
          type="number"
          :placeholder="value.placeHolder"
          :id="key"
          v-model="value.value"
        />
        <input
          v-if="value.type == 'checkbox'"
          class="border-primary rounded-md"
          type="checkbox"
          :id="key"
          v-model="value.value"
        />

        <div v-if="value.type == 'array'">
          <label class="text-white" for="">Options</label>
          <div
            v-for="(option, index) in options"
            :key="option"
            class="flex items-center gap-x-4 my-3"
          >
            <input
              type="text"
              class="py-3 px-4 border rounded-md w-full focus:border-red-500 focus:ring-0 focus:outline-none"
              placeholder="Option"
              :value="option"
              @change="options[index] = $event.target.value"
            />
            <button
              class="text-white"
              @click="removeOption(option)"
              type="button"
            >
              delete
            </button>
          </div>
          <button type="button" class="py-4 text-white" @click="addOption">
            Add options
          </button>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="py-3 my-5 text-white font-medium text-xl rounded-md text-center"
      @click="handleSubmitValidation"
    >
      {{ isAdd ? "Add" : "Create new" }} Validation
    </button>

    <button class="py-3 bg-red-500 text-white rounded-md w-full">
      {{ isAdd ? "Add" : "Edit" }}
    </button>
  </form>
  <button
    class="py-3 bg-red-500 text-white rounded-md w-full mt-4"
    @click="emit('close')"
  >
    Close
  </button>
  <teleport to="body">
    <div
      v-if="showModal"
      class="absolute flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-black/80 z-10"
    >
      <div class="relative bg-white w-[50%] h-[80%] py-10 space-y-10 p-4">
        <div
          class="absolute top-0 right-0 text-3xl p-2 text-red-500 cursor-pointer px-2"
          @click="
            showModal = false;
            rule = {};
          "
        >
          X
        </div>
        <!-- {{ Rule }} -->
        <div class="grid grid-cols-4">
          <div class="checkStyle">
            <label>Required</label>
            <input
              v-model="rule.required"
              class="py-3 px-4 border rounded-md col-span-2"
              type="checkbox"
            />
          </div>

          <div class="checkStyle">
            <label>Url</label>
            <input
              v-model="rule.url"
              class="py-3 px-4 border rounded-md col-span-2"
              type="checkbox"
            />
          </div>

          <div class="checkStyle">
            <label>number</label>
            <input
              v-model="rule.number"
              class="py-3 px-4 border rounded-md col-span-2"
              type="checkbox"
            />
          </div>

          <div class="checkStyle">
            <label>accepted</label>
            <input
              v-model="rule.accepted"
              class="py-3 px-4 border rounded-md col-span-2"
              type="checkbox"
            />
          </div>
          <div class="checkStyle">
            <label>emial</label>
            <input
              v-model="rule.email"
              class="py-3 px-4 border rounded-md col-span-2"
              type="checkbox"
            />
          </div>
          <div class="checkStyle">
            <label>alpha</label>
            <input
              v-model="rule.alpha"
              class="py-3 px-4 border rounded-md col-span-2"
              type="checkbox"
            />
          </div>
          <div class="checkStyle">
            <label>alphanumeric</label>
            <input
              v-model="rule.alphanumeric"
              class="py-3 px-4 border rounded-md col-span-2"
              type="checkbox"
            />
          </div>
          <div class="checkStyle">
            <label>alpha spaces</label>
            <input
              v-model="rule.alpha_spaces"
              class="py-3 px-4 border rounded-md col-span-2"
              type="checkbox"
            />
          </div>
          <button
            class="absolute bottom-4 bg-red-500 px-4 py-2 hover:shadow-lg active:scale-95 transition-transform duration-150 ease-in-out rounded-md text-white left-[40%]"
            @click="submitRules"
          >
            submit
          </button>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="textStyle">
            <label>length</label>
            <input v-model="rule.length" class="inputClass" type="number" />
          </div>
          <div class="textStyle">
            <label>min</label>
            <input v-model="rule.min" class="inputClass" type="number" />
          </div>
          <div class="textStyle">
            <label>max</label>
            <input v-model="rule.max" class="inputClass" type="number" />
          </div>
          <div class="textStyle">
            <label>start with</label>
            <input v-model="rule.starts_with" class="inputClass" type="text" />
          </div>

          <div class="textStyle">
            <label>End with</label>
            <input v-model="rule.ends_with" class="inputClass" type="text" />
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
/*-------------Globals--------------*/

import { ref, defineEmits, defineProps, watch } from "vue";
const emit = defineEmits(["addToArray", "editField", "close"]);
const props = defineProps({
  isAdd: {
    type: Boolean,
    default: true,
    required: false,
  },
  field: {
    type: Object,
    required: true,
  },
  id: {
    type: String,
    required: false,
  },
});

// console.log(props.field, 4321);

/*----------------------------Validations-----------------------*/

const rule = ref({});
const validations = ref(props.field.validation);

const showModal = ref(false);
const handleSubmitValidation = () => {
  showModal.value = true;
};

const submitRules = (finalJson) => {
  var rules = "";
  for (const [key, value] of Object.entries(rule.value)) {
    if (value == true) {
      rules += `${key}|`;
    }

    if (typeof value == "string" && value.length > 0) {
      rules += `${key}:${value}|`;
    }
    if (typeof value == "number") {
      rules += `${key}:${value}|`;
    }
  }
  validations.value = rules;
  showModal.value = false;
};

/*----------------------------Handle Add and Edit Field-----------------------*/

const fieldWithValue = ref(props.field);
watch(
  () => props.field,
  (newValue) => {
    fieldWithValue.value = newValue;
    console.log("There is change");
  }
);
const handleSubmit = () => {
  let finalJson = {
    $formkit: props.field.type,
  };

  if (props.isAdd) {
    finalJson.id = `${new Date().getTime()}`;
  } else {
    finalJson.id = props.id;
  }

  for (let key in fieldWithValue.value.detail) {
    if (fieldWithValue.value?.detail[key].value != "") {
      finalJson[key] = fieldWithValue.value?.detail[key].value;
    }
  }
  if (props.field.type == "radio" || props.field.type == "select") {
    finalJson["options"] = options.value;
  }

  if (props.field.type == "checkbox") {
    finalJson["value"] = fieldWithValue.value?.value;
  }

  finalJson.validation = validations.value;

  if (props.isAdd) {
    emit("addToArray", finalJson);
  } else {
    emit("editField", finalJson);
  }

  for (let key in finalJson) {
    if (fieldWithValue.value.detail[key]) {
      fieldWithValue.value.detail[key].value = "";
    }
  }
};

/*-----------------------Options------------------*/
const options = ref([""]);
const addOption = (event) => {
  if (options.value[options.value.length - 1] != "") {
    options.value.push("");
  }
};

const removeOption = (option) => {
  if (options.value.length > 0) {
    options.value = options.value.filter((item) => item != option);
  }
};
</script>
<style>
.checkStyle {
  @apply space-x-2 flex justify-between pr-10 pt-4 capitalize;
}
.textStyle {
  @apply flex flex-col items-start gap-2 capitalize;
}
.inputClass {
  @apply py-3 px-4 border rounded-md col-span-2;
}
</style>
