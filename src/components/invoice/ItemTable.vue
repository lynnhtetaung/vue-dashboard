<template>
    <div class="item-table">
        <br>
        <h2 class="is-underlined is-size-5 has-text-weight-semibold">PROFORMA INVOICE</h2>
        
        
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>HS Code</th>
                    <th>Description</th>
                    <th>Unit</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td contenteditable @input="updateCell(index, 'hsCode', $event)">{{ item.hsCode }}</td>
                    <td contenteditable @input="updateCell(index, 'description', $event)">{{ item.description }}</td>
                    <td contenteditable @input="updateCell(index, 'unit', $event)">{{ item.unit }}</td>
                    <td contenteditable @input="updateCell(index, 'unitPrice', $event)">{{ item.unitPrice }}</td>
                    <td contenteditable @input="updateCell(index, 'quantity', $event)">{{ item.quantity }}</td>
                    <td>{{ calculateTotal(item) }}</td>
                    <td>
                        <button @click="deleteItem(index)" class="button is-danger is-small">
                            <span class="icon">
                                <i class="fas fa-trash"></i>
                            </span>
                            <span>Delete</span>
                        </button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="6">Total</td>
                    <td>{{ calculateGrandTotal }}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
        <div style="text-align: right;">
            <button @click="addItem" class="button is-rounded is-black my-2" > 
                <span class="icon">
                    <i class="fas fa-circle-plus"></i>
                </span>
                <span>Add Item</span>
            </button>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            items: [
                { hsCode: '', description: '', unit: '', unitPrice: 0, quantity: 0 }
            ]
        };
    },
    methods: {
        addItem() {
            this.items.push({ hsCode: '', description: '', unit: '', unitPrice: 0, quantity: 0 });
        },
        deleteItem(index) {
            this.items.splice(index, 1);
        },
        updateCell(index, key, event) {
            this.items[index][key] = event.target.textContent;
        },
        calculateTotal(item) {
            return item.unitPrice * item.quantity;
        }
    },
    computed: {
        calculateGrandTotal() {
            return this.items.reduce((total, item) => total + this.calculateTotal(item), 0);
        }
    }
}
</script>

<style scoped>
.item-table {
    /* Add your styles here */
}

.item-table table {
    width: 100%;
    border-collapse: collapse;
}

.item-table th,
.item-table td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
}

.item-table th {
    background-color: #f2f2f2;
}

.item-table td[contenteditable]:focus {
    outline: 1px solid blue;
}
</style>