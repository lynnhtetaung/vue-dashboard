<template>

    <div class="container">
        <!-- <h1 class="title">Listing</h1> -->

        <div class="field is-horizontal">
            <router-link to="creating" class="button is-link mt-3"><span class="icon">
                    <i class="fas fa-plus-circle"></i>
                </span>
                <span>Create Item</span>
            </router-link>
        </div>

        <!-- Filter input fields -->
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Filter by:</label>
            </div>
            <div class="field-body">
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
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="filters.blNo" placeholder="Bl No." maxlength="10">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input" type="date" v-model="filters.startDate" placeholder="Start Date">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input" type="date" v-model="filters.endDate" placeholder="End Date">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input" type="status" v-model="filters.itemStatus" placeholder="Status">
                    </div>
                </div>
                <!-- Add more filter fields as needed -->
            </div>
        </div>

        <!-- Table -->
        <div class="table-container">
            <table class="table is-bordered is-hoverable is-fullwidth">
                <thead>
                    <tr class="is-secondary">
                        <th class="is-size-5">Name</th>
                        <th class="is-size-5">Maccs (ID/ED) No.</th>
                        <th class="is-size-5">BL/ AWB No.</th>
                        <th class="is-size-5">Selectively No.</th>
                        <th class="is-size-5">No of Packages</th>
                        <th class="is-size-5">Place</th>
                        <th class="is-size-5">Status</th>
                        <th class="is-size-5">Type</th>
                        <th class="is-size-5">Created Date</th>
                        <th class="is-size-5">Updated Date</th>
                        <th class="is-size-5">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in paginatedItems" :key="index">
                        <td contenteditable @input="updateCell(index, 'name', $event)">{{ item.name }}</td>
                        <td contenteditable @input="updateCell(index, 'maccNo', $event)">{{ item.maccNo }}</td>
                        <td contenteditable @input="updateCell(index, 'blNo', $event)">{{ item.blNo }}</td>
                        <td contenteditable @input="updateCell(index, 'selectivelyNo', $event)">{{ item.selectivelyNo }}
                        </td>
                        <td contenteditable @input="updateCell(index, 'noOfPackages', $event)">{{ item.noOfPackages }}
                        </td>
                        <td contenteditable @input="updateCell(index, 'place', $event)">{{ item.place }}</td>
                        <td contenteditable @input="updateCell(index, 'itemStatus', $event)">{{
                            getStatusText(item.itemStatus) }}</td>
                        <td contenteditable @input="updateCell(index, 'type', $event)">{{ item.type }}</td>
                        <td contenteditable @input="updateCell(index, 'createdDate', $event)">{{
                            formatDate(item.created_date) }}</td>
                        <td contenteditable @input="updateCell(index, 'updatedDate', $event)">{{
                            formatDate(item.updated_date) }}</td>
                        <td>
                            <button @click="updateItem(item, index)" class="button is-primary is-small">
                                <span class="icon">
                                    <i class="fas fa-edit"></i>
                                </span>
                                <span>Update</span>
                            </button>
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

        <!-- Pagination -->
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <a class="pagination-previous" :disabled="currentPage === 1" @click="prevPage">Previous</a>
            <a class="pagination-next" :disabled="currentPage === totalPages" @click="nextPage">Next page</a>
            <ul class="pagination-list">
                <li v-for="page in totalPages" :key="page">
                    <a class="pagination-link" :class="{ 'is-current': page === currentPage }"
                        @click="goToPage(page)">{{ page }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
// import LocalStorageService from '../../services/LocalStorageService';

export default {
    data() {
        return {
            items: [], // Initialize as an empty array
            currentPage: 1,
            itemsPerPage: 10,
            filters: {
                updated_date: '',
                name: '',
                maccNo: '',
                blNo: '',
                itemStatus: '',
                startDate: '',
                endDate: ''
                // Add more filter fields as needed
            }
        };
    },
    computed: {
        paginatedItems() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = this.currentPage * this.itemsPerPage;
            return this.filteredItems.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.filteredItems.length / this.itemsPerPage);
        },
        filteredItems() {
            // Ensure this.items is an array before using filter
            if (!Array.isArray(this.items)) {
                console.error('this.items is not an array');
                return [];
            }

            const { name, maccNo, blNo, itemStatus, startDate, endDate } = this.filters;

            const start = startDate ? new Date(startDate) : new Date(-8640000000000000);
            const end = endDate ? new Date(endDate) : new Date(8640000000000000);

            return this.items.filter(item => {
                const updatedDate = new Date(item.updated_date);
                const matchesDate = updatedDate >= start && updatedDate <= end;
                const matchesName = item.name.toLowerCase().includes(name.toLowerCase());
                const matchesMaccNo = String(item.maccNo).includes(maccNo);
                const matchesBlNo = String(item.blNo).includes(blNo);
                const matchesItemStatus = item.itemStatus.toLowerCase().includes(itemStatus);

                return matchesDate && matchesName && matchesMaccNo && matchesBlNo && matchesItemStatus;
            });
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

        async updateItem(item, index) {
            try {
                const response = await ApiService.updateTracking(item._id, item);
                this.filteredItems[index] = response.data;
                alert('Item updated successfully!');
            } catch (error) {
                console.error('Error updating item:', error);
                alert('Failed to update item.');
            }
        },

        async deleteItem(id, index) {
            this.items.splice(index, 1);
            console.log('Deleted Item', index, id);
            // LocalStorageService.removeItem(item.id);
            try {
                await ApiService.deleteTracking(id);
                alert('Item deleted successfully!');
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

        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        goToPage(page) {
            this.currentPage = page;
        },

        getStatusText(status) {
            return status === 'pending' ? 'pending' : 'completed';
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

.table-container {
    margin-bottom: 2rem;
    overflow-x: auto; /* Ensure horizontal scrolling if needed */
}

thead th {
    font-size: -0.5rem !important; /* Adjust header font size */
    background-color: #f5f5f5; /* Light background for header */
    white-space: nowrap; /* Prevent wrapping */
}

td {
    min-width: 150px; /* Minimum width for table cells */
    word-wrap: break-word; /* Wrap long words */
}

.pagination {
    margin-top: 1rem;
}

.pagination-list .pagination-link.is-current {
    background-color: #3273dc; /* Bulma primary color */
    color: #fff;
}
</style>