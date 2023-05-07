// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import "./form.css";

// type FormValues = {
//   categories: string;
// };

// const CategoryForm = yup.object({
//   categories: yup.string().required("This field is required"),
// });

// const CompanyCategoryForm = () => {
//   const form = useForm<FormValues>({
//     defaultValues: {
//       categories: "",
//     },
//     resolver: yupResolver(CategoryForm),
//   });

//   const { register, handleSubmit, formState, trigger } = form;
//   const { errors } = formState;

//   const onSubmit = (data: FormValues) => {
//     console.log(data);
//   };
//   return (
//     <div className="companyCategoryForm">
//       {/* <div className="w-full text-inter mb-6 ">
//         <button>{`<`} Previous</button>
//       </div> */}
//       <h1 className="font-semibold font-kaisei text-xl md:text-2xl xl:text-4xl text-[#0B1E3F]">
//         Tell Us About Your Business
//       </h1>

//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <p className="font-serif font-medium text-xl  mt-10 mb-4">
//           Attract the right customers by classifying your business.
//         </p>
//         <div className="form-control max-w-xl">
//           <label htmlFor="categories">Business Categories</label>
//           <input
//             type="text"
//             id="categories"
//             placeholder="e.g. Marketing, consultent, design"
//             {...register("categories")}
//             onBlur={() => trigger("categories")}
//           />
//           <p className="error">{errors.categories?.message}</p>
//         </div>

//         {/* <button className="font-normal font-inter my-9 px-6 py-2 rounded bg-orange text-white col-span-2 text-[15px]">
//           Continue
//         </button> */}
//       </form>
//     </div>
//   );
// };

// export default CompanyCategoryForm;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./form.css";

type FormValues = {
  categories: string;
};

type CategoryFormProps = FormValues & {
  updateFields: (fields: Partial<FormValues>) => void;
  onSubmit: (data: FormValues) => void;
  next: () => void;
};

const CategoryForm = yup.object({
  categories: yup.string().required("This field is required"),
});

const CompanyCategoryForm = ({
  categories,
  updateFields,
  next,
}: CategoryFormProps) => {
  const form = useForm<FormValues>({
    defaultValues: {
      categories: "",
    },
    resolver: yupResolver(CategoryForm),
  });

  const { register, handleSubmit, formState, trigger } = form;
  const { errors } = formState;

  const onSubmit = () => {
    console.log("clicked");
    next();
  };
  const onSubmitForm = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div className="companyCategoryForm">
      {/* <div className="w-full text-inter mb-6 ">
        <button>{`<`} Previous</button>
      </div> */}
      <h1 className="font-semibold font-kaisei text-xl md:text-2xl xl:text-4xl text-[#0B1E3F]">
        Tell Us About Your Business
      </h1>

      <form noValidate>
        <p className="font-serif font-medium text-xl  mt-10 mb-4">
          Attract the right customers by classifying your business.
        </p>
        <div className="form-control max-w-xl">
          <label htmlFor="categories">Business Categories</label>
          <input
            type="text"
            id="categories"
            placeholder="e.g. Marketing, consultent, design"
            value={categories}
            onChange={(e) => updateFields({ categories: e.target.value })}
            onBlur={() => trigger("categories")}
          />
          <p className="error">{errors.categories?.message}</p>
        </div>

        <button
          className="font-normal font-inter my-9 px-6 py-2 rounded bg-orange text-white col-span-2 text-[15px]"
          onClick={() => {}}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default CompanyCategoryForm;
