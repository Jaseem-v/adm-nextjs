"use client";

import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";
import UserForm from "@/components/enlist/userForm";

const EnlistIndividual = () => {
  return (
    <div className="container grid justify-items-center pt-14 w-full mx-auto lg:grid-cols-2">
      <UserForm />
      <EnlistSkeleton />
    </div>
  );
};

export default EnlistIndividual;
