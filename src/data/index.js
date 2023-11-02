// basicField1
import { ref } from "vue";
const basicField1 = {
  value: {
    type: "text",
    label: "Value",
    placeHolder: " value value",
    value: "",
  },
  label: {
    type: "text",
    label: "Label",
    placeHolder: " label value",
    value: "",
  },

  placeHolder: {
    type: "text",
    label: "Place Holder",
    placeHolder: "place holder value",
    value: "",
  },
  help: {
    type: "text",
    label: "Helper",
    help: "Helper value",
    placeHolder: " helper value",
    value: "",
  },
  name: {
    type: "text",
    label: "Name",
    help: "Name value",
    placeHolder: " name value here",
    value: "",
  },
};

// basicField2

const basicField2 = {
  value: {
    type: "text",
    label: "Value",
    placeHolder: " value value",
    value: "",
  },
  label: {
    type: "text",
    label: "Label",
    placeHolder: " label value",
    value: "",
  },
  help: {
    type: "text",
    label: "Helper",
    help: "Helper value",
    placeHolder: " helper value",
    value: "",
  },
  name: {
    type: "text",
    label: "Name",
    help: "Name value",
    placeHolder: " name value here",
    value: "",
  },
};

// basicField3

const basicField3 = {
  label: {
    type: "text",
    label: "Label",
    placeHolder: " label value",
    value: "",
  },
  help: {
    type: "text",
    label: "Helper",
    help: "Helper value",
    placeHolder: " helper value",
    value: "",
  },
  name: {
    type: "text",
    label: "Name",
    help: "Name value",
    placeHolder: " name value here",
    value: "",
  },
};

// basicField4

const basicField4 = {
  label: {
    type: "text",
    label: "Label",
    placeHolder: " label value",
    value: "",
  },

  placeHolder: {
    type: "text",
    label: "Place Holder",
    placeHolder: "place holder value",
    value: "",
  },
  help: {
    type: "text",
    label: "Helper",
    help: "Helper value",
    placeHolder: " helper value",
    value: "",
  },
  name: {
    type: "text",
    label: "Name",
    help: "Name value",
    placeHolder: " name value here",
    value: "",
  },
};

export default ref([
  {
    type: "text",
    validation: "",
    detail: {
      ...basicField1,
    },
  },
  {
    type: "number",
    validation: "",

    detail: {
      ...basicField1,
    },
  },

  {
    type: "textarea",
    validation: "",

    detail: {
      ...basicField1,
    },
  },

  {
    type: "password",
    validation: "",

    detail: {
      ...basicField1,
    },
  },
  {
    type: "search",
    validation: "",

    detail: {
      ...basicField1,
    },
  },

  {
    type: "date",
    validation: "",

    detail: {
      ...basicField2,
    },
  },
  {
    type: "time",
    validation: "",

    detail: {
      ...basicField2,
    },
  },

  {
    type: "file",
    validation: "",

    detail: {
      ...basicField3,
      multiple: {
        type: "checkbox",
        label: "Multiple",
        value: false,
      },
    },
  },

  {
    type: "button",
    validation: "",

    detail: {
      title: {
        type: "text",
        label: "Button Name",
        placeHolder: "Button name here",
        value: "",
      },
    },
  },

  {
    type: "radio",
    validation: "",

    detail: {
      ...basicField3,
      options: {
        type: "array",
        value: [],
      },
    },
  },

  {
    type: "select",
    validation: "",

    detail: {
      ...basicField3,
      options: {
        type: "array",
        value: [],
      },
    },
  },

  {
    type: "range",
    validation: "",

    detail: {
      ...basicField3,
      min: {
        type: "number",
        value: 0,
        label: "Min value",
      },
      max: {
        type: "number",
        value: 0,
        label: "Max value",
      },
    },
  },

  {
    type: "tel",
    validation: "",

    detail: {
      ...basicField1,
    },
  },

  {
    type: "url",
    validation: "",

    detail: {
      ...basicField1,
    },
  },
  {
    type: "month",
    validation: "",

    detail: {
      ...basicField2,
    },
  },

  {
    type: "week",
    validation: "",

    detail: {
      ...basicField2,
    },
  },
  {
    type: "color",
    validation: "",

    detail: {
      ...basicField2,
    },
  },
]);
