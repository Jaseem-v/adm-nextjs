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
    accountType: yup.string().required('Account type is required'),
    username: yup
    .string()
    .required('Username is required'),
    // username: yup.string().required("Username is required").min(4),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be atleast 8 charecters"),
});

export const businessInfoSchema = yup.object({
    streetAddress: yup.string().required("streetAddress is required"),
    building: yup.string(),
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
    hidePhone: yup.boolean()    
})