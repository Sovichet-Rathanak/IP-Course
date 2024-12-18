<template>
    <div class="productimage-container">
        <img src="../assets/images/mango.jpg" alt="product_image">
        <div class="subimage-container">
            <button> < </button>
            <img src="../assets/images/orange.png" alt="sub_image">
            <img src="../assets/images/orange.png" alt="sub_image">
            <img src="../assets/images/orange.png" alt="sub_image">
            <button> > </button>
        </div>
    </div>
</template>

<style scoped>
    

    .productimage-container > img{
        width: 450px;
        height: 450px;
    }

    .subimage-container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 450px;
    }

    .subimage-container > img{
        height: 117.6px;
        width: 117.6px;
        border-radius: 20px;
        border: .5px solid grey;
        box-shadow: 0px 10px 10px 0px grey;
    }

    .subimage-container > button{
        width: 40px;
        height: 40px;
        border-radius: 40px;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: .3px solid black;
        font-weight: bold;
    }
</style>

<script>
</script>
