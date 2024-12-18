<template>
    <body>
        <div class="container">
            <h5>Home > Vegetables & tubers > <span class="location">Seeds of Change Organic</span></h5>
            <div class="productview-container">
                <ProductImage></ProductImage>
                <ProductDetail></ProductDetail>
            </div>
            <ReviewSection></ReviewSection>
        </div>
    </body>
</template>

<script>
import ProductImage from "../components/ProductImage.vue"
import ProductDetail from "@/components/ProductDetail.vue";
import ReviewSection from "@/components/ReviewSection.vue";

export default{
    components:{
        ProductImage,
        ProductDetail,
        ReviewSection
    }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.productview-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 200px;
    margin-bottom: 50px;
}

.location{
    color: #3BB77E;
}

h5{
    font-weight: 600;
}

body{
    padding-inline: 3rem;
}

</style>