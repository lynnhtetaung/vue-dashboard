<template>
    <div class="company-info is-size-4 has-text-weight-bold">
        <p>{{ companyName }}</p>
        <p>{{ companyAddress }}</p>
    </div>

    <hr>

    <div class="to-company-info is-size-5">
        <p> TO/ </p>
        <p>{{ toCompanyName }}</p>
        <p>{{ toCompanyAddress }}</p>
    </div>
    <hr>

    <div class="columns invoice-number">
        <div class="column">
            <label for="account-number" class="label is-size-5 is-uppercase">Invoice Number:</label>
        </div>
        
        <div class="column">
            <input class="input is-info is-medium" type="text" id="invoice-number" v-model="invoiceNumber" placeholder="Invoice No.">
        </div>
        
    </div>

    <div class="invoice-date columns">
        <div class="column">
            <label for="invoice-date" class="label is-size-5 is-uppercase">Invoice Date:</label>
        </div>
        <div class="column">
            <input class="input is-info is-medium" type="date" id="invoice-date" v-model="invoiceDate" placeholder="Date">
        </div>
    </div>


</template>

<script>
export default {
    data() {
        return {
            companyName: 'DEXIN INTERNATIONAL CO.,LTD.',
            companyAddress: 'No.769, CHANGHONG STREET, WUKANG TOWN, DEQING COUNTRY, HUZHOU, ZHEJIANG, CHINA',
            toCompanyName: 'KPH MANUFACTRURING CO.,LTD.',
            toCompanyAddress: 'No.(7,8) INNWA STREET, SHWE PAUK KAN, IND ZONE, N/OKAYANGON, MYANMAR',
            invoiceNumber: '',
            invoiceDate: ''
        }
    }
}
</script>

<style scoped>
.company-info {
    text-align: center;
}

.to-company-info {
    text-align: left;
}

.invoice-number {
    text-align: right;
}

.invoice-date {
    text-align: right;
}
</style>