import * as Yup from "yup";

export const ContactForm = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  phone: Yup.string().optional(),
  message: Yup.string().required(),
});
