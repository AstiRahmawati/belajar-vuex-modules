import axios from "axios";

const berita = {
    namespaced: true,
    state: {
        beritaData: [],
    },
    getters: {
        getBerita: (state) => state.beritaData,
    },
    actions: {
        async fetchBerita({ commit }) {
            try {
                const data = await axios.get(
                    "https://al-quran-8d642.firebaseio.com/data.json?print=pretty"
                );
                commit("SET_BERITA", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_BERITA(state, berita) {
            state.beritaData = berita;
        },
    },
};

export default berita;