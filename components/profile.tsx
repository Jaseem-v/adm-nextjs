"use client";

import { BsPencilSquare } from "react-icons/bs"
import { HiPlus } from "react-icons/hi"

const Profile = () => {
    return ( 
        <div className="lg:p-8 w-screen lg:w-page flex flex-col gap-8 max-w-7xl mx-auto font-inter">
            <div className="m-4 lg:m-0 flex flex-col gap-1 p-4 rounded border-2 border-primary-v1 text-gray-800">
                <div className="flex items-center justify-center gap-10">
                    <div className="flex flex-col gap-2 text-inter">
                        <p className="text-7xl font-semibold">30%</p>
                        <p className="font-semibold text-xl lg:max-w-[194px]">of your profile is complete</p>
                    </div>
                    <div className="flex flex-col gap-4 lg:py-6">
                        <div className="w-[800px] h-8 bg-skeleton rounded-full overflow-hidden">
                            <div className="h-full w-1/4 bg-gold flex items-center justify-center font-semibold text-white">30%</div>
                        </div>
                        <p className="text-xl font-medium">Complete your profile to get more reach!</p>
                        <div className="grid grid-cols-2 gap-2 md:gap-x-12 font-regular">
                            {/* ITEM 1 */}
                            <div className="flex justify-between items-center">
                                <p className="text-success">Name, Address & phone</p>
                                <div className="flex items-center gap-2">
                                    <BsPencilSquare />
                                    <p >Edit</p>
                                </div>
                            </div>
                            {/* ITEM 2 */}
                            <div className="flex justify-between items-center">
                                <p className="text-success">Business Categories</p>
                                <div className="flex items-center gap-2">
                                    <BsPencilSquare />
                                    <p >Edit</p>
                                </div>
                            </div>
                            {/* ITEM 3 */}
                            <div className="flex justify-between items-center">
                                <p className="text-success">Detailed Description</p>
                                <div className="flex items-center gap-2">
                                    <BsPencilSquare />
                                    <p >Edit</p>
                                </div>
                            </div>
                            {/* ITEM 4 */}
                            <div className="flex justify-between items-center">
                                <p className="text-error">Logo or Image</p>
                                <div className="flex items-center gap-2">
                                    <HiPlus />
                                    <p >Add</p>
                                </div>
                            </div>
                            {/* ITEM 4 */}
                            <div className="flex justify-between items-center">
                                <p className="text-error">Services</p>
                                <div className="flex items-center gap-2">
                                    <HiPlus />
                                    <p >Add</p>
                                </div>
                            </div>
                            {/* ITEM 4 */}
                            <div className="flex justify-between items-center">
                                <p className="text-error">Business Hours</p>
                                <div className="flex items-center gap-2">
                                    <HiPlus />
                                    <p >Add</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;