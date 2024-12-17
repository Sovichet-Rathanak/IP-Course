<template>
    <div class="Unav-container">
        <div class="account">
            <iconify-icon icon="uil:user" width="24px" height="24px" />
            <span>Account</span>
        </div>

        <div class="compare">
            <iconify-icon icon="entypo:cycle" width="24px" height="24px" />
            <span>Compare</span>
        </div>

        <div class="wishlist">
            <iconify-icon icon="akar-icons:heart" width="24px" height="24px" />
            <span>Wishlist</span>
        </div>

        <div class="cart">
            <iconify-icon icon="mi:shopping-cart" width="24" height="24" />
            <Span>Cart</Span>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
    *{
        font-size: 16px;
    }

    .Unav-container{
        width: 402px;
        display: flex;
        gap: 20px;
    }

    .Unav-container > div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
</style>