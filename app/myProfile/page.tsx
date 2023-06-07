"use client";

import "./../../components/enlist/form.css";

import { BsPencilSquare } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { VscGlobe } from "react-icons/vsc";
import { FaRegNewspaper } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsFillCameraFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

import React, { FormEvent, useCallback, useEffect } from "react";
import * as yup from "yup";
import { FileWithPath, useDropzone } from "react-dropzone";
import { useState, useRef, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  SocialMediaSchema,
  updateBusinessInfoSchema,
  fullnameSchema,
  businessNameSchema,
  servicesSchema,
} from "../../utils/schema/signUpSchema";
import httpClient from "@/services/axiosInstance";
import { toast } from "react-hot-toast";
import {
  BusinessAccountDataType,
  EditInfoStateType,
  PersonalAccountDataType,
} from "@/utils/schema/stateType";

type EditModeState = {
  [key: string]: boolean;
};

interface Product {
  id: number;
  name: string;
}
interface Photo {
  id: number;
  name: string;
}

let idCounter = 0; // Counter for generating unique IDs

const Profile = () => {
  const initialEditModeState: EditModeState = {
    businessName: false,
    businessInfo: false,
    website: false,
    about: false,
    businessCategories: false,
    products: false,
    socialMedia: false,
    contact: false,
    photos: false,
    detailedInformation: false,
  };
  const [editModeState, setEditModeState] =
    useState<EditModeState>(initialEditModeState);
  const [isServiceArea, setIsServiceArea] = useState(false);
  const [isPrimaryCategoryChange, setIsPrimaryCategoryChange] = useState(false);
  const [isSecondaryCategoryChange, setIsSecondaryCategoryChange] =
    useState(false);
  const [isAddedPhoto, setIsAddedPhoto] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);

  const handleToggleEditMode = (section: string) => {
    setEditModeState((prevState) => {
      const newState: EditModeState = {};

      for (const key in prevState) {
        newState[key] = key === section ? !prevState[key] : false;
      }

      return newState;
    });
  };

  // BUSINESS INFO FORM

  type BusinessInfoFormValues = {
    address: string;
    building: string;
    city: string;
    zip: string;
    hideAddress: boolean;
    phone: string;
    hidePhone: boolean;
    landmark: string
  };

  const businessInfoForm = useForm<BusinessInfoFormValues>({
    defaultValues: {},
    resolver: yupResolver(updateBusinessInfoSchema),
  });

  const {
    register: registerBusinessInfo,
    handleSubmit: handleSubmitBusinessInfo,
    formState: formStateBusinessInfo,
  } = businessInfoForm;
  const { errors: errorsBusinessInfo } = formStateBusinessInfo;

  // SECTION REFS

  // INITIAL STATE

  const [personalAccountData, setPersonalAccountData] =
    useState<PersonalAccountDataType>({
      _id: "",
      fname: "",
      lname: "",
      username: "",
      phone: "",
      email: "",
      about: "",
      socialMediaLinks: [],
      gallerys: [],
    });
  const [personalFirstname, setPersonalFirstname] = useState("");
  const [personalLastname, setPersonalLastname] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState({
    address: '',
    city: '',
    landmark: '',
    pincode: '',
    place: '',
    state: '',
    streetNumber: '',
  })
  const [businessAccountData, setBusinessAccountData] =
    useState<BusinessAccountDataType>({
      _id: "",
      name: "",
      username: "",
      phone: "",
      email: "",
      category: "",
      website: "",
      about: "",
      socialMediaLinks: [],
      services: [],
      gallery: [],
      addressDetails: {
        streetNumber: "",
        state: "",
        city: "",
        address: "",
        pincode: "",
        place: "",
        landmark: "",
      },
      contactDetails: {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        isAddressVisible: true,
      },
      status: "",
      isDeleted: false,
    });

  const [editInfoState, setEditInfoState] = useState<EditInfoStateType>({
    logo: "https://i.ibb.co/SPJXPcD/store.png",
    businessName: "",
    streetAddress: "",
    city: "",
    state: "Abudhabi",
    zip: "",
    hideAddress: false,
    serviceAtCustomerLocation: false,
    phone: "",
    hidePhone: true,
    website: "",
    about: "",
    primaryCategory: "",
    secondaryCategory: [],
    products: [],
    photos: [],
    socialMedia: {
      facebook: "",
      instagram: "",
      twitter: "",
      linkedin: "",
      youtube: "",
      pinterest: "",
    },
    contacts: "",
    detailedInformation: {
      locationType: "",
      yearEstablished: "",
      employees: "",
    },
  });
  const [accountType, setAccountType] = useState<string | null>();

  const handleSocialMediaChange = (
    name: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setEditInfoState((prevState) => ({
      ...prevState,
      socialMedia: { ...prevState.socialMedia, [name]: value },
    }));
  };

  const handleDetailedInformationChange = (
    name: string,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setEditInfoState((prevState) => ({
      ...prevState,
      detailedInformation: { ...prevState.detailedInformation, [name]: value },
    }));
  };

  // SECTION REFS
  const businessInfoRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);
  const socialMediaRef = useRef<HTMLDivElement>(null);

  // PROGRESS BAR
  const handleProgessBarClick = (
    ref: React.RefObject<HTMLDivElement>,
    section: string
  ) => {
    const navbarHeight = 120;
    const rect = ref.current?.getBoundingClientRect();
    const topOffset = rect?.top || 0;
    window.scrollTo({
      top: window.pageYOffset + topOffset - navbarHeight,
      behavior: "smooth",
    });
    handleToggleEditMode(section);
  };

  const isAddressCompleted =
    businessAddress.address.length > 0 && businessAccountData.phone.length > 0;
  const isCategoriesCompleted = editInfoState.primaryCategory.length > 0;
  const isAboutCompleted =
    accountType === "personal"
      ? personalAccountData.about.length > 0
      : businessAccountData.about.length > 0;
  const isPhotoCompleted =
    (editInfoState.logo !== "https://i.ibb.co/SPJXPcD/store.png" &&
      editInfoState.logo.length > 0) ||
    editInfoState.photos.length > 0;
  const isServicesCompleted = editInfoState.products.length > 0;
  const isSocialMediaCompleted =
  accountType === 'personal'
    ? personalAccountData.socialMediaLinks.some((link) => link.link !== "")
    : businessAccountData.socialMediaLinks.some((link) => link.link !== "");


  const progressSections = [
    isAddressCompleted,
    isCategoriesCompleted,
    isAboutCompleted,
    isPhotoCompleted,
    isServicesCompleted,
    isSocialMediaCompleted,
  ];

  // Calculate the completion percentage
  const completedSections = progressSections.filter((section) => section);
  const completionPercentage = Math.floor(
    (completedSections.length / progressSections.length) * 100
  );
  const overallCompletionPercentage =
    completedSections.length === progressSections.length
      ? 100
      : Math.min(completedSections.length * 15, 100);

  // const validateField = async (fieldName: string, value: FormType[keyof FormType]) => {
  //   try {
  //     await yup.reach(validationSchema, fieldName).validate(value);
  //     setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
  //   } catch (validationError: yup.ValidationError) {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       [fieldName]: validationError.message,
  //     }));
  //   }
  // };

  const handleEditInfoStateChange = (
    section: keyof EditInfoStateType,
    value: EditInfoStateType[keyof EditInfoStateType]
  ) => {
    setEditInfoState((prevState) => ({
      ...prevState,
      [section]: value,
    }));

    // validateField(section, String(value));
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.trim();

    if (input === "" || /^\d+$/.test(input)) {
      setEditInfoState((prevState) => ({
        ...prevState,
        phone: input,
      }));
    }
  };

  // DROPZONE
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[], section: string) => {
      acceptedFiles.forEach((file: FileWithPath) => {
        const reader: FileReader = new FileReader();

        reader.onabort = () => console.log("File reading was aborted");
        reader.onerror = () => console.log("File reading has failed");
        reader.onload = () => {
          // Do whatever you want with the file contents
          const binaryStr: ArrayBuffer | null = reader.result as ArrayBuffer;
          console.log("file", file);

          if (section === "logo") {
            setEditInfoState((prevState) => ({
              ...prevState,
              logo: URL.createObjectURL(file),
            }));
          } else if (section === "companyImages") {
            const newPhotos = [...uploadedPhotos, URL.createObjectURL(file)];
            setUploadedPhotos(newPhotos);
            handlePhotoAdd(URL.createObjectURL(file));
            setIsAddedPhoto(true);
          }
        };

        reader.readAsArrayBuffer(file);
      });
      console.log(acceptedFiles);
    },

    [uploadedPhotos]
  );

  const {
    getRootProps: getCompanyImagesRootProps,
    getInputProps: getCompanyImagesInputProps,
    isDragActive,
  } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, "companyImages"),
  });

  const { getRootProps: getLogoRootProps, getInputProps: getLogoInputProps } =
    useDropzone({ onDrop: (acceptedFiles) => onDrop(acceptedFiles, "logo") });

  const removePhoto = (id: number) => {
    const newPhotos = editInfoState.photos.filter((photo) => photo.id !== id);
    setEditInfoState((prevState) => ({ ...prevState, photos: newPhotos }));
    if (newPhotos.length === 0) {
      setIsAddedPhoto(false);
    }
  };

  const removeLogo = () => {
    const oldLogo = "https://i.ibb.co/SPJXPcD/store.png";
    setEditInfoState((prevState) => ({ ...prevState, logo: oldLogo }));
    setShowDeleteModel(false);
  };

  const handlePhotoAdd = (value: string) => {
    setEditInfoState((prevState) => {
      const updatedProducts: Photo[] = [...prevState.photos];

      const lastIndex = updatedProducts.length - 1;
      const id = lastIndex >= 0 ? updatedProducts[lastIndex].id + 1 : 0;

      updatedProducts.push({ id, name: value });

      return {
        ...prevState,
        photos: updatedProducts,
      };
    });
  };

  const newLogoAdded =
    editInfoState.logo === "https://i.ibb.co/SPJXPcD/store.png" ? false : true;

  // SECTION FUNCTIONS

  const verifyBusinessInfo = async(data: BusinessInfoFormValues) => {
    // POST API
    console.log(data)
    const info = {
      address: data.address,
      city: data.city,
      landmark: data.landmark,
      pincode: data.zip,
      state: businessAddress.state,
      streetNumber: businessAddress.streetNumber,
      place: businessAddress.place
    }

    const updatedBusinessAccountData = {...businessAccountData, addressDetails: {...info}}
    try {
      await httpClient()
        .patch("user/business/profile", updatedBusinessAccountData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log("error updating", err));
    } catch (error) {
      console.log(error);
    }

    handleToggleEditMode("businessInfo");
    console.log("verified business info");
  };

  console.log('error', errorsBusinessInfo)

  const verifyWebsite = async () => {
    // POST API
    if (accountType === "business") {
      const updatedBusinessAccountData = {
        ...businessAccountData,
        website: businessAccountData.website,
      };
      try {
        await httpClient()
          .patch("user/business/profile", updatedBusinessAccountData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log("error updating", err));
      } catch (error) {
        console.log(error);
      }
    }
    handleToggleEditMode("website");
    console.log("verified website url");
  };

  const verifyAbout = async () => {
    try {
      console.log("account type", accountType);

      if (accountType === "personal") {
        const updatedPersonalAccountData = {
          ...personalAccountData,
          about: personalAccountData.about,
        };

        await httpClient()
          .patch("user/personal/profile", updatedPersonalAccountData)
          .catch((err) => console.log(err));

        console.log("Personal account data updated successfully");
      }
    } catch (error) {
      console.error("Failed to update account data:", error);
    }
    if (accountType === "business") {
      try {
        const updatedBusinessAccountData = {
          ...businessAccountData,
          about: businessAccountData.about,
        };

        await httpClient().patch(
          "user/business/profile",
          updatedBusinessAccountData
        );

        console.log("Business account data updated successfully");
      } catch (error) {
        console.error("Failed to update account data:", error);
      }
    }
    handleToggleEditMode("about");
    console.log("Verified about");
  };

  const verifyBusinessCategories = () => {
    // POST API
    handleToggleEditMode("businessCategories");
    console.log("verified business categories");
  };

  // FULL NAME
  type FullnameFormValue = {
    firstname: string;
    lastname: string;
  };
  const fullnameForm = useForm<FullnameFormValue>({
    defaultValues: {},
    resolver: yupResolver(fullnameSchema),
  });

  const {
    register: registerFullname,
    handleSubmit: handleSubmitFullname,
    formState: formStateFullname,
  } = fullnameForm;
  const { errors: errorsFullname } = formStateFullname;

  const verifyFullname = async (data: FullnameFormValue) => {
    if (accountType === "personal") {
      handleToggleEditMode("businessName");
      const { firstname, lastname } = data;
      const updatedPersonalAccountData = {
        ...personalAccountData,
        fname: firstname,
        lname: lastname,
      };
      setPersonalAccountData(updatedPersonalAccountData);
      try {
        await httpClient()
          .patch("user/personal/profile", updatedPersonalAccountData)
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    }
  };

  // BUSINESS NAME
  type businessNameFormValue = {
    name: string;
  };

  const businessNameForm = useForm<businessNameFormValue>({
    defaultValues: {},
    resolver: yupResolver(businessNameSchema),
  });

  const {
    register: registerBusinessName,
    handleSubmit: handleSubmitBusinessName,
    formState: formStateBusinessName,
  } = businessNameForm;
  const { errors: errorsBusinessName } = formStateBusinessName;

  const verifyBusinessName = async (data: businessNameFormValue) => {
    console.log("data", data);
    if (accountType === "business") {
      handleToggleEditMode("businessName");
      const { name } = data;
      const updatedBusinessAccountData = { ...businessAccountData, name };
      setBusinessAccountData(updatedBusinessAccountData);
      try {
        await httpClient()
          .patch("user/business/profile", updatedBusinessAccountData)
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    }
  };

  // SOCIAL MEDIA
  const verifySocialMedia = async (data: SocialMediaFormValues) => {
    handleToggleEditMode("socialMedia");

    const transformedData = Object.entries(data).reduce(
      (result: { title: string; link: string }[], [platform, value]) => {
        if (value) {
          const title = platform.toUpperCase();
          const link = value;
          result.push({ title, link });
        }
        return result;
      },
      []
    );

    if (accountType === 'personal') {

      const updatedPersonalAccountData = {
        ...personalAccountData,
        socialMediaLinks: transformedData,
      };
      await httpClient()
      .patch("user/personal/profile", updatedPersonalAccountData)
      .catch((err) => console.log(err));
      console.log("verified social media");

    } else if (accountType === 'business') {
      const updatedBusinessAccountData = {
        ...businessAccountData,
        socialMediaLinks: transformedData,
      };
      console.log(updatedBusinessAccountData)
      await httpClient()
      .patch("user/business/profile", updatedBusinessAccountData)
      .catch((err) => console.log(err));
      console.log("verified social media");
    }
  };


  type SocialMediaFormValues = {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    youtube: string;
  };
  const [personalSocialMediaLinks, setPersonalSocialMediaLinks] = useState({
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    youtube: "",
  });
  const [businessSocialMediaLinks, setBusinessSocialMediaLinks] = useState({
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    youtube: "",
  });

  const sm =
    accountType === "personal"
      ? personalAccountData.socialMediaLinks
      : businessAccountData.socialMediaLinks;

  console.log(sm);
  const instagramObj = Object.values(sm).find(
    (obj) => obj.title === "INSTAGRAM"
  );
  const facebookObj = Object.values(sm).find((obj) => obj.title === "FACEBOOK");
  const linkedinObj = Object.values(sm).find((obj) => obj.title === "LINKEDIN");
  const twitterObj = Object.values(sm).find((obj) => obj.title === "TWITTER");
  const youtubeObj = Object.values(sm).find((obj) => obj.title === "YOUTUBE");

  const defaultValues: SocialMediaFormValues = useMemo(
    () => ({
      instagram: instagramObj?.link || "",
      facebook: facebookObj?.link || "",
      twitter: "",
      linkedin: "",
      youtube: "",
    }),
    []
  );

  const socialMediaForm = useForm<SocialMediaFormValues>({
    defaultValues,
    resolver: yupResolver(SocialMediaSchema),
  });

  const {
    register: registerSocialMedia,
    handleSubmit: handleSubmitSocialMedia,
    formState: formStateSocialMedia,
  } = socialMediaForm;
  const { errors: errorsSocialMedia } = formStateSocialMedia;

  const isSocialMediaAdded = accountType === 'personal' ? Object.values(
    personalAccountData.socialMediaLinks
  ).some((value) => value !== undefined) : Object.values( 
    businessAccountData.socialMediaLinks
  ).some((value) => value !== undefined)

  const verifyDetailedInformation = () => {
    // POST API
    handleToggleEditMode("detailedInformation");
    console.log("verified detailed information");
  };

  // const updatedSocialMedia = useMemo(() => {
  //   return {
  //     ...editInfoState.socialMedia,
  //     instagram: instagramObj ? instagramObj.link : "",
  //     facebook: facebookObj ? facebookObj.link : "",
  //     linkedin: linkedinObj ? linkedinObj.link : "",
  //     twitter: twitterObj ? twitterObj.link : "",
  //     youtube: youtubeObj ? youtubeObj.link : "",
  //   };
  //   setEditInfoState((prevState) => ({
  //     ...prevState,
  //     socialMedia: updatedSocialMedia,
  //   }));
  // }, [instagramObj, facebookObj, linkedinObj, twitterObj, youtubeObj]);

  // USEEFFECT
  useEffect(() => {
    const userApiData = async () => {
      const accType = localStorage.getItem("accountType");
      console.log("acc type", accType);
      setAccountType(accType);

      if (accType === "personal") {
        try {
          const response = await httpClient().get("user/personal/profile");
          if (response.status === 200) {
            console.log("userapidata", response.data);
            console.log("This is a personal account");
            const res = response.data.data;
            setPersonalAccountData(res);
            setPersonalFirstname(res.fname);
            setPersonalLastname(res.lname);
          } else if (response.status === 400) {
            toast.error(response.data.message, {
              icon: "🔴",
            });
          }
        } catch (error) {
          console.log(error);
        }
      } else if (accType === "business") {
        try {
          const response = await httpClient().get("user/business/profile");
          if (response.status === 200) {
            console.log("business api data", response.data);
            const res = response.data.data;
            setBusinessAccountData(res);
            setBusinessName(res.name);
            setBusinessAddress({...res.addressDetails, phone: res.phone})
          } else if (response.status === 400) {
            toast.error(response.data.message, {
              icon: "🔴",
            });
          }
        } catch (error) {
          console.log(error);
        }

        try {
          const response = await httpClient().get('/category/customer')
          const res = response.data
          console.log(res)
        } catch (error) {
          console.log(error)
        }
      }
      setIsLoading(false);
    };

    userApiData();
  }, []);

  accountType === "personal"
    ? console.log("personal account data", personalAccountData)
    : console.log("business account data", businessAccountData);


    type ServicesFormValues = {
      service: string
    }

  const handleProductAdd = async (data: ServicesFormValues) => {
    const service = { name: data.service}
    const services = [...businessAccountData.services, service ]
    const updatedBusinessAccountData = {...businessAccountData, services}
    console.log('updatedBusinessAccount data', updatedBusinessAccountData)

    if (data.service.length > 0) {
      try {
        await httpClient().patch('user/business/profile', updatedBusinessAccountData )
      } catch (error) {
        console.log(error)
      }
      setEditInfoState((prevState) => {
        const lastIndex = editInfoState.products.length - 1;
        const id = lastIndex + 1;
        const updatedProducts: Product[] = [...prevState.products];
        updatedProducts[id] = { id, name: data.service };
  
        return {
          ...prevState,
          products: updatedProducts,
        };
      });
    }
    handleToggleEditMode("products");
  };

  

  const servicesForm = useForm<ServicesFormValues>({
    defaultValues : {},
    resolver: yupResolver(servicesSchema),
  });

  const {
    register: registerService,
    handleSubmit: handleSubmitService,
    formState: formStateService,
  } = servicesForm;
  const { errors: errorsService } = formStateService;

  const addProductForm = (
    <FormProvider {...servicesForm}>
    <form name="editProductForm" onSubmit={handleSubmitService(handleProductAdd)}>
      <div className="flex">
          <input
            type="text"
            className="form-input rounded-r-0"
            {...registerService('service')}
          />
        <button
          type="submit"
          className="py-2 px-4 bg-success text-white"
          title="save"
        >
          <FaCheck />
        </button>
        <button
          type="submit"
          className="py-2 px-4 bg-error text-white"
          title="save"
        >
          <FaTrashAlt />
        </button>
        <div className="flex items-center justify-center px-2">
          <IoClose
            className="text-error w-6 h-6 stroke-3 cursor-pointer"
            onClick={() => handleToggleEditMode("products")}
          />
        </div>
      </div>
      <p className="text-error text-sm mt-1">{errorsService?.service?.message}</p>
    </form>
    </FormProvider>
  );


  console.log('uploded photos', uploadedPhotos)
  const socialMediaEdited = isSocialMediaAdded && (
    <div className="flex flex-col gap-6">
      {facebookObj && (
        <div className="flex flex-row items-center gap-4">
          <div className="w-8">
            <BsFacebook className="w-full h-full" />
          </div>
          <div className="flex flex-row items-center gap-2 hover:underline cursor-pointer">
            <a href={`https://${facebookObj.link}`} target="_blank">
              {facebookObj.link}
            </a>
            <HiOutlineExternalLink className="w-5 h-5" />
          </div>
        </div>
      )}
      {instagramObj && (
        <div className="flex flex-row items-center gap-4">
          <div className="w-8">
            <BsInstagram className="w-full h-full" />
          </div>
          <div className="flex flex-row items-center gap-2 hover:underline cursor-pointer">
            <a
              href={`https://instagram.com/${instagramObj.link}`}
              target="_blank"
            >
              {instagramObj.link}
            </a>
            <HiOutlineExternalLink className="w-5 h-5" />
          </div>
        </div>
      )}
      {twitterObj && twitterObj.title === "TWITTER" && (
        <div className="flex flex-row items-center gap-4">
          <div className="w-8">
            <BsTwitter className="w-full h-full" />
          </div>
          <div className="flex flex-row items-center gap-2 hover:underline cursor-pointer">
            <a href={`https://twitter.com/${twitterObj.link}`} target="_blank">
              {twitterObj.link}
            </a>
            <HiOutlineExternalLink className="w-5 h-5" />
          </div>
        </div>
      )}
      {linkedinObj && (
        <div className="flex flex-row items-center gap-4">
          <div className="w-8">
            <BsLinkedin className="w-full h-full" />
          </div>
          <div className="flex flex-row items-center gap-2 hover:underline cursor-pointer">
            <a href={`https://${linkedinObj.link}`} target="_blank">
              {linkedinObj.link}
            </a>
            <HiOutlineExternalLink className="w-5 h-5" />
          </div>
        </div>
      )}
      {youtubeObj && (
        <div className="flex flex-row items-center gap-4">
          <div className="w-8">
            <BsYoutube className="w-full h-full" />
          </div>
          <div className="flex flex-row items-center gap-2 hover:underline cursor-pointer">
            <a href={`https://${youtubeObj.link}`} target="_blank">
              {youtubeObj.link}
            </a>
            <HiOutlineExternalLink className="w-5 h-5" />
          </div>
        </div>
      )}
      {/* {editInfoState.socialMedia.pinterest.length > 0 && (
        <div className="flex flex-row items-center gap-4">
          <div className="w-8">
            <BsPinterest className="w-full h-full" />
          </div>
          <div className="flex flex-row items-center gap-2 hover:underline cursor-pointer">
            <span>{editInfoState.socialMedia.pinterest}</span>
            <HiOutlineExternalLink className="w-5 h-5" />
          </div>
        </div>
      )} */}
    </div>
  );

  const logoDeleteModel = showDeleteModel && (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative rounded p-5 bg-white">
        <div className="flex flex-col gap-4">
          <p>Are you sure you want to delete this image?</p>
          <div className="h-48 w-48 flex justify-center items-center rounded overflow-hidden mx-auto">
            <div
              className="h-48 w-48 bg-cover bg-no-repeat bg-center rounded"
              style={{ backgroundImage: `url(${editInfoState.logo})` }}
            />
          </div>
          <div className="flex flex-row gap-2 self-end">
            <button
              className="px-6 py-2 rounded cursor-pointer text-center"
              onClick={() => setShowDeleteModel(false)}
            >
              Cancel
            </button>
            <button
              className="px-6 py-2 rounded cursor-pointer text-center bg-[#e15249] text-white"
              onClick={removeLogo}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const editOrAdd = (condition: boolean) => {
    return condition ? (
      <div className="flex items-center gap-2 cursor-pointer">
        <BsPencilSquare />
        <p>Edit</p>
      </div>
    ) : (
      <div className="flex items-center gap-2 cursor-pointer">
        <HiPlus />
        <p>Add</p>
      </div>
    );
  };

  let isAboutPresent = false;
  if (accountType === "personal") {
    isAboutPresent = personalAccountData.about.length > 0;
  } else if (accountType === "business") {
    isAboutPresent = businessAccountData.about.length > 0;
  }

  return (
    <div className="bg-[#F5F2F0]">
      {logoDeleteModel}
      <div className="lg:p-8 w-screen lg:w-page flex flex-col gap-8 max-w-7xl mx-auto font-inter ">
        {/* \\\\\\\\\\\\\\\\\ */}
        {/* PROGRESS👇 */}
        <div className=" lg:m-0 flex flex-col gap-1 p-5 rounded-md border-2 border-primary-v1 text-gray-800 bg-white">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10">
            <div className="flex flex-col gap-2 text-inter">
              <p className="text-4xl lg:text-7xl font-semibold">
                {overallCompletionPercentage}%
              </p>
              <p className="font-semibold text-lg md:text-xl lg:max-w-[194px]">
                of your profile is complete
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:py-6 w-full xl:w-min">
              <div className="w-full xl:w-[800px] h-8 bg-skeleton rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold flex items-center justify-center font-semibold text-white"
                  style={{ width: `${overallCompletionPercentage}%` }}
                >
                  {overallCompletionPercentage}%
                </div>
              </div>
              <p className="text-lg md:text-xl font-medium">
                Complete your profile to get more reach!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-12 font-regular">
                {/* ITEM 1 */}
                <div className="flex justify-between items-center gap-2">
                  <p
                    className={`${
                      isAddressCompleted ? "text-success" : "text-error"
                    }`}
                  >
                    Name, Address & phone
                  </p>
                  <div
                    onClick={() =>
                      handleProgessBarClick(businessInfoRef, "businessInfo")
                    }
                  >
                    {editOrAdd(isAddressCompleted)}
                  </div>
                </div>
                {/* ITEM 2 */}
                <div className="flex justify-between items-center gap-2">
                  <p
                    className={`${
                      isCategoriesCompleted ? "text-success" : "text-error"
                    }`}
                  >
                    Business Categories
                  </p>
                  <div
                    onClick={() =>
                      handleProgessBarClick(categoriesRef, "businessCategories")
                    }
                  >
                    {editOrAdd(isCategoriesCompleted)}
                  </div>
                </div>
                {/* ITEM 3 */}
                <div className="flex justify-between items-center gap-2">
                  <p
                    className={`${
                      isAboutCompleted ? "text-success" : "text-error"
                    }`}
                  >
                    Detailed Description
                  </p>
                  <div onClick={() => handleProgessBarClick(aboutRef, "about")}>
                    {editOrAdd(isAboutCompleted)}
                  </div>
                </div>
                {/* ITEM 4 */}
                <div className="flex justify-between items-center gap-2">
                  <p
                    className={`${
                      isPhotoCompleted ? "text-success" : "text-error"
                    }`}
                  >
                    Logo or Image
                  </p>
                  <div
                    onClick={() =>
                      newLogoAdded
                        ? handleProgessBarClick(photosRef, "photos")
                        : handleProgessBarClick(logoRef, "")
                    }
                  >
                    {editOrAdd(isPhotoCompleted)}
                  </div>
                </div>
                {/* ITEM 4 */}
                <div className="flex justify-between items-center gap-2">
                  <p
                    className={`${
                      isServicesCompleted ? "text-success" : "text-error"
                    }`}
                  >
                    Services
                  </p>
                  <div
                    onClick={() =>
                      handleProgessBarClick(servicesRef, "products")
                    }
                  >
                    {editOrAdd(isServicesCompleted)}
                  </div>
                </div>
                {/* ITEM 4 */}
                <div className="flex justify-between items-center gap-2">
                  <p
                    className={`${
                      isSocialMediaCompleted ? "text-success" : "text-error"
                    }`}
                  >
                    Social Media
                  </p>
                  <div
                    onClick={() =>
                      handleProgessBarClick(socialMediaRef, "socialMedia")
                    }
                  >
                    {editOrAdd(isSocialMediaCompleted)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PROGRESS👆 */}
        {/* \\\\\\\\\\\\\\\\\ */}

        {/* \\\\\\\\\\\\\\\\\ */}
        {/* MAIN DETAILS👇 */}
        <div
          className="flex flex-col lg:flex-row gap-4 bg-white text-gray-800 p-6"
          ref={businessInfoRef}
        >
          <div className="relative w-48 h-48  rounded  " ref={logoRef}>
            {/* close */}
            {newLogoAdded && (
              <div
                className="absolute top-0 right-0 flex flex-col justify-center items-center w-8 h-8 bg-red-500 rounded cursor-pointer"
                onClick={() => setShowDeleteModel(true)}
              >
                <IoClose color="white" />
              </div>
            )}
            {/* image */}

            <div
              className="h-48 w-48 bg-cover bg-no-repeat bg-center rounded"
              style={{ backgroundImage: `url(${editInfoState.logo})` }}
              {...(!newLogoAdded && getLogoRootProps())}
            >
              {!newLogoAdded && (
                <input type="file" {...getLogoInputProps()} name="logo" />
              )}
              {/* <RiStore3Fill className="block w-full h-full" /> */}
              <div className="absolute bottom-0 inset-x-0 cursor-pointer bg-none py-2 px-12">
                {!newLogoAdded && (
                  <div className="flex flex-row items-center rounded bg-black py-2 px-6 text-white justify-center hover:bg-zinc-800">
                    Change
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:pl-4">
            {/* name */}
            <div className="flex flex-row gap-4 pb-4">
              <div className="flex flex-col w-full">
                {!editModeState.businessName ? (
                  <div className="flex gap-4 items-center justify-between">
                    {/* normal */}
                    <span className="text-4xl font-extrabold text-gray-900 font-lora w-2/3">
                      {accountType === "personal"
                        ? `${personalAccountData.fname} ${personalAccountData.lname}`
                        : businessAccountData.name}
                    </span>
                    <button
                      className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950"
                      onClick={() => handleToggleEditMode("businessName")}
                    >
                      Edit
                    </button>
                  </div>
                ) : accountType === "personal" ? (
                  <FormProvider {...fullnameForm}>
                    <form
                      action="submit"
                      onSubmit={handleSubmitFullname(verifyFullname)}
                    >
                      <div className="flex gap-4 items-center justify-between">
                        <div className="flex items-center form-control">
                          <div className="flex flex-col gap-1">
                            <label>First name</label>
                            <input
                              type="text"
                              className="w-full md:w-108 lg:w-56 xl:w-108  mb-2 "
                              value={
                                accountType === "personal"
                                  ? personalFirstname
                                  : "business"
                              }
                              {...registerFullname("firstname")}
                              onChange={(e) =>
                                setPersonalFirstname(e.target.value)
                              }
                            />
                            <p className="text-sm text-error">
                              {errorsFullname?.firstname?.message}
                            </p>
                          </div>
                          <div className="flex flex-col gap-1">
                            <label>Last name</label>
                            <input
                              type="text"
                              className="w-full md:w-108 lg:w-56 xl:w-108  mb-2 "
                              value={
                                accountType === "personal"
                                  ? personalLastname
                                  : "business"
                              }
                              {...registerFullname("lastname")}
                              onChange={(e) =>
                                setPersonalLastname(e.target.value)
                              }
                            />
                            <p className="text-sm text-error">
                              {errorsFullname?.lastname?.message}
                            </p>
                          </div>
                        </div>
                        <span className="flex-1"></span>
                        <div className="flex items-start flex-wrap gap-2">
                          <button
                            className="bg-skeleton py-1 px-3  rounded "
                            type="button"
                            onClick={() => handleToggleEditMode("businessName")}
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-orange text-white py-1 px-3 rounded "
                            type="submit"
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    </form>
                  </FormProvider>
                ) : (
                  <FormProvider {...businessNameForm}>
                    <form
                      action="submit"
                      onSubmit={handleSubmitBusinessName(verifyBusinessName)}
                    >
                      <div className="flex gap-4 items-center justify-between">
                        <div className="flex flex-col gap-1 form-control">
                          <label>First name</label>
                          <input
                            type="text"
                            className="w-full md:w-108 lg:w-56 xl:w-108  mb-2 "
                            value={businessName}
                            {...registerBusinessName("name")}
                            onChange={(e) => setBusinessName(e.target.value)}
                          />
                          <p className="text-sm text-error">
                            {errorsBusinessName?.name?.message}
                          </p>
                        </div>

                        <span className="flex-1"></span>
                        <div className="flex items-start flex-wrap gap-2">
                          <button
                            className="bg-skeleton py-1 px-3  rounded "
                            type="button"
                            onClick={() => handleToggleEditMode("businessName")}
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-orange text-white py-1 px-3 rounded "
                            type="submit"
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    </form>
                  </FormProvider>
                )}
              </div>
            </div>
            {/* info */}

            {/* business form */}
            {accountType === "business" && (
              <div className="flex flex-col gap-6 text-gray-800">
                <FormProvider {...businessInfoForm}>
                <form className="flex flex-col gap-2" onSubmit={handleSubmitBusinessInfo(verifyBusinessInfo)} noValidate>
                  <div className="flex flex-row gap-4">
                    <span className="text-2xl font-lora font-medium">
                      Business Info
                    </span>
                    <span className="flex-1"></span>
                    {/* optional */}
                    <div>
                      {!editModeState.businessInfo ? (
                        <button
                          className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950"
                          onClick={() => handleToggleEditMode("businessInfo")}
                        >
                          Edit
                        </button>
                      ) : (
                        <div className="flex items-start flex-wrap gap-2">
                          <button
                            className="bg-skeleton py-1 px-3  rounded "
                            onClick={() => handleToggleEditMode("businessInfo")}
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-orange text-white py-1 px-3 rounded "
                            type="submit"
                          >
                            Verify
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    {!editModeState.businessInfo ? (
                      <div className="flex flex-row items-start gap-2">
                        <CiLocationOn className="mt-1" />
                        <div className="flex flex-col gap-1">
                          <p className="text-lg font-medium flex items-center gap-1">
                            Address{" "}
                            <span>
                              <FaEye className="h-3" />
                            </span>
                          </p>
                          <p className="text-lg text-gray-700">
                            {businessAddress.address}
                            {`, `}
                            {businessAddress.city}
                            {`, `}
                            {businessAddress.place}
                            {`, `}
                            {businessAddress.pincode}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-2">
                          <CiLocationOn />
                          <p className="text-lg font-medium flex items-center gap-1">
                            Address{" "}
                            <span>
                              <FaEye className="h-3" />
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col gap-1 form-control">
                            <label htmlFor="state">State</label>
                            <select
                              name="state"
                              id="state"
                              className="w-1/2 md:w-1/4"
                            >
                              <option value="Abudhabi">Abudhabi</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-1 form-control">
                            <label htmlFor="streetAddress">
                              Address
                            </label>
                            <input
                              type="text"
                              id="streetAddress"
                              placeholder="e.g. Sheikh Zayed St"
                              {...registerBusinessInfo('address')}
                              value={businessAddress.address}
                              onChange={(e) => setBusinessAddress(prevState => ({...prevState, address: e.target.value}))}
                            />
                          </div>
                          <div className="flex flex-col gap-1"></div>{" "}
                          {/* ADDRESS LINE 2 optional */}
                          <div className="grid md:grid-cols-3 md:gap-x-10 gap-y-3">
                            <div className="flex flex-col col-span-3 md:col-span-1 md:mr-2 form-control">
                              <label htmlFor="building">
                                Landmark
                              </label>
                              <input
                                type="text"
                                id="building"
                                placeholder="Louvre Abu Dhabi"
                                {...registerBusinessInfo('landmark')}
                                value={businessAddress.landmark}
                                onChange={(e) => setBusinessAddress(prevState => ({...prevState, landmark: e.target.value}))}
                              />
                            </div>
                            <div className="flex flex-col col-span-3 md:col-span-1 md:mr-2 form-control">
                              <label htmlFor="city">City</label>
                              <input
                                type="text"
                                id="city"
                                placeholder="e.g. Al Ain"
                                {...registerBusinessInfo("city")}
                                value={businessAddress.city}
                                onChange={(e) => setBusinessAddress(prevState => ({...prevState, city: e.target.value}))}
                              />
                            </div>
                            <div className="flex flex-col col-span-3 md:col-span-1 md:mr-2 form-control">
                              <label htmlFor="zip">Zip</label>
                              <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]"
                                id="zip"
                                placeholder="126452"
                                {...registerBusinessInfo('zip')}
                                value={businessAddress.pincode}
                                onChange={(e) => setBusinessAddress(prevState => ({...prevState, pincode: e.target.value}))}
                              />
                            </div>
                          </div>
                          <div className="flex flex-row gap-2 items-center">
                            <label
                              htmlFor="hideAddress"
                              className="cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                className="cursor-pointer"
                                id="hideAddress"
                                name="hideAddress"
                              />
                              <span className="ml-1 text-sm">
                                Don{`'`}t display my address publicly
                              </span>
                            </label>
                          </div>
                          <div className="flex flex-row gap-2 items-center">
                            <label
                              htmlFor="showServiceArea"
                              className="cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                className="cursor-pointer"
                                id="showServiceArea"
                                name="showServiceArea"
                              />
                              <span className="ml-1 text-sm">
                                We deliver or provide service at customer
                                locations
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    {editModeState.businessInfo && isServiceArea && (
                      <div className="flex flex-col w-full gap-2 px-4 items-start">
                        <div className="flex items-center">
                          <CiLocationOn />
                          <p className="text-lg font-medium mr-4">
                            Service Areas
                          </p>
                          <p className="text-sm">2/6 Areas listed</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaTrashAlt />
                          <div className="form-control">
                            <input type="text" />
                          </div>
                        </div>
                        <p className="font-semibold cursor-pointer text-orange-600 hover:underline">
                          + Add Service Area
                        </p>
                      </div>
                    )}

                      <div className="flex flex-row gap-2">
                        <RiPhoneFill className="mt-1" />
                        <div className="flex flex-col gap-1">
                          <p className="text-lg font-medium flex items-center gap-1">
                            Phone{" "}
                            <span>
                              <FaEye className="h-3" />
                            </span>
                          </p>
                          <p className="text-lg text-gray-700">
                            {businessAccountData.phone}
                          </p>
                        </div>
                      </div>

                  </div>
                </form>
                </FormProvider >
              </div>
            )}

            {/* PERSONAL FORM */}
            {accountType === "personal" && (
              <div className="flex flex-col gap-6 text-gray-800">
                <form className="flex flex-col gap-2">
                  <div className="flex flex-row gap-4">
                    <span className="text-2xl font-lora font-medium">
                      Personal Info
                    </span>
                    <span className="flex-1"></span>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-row items-start gap-2">
                      <CiLocationOn className="mt-1" />
                      <div className="flex flex-col gap-1">
                        <p className="text-lg font-medium flex items-center gap-1">
                          Email
                        </p>
                        <p className="text-lg text-gray-700">
                          {personalAccountData.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <RiPhoneFill className="mt-1" />
                      <div className="flex flex-col gap-1">
                        <p className="text-lg font-medium flex items-center gap-1">
                          Phone{" "}
                          <span>
                            <FaEye className="h-3" />
                          </span>
                        </p>
                        <p className="text-lg text-gray-700">
                          {personalAccountData.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* \\\\\\\\ */}
            {/* website */}

            {accountType === "business" && (
              <div className="flex flex-col gap-4 text-gray-800">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between">
                    <p className="text-2xl font-lora font-medium title text-black">
                      Website
                    </p>
                    {!editModeState.website ? (
                      <button
                        className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950"
                        onClick={() => handleToggleEditMode("website")}
                      >
                        Edit
                      </button>
                    ) : (
                      <div className="flex items-start flex-wrap gap-2">
                        <button
                          className="bg-skeleton py-1 px-3  rounded "
                          onClick={() => handleToggleEditMode("website")}
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-orange text-white py-1 px-3 rounded "
                          onClick={verifyWebsite}
                        >
                          Verify
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {!editModeState.website ? (
                  <div className="flex flex-row items-center gap-2">
                    <VscGlobe />
                    <a className="hover:underline" target="_blank" href="#">
                      {businessAccountData.website.length === 0
                        ? "www.yourwebsite.com"
                        : businessAccountData.website}
                    </a>
                  </div>
                ) : (
                  <div className="flex w-full ">
                    <div className="px-2 py-2 bg-skeleton flex items-center justify-center rounded-l">
                      <VscGlobe />
                    </div>
                    <div className=" w-full rounded rounded-l-none border-l-0">
                      <input
                        type="text"
                        id="websiteUrl"
                        placeholder="www.yourwebsite.com"
                        className="border border-[#b7babf] py-2 px-3 w-full border-l-0 rounded-sm text-sm"
                        value={businessAccountData.website}
                        onChange={(e) =>
                          setBusinessAccountData((prevState) => ({
                            ...prevState,
                            website: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {/* MAIN DETAILS👆 */}
        {/* \\\\\\\\\\\\\\\\\ */}

        {/* \\\\\\\\\\\\\\\\\ */}
        {/* ABOUT👇 */}
        <div
          className="flex flex-col gap-4 bg-white text-gray-800 p-6"
          ref={aboutRef}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-medium font-lora text-black title">
                About
              </p>
              {!editModeState.about ? (
                <button
                  className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950"
                  onClick={() => handleToggleEditMode("about")}
                >
                  Edit
                </button>
              ) : (
                <div className="flex items-start flex-wrap gap-2">
                  <button
                    className="bg-skeleton py-1 px-3  rounded "
                    onClick={() => handleToggleEditMode("about")}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-orange text-white py-1 px-3 rounded "
                    onClick={verifyAbout}
                  >
                    Verify
                  </button>
                </div>
              )}
            </div>
            <p className="text-lg">
              Customers use this information to learn what makes your company
              great.
            </p>
          </div>
          {!editModeState.about ? (
            isAboutPresent ? (
              <div className="flex flex-col gap-4 leading-relaxed">
                <div className="lg:w-3/4">
                  <p className="font-semibold">Description:</p>
                  <p>
                    {accountType === "personal"
                      ? personalAccountData.about
                      : businessAccountData.about}
                  </p>
                </div>
              </div>
            ) : (
              <div className="border-2 border-black border-dashed p-4">
                <div className="flex flex-wrap gap-4">
                  <div className="bg-skeleton w-12 h-12 flex items-center justify-center rounded-full">
                    <FaRegNewspaper className="h-5 w-6" />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <p className="text-gray-700">
                        Tell your customers more about your business! What makes
                        your business unique? Introduce your company name and
                        explain what your business does, where you operate (or
                        the markets you serve), and tell us how long you’ve been
                        doing it for.
                      </p>
                      <div className="flex items-center font-bold gap-1">
                        <span
                          className="cursor-pointer hover:underline"
                          onClick={() => handleToggleEditMode("about")}
                        >
                          Add business description
                        </span>
                        <FaChevronRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="w-full">
              <div className="flex flex-col gap-4 lg:w-3/4">
                <p className="font-semibold">Description:</p>
                <div className="flex flex-col">
                  <div className="flex">
                    <textarea
                      name="shortDescription"
                      id="shortDescription"
                      rows={10}
                      maxLength={150}
                      className="border border-[#b7babf] w-full py-2 px-3 text-sm"
                      placeholder="This should be a statement about your business that summarizes the services you provide, the products you offer, and/or the areas that you serve."
                      value={
                        accountType === "personal"
                          ? personalAccountData.about
                          : businessAccountData.about
                      }
                      onChange={(e) => {
                        accountType === "personal"
                          ? setPersonalAccountData((prevState) => ({
                              ...prevState,
                              about: e.target.value,
                            }))
                          : setBusinessAccountData((prevState) => ({
                              ...prevState,
                              about: e.target.value,
                            }));
                      }}
                    ></textarea>
                  </div>
                  <div className="self-end">
                    <span>0/1000</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* ABOUT👆 */}
        {/* \\\\\\\\\\\\\\\\\ */}

        {/* \\\\\\\\\\\\\\\\\ */}
        {/* BUSINESS CATEGORIES👇 */}
        {accountType === "business" && (
          <div
            className="flex flex-col gap-4 bg-white text-gray-800 p-6"
            ref={categoriesRef}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-medium font-lora text-black title">
                  Business Categories
                </p>
                {!editModeState.businessCategories ? (
                  <button
                    className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950"
                    onClick={() => handleToggleEditMode("businessCategories")}
                  >
                    Edit
                  </button>
                ) : (
                  <div className="flex items-start flex-wrap gap-2">
                    <button
                      className="bg-skeleton py-1 px-3  rounded "
                      onClick={() => handleToggleEditMode("businessCategories")}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-orange text-white py-1 px-3 rounded "
                      onClick={verifyBusinessCategories}
                    >
                      Verify
                    </button>
                  </div>
                )}
              </div>
              <p className="text-lg">
                Categorizing your business will help customers find your listing
                among your competitors.
              </p>
            </div>
            {!editModeState.businessCategories ? (
              <div className="flex flex-col gap-2 mt-2">
                <p>
                  {editInfoState.primaryCategory.length > 0
                    ? editInfoState.primaryCategory
                    : "Marketing"}
                </p>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-1">
                  <label htmlFor="primaryCategory">
                    Primary Category (required)
                  </label>
                  <p className="text-sm text-gray-600">
                    Select the category that best describes your business
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  {!isPrimaryCategoryChange ? (
                    <div className="w-80 px-4 py-2 bg-skeleton">
                      <p>
                        {editInfoState.primaryCategory.length > 0
                          ? editInfoState.primaryCategory
                          : "Marketing"}
                      </p>
                    </div>
                  ) : (
                    <input
                      type="text"
                      autoComplete="off"
                      aria-autocomplete="list"
                      aria-controls="react-autosuggestion"
                      className="form-input md:w-80"
                      placeholder="Search for a category"
                      onChange={(e) =>
                        setEditInfoState((prevState) => ({
                          ...prevState,
                          primaryCategory: e.target.value,
                        }))
                      }
                    />
                  )}

                  {editModeState.businessCategories &&
                  isPrimaryCategoryChange ? (
                    <div className="flex items-center gap-4">
                      <div
                        className="hover:underline cursor-pointer text-success"
                        onClick={() =>
                          setIsPrimaryCategoryChange(!isPrimaryCategoryChange)
                        }
                      >
                        apply
                      </div>
                      <div
                        className="hover:underline cursor-pointer text-error"
                        onClick={() =>
                          setIsPrimaryCategoryChange(!isPrimaryCategoryChange)
                        }
                      >
                        cancel
                      </div>
                    </div>
                  ) : (
                    <div
                      className="hover:underline cursor-pointer"
                      onClick={() =>
                        setIsPrimaryCategoryChange(!isPrimaryCategoryChange)
                      }
                    >
                      change
                    </div>
                  )}
                </div>

                <div className="flex flex-row gap-4">
                  <div
                    role="combobox"
                    aria-controls="react-autosuggestion"
                    aria-expanded="false"
                    className="react-autosuggestion-container"
                  >
                    <input
                      type="text"
                      autoComplete="off"
                      aria-autocomplete="list"
                      aria-controls="react-autosuggestion"
                      className="form-input md:w-80"
                      placeholder="Search for a category"
                    />
                    <div
                      className="react-auto-suggestion-container"
                      id="react-autosuggestion"
                      role="listbox"
                    ></div>
                  </div>
                </div>
              </>
            )}

            {/* edit mode */}
            {/* <div className="flex flex-col gap-1">
            <label htmlFor="primaryCategory">
              Primary Category (required)
            </label>
              <p className="text-sm text-gray-600">Select the category that best describes your business</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="w-80 px-4 py-2 bg-skeleton">
              <p>Marketing</p>
            </div>
            <div className="hover:underline cursor-pointer">change</div> */}
            {/* edit mode */}
            {/* <div className="hover:underline cursor-pointer">cancel</div> */}
            {/* edit mode */}
            {/* </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="primaryCategory">
            Secondary Categories (optional)
            </label>
              <p className="text-sm text-gray-600">Secondary categories let people know any additional services your business provides.</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="w-80 px-4 py-2 bg-skeleton">
              <p>Software development</p>
            </div>
            <div className="hover:underline cursor-pointer">change</div>
            <div className="hover:underline cursor-pointer text-error">remove</div>
          </div>
          <div className="flex flex-row gap-4">
            <div role="combobox" aria-controls="react-autosuggestion" aria-expanded="false" className="react-autosuggestion-container">
              <input type="text" autoComplete="off" aria-autocomplete="list" aria-controls="react-autosuggestion" className="form-control" placeholder="Search for a category" />
              <div className="react-auto-suggestion-container" id="react-autosuggestion" role="listbox"></div>
            </div>
          </div> */}
            {/* edit mode */}
          </div>
        )}
        {/* BUSINESS CATEGORIES👆 */}
        {/* \\\\\\\\\\\\\\\\\ */}

        {/* \\\\\\\\\\\\\\\\\ */}
        {/* PRODUCTS AND SERVICES👇 */}
        {accountType === "business" && (
          <div
            className="flex flex-col gap-4 bg-white text-gray-800 p-6"
            ref={servicesRef}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-medium font-lora text-black title">
                  Products and Services
                </p>
              </div>
              <p className="text-lg">
                Create a list of your products and services for your customers.
              </p>
            </div>
            {editInfoState.products.length > 0 && (
              <div className="flex flex-col gap-2">
                <hr className="w-full text-grey-300" />
                <div className="text-xs">
                  {editInfoState.products.length}
                  {`/30 Items Listed`}
                </div>
                {editInfoState.products.map((product) => (
                  <div
                    key={product.id}
                    title="click to edit"
                    className="flex flex-row gap-2 items-center cursor-pointer"
                  >
                    <FaCheckCircle />
                    {/* reordering */}
                    {/* <div className="flex flex-col">
                <AiFillCaretUp />
                <AiFillCaretDown />
              </div> */}
                    {/* reordering */}
                    <span>{product.name}</span>
                  </div>
                ))}
                {!editModeState.products && (
                  <div className="flex flex-row items-center gap-4">
                    <div
                      className="flex flex-row gap-2 items-center cursor-pointer"
                      onClick={() => handleToggleEditMode("products")}
                    >
                      <BsFillPlusCircleFill className="text-success" />
                      <span>Add a product</span>
                    </div>
                    {/* <div className="flex flex-row gap-2 items-center cursor-pointer">
                    <TiArrowUnsorted className="text-orange-700" />
                    <span>Reorder product</span>
                  </div> */}
                  </div>
                )}
              </div>
            )}
            {!editModeState.products ? (
              editInfoState.products.length === 0 && (
                <div className="border-2 border-black border-dashed p-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-skeleton w-12 h-12 flex items-center justify-center rounded-full">
                      <MdMiscellaneousServices className="h-5 w-6" />
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <p className="text-gray-700">
                          Attract the right customers by creating a list of up
                          to 30 products or services that you offer.
                        </p>
                        <div className="flex items-center font-bold gap-1">
                          <span
                            className="cursor-pointer hover:underline"
                            onClick={() => handleToggleEditMode("products")}
                          >
                            Create services list
                          </span>
                          <FaChevronRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <div className="flex flex-col gap-2">
                <hr className="w-full text-grey-300" />
                <div className="text-xs">
                  {`1`}
                  {`/30 Items Listed`}
                </div>
                {addProductForm}
              </div>
            )}
            {/* edit mode */}
            {/* <div className="flex flex-col gap-2">
            <hr className="w-full text-grey-300"/>
            <div className="text-xs">{`1`}{`/30 Items Listed`}</div> */}
            {/* edited */}
            {/* <div title="click to edit" className="flex flex-row gap-2 items-center cursor-pointer"> */}
            {/* <FaCheckCircle /> */}
            {/* reordering */}
            {/* <div className="flex flex-col">
                <AiFillCaretUp />
                <AiFillCaretDown />
              </div> */}
            {/* reordering */}
            {/* <span>bottle</span>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-row gap-2 items-center cursor-pointer">
                <BsFillPlusCircleFill className="text-success" />
                <span>Add a product</span>
              </div>
              <div className="flex flex-row gap-2 items-center cursor-pointer">
                <TiArrowUnsorted className="text-orange-700" />
                <span>Reorder product</span>
              </div>
            </div> */}
            {/* edited */}
            {/* reordering */}
            {/* <div className="flex flex-row items-center gap-2 cursor-pointer text-error">
              <button className="flex flex-row items-center gap-2 text-error py-2 px-4">
                <IoClose className="text-error"/>
                <span>Cancel</span>
              </button>
              <button className="flex flex-row items-center gap-2 text-error py-2 px-4">
                <FaCheck className="text-error"/>
                <span>Save</span>
              </button>
            </div> */}
            {/* reordering */}
            {/* <form name="editProductForm" >
              <div className="flex ">
                <input type="text" name="product-0" className="form-input rounded-r-0"/>
                <button type="submit" className="py-2 px-4 bg-success text-white" title="save"><FaCheck /></button>
                <button type="submit" className="py-2 px-4 bg-error text-white" title="save"><FaTrashAlt /></button>
              </div>
            </form>
          </div> */}
            {/* edit mode */}
          </div>
        )}
        {/* PRODUCTS AND SERVICES👆 */}
        {/* \\\\\\\\\\\ */}

        {/* \\\\\\\\\\\\\\\\ */}
        {/* PHOTOS */}
        <div
          className="flex flex-col gap-4 bg-white text-gray-800 p-6 "
          ref={photosRef}
        >
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium font-lora text-black title">
              Photos
            </p>
            <p className="text-lg">
              Upload images of your business so your customers can see what
              products you sell or what services you provide. Photos must be
              png, jpeg, or gif format.
            </p>
            <hr className="w-full text-gray-300" />
            <div className="text-xs pb-4">
              {editInfoState.photos.length}
              {`/30 photos added`}
            </div>
          </div>
          {!editModeState.photos ? (
            <div className="border-2 border-black border-dashed p-4">
              <div className="flex flex-wrap lg:flex-col gap-4">
                <div className="bg-skeleton w-12 h-12 flex items-center justify-center rounded-full">
                  <BsFillCameraFill className="h-5 w-6" />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <p className="text-gray-700">
                      Photos are one of the biggest factors consumers use to
                      evaluate a business. Make sure your photos show your
                      business at its best.
                    </p>
                    <div className="flex items-center font-bold gap-1">
                      <span
                        className="cursor-pointer hover:underline"
                        onClick={() => handleToggleEditMode("photos")}
                      >
                        Add photos
                      </span>
                      <FaChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-row flex-wrap gap-4">
              {/* if photo is added */}
              {editInfoState.photos.length > 0 &&
                editInfoState.photos.map((photo) => (
                  <div key={photo.id}>
                    <div className="relative">
                      <div
                        className="absolute top-0 right-0 flex flex-col justify-center items-center w-8 h-8 bg-red-500 rounded cursor-pointer"
                        onClick={() => removePhoto(photo.id)}
                      >
                        <IoClose color="white" />
                      </div>
                      <div className="h-48 w-48 border border-gray-600 flex justify-center items-center rounded overflow-hidden">
                        <div
                          className="h-48 w-48 bg-cover bg-no-repeat bg-center"
                          style={{ backgroundImage: `url('${photo.name}')` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}

              <div {...getCompanyImagesRootProps()}>
                <input type="file" {...getCompanyImagesInputProps()} />
                <div
                  className={`w-48 h-48 border-2 rounded border-dashed p-4 flex flex-col gap-2 items-center justify-center cursor-pointer border-black ${
                    isDragActive ? "border-blue-500" : "border-black"
                  }`}
                >
                  <p className="font-semibold">Add a photo</p>
                  <BsFillCameraFill className="w-11 h-11" />
                </div>
              </div>
            </div>
          )}
        </div>
        {/* PHOTOS👆 */}
        {/* \\\\\\\\\\\\\\ */}

        {/* \\\\\\\\\\\ */}
        {/* SOCAIL MEDIA LINKS👇 */}
        <div
          className="flex flex-col gap-4 bg-white text-gray-800 p-6 relative"
          ref={socialMediaRef}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="w-[160px] md:w-full text-2xl font-medium font-lora text-black title">
                Social Media Links
              </p>
              {!editModeState.socialMedia ? (
                <button
                  className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950"
                  onClick={() => handleToggleEditMode("socialMedia")}
                >
                  Edit
                </button>
              ) : (
                <div className="flex items-start flex-wrap w-min-content gap-2">
                  {/* <button
                    className="bg-skeleton py-1 px-3  rounded "
                    onClick={() => handleToggleEditMode("socialMedia")}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-orange text-white py-1 px-3 rounded "
                    onClick={verifySocialMedia}
                  >
                    Verify
                  </button> */}
                </div>
              )}
            </div>
            <p className="text-lg">
              Add links to your social media pages on various major platforms.
            </p>
          </div>
          {!editModeState.socialMedia ? (
            isSocialMediaAdded ? (
              socialMediaEdited
            ) : (
              <div className="border-2 border-black border-dashed p-4">
                <div className="flex flex-wrap lg:flex-col gap-4">
                  <div className="bg-skeleton w-12 h-12 flex items-center justify-center rounded-full">
                    <FaShareAlt className="h-5 w-6" />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <p className="text-gray-700">
                        Stay connected with your customers. Add links to your
                        business social networks.
                      </p>
                      <div className="flex items-center font-bold gap-1">
                        <span
                          className="cursor-pointer hover:underline"
                          onClick={() => handleToggleEditMode("socialMedia")}
                        >
                          Add social links
                        </span>
                        <FaChevronRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ) : (

            <FormProvider {...socialMediaForm}>
              <form onSubmit={handleSubmitSocialMedia(verifySocialMedia)}>
                {/* Personal Account Social Media Links */}
                {accountType === "personal" && (
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="facebook">Facebook URL</label>
                    <div className="flex w-full flex-row">
                      <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                        <BsFacebook />
                        <p className="text-sm">https://</p>
                      </div>
                      <input
                        type="text"
                        id="facebook"
                        className="form-input w-full"
                        placeholder="e.g. www.facebook.com/companyProfile"
                        {...registerSocialMedia("facebook")}
                        value={personalSocialMediaLinks.facebook}
                        onChange={(e) =>
                          setPersonalSocialMediaLinks((prevState) => ({
                            ...prevState,
                            facebook: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="instagram">Instagram</label>
                    <div className="flex w-full flex-row">
                      <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[94px]">
                        <BsInstagram />
                        <p className="text-sm">@</p>
                      </div>
                      <input
                        type="text"
                        id="instagram"
                        className="form-input w-full"
                        placeholder="e.g. @instagramProfile"
                        {...registerSocialMedia("instagram")}
                        value={instagramObj && instagramObj.link}
                        onChange={(e) =>
                          handleSocialMediaChange("instagram", e)
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="twitter">Twitter</label>
                    <div className="flex w-full flex-row">
                      <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[94px]">
                        <BsTwitter />
                        <p className="text-sm">@</p>
                      </div>
                      <input
                        type="text"
                        id="twitter"
                        className="form-input w-full"
                        placeholder="e.g. @twitterProfile"
                        {...registerSocialMedia("twitter")}
                        value={twitterObj && twitterObj.link}
                        onChange={(e) => handleSocialMediaChange("twitter", e)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="linkedin">LinkedIn URL</label>
                    <div className="flex w-full flex-row">
                      <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                        <BsLinkedin />
                        <p className="text-sm">https://</p>
                      </div>
                      <input
                        type="text"
                        id="linkedin"
                        className="form-input w-full"
                        placeholder="e.g. www.linkedin.com/companyProfile"
                        {...registerSocialMedia("linkedin")}
                        value={linkedinObj && linkedinObj.link}
                        onChange={(e) => handleSocialMediaChange("linkedin", e)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="youtube">Youtube Channel</label>
                    <div className="flex w-full flex-row">
                      <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                        <BsYoutube />
                        <p className="text-sm">https://</p>
                      </div>
                      <input
                        type="text"
                        id="youtube"
                        className="form-input w-full"
                        placeholder="e.g. www.youtube.com/profile"
                        {...registerSocialMedia("youtube")}
                        value={youtubeObj && youtubeObj.link}
                        onChange={(e) => handleSocialMediaChange("youtube", e)}
                      />
                    </div>
                  </div>
                </div>)}
                {/* Business Account Social Media Links */}
                {accountType === "business" && (
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="facebook">Facebook URL</label>
                    <div className="flex w-full flex-row">
                      <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                        <BsFacebook />
                        <p className="text-sm">https://</p>
                      </div>
                      <input
                        type="text"
                        id="facebook"
                        className="form-input w-full"
                        placeholder="e.g. www.facebook.com/companyProfile"
                        {...registerSocialMedia("facebook")}
                        value={businessSocialMediaLinks.facebook}
                        onChange={(e) =>
                          setBusinessSocialMediaLinks((prevState) => ({
                            ...prevState,
                            facebook: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="instagram">Instagram</label>
                    <div className="flex w-full flex-row">
                      <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[94px]">
                        <BsInstagram />
                        <p className="text-sm">@</p>
                      </div>
                      <input
                        type="text"
                        id="instagram"
                        className="form-input w-full"
                        placeholder="e.g. @instagramProfile"
                        {...registerSocialMedia("instagram")}
                        value={businessSocialMediaLinks.instagram}
                        onChange={(e) =>
                          setBusinessSocialMediaLinks((prevState) => ({
                            ...prevState,
                            instagram: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="twitter">Twitter</label>
                    <div className="flex w-full flex-row">
                      <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[94px]">
                        <BsTwitter />
                        <p className="text-sm">@</p>
                      </div>
                      <input
                        type="text"
                        id="twitter"
                        className="form-input w-full"
                        placeholder="e.g. @twitterProfile"
                        {...registerSocialMedia("twitter")}
                        value={businessSocialMediaLinks.twitter}
                        onChange={(e) =>
                          setBusinessSocialMediaLinks((prevState) => ({
                            ...prevState,
                            twitter: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="linkedin">LinkedIn URL</label>
                    <div className="flex w-full flex-row">
                      <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                        <BsLinkedin />
                        <p className="text-sm">https://</p>
                      </div>
                      <input
                        type="text"
                        id="linkedin"
                        className="form-input w-full"
                        placeholder="e.g. www.linkedin.com/companyProfile"
                        {...registerSocialMedia("linkedin")}
                        value={businessSocialMediaLinks.linkedin}
                        onChange={(e) =>
                          setBusinessSocialMediaLinks((prevState) => ({
                            ...prevState,
                            linkedin: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="youtube">Youtube Channel</label>
                    <div className="flex w-full flex-row">
                      <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                        <BsYoutube />
                        <p className="text-sm">https://</p>
                      </div>
                      <input
                        type="text"
                        id="youtube"
                        className="form-input w-full"
                        placeholder="e.g. www.youtube.com/profile"
                        {...registerSocialMedia("youtube")}
                        value={businessSocialMediaLinks.youtube}
                        onChange={(e) =>
                          setBusinessSocialMediaLinks((prevState) => ({
                            ...prevState,
                            youtube: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>)}
                <div className="absolute top-6 right-6 flex items-start flex-wrap w-min-content gap-2">
                  <button
                    className="bg-skeleton py-1 px-3  rounded "
                    onClick={() => handleToggleEditMode("socialMedia")}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-orange text-white py-1 px-3 rounded "
                    type="submit"
                  >
                    Verify
                  </button>
                </div>
              </form>
            </FormProvider>
          )}
        </div>
        {/* SOCAIL MEDIA LINKS👆 */}

        {/* \\\\\\\\\\\ */}
        {/* CONTACT */}
        {accountType === "business" && (
          <div className="flex flex-col gap-4 bg-white text-gray-800 p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-medium font-lora text-black title">
                  Contacts
                </p>
                {editModeState.contact && (
                  <div className="flex items-start flex-wrap gap-2">
                    <button
                      className="bg-skeleton py-1 px-3  rounded "
                      onClick={() => handleToggleEditMode("contact")}
                    >
                      Cancel
                    </button>
                    <button className="bg-orange text-white py-1 px-3 rounded ">
                      Verify
                    </button>
                  </div>
                )}
              </div>
              <p className="text-lg">
                Who are the primary contacts in your business?
              </p>
            </div>
            {!editModeState.contact ? (
              <>
                <div className="md:grid gap-2 grid-cols-2">
                  <div className="border-2 border-black border-dashed p-4">
                    <div className="flex flex-wrap lg:flex-col gap-4">
                      <div className="bg-skeleton w-12 h-12 flex items-center justify-center rounded-full">
                        <IoMdContact className="h-5 w-6" />
                      </div>
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                          <p className="text-gray-700">
                            Inform customers on special contacts in your
                            company.
                          </p>
                          <div className="flex items-center font-bold gap-1">
                            <span
                              className="cursor-pointer hover:underline"
                              onClick={() => handleToggleEditMode("contact")}
                            >
                              Create an additional contact
                            </span>
                            <FaChevronRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="py-2 mt-2 rounded w-48 bg-black text-white"
                  onClick={() => handleToggleEditMode("contact")}
                >
                  Add contact
                </button>
              </>
            ) : (
              <div className="md:grid gap-2 grid-cols-2">
                <div className="flex flex-col gap-2 py-2">
                  <span className="text-xs text-red-700">Required</span>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-80"
                      id="firstname"
                      name="firstname"
                    />
                  </div>
                  <span className="text-xs text-red-700">Required</span>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-80"
                      id="lastname"
                      name="lastname"
                    />
                  </div>
                  <span className="text-xs text-red-700">Required</span>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Title or Role"
                      className="w-80"
                      id="title"
                      name="title"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-80"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="w-80"
                      id="phone"
                      name="phone"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Fax"
                      className="w-80"
                      id="fax"
                      name="fax"
                    />
                  </div>
                </div>
                <div className="error">
                  First Name, Last Name and Title are required
                </div>
              </div>
            )}

            {/* EDIT MODE */}
            {/*  */}
            {/* EDIT MODE */}
            {/* edited */}
            <div className="md:grid gap-2 grid-cols-2">
              <div className="mb-3 md:mb-0 border-2 border-black border-dashed gap-2 items-center p-4">
                <div className="flex md:float-right">
                  <button className="btn px-3 py-1 rounded text-black border-2 border-black hover:text-white hover:bg-black text-xs w-1/2">Edit</button>
                  <span className="px-2">|</span>
                  <button className="btn px-3 py-1 rounded text-darkOrange border-2 border-darkOrange hover:text-white hover:bg-orange text-xs w-1/2">Remove</button>
                </div>
                <p className="text-lg">Co-founder</p>
                <p className="text-gray-700">Rishab</p>
                <p className="text-gray-700">Pant</p>
                <p className="text-gray-700">{`Email | rishabpant@gmail.com`}</p>
                <p className="text-gray-700">{`Phone | 234234234`}</p>
              </div>
            </div>
            {/* edited */}
          </div>
        )}
        {/* CONTACT👆 */}
        {/* \\\\\\\\\\\ */}

        {/* \\\\\\\\\\\ */}
        {/* DETAILED INFORMATION👇 */}
        {accountType === "business" && (
          <div className="flex flex-col gap-4 bg-white text-gray-800 p-6">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h3 className="text-2xl font-medium font-lora text-black title">
                  Detailed Information
                </h3>
                {!editModeState.detailedInformation ? (
                  <button
                    className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950"
                    onClick={() => handleToggleEditMode("detailedInformation")}
                  >
                    Edit
                  </button>
                ) : (
                  <div className="flex items-start flex-wrap gap-2">
                    <button
                      className="bg-skeleton py-1 px-3  rounded "
                      onClick={() =>
                        handleToggleEditMode("detailedInformation")
                      }
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-orange text-white py-1 px-3 rounded "
                      onClick={verifyDetailedInformation}
                    >
                      Verify
                    </button>
                  </div>
                )}
              </div>
              <p className="text-lg text-gray-700">
                Additional business information to set your apart from your
                competitors. <br />
                This is unique information and increases the legitimacy of your
                business
              </p>
            </div>
            {!editModeState.detailedInformation ? (
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="flex border-b border-gray-200 py-2">
                  <p className="w-64">Location Type</p>
                  <p>{editInfoState.detailedInformation.locationType} </p>
                </div>
                <div className="flex border-b border-gray-200 py-2">
                  <p className="w-64">Year Established</p>
                  <p>{editInfoState.detailedInformation.yearEstablished}</p>
                </div>
                <div className="flex py-2">
                  <p className="w-64">Employees</p>
                  <p>{editInfoState.detailedInformation.employees}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="flex items-center gap-4">
                  <p>Location Type</p>
                  <div>
                    <select
                      id="locationType"
                      className="w-48 form-input"
                      value={editInfoState.detailedInformation.locationType}
                      onChange={(e) =>
                        handleDetailedInformationChange("locationType", e)
                      }
                    >
                      <option value=""></option>
                      <option value="Headquarters">Headquarters</option>
                      <option value="Office">Office</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p>Year Established</p>
                  <div>
                    <input
                      type="number"
                      max="4"
                      id="yearEstablished"
                      className="w-48 form-input"
                      maxLength={4}
                      value={editInfoState.detailedInformation.yearEstablished}
                      onChange={(e) =>
                        handleDetailedInformationChange("yearEstablished", e)
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p>Employees</p>
                  <div>
                    <select
                      id="employees"
                      className="w-48 form-input"
                      value={editInfoState.detailedInformation.employees}
                      onChange={(e) =>
                        handleDetailedInformationChange("employees", e)
                      }
                    >
                      <option value="0"></option>
                      <option value="0 - 4">0 - 4</option>
                      <option value="5 - 9">5 - 9</option>
                      <option value="10 - 19">10 - 19</option>
                      <option value="20 - 49">20 - 49</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {/* DETAILED INFORMATION👆 */}
        {/* \\\\\\\\\\\ */}

        {/* \\\\\\\\\\\ */}
        {/* BUSINESS HOUR👇 */}

        {/* BUSINESS HOURS👆 */}
        {/* \\\\\\\\\\\ */}
      </div>
    </div>
  );
};

export default Profile;
