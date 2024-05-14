<template>
    <div class="container">
        <h1 class="title">Create Item</h1>
        <form @submit.prevent="createTracking">

            <div class="field">
                <div class="columns">
                    <div class="column">
                        <label class="label">Company Name</label>
                    </div>
                    <div class="column">
                        <div class="control">
                            <input class="input" type="text" v-model="trackingInfo.name" required>
                        </div>
                    </div>
                    <div class="column">
                        <label class="label">Maccs (ID/ED) No.</label>
                    </div>
                    <div class="column">
                        <div class="control">
                            <input class="input" type="text" v-model="trackingInfo.maccNo" maxlength="10" required>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field">
                <div class="columns">
                    <div class="column">
                        <label class="label">BL No./AWB No.</label>
                    </div>
                    <div class="column">
                        <div class="control">
                            <input class="input" type="text" maxlength="10" v-model="trackingInfo.blNo" required>
                        </div>
                    </div>
                    <div class="column">
                        <label class="label">Selectively No.</label>
                    </div>
                    <div class="column">
                        <div class="control">
                            <div class="select is-info is-medium" style="width: 100%;">
                                <select v-model="trackingInfo.selectivelyNo" style="width: 100%;">
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field">
                <div class="columns">
                    <div class="column">
                        <label class="label">No of Packages</label>
                    </div>
                    <div class="column">
                        <div class="control">
                            <input class="input" type="text" v-model="trackingInfo.noOfPackages" maxlength="6" required>
                        </div>
                    </div>
                    <div class="column">
                        <label class="label">Place</label>
                    </div>
                    <div class="column">
                        <div class="control">
                            <input class="input" type="text" v-model="trackingInfo.place" required>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field">
                <div class="columns">
                    <div class="column">
                        <label class="label">Status</label>
                    </div>
                    <div class="column">
                        <div class="control">
                            <div class="select is-info is-medium" style="width: 100%;">
                                <select id="itemStatus" v-model="trackingInfo.itemStatus" style="width: 100%;">
                                    <option value="pending">Pending</option>
                                    <option value="complete">Complete</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <label class="label">Type</label>
                    </div>
                    <div class="column">
                        <div class="control">
                            <div class="select is-info is-medium" style="width: 100%;">
                                <select id="type" v-model="trackingInfo.type" style="width: 100%;">
                                    <option value="import">Import</option>
                                    <option value="export">Export</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <button class="button is-primary m-3">Create</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
// import IndexedDBService from '../../services/IndexedDBService';
import LocalStorageService from '../../services/LocalStorageService';
import ApiService from '@/services/ApiService';

export default {
    data() {
        return {
            trackingInfo: {
                name: '',
                maccNo: null,
                blNo: null,
                selectivelyNo: null,
                noOfPackages: null,
                place: '',
                itemStatus: '',
                type: '',
                status: 'active',
                created_by: 'khin',
                created_date: new Date().toISOString(),
                updated_by: '',
                updated_date: new Date().toISOString(),

            }
        };
    },
    methods: {
        async addItem() {
            // Call the service method to add the item to IndexedDB
            await LocalStorageService.addItem({
                companyName: this.companyName,
                maccNo: this.maccNo,
                blNo: this.blNo,
                selectivelyNo: this.selectivelyNo,
                noOfPackages: this.noOfPackages,
                place: this.place,
                status: this.status,
                type: this.type
            });
            console.log('Item added successfully to LocalStorage');
        },

        async createTracking() {
            const createdItem = await ApiService.createTracking(this.trackingInfo);
            console.log('creating is successfully', createdItem);

            // Optionally, you can reset the form fields after adding the item
            this.trackingInfo.name = '',
                this.trackingInfo.maccNo = '',
                this.trackingInfo.blNo = '',
                this.trackingInfo.selectivelyNo = '',
                this.trackingInfo.noOfPackages = '',
                this.trackingInfo.place = '',
                this.trackingInfo.itemStatus = '',
                this.trackingInfo.type = '',

                // Optionally, you can redirect the user to another page or show a success message
                this.$router.push('listing');
        },


    }
};
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
}
</style>