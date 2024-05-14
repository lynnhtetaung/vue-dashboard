<template>

    <router-link to="creating" class="button is-link mt-3">Create</router-link>

    <div class="container">
        <h1 class="title">Listing</h1>

        <!-- Filter input fields -->
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Filter by:</label>
            </div>
            <div class="field-body">
                <!-- <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="filters.date" placeholder="Date">
                    </div>
                </div> -->
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="filters.name" placeholder="Name">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="filters.maccNo" placeholder="Maccs No."
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
                    <th>Name</th>
                    <th>Maccs (ID/ED) No.</th>
                    <th>BL/ AWB No.</th>
                    <th>Selectively No.</th>
                    <th>No of Packages</th>
                    <th>Place</th>
                    <th>Item Status</th>
                    <th>Type</th>
                    <th>Created Date</th>
                    <th>Updated Date</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in filteredItems" :key="index">
                    <td contenteditable @input="updateCell(index, 'name', $event)">{{ item.name }}</td>
                    <td contenteditable @input="updateCell(index, 'maccNo', $event)">{{ item.maccNo }}</td>
                    <td contenteditable @input="updateCell(index, 'blNo', $event)">{{ item.blNo }}</td>
                    <td contenteditable @input="updateCell(index, 'selectivelyNo', $event)">{{ item.selectivelyNo }}
                    </td>
                    <td contenteditable @input="updateCell(index, 'noOfPackages', $event)">{{ item.noOfPackages }}
                    </td>
                    <td contenteditable @input="updateCell(index, 'place', $event)">{{ item.place }}</td>
                    <td contenteditable @input="updateCell(index, 'itemStatus', $event)">
                        {{ getStatusText(item.itemStatus) }}
                    </td>
                    <td contenteditable @input="updateCell(index, 'type', $event)">{{ item.type }}</td>
                    <td contenteditable @input="updateCell(index, 'createdDate', $event)">{{
                            formatDate(item.created_date) }}</td>
                    <td contenteditable @input="updateCell(index, 'updatedDate', $event)">{{
                            formatDate(item.updated_date) }}</td>

                    <td>
                        <button @click="deleteItem(item._id, index)" class="button is-danger is-small">
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
import ApiService from '@/services/ApiService';
// import LocalStorageService from '../../services/LocalStorageService';

export default {
    data() {
        return {
            items: [], // Initialize as an empty array
            filters: {
                name: '',
                maccNo: '',
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

            const { name, maccNo } = this.filters;
            return this.items.filter(item =>
                item.name.toLowerCase().includes(name.toLowerCase()) &&
                String(item.maccNo).includes(maccNo)
                // Add more filter conditions as needed
            );
        }
    },

    async created() {

        this.fetchTrackings()
        // Fetch items from LocalStorageService when the component is created
        // const items = await LocalStorageService.getItems();
        // this.items = Array.isArray(items) ? items : []; // Ensure items is an array
    },
    methods: {

        async fetchTrackings() {
            try {
                const response = await ApiService.getTrackings();
                this.items = response.data;
            } catch (error) {
                console.error(error);
            }
        },

        async deleteItem(id, index) {
            this.items.splice(index, 1);
            console.log('Deleted Item', index, id);
            // LocalStorageService.removeItem(item.id);
            try {
                await ApiService.deleteTracking(id);
                this.fetchTrackings();
            } catch (error) {
                console.error(error);
            }
        },


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
            // await LocalStorageService.updateItem(this.filteredItems[index].id, { [field]: event.target.textContent });
        },

        //     updateCell(index, field, event) {
        //   const value = event.target.innerText;
        //   // Convert the status text back to its numeric value
        //   this.items[index][field] = value.toLowerCase() === 'pending' ? 0 : 1;
        // },
        getStatusText(status) {
            return status === 0 ? 'Pending' : 'Completed';
        },





    },
};

</script>

<style scoped>
.container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
}
</style>