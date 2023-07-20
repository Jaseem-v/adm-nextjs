import "./enlistModel.css";
import httpClient from "@/services/axiosInstance";
import { advertisementSchema } from "../utils/schema/signUpSchema";
import { FileWithPath, useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoClose } from "react-icons/io5";
import { BsFillCameraFill } from "react-icons/bs";

interface AdvertisementModelProps {
  setShowAdvertisementModel: React.Dispatch<React.SetStateAction<boolean>>;
}

type AdvertisementType = {
  image: string | any
}

const AdvertisementModel = ({ setShowAdvertisementModel }: AdvertisementModelProps) => {
  const [advertisement, setAdvertisement] = useState<AdvertisementType>();
  const [adImg, setAdImg] = useState('')
  type advertisementValues = {
    image: string;
    desc: string;
    type: string;
    visibility: boolean;
  };

    // \\\\\\\\\\\\\\\\\\\\
  // DROPZONE
  // \\\\\\\\\\\\\\\\\\\\
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[], section: string) => {
      acceptedFiles.forEach((file: FileWithPath) => {
        const reader: FileReader = new FileReader();


        reader.onabort = () => console.log("File reading was aborted");
        reader.onerror = () => console.log("File reading has failed");
        reader.onload = async () => {
          try {
            setAdvertisement({image: file});
            setAdImg(URL.createObjectURL(file))
          } catch (error) {
            console.log(error);
          }
        };

        reader.readAsArrayBuffer(file);
      });
      console.log(acceptedFiles);
    },

    []
  );

  const { getRootProps: getAdRootProps, getInputProps: getAdInputProps, isDragActive } =
    useDropzone({
      onDrop: (acceptedFiles) => onDrop(acceptedFiles, "advertisement"),
    });

  const advertisementForm = useForm<advertisementValues>({
    defaultValues: {},
    resolver: yupResolver(advertisementSchema),
  });

  const {
    register: registerAd,
    handleSubmit: handleSubmitAd,
    formState: formStateAd,
    setValue: setValueAd,
  } = advertisementForm;
  const { errors: errorsAd } = formStateAd;

  const addAdvertisement = async (data: advertisementValues) => {
    const adData = { ...data };
    let { desc, type, visibility } = data;

    const formData = new FormData();
    formData.append("desc", desc);
    formData.append("image", advertisement?.image);
    formData.append("type", type);
    formData.append("visibility", visibility ? "Hide" : "Show");

    try {
      await httpClient("multipart/form-data")
        .post("advertisement", formData)
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
    setValueAd("desc", '')
    setValueAd("type", '')
    setAdImg('')
    setShowAdvertisementModel(false)
    // const contactDetails = [businessAccountData.contactDetails, contactData]
    // const updatedBusinessAccountData = {...businessAccountData, contactDetails}
    // console.log('updatedBusinessAccountData', updatedBusinessAccountData)
  };

  const removeAdImg = () => {
    setAdImg('')
    setAdvertisement(undefined)
  }

  type AdvertisementProps = {
    _id: string;
    desc: string;
    createdAt: string;
    image: {
      key: string;
    },
    type: string;
    createdBy: {
      name: string;
      username: string;
      _id: string;
      profilePicture: {
        key: string;
      }
    }
  };
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 flex items-center justify-center z-50"
        onClick={() => setShowAdvertisementModel(false)}
      />
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center text-black z-50">
        <div className="relative flex flex-col md:flex-row gap-6 p-5 text-center font-medium  bg-white rounded-lg">
        <FormProvider {...advertisementForm}>
                <form
                  onSubmit={handleSubmitAd(addAdvertisement)}
                  className="flex flex-col gap-2 py-2"
                >
                  {adImg ?
                  (<div>
                    <div className="relative h-40 w-full">
                      <div
                        className="absolute top-0 right-0 flex flex-col justify-center items-center w-8 h-8 bg-red-500 rounded cursor-pointer"
                        onClick={removeAdImg}
                      >
                        <IoClose color="white" />
                      </div>
                      <div className="h-40 w-full border border-gray-600 flex justify-center items-center rounded overflow-hidden">
                        <div
                          className="h-40 w-full bg-cover bg-no-repeat bg-center"
                          style={{
                            backgroundImage: `url('${adImg}')`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>) : 
                  (<div {...getAdRootProps()}>
                    <input
                      type="file"
                      {...getAdInputProps()}
                      {...registerAd("image")}
                      />
                    <div
                      className={`w-full h-40 border-2 rounded border-dashed p-4 flex flex-col gap-2 items-center justify-center cursor-pointer border-black ${
                        isDragActive ? "border-blue-500" : "border-black"
                      }`}
                      >
                      <p className="font-semibold">Add a photo</p>
                      <BsFillCameraFill className="w-11 h-11" />
                    </div>
                  </div>)
                    }

                  <textarea
                    id="desc"
                    rows={5}
                    className="border rounded-md border-[#b7babf] py-2 px-3 text-sm max-w-3xl"
                    placeholder="Enter the advertisement description"
                    {...registerAd("desc")}
                  />

                  <div className="flex items-center gap-4">
                    <p>Type</p>
                    <div>
                      <select
                        id="type"
                        className="w-48 border rounded-md border-[#b7babf] py-2 px-3 text-sm"
                        {...registerAd("type")}
                      >
                        <option value=""></option>
                        <option value="REAL_ESTATE">Real estate</option>
                        <option value="USED_CAR">Used car</option>
                        <option value="JOB">Job</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 items-center">
                    <label htmlFor="visibility" className="cursor-pointer">
                      <input
                        type="checkbox"
                        className="cursor-pointer"
                        id="visibility"
                        {...registerAd("visibility")}
                      />
                      <span className="ml-2">Hide advertisement</span>
                    </label>
                  </div>

                  <div className="flex items-center justify-end gap-2 mt-4 w-full">
                    <button
                      className="bg-skeleton py-1 px-3  rounded "
                      onClick={() => setShowAdvertisementModel(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-primary text-white py-1 px-3 rounded "
                      type="submit"
                    >
                      Verify
                    </button>
                  </div>
                </form>
              </FormProvider>
          {/* close button */}
          <svg
            className="block h-12 w-12 absolute -bottom-20 right-1/2 translate-x-1/2 hover:cursor-pointer text-white"
            onClick={() => setShowAdvertisementModel(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            id="menu-close"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          {/* close button */}
        </div>
      </div>
    </>
  );
};

export default AdvertisementModel;
