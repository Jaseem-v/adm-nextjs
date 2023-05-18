import axios from "axios"

const httpClient = (contentType ?: string) => {
  const token = localStorage.getItem("accessToken");

  
  // Create intance 
  const instance = axios.create({
    baseURL: 'https://www.server.ecommerce.gokulsreejith.com/api/v1' , 
    // baseURL: 'http://59.97.51.203:5000/api/v1' , 
    // withCredentials: true,
    headers: {
      "Content-Type": contentType ? contentType : "application/json",
      // 'Authorization':`${"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGQ2ZWY5YmFjMmVmMDczZDY0MmZhYyIsInJvbGUiOiJTdXBlckFkbWluIiwiaWF0IjoxNjc4ODA4NTM0LCJleHAiOjE3MTAzNjYxMzQsImF1ZCI6IlNSRUVKSVRIIiwiaXNzIjoiZS1jb21tZXJjZS5nb2t1bHNyZWVqaXRoLmNvbSJ9.PK7X8_j400yYsjMgjPhTPZJ5XZOA2yPR3wkxVS5bprQ"}`
    },
    validateStatus: function (status) {
      return status < 500;
    },
  });

  //   Set the AUTH token for any request 
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("accessToken");

    
    // config.headers!.Authorization = token ? `Bearer ${token}` : "";

    
    return config;
  });

  return instance;
};

export default httpClient;