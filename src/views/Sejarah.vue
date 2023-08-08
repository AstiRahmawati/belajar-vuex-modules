<template>
    <div class="container mx-auto sm:px4">
        <h1 class="text-center b">Fetch Sejarah</h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2">ID</th>
                    <th class="px-4 py-2">DETAIL</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="sejarah in getSejarah" :key="sejarah.id">
                    <td class="border px-4 py-2">{{ sejarah.id }}</td>
                    <td class="border px-4 py-2">{{ sejarah.tahukah_anda }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('sejarah', ['getSejarah']),
    },
    methods: {
        ...mapActions('sejarah', ['fetchSejarah']),
    },
    created() {
        this.fetchSejarah();
    },
}
</script>