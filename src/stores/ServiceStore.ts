import { defineStore } from "pinia";
import axios, { AxiosResponse } from "axios";
import { API_URL } from "../constants/api";

export const useServiceStatusStore = defineStore("serviceStatusStore", {
  state: () => ({
    features: [],
    state: "notAsked",
  }),
  actions: {
    fetchServiceStatusList() {
      this.state = "loading";
      axios
        .get(API_URL, {
          headers: {
            "X-Source-Channel": "INTERNETBANK",
          },
        })
        .then((response: AxiosResponse) => {
          this.features = response.data.features;
          this.state = "result";
        })
        .catch(() => {
          this.state = "error";
        });
    },
  },
});
