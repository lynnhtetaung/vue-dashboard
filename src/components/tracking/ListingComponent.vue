<template>

    <router-link to="creating" class="button is-link mt-3">Create</router-link>

    <div class="container">
        <h1 class="title">Item Listing</h1>

        <!-- Filter input fields -->
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Filter by:</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="filters.date" placeholder="Date">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="filters.companyName" placeholder="Company Name">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="filters.idEdNo" placeholder="ID/ED No."
                            maxlength="10">
                    </div>
                </div>
                <!-- Add more filter fields as needed -->
            </div>
        </div>

        <!-- Table -->
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Macc (ID/ED) No.</th>
                    <th>BL/AWB No.</th>
                    <th>Selectively No.</th>
                    <th>No of Packages</th>
                    <th>Place</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Updated Date</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in filteredItems" :key="index">
                    <td contenteditable @input="updateCell(index, 'companyName', $event)">{{ item.companyName }}</td>
                    <td contenteditable @input="updateCell(index, 'idEdNo', $event)">{{ item.idEdNo }}</td>
                    <td contenteditable @input="updateCell(index, 'blAwb', $event)">{{ item.blAwb }}</td>
                    <td contenteditable @input="updateCell(index, 'selectivelyNo', $event)">{{ item.selectivelyNo }}
                    </td>
                    <td contenteditable @input="updateCell(index, 'noOfPackage', $event)">{{ item.noOfPackage }}
                    </td>
                    <td contenteditable @input="updateCell(index, 'place', $event)">{{ item.place }}</td>
                    <td contenteditable @input="updateCell(index, 'status', $event)">{{ item.status }}</td>
                    <td contenteditable @input="updateCell(index, 'createdDate', $event)">{{ formatDate(item.createdDate) }}</td>
                    <td contenteditable @input="updateCell(index, 'updatedDate', $event)">{{ formatDate(item.updatedDate) }}</td>

                    <td>
                        <button @click="deleteItem(item, index)" class="button is-danger is-small">
                            <span class="icon">
                                <i class="fas fa-trash"></i>
                            </span>
                            <span>Delete</span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import LocalStorageService from '../../services/LocalStorageService';

export default {
    data() {
        return {
            items: [], // Initialize as an empty array
            filters: {
                companyName: '',
                idEdNo: '',
                // Add more filter fields as needed
            }
        };
    },
    computed: {
        filteredItems() {
            // Ensure this.items is an array before using filter
            if (!Array.isArray(this.items)) {
                console.error('this.items is not an array');
                return [];
            }

            const { companyName, idEdNo } = this.filters;
            return this.items.filter(item =>
                item.companyName.toLowerCase().includes(companyName.toLowerCase()) &&
                String(item.idEdNo).includes(idEdNo)
                // Add more filter conditions as needed
            );
        }
    },
    methods: {

        formatDate(dateString) {
            const indexOfT = dateString.indexOf('T');
            if (indexOfT !== -1) {
                return dateString.substring(0, indexOfT);
            } else {
                return dateString; // No 'T' found, return original string
            }
        },

        async updateCell(index, field, event) {
            if (!Array.isArray(this.items)) {
                console.error('this.items is not an array');
                return;
            }

            this.filteredItems[index][field] = event.target.textContent;
            // Call your service method to update the item in IndexedDB
            await LocalStorageService.updateItem(this.filteredItems[index].id, { [field]: event.target.textContent });
        },

        deleteItem(item, index) {
            this.items.splice(index, 1);
            console.log('Deleted Item', index, item.id);
            LocalStorageService.removeItem(item.id);
        }



    },
    async created() {
        // Fetch items from IndexedDB when the component is created
        const items = await LocalStorageService.getItems();
        this.items = Array.isArray(items) ? items : []; // Ensure items is an array
    }
};

</script>

<style scoped>
.container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
}
</style>