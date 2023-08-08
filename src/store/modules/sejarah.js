import axios from "axios";

const sejarah = {
    namespaced: true,
    state: {
        sejarahData: [],
    },
    getters: {
        getSejarah: (state) => state.sejarahData,
    },
    actions: {
        async fetchSejarah({ commit }) {
            try {
                const data = await axios.get(
                    "https://cuaca-gempa-rest-api.vercel.app/"
                );
                commit("SET_SEJARAH", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_SEJARAH(state, sejarah) {
            state.sejarahData = sejarah;
        },
    },
};

export default sejarah;