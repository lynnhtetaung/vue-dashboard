<template>
    <div class="container">
        <h1 class="title">Create Item</h1>
        <form @submit.prevent="addItem">

            <div class="field">
                <div class="columns">
                    <div class="column">
                        <label class="label">Company Name</label>
                    </div>
                    <div class="column">
                        <div class="control">
                            <input class="input" type="text" v-model="companyName" required>
                        </div>
                    </div>
                    <div class="column">
                        <label class="label">Macc (ID/ED) No.</label>
                    </div>
                    <div class="column">
                        <div class="control">
                            <input class="input" type="text" v-model="idEdNo" maxlength="10" required>
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
                            <input class="input" type="text" maxlength="10" v-model="blAwb" required>
                        </div>
                    </div>
                    <div class="column">
                        <label class="label">Selectively No.</label>
                    </div>
                    <div class="column">
                        <div class="control">
                            <div class="select is-info is-medium" style="width: 100%;">
                                <select v-model="selectivelyNo" style="width: 100%;">
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
                        <label class="label">No of Package</label>
                    </div>
                    <div class="column">
                        <div class="control">
                            <input class="input" type="text" v-model="noOfPackage" maxlength="6" required>
                        </div>
                    </div>
                    <div class="column">
                        <label class="label">Place</label>
                    </div>
                    <div class="column">
                        <div class="control">
                            <input class="input" type="text" v-model="place" required>
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
                                <select id="status" v-model="status" style="width: 100%;">
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
                                <select id="type" v-model="type" style="width: 100%;">
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

export default {
    data() {
        return {
            companyName: '',
            idEdNo: null,
            place: null,
            noOfPackage: null,
            blAwb: null,
            selectivelyNo: null,
            status: null,
            type: null
        };
    },
    methods: {
        async addItem() {
            // Call the service method to add the item to IndexedDB
            await LocalStorageService.addItem({
                companyName: this.companyName,
                idEdNo: this.idEdNo,
                blAwb: this.blAwb,
                selectivelyNo: this.selectivelyNo,
                noOfPackage: this.noOfPackage,
                place: this.place,
                status: this.status,
                type: this.type
            });
            console.log('Item added successfully to LocalStorage');


            // Optionally, you can reset the form fields after adding the item
            this.companyName = '';
            this.idEdNo = null;
            this.blAwb = null;
            this.selectivelyNo = null;
            this.noOfPackage = null;
            this.place = null;
            this.status = null;
            this.type = '';

            // Optionally, you can redirect the user to another page or show a success message
            this.$router.push('listing');
        }
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