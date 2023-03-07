<template>
    <div class="grid grid-rows-1 grid-cols-1 px-5 py-8">
        <v-card>
            <v-card-title>
                <div class="flex justify-end">
                    <input type="search" v-model="searchdataTable" autocomplete="off" placeholder="Search..." class="py-2 px-3 rounded-md border border-gray-300 text-sm outline-none">
                </div>
            </v-card-title>

            <v-card-text>
                <v-data-table
                    v-model:items-per-page="itemsPerPage"
                    :headers="headers"
                    :search="searchdataTable"
                    :items="usersPublic"
                    loading-text="Loading... Please wait"
                >

                    <template v-slot:item="{ item, index }">
                        <tr>
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.raw.name }}</td>
                            <td>{{ item.raw.email }}</td>
                            <td>
                                <v-btn variant="outlined" color="warning" size="small">
                                    <v-icon icon="mdi-details"></v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
    export default {
        setup () {
            const usersPublic = ref([]);

            onMounted(() => {
                var config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'https://jsonplaceholder.typicode.com/users',
                };
                axios(config)
                .then((response) => {
                    usersPublic.value = response.data;
                    console.log();
                })
                .catch((error) => {
                    console.log(error);
                });
            })


            const searchdataTable = ref("");

            return {
                searchdataTable: searchdataTable,
                itemsPerPage: 5,
                headers: [
                    {
                        title: '#',
                        align: 'start',
                        sortable: false,
                        key: 'no',
                    },
                    {
                        title: 'Name',
                        align: 'start',
                        sortable: true,
                        key: 'name',
                    },
                    {
                        title: 'Email',
                        align: 'start',
                        sortable: true,
                        key: 'email',
                    },
                    {
                        title: 'Actions',
                        align: 'center',
                        sortable: false,
                        key: 'action',
                    },
                ],
                usersPublic
            }
        },
    }
</script>