// import jwtDecode from "jwt-decode";
import api from '../Infrastructure/IdentityAPI';
export default {
    namespaced: true,
    state: {
        user: {},

    },
    mutations: {
    },
    getters: {

    },
    actions: {
        async signIn(context) {
            const response = await api.post("login", {
                "username": "12345678910",
                "password": "123456"
            });
            return response;

        },
  
    },
};
