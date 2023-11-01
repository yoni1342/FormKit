<!-- <script setup></script>

<template>
  <FormKit
    type="form"
    #default="{ value }"
    form-class="outer-container"
    :config="{
      validationVisibility: 'dirty',
    }"
  >
    <h1>Appointment Request form</h1>
    <h3>Fill out the form below, and we'll be in touch via email</h3>
    
    <div class="input-group">
      <FormKit
        type="text"
        label="First name"
        placeholder="John"
        validation="required|length:3"
      ></FormKit>

      <FormKit
        type="text"
        label="Last name"
        placeholder="Doe"
        validation="required|length:3"
      ></FormKit>
    </div>

    <FormKit
      type="date"
      label="Date of Birth"
      validation="required|date_before:2023-01-01"
    ></FormKit>

    <div class="input-group">
      <FormKit
        type="text"
        label="Gender"
        placeholder="Your gender"
        validation="required"
      ></FormKit>

      <FormKit
        type="text"
        label="Phone number"
        suffix-icon="telephone"
        placeholder="555-5555-555"
        validation="required"
      ></FormKit>
    </div>
  </FormKit>
</template>

<style>
.outer-container {
  width: 400px;
  border: 1px solid #e4e4e4;
  padding: 1.5em;
  border-radius: 1em;
  margin: 0 auto 1em auto;
}

.input-group {
  display: flex;
  gap: 1em;
}

h1,
h3 {
  text-align: center;
}
</style> -->
<template>
  <Index />
</template>

<script setup>
import Index from "./components/index.vue";
</script>
