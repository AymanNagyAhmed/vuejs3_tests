import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    authUser: JSON.parse(localStorage.getItem('user')),
    accessToken: null,
    returnUrl: null,

    authErrors: [],
    authStatus: null,
  }),
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
    status: (state) => state.authStatus,
  },
  actions: {
    async getUser() {
      const data = await axios.get("/api/user"
      , {
        headers: {
         Authorization: `Bearer ${JSON.parse(localStorage.getItem("access_token"))}`
        }}
      );
      this.authUser = data.data;
    },
    async handleLogin(data) {
      this.authErrors = [];
      try {
        const response = await axios.post("/api/login",{ email: data.email,password: data.password});
        // update pinia state
        const fetchedUser= response.data.user;
        const fetchedAccessToken= response.data.access_token;
        this.authUser = fetchedUser;
        this.accessToken = fetchedAccessToken;
        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(fetchedUser));
        localStorage.setItem('access_token', JSON.stringify(fetchedAccessToken));
        this.router.push(this.returnUrl || "/");
      } catch (error) {
        this.authErrors =error;
        console.log(error);
      }
    },
    async handleRegister(data) {
      this.authErrors = [];
      try {
       const response =  await axios.post("/api/register", {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });
        this.router.push(this.returnUrl || "/login");
      } catch (error) {
  
          this.authErrors = error.response.data.errors;

      }
    },
    async handleLogout() {
      try {
        const response = await axios.post("/api/logout",{}
        , {
          headers: {
           Authorization: `Bearer ${JSON.parse(localStorage.getItem("access_token"))}`
          }});
          this.authErrors = [];
          this.authUser = null;
          this.accessToken = null;
          localStorage.removeItem('user');
          localStorage.removeItem('access_token');
        
        router.push(this.returnUrl || '/login');
      } catch (error) {
        this.authErrors =error;
        console.log(error);
      }
      
    },
    async handleForgotPassword(email) {
      this.authErrors = [];
      try {
        const response = await axios.post("/forgot-password", {
          email: email,
        }
        , {
          headers: {
           Authorization: `Bearer ${JSON.parse(localStorage.getItem("access_token"))}`
          }}
        );
        this.authStatus = response.data.status;
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleResetPassword(resetData) {
      this.authErrors = [];
      try {
        const response = await axios.post("/reset-password", resetData
        , {
          headers: {
           Authorization: `Bearer ${JSON.parse(localStorage.getItem("access_token"))}`
          }}
        );
        this.authStatus = response.data.status;
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
  },
});
