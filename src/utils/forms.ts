export const fieldProps: any = {
  text: {
    label: "text",
    extraOptions: {
      placeholder: "text",
      minLength: "number",
      maxLength: "number",
      required: "boolean",
      regex: "text",
    },
  },
  number: {
    label: "text",
    extraOptions: {
      placeholder: "text",
      min: "number",
      max: "number",
      required: "boolean",
    },
  },
  textarea: {
    label: "text",
    rows: "number",
    cols: "number",
    extraOptions: {
      placeholder: "text",
      minLength: "number",
      required: "boolean",
    },
  },
  checkbox: {
    label: "text",
    options: "arrayOfString",
    extraOptions: {
      required: "boolean",
    },
  },
  radio: {
    label: "text",
    options: "arrayOfString",
    extraOptions: {
      required: "boolean",
    },
  },
  select: {
    label: "text",
    options: "arrayOfString",
    extraOptions: {
      required: "boolean",
    },
  },
  date: {
    label: "text",
    extraOptions: {
      required: "boolean",
    },
  },
};
