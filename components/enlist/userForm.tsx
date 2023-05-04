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

const Userschema = yup.object({
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
    resolver: yupResolver(Userschema),
  });

  const { register, handleSubmit, formState, trigger } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div className="userForm">
      <h1 className="font-semibold font-kaisei text-xl md:text-2xl xl:text-3xl">
        Congratulations! Your company page is ready.
      </h1>
      <p className="text-sm mt-2">
        Register to save your updates and publish your company page
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="my-5 grid grid-cols-2 gap-x-5 gap-y-3"
      >
        <div className="form-control">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            placeholder="e.g. Harry"
            {...register("firstname")}
            onBlur={() => trigger("firstname")}
          />
          <p className="error">{errors.firstname?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="lastname" >Last Name</label>
          <input
            type="text"
            id="lastname"
            placeholder="e.g. Brook"
            {...register("lastname")}
            onBlur={() => trigger("lastname")}
          />
          <p className="error">{errors.lastname?.message}</p>
        </div>
        <div className="form-control col-span-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="e.g. harrybrook@business.com"
            {...register("email")}
            onBlur={() => trigger("email")}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-control col-span-2">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" {...register("password")} onBlur={() => trigger("password")} />
          <p className="error">{errors.password?.message}</p>
        </div>
        <div className="form-control col-span-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="text"
            id="confirmPassword"
            {...register("confirmPassword")}
            onBlur={() => trigger("confirmPassword")}
          />
          <p className="error">{errors.confirmPassword?.message}</p>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
