<template>
    <div class="header-container">
        <hgroup>
            <h1>Cake & Milk</h1>
            <h5>Home > Category > Cake & Milk</h5>
        </hgroup>
    </div>
</template>

<script>
</script>   

<style scoped>
    .header-container{
        height: auto;
        width: auto;
        height: 235px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        background-image: url("../assets/images/bannerBG.png");
        border-radius: 20px;
        background-color: #3BB77E33;
    }

    hgroup{
        padding-inline: 40px;
    }

    hgroup > h1{
        font-size: 60px;
        margin: 0;
        color: #253D4E;
    }

    hgroup > h5{
        font-size: 20px;
        margin: 20px 0px 0px 0px;
        color: #7E7E7E;
        font-weight: 400;
    }
</style>