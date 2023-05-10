"use client";

import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";
import UserForm from "@/components/enlist/userForm";

const EnlistIndividual = () => {
  return (
    <div className="container grid justify-items-center pt-14 w-full mx-auto lg:grid-cols-2">
      <div className="flex flex-col px-6 md:px-8 w-full">
        <UserForm />
        <button
          className="font-normal font-inter mt-4 mb-7 px-5 py-3 rounded bg-orange text-white col-span-2 text-[15px] w-fit"
          onClick={() => console.log("logged in")}
        >
          Register
        </button>
      </div>
      {/* <EnlistSkeleton /> */}
    </div>
  );
};

export default EnlistIndividual;
