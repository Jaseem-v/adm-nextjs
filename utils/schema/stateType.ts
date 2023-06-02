export type Data = {
  _id: string;
  fname: string;
  lname: string;
  username: string;
  phone: string;
  email: string;
  about: string;
  socialMediaLinks: string[];
  status: string;
  lastSync: string;
  lastUsed: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

interface Product {
  id: number;
  name: string;
}
interface Photo {
  id: number;
  name: string;
}
interface SocialMediaLink {
  id: string;
  title: string;
  link: string;
}

export type EditInfoStateType = {
  logo: string;
  businessName: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  hideAddress: boolean;
  serviceAtCustomerLocation: boolean;
  phone: string;
  hidePhone: boolean;
  website: string;
  about: string;
  primaryCategory: string;
  secondaryCategory: string[];
  products: Product[];
  photos: Photo[]; // Assuming photos can be of any type, adjust accordingly
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    youtube: string;
    pinterest: string;
  };
  contacts: string;
  detailedInformation: {
    locationType: string;
    yearEstablished: string;
    employees: string;
  };
};

export type BusinessAccountDataType = {
  _id: string;
  name: string;
  username: string;
  phone: string;
  email: string;
  category: string;
  website: string;
  about: string;
  socialMediaLinks: SocialMediaLink[];
  services: [];
  gallery: [];
  addressDetails: {
    streetNumber: string;
    state: string;
    city: string;
    address: string;
    pincode: string;
    place: string;
    landmark: string;
  };
  contactDetails: {
    fname: string;
    lname: string;
    email: string;
    phone: string;
    isAddressVisible: boolean;
  };
  status: string;
  isDeleted: boolean;
};

export type PersonalAccountDataType = {
  _id: string;
  fname: string;
  lname: string;
  username: string;
  phone: string;
  email: string;
  about: string;
  socialMediaLinks: SocialMediaLink[];
  gallerys: [];
};
