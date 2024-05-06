<template>
    <div class="invoice-details">
        <!-- <h2>Invoice Details</h2> -->
        <br><br>
        <div class="columns">
            <div class="column">
                <label for="country-of-origin" class="label is-size-5 is-uppercase">Country of Original</label>
            </div>
            <div class="column">
                <textarea class="textarea is-medium" id="country-of-origin" v-model="countryOfOriginal" rows="3"></textarea>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <label for="port-of-destination" class="label is-size-5 is-uppercase">Port of Destination</label>
            </div>
            <div class="column">
                <textarea class="textarea is-medium" id="port-of-destination" v-model="portOfDestination" rows="3"></textarea>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <label for="place-of-discharge" class="label is-size-5 is-uppercase">Place of Discharge</label>
            </div>

            <div class="column">

                <div class="control">
                    <div class="select is-info is-medium" style="width: 100%;">
                        <select id="place-of-discharge" v-model="placeOfDischarge" style="width: 100%;">
                            <!-- Options for place of discharge -->
                            <option selected>Yangon</option>
                            <option value="mandalay">Mandalay</option>
                            <!-- Add more options as needed -->
                        </select>
                    </div>
                </div>
            </div>

        </div>

        <div class="columns">
            <div class="column">
                <label for="mode-of-transport" class="label is-size-5 is-uppercase"	>Mode of Transport</label>
            </div>
            <div class="column">
                <div class="control">
                    <div class="select is-info is-medium" style="width: 100%;">
                        <select id="mode-of-transport" v-model="modeOfTransport" style="width: 100%;">
                            <!-- Options for mode of transport -->
                            <option value="air">Air</option>
                            <option value="sea">Sea</option>
                            <option value="land">Road</option>
                            <option value="seaorair">Sea Or Air</option>
                            <!-- Add more options as needed -->
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add more fields as needed -->
        <div class="columns">
            <div class="column">
                <label for="shipment" class="label is-size-5 is-uppercase">Shipment</label>
            </div>
            <div class="column">
                <div class="select is-info is-medium" style="width: 100%;">
                    <select id="shipment" v-model="shipment" style="width: 100%;">
                        <!-- Options for shipment -->
                        <option value="shipment1">WITHIN 3 MONTHS</option>
                        <option value="shipment2">Term 2</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <label for="term-of-trade" class="label is-size-5 is-uppercase">Term of Trade</label>
            </div>
            <div class="column">
                <div class="select is-info is-medium" style="width: 100%;">
                    <select id="term-of-trade" v-model="termOfTrade" style="width: 100%;">
                        <!-- Options for term of trade -->
                        <option>CIF YANGON</option>
                        <option value="term2">Term 2</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
            </div>
        </div>


        <div class="columns">
            <div class="column">
                <label for="term-of-payment" class="label is-size-5 is-uppercase">Term of Payment</label>
            </div>
            <div class="column">
                <div class="select is-info is-medium" style="width: 100%;">
                    <select id="term-of-payment" v-model="termOfPayment" style="width: 100%;">
                        <!-- Options for term of payment -->
                        <option>MIC (CMP)</option>
                        <option value="term2">Term 2</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
            </div>

        </div>

        <div class="columns">
            <div class="column">
                <label for="receiver-bank" class="label is-size-5 is-uppercase"	>Receiver Bank Name</label>
            </div>
            <div class="column">
                <div class="select is-info is-medium" style="width: 100%;">
                    <select id="receiver-bank" v-model="receiverBank" style="width: 100%;">
                        <!-- Options for receiver bank name -->
                        <option value="bank1">BANK OF CHINA</option>
                        <option value="bank2">MYANMAR INVESTMENT COMMERCIAL BANK</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <label for="account-number" class="label is-size-5 is-uppercase">Account Number</label>
            </div>
            <div class="column">
                <input class="input is-info is-medium" type="text" id="account-number" v-model="accountNumber">
            </div>
        </div>
        <!-- Officer's Signature Images -->
        <div class="officer-signatures" style="text-align: left;">
            <img src="../../assets/images/mrl_sign.jpg" alt="Officer Signature 1" style="width: 300px;">
            <img src="../../assets/images/zll_sign.jpg" alt="Officer Signature 2" style="width: 300px;">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countryOfOriginal: 'UNITED STATE OF AMERICA, CHINA, KOREA REPUBLIC OF, VIETNAM, MALAYSIA, BANGLADESH, CHINESE HONGKONG, THAILAND, GERMANY, CHINESE TAIPEI, TURKEY, INDIA, SINGAPORE, INDONESIA, UNITED ARAB EMIRATES, EGYPT',
            portOfDestination: 'UNITED STATE OF AMERICA, CHINA, KOREA REPUBLIC OF, VIETNAM, MALAYSIA, BANGLADESH, CHINESE HONGKONG, THAILAND, GERMANY, CHINESE TAIPEI, TURKEY, INDIA, SINGAPORE, INDONESIA, UNITED ARAB EMIRATES, EGYPT',
            placeOfDischarge: 'Yangon',
            modeOfTransport: '',
            shipment: '',
            termOfTrade: 'CIF YANGON',
            termOfPayment: 'MIC (CMP)',
            receiverBank: '',
            accountNumber: 'ADG BANK, ',
        };
    }
}
</script>

<style scoped>
.invoice-details {
    /* Add your styles here */
    text-align: left;
}

/* .invoice-details label {
    display: block;
    margin-bottom: 5px;
} */

/* .invoice-details select,
.invoice-details input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
} */

.officer-signatures {
    margin-top: 20px;
    /* Adjust as needed */
}

.officer-signatures img {
    width: 150px;
    /* Adjust image size as needed */
    margin-right: 20px;
    /* Adjust spacing between images */
}

textarea {
    width: 100%;
    height: 100px;
    /* Adjust as needed */
}
</style>