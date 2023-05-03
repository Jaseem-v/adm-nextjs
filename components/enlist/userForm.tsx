import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./form.css";

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be atleast 8 charecters"),
  confirmPassword: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "password must match")
    .nullable(),
});

const UserForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  return (
    <div className="userForm my-20">
      <h1 className="font-semibold font-lexend text-xl md:text-2xl xl:text-3xl">
        Congratulations! Your company page is ready.
      </h1>
      <p className="text-sm mt-2">
        Register to save your updates and publish your company page
      </p>
      <form action="" className="my-5 grid grid-cols-2 gap-x-5 gap-y-3">
        <div className="form-control">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="e.g. Harry"
          />
        </div>
        <div className="form-control">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="e.g. Brook"
          />
        </div>
        <div className="form-control col-span-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="e.g. harrybrook@business.com"
          />
        </div>
        <div className="form-control col-span-2">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" />
        </div>
        <div className="form-control col-span-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="text" id="confirmPassword" name="confirmPassword" />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
