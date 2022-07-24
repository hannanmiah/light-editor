<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import photos from "@/services/photos";

const form = reactive({
  name: "",
  photo: "",
});

const allPhotos = ref([]);
const baseUrl = import.meta.env.VITE_BASE_URL;

function onFileChange(e: Event) {
  //file upload
  form.photo = e.target.files[0];
  form.name = e.target.files[0].name;
}
async function handleUpload() {
  console.log("uploading...");
  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("photo", form.photo);
  try {
    const res = await photos.storePhoto(formData);
    console.log(res.data);
    await loadPhotos();
  } catch (error) {
    console.error(error);
  }
}

async function loadPhotos() {
  try {
    const res = await photos.getPhotos();
    allPhotos.value = res.data.data;
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}

onMounted(async () => {
  await loadPhotos();
});
</script>

<template>
  <div class="flex flex-col items-center space-y-4 md:space-8">
    <div>
      <h1>File Upload</h1>
      <form
        @submit.prevent="handleUpload"
        method="post"
        enctype="multipart/form-data"
        class="flex flex-col space-y-4 md:space-y-8"
      >
        <input type="file" name="file" @change="onFileChange" />
        <button type="submit" class="bg-slate-500 p-2 rounded-md text-white">
          Upload
        </button>
      </form>
    </div>
    <div>
      <h1 class="text-3xl text-center">Photos</h1>
      <div v-if="allPhotos.length" class="grid grid-cols-4">
        <div v-for="photo in allPhotos" :key="photo.name">
          <img
            :src="baseUrl + photo.url"
            :alt="photo.name"
            srcset=""
            class="w-64 h-64"
          />
          <span>{{ photo.name }}</span>
        </div>
      </div>
      <div v-else>
        <p class="text-center">No photos yet</p>
      </div>
    </div>
  </div>
</template>
