<template>
  <div class="flex gap-x-10">
    <!-- left -->
    <div
      class="w-[30rem] p-6 fixed left-0 top-0 overflow-y-hidden bg-gray-700 h-screen flex flex-col items-center"
    >
      <div class="text-2xl text-white py-4 font-medium">
        Select the form field
      </div>
      <SelectField @fieldSelected="Selected" />
      <FormField
        v-if="showForm"
        @addToArray="addToArray"
        @editField="handleEditField"
        @close="showForm = false"
        :field="currentSelectedField"
        :is-add="isAdd"
        :id="id"
      ></FormField>
    </div>
    <!-- right -->
    <div
      v-if="selectedFields.length > 0"
      class="flex-[80%] pl-[35rem] py-10 flex space-x-24"
    >
      <div class="w-[50%]">
        <h1 class="text-2xl my-6">Perview</h1>
        <FormKit type="form" form-class="outer-container" submitlabel="Login">
          <FormKitSchema :schema="selectedFields" />
        </FormKit>
      </div>

      <!-- Selected fields -->
      <div v-if="selectedFields.length > 0">
        <h1 class="text-2xl my-6">Selected Fields</h1>

        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(field, index) in selectedFields" :key="index">
              <td>{{ index }}</td>
              <td>{{ field.$formkit }}</td>
              <td>
                <button class="text-yellow-300" @click="editField(field)">
                  Edit
                </button>
              </td>
              <td>
                <button class="text-red-500" @click="deleteField(field)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <button
          @click="handleDownload"
          class="py-3 px-6 text-white my-6 text-center bg-red-500"
        >
          Download Json File
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
/*-------------Globals--------------*/

import fields from "./../data/index.js";
import { ref } from "vue";

/*-------------Component--------------*/

import FormField from "./FormField.vue";
import SelectField from "./SelectField.vue";
/*-------------Variables-------------*/

const selectedFields = ref([]);
const currentSelectedField = ref(null);
const showForm = ref(false);
const isAdd = ref(true);

/*-------------Select field--------------*/

const Selected = (name) => {
  currentSelectedField.value = fields.value.find((field) => field.type == name);
  console.log(currentSelectedField.value);
  isAdd.value = true;
  showForm.value = true;
};

/*-------------Add new field--------------*/

const addToArray = (field) => {
  selectedFields.value.push(field);
  showForm.value = false;
};

/*-------------Delete Field--------------*/

const deleteField = (field) => {
  selectedFields.value = selectedFields.value.filter(
    (item) => item.id != field.id
  );
};

const id = ref("");
/*-------------Edit field--------------*/
const editField = (fld) => {
  currentSelectedField.value = fields.value.find(
    (field) => field.type == fld.$formkit
  );

  for (let key in fld) {
    if (currentSelectedField.value.detail[key]) {
      currentSelectedField.value.detail[key].value = fld[key];
    }
  }
  id.value = fld.id;
  isAdd.value = false;
  showForm.value = true;
};

const handleEditField = (fld) => {
  selectedFields.value = selectedFields.value.map((field) => {
    if (field.id == fld.id) {
      return fld;
    } else {
      return field;
    }
  });
};

/*-------------Download json file--------------*/

function downloadJSONFile(data, filename) {
  const jsonData = JSON.stringify(data);
  const blob = new Blob([jsonData], { type: "application/json" });

  // Create a temporary link element
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;

  // Programmatically click the link to trigger the download
  link.click();

  // Clean up the URL object after the download
  URL.revokeObjectURL(link.href);
}

// Example usage

const handleDownload = () => {
  downloadJSONFile(selectedFields.value, "formkit.json");
};
</script>

<style scoped>
table,
th,
td {
  border-collapse: collapse;
  @apply border-b px-4 py-2;
}
th {
  @apply text-gray-700;
}
table {
  @apply border;
}
</style>
