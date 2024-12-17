<template>
    <div class="nav-container">
        <div class="dropdown">
            <iconify-icon class="icon" icon="iconamoon:category" width="24px" height="24px" />
            <select name="all-cat" id="all-cat"> 
                <option selected disabled hidden>Browse All Categories</option>
                <option>Home</option>
                <option>Food</option>
                <option>Vegetables</option>
                <option>Drink</option>
                <option>Cookies</option>
                <option>Meat & Seafood</option>
                <option>Bakery</option>
            </select>
        </div>
        <nav>
            <div class="hot">
                <button>Hot Deals</button>
            </div>
            <button>Home</button>
            
            <select name="food" id="food">
                <option value="Food">Food</option>
            </select>
            
            <select name="vegetables" id="vegetables">
                <option value="Vegetables">Vegetables</option>
            </select>

            <button>Drink</button>
            <button>Cookies</button>

            <select name="meat&seafood" id="meat&seafood">
                <option value="meat&seafood">Meat & Seafood</option>
            </select>

            <button>Bakery</button>
        </nav>

        <hgroup>
            <iconify-icon class="icon" icon="mdi:headset" width="50px" height="50px" />
            <h1>097 8888 9999</h1>
            <h5>24/7 Support Center</h5>
        </hgroup>
    </div>
</template>

<style scoped>

    .nav-container{
        display: flex;
        gap: 50px;
        padding: .5rem;
        margin: 0;
        justify-content: space-around;
    }

    .dropdown{
        position: relative;
    }

    .dropdown .icon{
        position: absolute;
        top: 11px;
        left: 10px;
        color: white;
    }

    .dropdown > select{
        width: 250px;
        height: 50px;
        text-indent: 44px;
        border-radius: 5px;
        background-color: #3BB77E;
        color: white;
        border: none;
        font-weight: 600;
    }

    .nav-container > nav{
        display: flex;
        gap: 50px;
    }

    .hot{
        display: flex;
        justify-content: center;
    }
    
    .hot > button{
        border: none;
        background-color: transparent;
        font-weight: 600;
    }

    nav > button,
    nav > select{
        border: none;
        background-color: transparent;
        font-weight: 600;
    }

    hgroup > h1,
    hgroup > h5{
        margin: 0;
        padding: 0;
        align-items: flex-end;
    }

    hgroup > h1{
        color: #3BB77E;
    }

    hgroup{
        position: relative;
    }

    hgroup .icon{
        position: absolute;
        left: -60px;
    }
</style>