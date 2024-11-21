<template>
    <div class="container">
        <h1 class="title">{{ title }}</h1>
        <div class="btn_container">
            <button @click="onAll">All</button>
            <button @click="onMilk">Milk & Dairies</button>
            <button @click="onCoff">Coffee & Teas</button>
            <button @click="onPet">Pet Food</button>
            <button @click="onMeat">Meat</button>
            <button @click="onVeg">Vegetables</button>
            <button @click="onFruit">Fruits</button>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        title: String,
        onAll: Function,
        onMilk: Function,
        onCoff: Function,
        onPet: Function,
        onMeat: Function,
        onVeg: Function,
        onFruit: Function
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

    .container{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        font-family: "Roboto Mono", monospace;
        margin: 0;
    }

    h1{
        margin: 0;
    }

    button{
        padding: 1em;
        background-color: transparent;
        border: none;
        font-family: "Roboto Mono", monospace;
    }

    button:hover{
        font-weight: bold;
    }

    button:active{
        font-weight: bold;
        color: blue;
    }
</style>
