import http from "./http-common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/postAdv", formData, {
      headers: {
        "Access-Control-Allow-Methods": "POST",
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  // getFiles() {
  //   return http.get("/files");
  // }
}

export default new UploadFilesService();
