<template>
  <FormKit type="form" form-class="outer-container" submitlabel="Login">
    <FormKitSchema :schema="schema" />
  </FormKit>
  
</template>
<script setup>
const schema = [
  {
    $formkit: "email",
    name: "email",
    label: "Email Address",
    placeholder: "Enter your email",
    validation: "required|email",
  },
  {
    $formkit: "password",
    name: "password",
    label: "Password",
    validation: "required|length:5,16",
  },
  {
    $formkit: "password",
    name: "password_confirm",
    label: "Confirm password",
    validation: "required|confirm",
    validationLabel: "password confirmation",
  },
  {
    $formkit: "date"
  }
  
];
</script>
