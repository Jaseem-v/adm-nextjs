import Link from 'next/link'
import React from 'react'

export default function RegisterSuccess() {
    return (
        <main className="h-screen font-inter max-w-screen-xl mx-auto flex items-center justify-center relative overflow-hidden">
            <section className="">
                <div
                    className="p-8 md:p-6 lg:p-7
               xl:px-0 py-5"
                >
                    {/* <!-- back icon --> */}
                    {/* <button onClick={handleBack}>
                        <img
                            src="/images/back-icon.png"
                            alt="back icon"
                            className="absolute top-7 left-5 xl:left-0 w-8 lg:w-10 h-8 lg:h-10"
                        />
                    </button> */}
                    <div className="flex items-center justify-center lg:gap-20">
                        <div className="max-w-[700px] flex items-center justify-center flex-col">
                            <p className="font-bold text-3xl  text-center">Congratulations on successfully registering!</p>
                            <p
                                className="font-medium text-lg md:text-xl lg:text-2xl
                          my-5 text-center"
                            >
                                Please check your email for the verification process
                            </p>
                            {/* <!-- login form --> */}


                            {/* <div className="mt-5 flex gap-1 justify-center font-bold text-base md:text-lg "> */}
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                {/* <p className="font-medium">Don't have an account?</p>
                                <button>
                                    <p>Register Now</p>
                                </button>
                            </div> */}

                            <Link href={"https://mail.google.com"}
                                className=" mt-5 font-regular bg-lightOrange py-3 md:py-4 px-12 text-lg md:text-xl rounded-md hover:bg-amber-500 transition-all duration-200 active:bg-amber-700  text-center"
                                type="submit"
                            
                            >
                                open mail
                            </Link>
                        </div>


                    </div>
                </div>
            </section>
        </main>
    )
}
