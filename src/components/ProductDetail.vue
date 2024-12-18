<template>
    <div class="productdetail-container">
        <div class="status">In Stock</div>
        <h1>Seeds of Change Organic Quinoa, Brown</h1>
        <div class="rating">
            <div class="stars" v-for="star in 5">
                <iconify-icon icon="fe:star" width="24" height="24"  style="color: #ff9f00"/>
            </div>
            <span>(5.0)</span>
        </div>
        <hgroup>
            <h1>$38</h1>
            <h2>$42</h2>
        </hgroup>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatibus velit cupiditate repellat officia consequatur omnis maiores recusandae, nemo exercitationem quasi obcaecati deserunt aperiam excepturi dolorem aliquid quos sint cum!
        </p>
        <div class="detailfunc-container">
            <input type="number">
            <button class="add_to">
                Add to Category
            </button>
            <button class="heart">
                <iconify-icon icon="mdi:heart-outline" width="24" height="24" />
            </button>
            <button class="share">
                <iconify-icon icon="lucide:share" width="24" height="24" />
            </button>
        </div>
        <span><strong>Vender:</strong> <span>NestMart</span></span>
        <br>
        <span><strong>SKU:</strong> <span>FWM15VKT</span></span>
    </div>
</template>

<style scoped>
    .status{
        width: fit-content;
        height: fit-content;
        padding: .5rem;
        border-radius: 5px;
        font-weight: 500;
        color: #1e8153;
        background-color: #5ed59d;
    }

    .rating{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    hgroup{
        display: flex;
        align-items: center;
        gap: 5rem;
        margin: 0;
    }

    hgroup > h2{
        color: grey;
        text-decoration: line-through;
    }

    .detailfunc-container{
        display: flex;
        gap: 1rem;
        margin-bottom: 50px;
    }

    .detailfunc-container > input{
        width: 118px;
        height: 50px;
        border-radius: 7px;
        border: 1px solid #3BB77E;
    }

    .add_to{
        width: 176px;
        height: 50px;
        border-radius: 5px;
        border: 1px solid #3BB77E;
        background-color: #3BB77E;
        font-weight: bold;
        color: white;
    }

    .heart,
    .share{
        width: 50px;
        height: 50px;
        border-radius: 5px;
        border: 1px solid lightgrey;
        background-color: transparent;
    }

</style>

