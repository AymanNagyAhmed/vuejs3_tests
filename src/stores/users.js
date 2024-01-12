import { defineStore } from "pinia";
import axios from "axios";
export const useAuthStore = defineStore("auth", {
    state: () => ({users: [], loading: false, error: null}),
    getters: {users: (state) => state.users},
    actions: {
        async fetchUsers() {
            try {
                const response = await axios.get('/api/users');
                this.users = response.data.users;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
    },

});

