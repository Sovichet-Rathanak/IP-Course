<template>
    <div class="banner-container">
        <div class="left">
            <hgroup>
                <h1>Don't miss amazing <br> grocery deals</h1>
                <h5>Sign up for the daily newsletter</h5>
            </hgroup>
    
            <div class="subscribe-container">
                <iconify-icon class="icon" icon="ion:paper-plane" width="24px" height="24px" />
                <input type="text" placeholder="Your email address">
                <button>Subscribe</button>
            </div>
        </div>
        <div class="right">
            <img src="../assets/images/fruitBanner.png" alt="fruit_banner">
        </div>
    </div>
</template>

<style scoped>
    .banner-container{
        height: 538px;
        width: 100%;
        display: flex;
        flex-direction: row;    
        background-image: url("../assets/images/bannerBG.png");
        background-color: #FDC04033;
        border-radius: 30px;
        z-index: -100;
    }

    .right > img{
        position: absolute;
        width: 895px;
        height: 590px;
        right: 50px;
    }

    .left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
    }

    hgroup > h1,
    hgroup > h5{
        padding: 0;
        margin: 0;
    }


    hgroup > h1{
        font-size: 60px;
    }

    hgroup > h5{
        font-size: 20px;
        opacity: 50%;
        margin-top: 20px;
    }

    .subscribe-container{
        display: flex;
        position: relative;
        width: 442px;
        height: 50px;
        left: -50px;
        margin-top: 20px;
    }

    .subscribe-container > input{
        width: 100%;
        height: 100%;
        border-radius: 30px;
        border: none;
        text-indent: 60px;
    }
    
    .subscribe-container > input:focus{
        outline: none;
    }

    .subscribe-container > button{
        width: 149px;
        height: 51px;
        border-radius: 30px;
        border: none;
        background-color: #3BB77E;
        color: white;
        position: absolute;
        left: 293px;
        cursor: pointer;
    }

    .icon{
        position: absolute;
        top: 14px;
        left: 20px;
        color: #949494;
    }
</style>