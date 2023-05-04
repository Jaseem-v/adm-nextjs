"use client";

import CompanyDetailsForm from "@/components/enlist/companyDetailsForm";
import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";

const EnlistIndividual = () => {
  return (
    <div className="container grid justify-items-center pt-14 w-full mx-auto lg:grid-cols-2">
      <CompanyDetailsForm />
      <EnlistSkeleton />
    </div>
  );
};

export default EnlistIndividual;
