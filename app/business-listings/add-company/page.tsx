"use client";

import CompanyCategoryForm from "@/components/enlist/companyCategoryForm";
import CompanyContactForm from "@/components/enlist/companyContactForm";
import CompanyDetailsForm from "@/components/enlist/companyDetailsForm";
import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";
import UserForm from "@/components/enlist/userForm";
import { useMultistepForm } from "@/hooks/useMultistepForm";

const EnlistCompany = () => {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <CompanyDetailsForm key={1} />,
      <CompanyContactForm key={2} />,
      <CompanyCategoryForm key={3} />,
      <UserForm key={4} />,
    ]);
  return (
    <div className="container grid justify-items-center pt-14 w-full mx-auto lg:grid-cols-2">
      <div className="flex flex-col px-6 md:px-8 w-full">
        {!isFirstStep && (
          <div className="w-full text-inter mb-6 ">
            <button onClick={back}>{`<`} Previous</button>
          </div>
        )}
        {step}
        <button
          className="font-normal font-inter mt-4 mb-7 px-5 py-3 rounded bg-orange text-white col-span-2 text-[15px] w-fit"
          onClick={next}
        >
          {!isLastStep && (isFirstStep ? "Add my company" : "Continue")}
          {isLastStep && "Finish"}
        </button>
      </div>
      <EnlistSkeleton />
    </div>
  );
};

export default EnlistCompany;
