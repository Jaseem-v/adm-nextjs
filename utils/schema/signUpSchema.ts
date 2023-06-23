import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const businessIndividualSchema = yup.object({
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  place: yup.string().required("Place is required").min(3),
});

export const businessFirstStepSchema = yup.object({
  companyName: yup.string().required("Company name is required"),
  streetAddress: yup.string().required("streetAddress is required"),
  building: yup.string(),
  city: yup.string().required("City is required"),
  hideAddress: yup.boolean(),
  hasServiceArea: yup.boolean(),
  numberType: yup.string().required(),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .test("phoneNumber", "Invalid phone number", function (value) {
      const numberType = this.parent.numberType;
      if (numberType === "landline") {
        if (/^\d{9}$/.test(value)) {
          return true;
        } else {
          throw new yup.ValidationError(
            "Landline number must be 9 digits",
            value,
            "phoneNumber"
          );
        }
      } else if (numberType === "mobile") {
        if (/^\d{7}$/.test(value)) {
          return true;
        } else {
          throw new yup.ValidationError(
            "Mobile number must be 7 digits",
            value,
            "phoneNumber"
          );
        }
      }
      return false;
    }),
  websiteUrl: yup.string(),
  // .matches(
  //   /^(?:https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/,
  //   "Please enter a valid website URL"
  // ),
  categories: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  username: yup.string().required("Username is required").min(4),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be atleast 8 charecters"),
});

export const signInSchema = yup.object({
  accountType: yup.string().required("Account type is required"),
  username: yup.string().required("Username is required"),
  // username: yup.string().required("Username is required").min(4),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be atleast 8 charecters"),
});

export const businessInfoSchema = yup.object({
  streetAddress: yup.string().required("streetAddress is required"),
  buildingNumber: yup.number().required(),
  city: yup.string().required("City is required"),
  zip: yup
    .string()
    .matches(/^[0-9]*$/, "Zip must be a number")
    .matches(/^\d{6}$/, "Zip code must be 6 digits")
    .required("Zip is required"),
  hideAddress: yup.boolean(),
  hasServiceArea: yup.boolean(),

  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .max(10)
    .min(10),
  hidePhone: yup.boolean(),
});

export const updateBusinessInfoSchema = yup.object({
  address: yup.string().required("streetAddress is required"),
  landmark: yup.string(),
  city: yup.string().required("City is required"),
  buildingNumber: yup.number().required(),
  zip: yup.string(),
  // .matches(/^\d{6}$/, "Zip code must be 6 digits")
  // .required("Zip is required"),
});

export const SocialMediaSchema = yup.object({
  facebookUrl: yup
    .string()
    .matches(
      /^(https?:\/\/)?(www\.)?facebook\.com\/(pages\/[A-Za-z0-9\-]+\/\d+|[^/]+\/)?$/,
      "Invalid Facebook URL"
    ),
  instagramUsername: yup
    .string()
    .matches(
      /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/,
      "Invalid Instagram username"
    ),
  twitterUsername: yup
    .string()
    .matches(/^[A-Za-z0-9_]{1,15}$/, "Invalid Twitter username"),
  youtubeUsername: yup
    .string()
    .matches(
      /^(?!.*\.\.)(?!.*\.$)[^\W][\w.-]{0,99}$/,
      "Invalid YouTube username"
    ),
  linkedinProfile: yup
    .string()
    .matches(
      /^(https?:\/\/)?(www\.)?linkedin\.com\/(in\/[A-Za-z0-9\-]+\/?|company\/[A-Za-z0-9\-]+\/?)$/,
      "Invalid LinkedIn profile"
    ),
});

export const contactDetailsSchema = yup.object({
  fname: yup.string().required("This field is required"),
  lname: yup.string().required("This field is required"),
  email: yup.string().email(),
  phone: yup.number(),
});

export const fullnameSchema = yup.object({
  firstname: yup.string().required("This field is required").min(2),
  lastname: yup.string().required("This field is required").min(2),
});

export const businessNameSchema = yup.object({
  name: yup.string().required("This field is required").min(3),
});

export const servicesSchema = yup.object({
  service: yup.string().required("This field should not be empty."),
});
