import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID O08bh4Vgf_LhsKJHht9k4lgkm2oHCQYwDrEFZ1Dlmww",
  },
});
