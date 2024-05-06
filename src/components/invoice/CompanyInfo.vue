<template>

    <div class="company-info is-size-4 has-text-weight-bold mb-5">
        INVOICE MANAGEMENT
    </div>
    <!-- <div class="company-info is-size-4 has-text-weight-bold">
        <p>{{ companyName }}</p>
        <p>{{ companyAddress }}</p>
    </div>

    <hr>

    <div class="to-company-info is-size-5">
        <p> TO/ </p>
        <p>{{ toCompanyName }}</p>
        <p>{{ toCompanyAddress }}</p>
    </div>
    <hr> -->


    <div class="columns to-company-info">
        <div class="column">
            <label for="place-of-discharge" class="label is-size-5 is-uppercase">Import Company</label>
        </div>

        <div class="column">

            <div class="control">
                <div class="select is-info is-medium" style="width: 100%;">
                    <select id="place-of-discharge" v-model="importCompany" style="width: 100%;">
                        <option value="mandalay">ZHANG JIAGANG HELIANG TEXTILE CO.,LTD,
                            ZHAOFENG INDUSTRIAL ZONE,ZHANGJIAGANG CITY,JIANGSU PROVINCE,CHINA </option>

                        <option value="mandalay">INDOCHINE INTERNATIONAL TRADING CO.,LTD ,
                            ROOM 301-305,3FBLOCK D, BUILDING 1,NO 28, BINKANG ROAD,XIXING STREET,BINJING
                            DISTRICT,HANGZHOU,ZHEJIANG,CHINA </option>

                        <option value="mandalay">LINYI QUANKE INTERNATIONAL TRADE LIMITED,
                            NO.WEST OF YINGHUA ROAD,ECONOMIC DEVELOPMENT,YINAN COUNTRY,LINYI,CHINA </option>

                        <option value="mandalay">WEIHAI BAOLIYA IMPORT AND EXPORT CO.,LTD,
                            ROOM 1306,BUILDING 1#A,INTERNATIONAL SERVICE OUTSOURCING SOFTWARE PARK,47 DAQING ROAD
                            ECONOMICE AND TECHNOLOGICAL DEVELOPMENT ZONE,WEIAHI,SHANDONG CHINA </option>

                        <option value="mandalay">BEIJING TEXTILES IMPORT & EXPORT CO.,LTD,
                            NO.8 GUANGHUA ROAD,CHAOYANG DISTRICT BEJING,CHINA </option>

                        <option value="mandalay">NINGGUO GOLDEN TEXTILE IMPORT&EXPORT CO.,LTD,
                            FLOOR 3, OFFICE BUILDING 2, CHAOYANG DISTRICT, RENMIN ROAD, XIJIN STREET, NINGGUO CITY,
                            XUANCHENG, ANHUI</option>

                        <option value="mandalay">SHANHAI HANSEN GLOBAL SUPPLY CO.,LTD,
                            1341, YU YUAN ROAD SHANGHAI, CHINA</option>

                        <option value="mandalay">NANTONG SPRINGWOODS INTERNATIONAL TRADE CO.,LTD,
                            ROOM1901,BUILDING 5 WENFENG INTERNATIONAL NO1 HONGQIAO RD,NANTONG CITY,CHINA </option>

                        <option value="mandalay">NANTONG CRONY INTERNATIONAL TRADE CO.,LTD,
                            12/F HAIWAILIANYI BLDDG,NO.88 GONGNONG ROAD,NANTONG.CHINA </option>

                        <option value="mandalay">NANTONG RISING INTERNATIONAL TRADE CO.,LTD,
                            ROOM 1202, HAILIAN BUILDING , NO 88
                            GONGNONG SOUTHROAD, NANTONG, JIANGSU, CHINA </option>

                        <option value="mandalay">NANTONG WEIFU FOREIGN TRADE CO.,LTD
                            6/F YINXING BUILDING,NO.228 GONGNONG ROAD,NANTONG,JIANGSU,CHINA </option>

                        <option value="mandalay">SUMEC TEXTILE & LIGHT INDUSTRY CO.,LTD
                            198 CHANGJIANG ROAD, NANJING CHINA
                            BRANCH OFFICE:ESSEN THAILAND COMPANY LTD ADDRESS:71 SOI RAMKHAMHAENG 8 YAKE 6,RAMA9 RD
                            HUAMARK,BANGKAPI,BANGKOK 10240 THAILAND </option>

                        <option value="mandalay">HANGZHOU YIHE TEXTILE CO.,LTD,
                            20/F, JINFENG MANSION NO.281 ZHONGHE ZHONG ROAD HANGZHOU, CHINA</option>

                        <option value="mandalay">GUANGZHOU WORLDCOLOR DIGITAL TECHNOLOGY CO.,LTD
                            ROOM 413,YINGJIANG PLAZA,NO.1033 ZHONGSHAN MIDDLE AVENUE,TIANHE DISTRICT,GUANGZHOU,CHINA
                        </option>

                        <option value="mandalay">WUXI NACHENG INTERTANATIONAL TRADE CO.,LTD
                            6-9-201, ZHIXING VENTURE PARK, No.2 CHUNFENG SOUTH ROAD ANZHEN COMMUNITY XISHAN DISTRICT,
                            WUXI CHINA</option>

                        <option value="mandalay">WUJIANG DOWELL IMPORT AND EXPORT CO.,LTD
                            ROOM 302, BUILDING 2, NO.500 RENMIN ROAD, WUJIANG CITY, JIANGSU CHINA</option>
                        
                        <option value="mandalay">KPH MANUFACTURING CO.,LTD NO(7/8), INNWA STREET, SHWE PAUKKAN
                            INDUSTRIAL ZONE NORTH OKKALAPA TOWNSHIP, YANGON,MYANMAR</option>

                        <option value="mandalay">SHWE MINGALAR CO.,LTD
                            AHKWET NO.(25/26),4TH STREET,YANGON INDUSTRIAL ZONE,MINGALARDON TOWNSHIP, YANGON, MYANMAR,
                        </option>
                        <option value="mandalay">SPRINGWOODS INTERNATIONAL (HONGKONG) LIMITED
                            6/F RFCM, MAUNLIFE PLACE,348 KWUN TONG ROAD,KOWLOON,HONGKONG,CHINA </option>
                        <option value="mandalay">JF GLOBAL CO.,LTD
                            501,5F,SONGNAE TECHNOVALLEY,13,SONGNAEDAERO 30BEON-GIL,BUCHEON-SI,GYEONGGI-DO,KOREA REPUBLIC
                            OF </option>
                        <option value="mandalay">TOKYOSHIMA CO.,LTD
                            15-15,NISHIKI-CHOME,NKAKU,NAGOYA,JAPAN</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <div class="columns to-company-info">
        <div class="column">
            <label for="export-company" class="label is-size-5 is-uppercase">Export Company</label>
        </div>

        <div class="column">

            <div class="control">
                <div class="select is-info is-medium" style="width: 100%;">
                    <select id="export-company" v-model="exportCompany" style="width: 100%;">
                        <option value="mandalay">ZHANG JIAGANG HELIANG TEXTILE CO.,LTD,
                            ZHAOFENG INDUSTRIAL ZONE,ZHANGJIAGANG CITY,JIANGSU PROVINCE,CHINA </option>

                        <option value="mandalay">INDOCHINE INTERNATIONAL TRADING CO.,LTD ,
                            ROOM 301-305,3FBLOCK D, BUILDING 1,NO 28, BINKANG ROAD,XIXING STREET,BINJING
                            DISTRICT,HANGZHOU,ZHEJIANG,CHINA </option>

                        <option value="mandalay">LINYI QUANKE INTERNATIONAL TRADE LIMITED,
                            NO.WEST OF YINGHUA ROAD,ECONOMIC DEVELOPMENT,YINAN COUNTRY,LINYI,CHINA </option>

                        <option value="mandalay">WEIHAI BAOLIYA IMPORT AND EXPORT CO.,LTD,
                            ROOM 1306,BUILDING 1#A,INTERNATIONAL SERVICE OUTSOURCING SOFTWARE PARK,47 DAQING ROAD
                            ECONOMICE AND TECHNOLOGICAL DEVELOPMENT ZONE,WEIAHI,SHANDONG CHINA </option>

                        <option value="mandalay">BEIJING TEXTILES IMPORT & EXPORT CO.,LTD,
                            NO.8 GUANGHUA ROAD,CHAOYANG DISTRICT BEJING,CHINA </option>

                        <option value="mandalay">NINGGUO GOLDEN TEXTILE IMPORT&EXPORT CO.,LTD,
                            FLOOR 3, OFFICE BUILDING 2, CHAOYANG DISTRICT, RENMIN ROAD, XIJIN STREET, NINGGUO CITY,
                            XUANCHENG, ANHUI</option>

                        <option value="mandalay">SHANHAI HANSEN GLOBAL SUPPLY CO.,LTD,
                            1341, YU YUAN ROAD SHANGHAI, CHINA</option>

                        <option value="mandalay">NANTONG SPRINGWOODS INTERNATIONAL TRADE CO.,LTD,
                            ROOM1901,BUILDING 5 WENFENG INTERNATIONAL NO1 HONGQIAO RD,NANTONG CITY,CHINA </option>

                        <option value="mandalay">NANTONG CRONY INTERNATIONAL TRADE CO.,LTD,
                            12/F HAIWAILIANYI BLDDG,NO.88 GONGNONG ROAD,NANTONG.CHINA </option>

                        <option value="mandalay">NANTONG RISING INTERNATIONAL TRADE CO.,LTD,
                            ROOM 1202, HAILIAN BUILDING , NO 88
                            GONGNONG SOUTHROAD, NANTONG, JIANGSU, CHINA </option>

                        <option value="mandalay">NANTONG WEIFU FOREIGN TRADE CO.,LTD
                            6/F YINXING BUILDING,NO.228 GONGNONG ROAD,NANTONG,JIANGSU,CHINA </option>

                        <option value="mandalay">SUMEC TEXTILE & LIGHT INDUSTRY CO.,LTD
                            198 CHANGJIANG ROAD, NANJING CHINA
                            BRANCH OFFICE:ESSEN THAILAND COMPANY LTD ADDRESS:71 SOI RAMKHAMHAENG 8 YAKE 6,RAMA9 RD
                            HUAMARK,BANGKAPI,BANGKOK 10240 THAILAND </option>

                        <option value="mandalay">HANGZHOU YIHE TEXTILE CO.,LTD,
                            20/F, JINFENG MANSION NO.281 ZHONGHE ZHONG ROAD HANGZHOU, CHINA</option>

                        <option value="mandalay">GUANGZHOU WORLDCOLOR DIGITAL TECHNOLOGY CO.,LTD
                            ROOM 413,YINGJIANG PLAZA,NO.1033 ZHONGSHAN MIDDLE AVENUE,TIANHE DISTRICT,GUANGZHOU,CHINA
                        </option>

                        <option value="mandalay">WUXI NACHENG INTERTANATIONAL TRADE CO.,LTD
                            6-9-201, ZHIXING VENTURE PARK, No.2 CHUNFENG SOUTH ROAD ANZHEN COMMUNITY XISHAN DISTRICT,
                            WUXI CHINA</option>

                        <option value="mandalay">WUJIANG DOWELL IMPORT AND EXPORT CO.,LTD
                            ROOM 302, BUILDING 2, NO.500 RENMIN ROAD, WUJIANG CITY, JIANGSU CHINA</option>
                        
                        <option value="mandalay">KPH MANUFACTURING CO.,LTD NO(7/8), INNWA STREET, SHWE PAUKKAN
                            INDUSTRIAL ZONE NORTH OKKALAPA TOWNSHIP, YANGON,MYANMAR</option>

                        <option value="mandalay">SHWE MINGALAR CO.,LTD
                            AHKWET NO.(25/26),4TH STREET,YANGON INDUSTRIAL ZONE,MINGALARDON TOWNSHIP, YANGON, MYANMAR,
                        </option>
                        <option value="mandalay">SPRINGWOODS INTERNATIONAL (HONGKONG) LIMITED
                            6/F RFCM, MAUNLIFE PLACE,348 KWUN TONG ROAD,KOWLOON,HONGKONG,CHINA </option>
                        <option value="mandalay">JF GLOBAL CO.,LTD
                            501,5F,SONGNAE TECHNOVALLEY,13,SONGNAEDAERO 30BEON-GIL,BUCHEON-SI,GYEONGGI-DO,KOREA REPUBLIC
                            OF </option>
                        <option value="mandalay">TOKYOSHIMA CO.,LTD
                            15-15,NISHIKI-CHOME,NKAKU,NAGOYA,JAPAN</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <div class="columns to-company-info">
        <div class="column">
            <label for="account-number" class="label is-size-5 is-uppercase">Invoice Number:</label>
        </div>

        <div class="column">
            <input class="input is-info is-medium" type="text" id="invoice-number" v-model="invoiceNumber"
                placeholder="Invoice No.">
        </div>

    </div>

    <div class="to-company-info columns">
        <div class="column">
            <label for="invoice-date" class="label is-size-5 is-uppercase">Invoice Date:</label>
        </div>
        <div class="column">
            <input class="input is-info is-medium" type="date" id="invoice-date" v-model="invoiceDate"
                placeholder="Date">
        </div>
    </div>


</template>

<script>
export default {
    data() {
        return {
            companyName: 'DEXIN INTERNATIONAL CO.,LTD.',
            companyAddress: 'No.769, CHANGHONG STREET, WUKANG TOWN, DEQING COUNTRY, HUZHOU, ZHEJIANG, CHINA',
            importCompany: '',
            exportCompany: '',
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

</style>