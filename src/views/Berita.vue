<template>
    <div class="container mx-auto sm:px4">
        <h1 class="text-center b">Fetch AL-QURAN</h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2">Surah</th>
                    <th class="px-4 py-2">Arti</th>
                    <th class="px-4 py-2">Ayat</th>
                    <th class="px-4 py-2">Jenis Surat</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="berita in getBerita" :key="berita.nomor">
                    <td class="border px-4 py-2">{{ berita.nama }}</td>
                    <td class="border px-4 py-2">{{ berita.arti }}</td>
                    <td class="border px-4 py-2">{{ berita.ayat }}</td>
                    <td class="border px-4 py-2">{{ berita.type }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('berita', ['getBerita']),
    },
    methods: {
        ...mapActions('berita', ['fetchBerita']),
    },
    created() {
        this.fetchBerita();
    },
}
</script>