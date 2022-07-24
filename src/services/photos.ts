import AxiosInstance from "@/services/index";

const photos = {
  async getPhotos() {
    return await AxiosInstance.get(`/photos`);
  },
  async getPhoto(id: number) {
    return await AxiosInstance.get(`/photos/${id}`);
  },
  async storePhoto(photo: FormData) {
    return await AxiosInstance.post("/photos", photo);
  },
};

export default photos;
