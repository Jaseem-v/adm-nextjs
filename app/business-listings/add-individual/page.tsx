"use client";

import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";
import UserForm from "@/components/enlist/userForm";
import { useState } from "react";

const EnlistIndividual = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    place: "",
  });
  console.log("userdata", data);
  return (
    <div className="container grid justify-items-center pt-14 w-full mx-auto lg:grid-cols-2">
      <div className="flex flex-col px-6 md:px-8 w-full">
        <UserForm setData={setData} />
      </div>
      {/* <EnlistSkeleton /> */}
    </div>
  );
};

export default EnlistIndividual;
