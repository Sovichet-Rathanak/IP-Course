<template>
    <div class="search-container">
        <select name="categories" id="categories">
            <option selected disabled hidden>All Category</option>
            <option value="Milks & Diaries">Milk & Diaries</option>
            <option value="Coffee & Teas">Coffee & Teas</option>
            <option value="Pet Foods">Pet Foods</option>
            <option value="Meats">Meats</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
        </select>
        <div class="vertical-line"></div>
        <input class="search-input" type="text" placeholder="Search for items">
        <iconify-icon class="search-icon" icon="il:search" width="20px" height="20px" />
    </div>
</template>

<style scoped>
    .search-container{
        display: flex;
        flex-direction: row;
        position: relative;
    }

    .vertical-line{ 
        position: absolute;
        left: 145px;
        top: 14px;
        border: 1px solid #949494;
        height: 25px;
    }

    .search-input{
        width: 700px;
        height: 50px;
        font-size: 12px;
        text-indent: 10px;
        border: 2px solid #bce3c9;
        border-radius: 5px;
        text-indent: 160px;
    }

    .search-input:focus{
        outline: none;
    }

    #categories{
        position: absolute;
        margin: 0;
        padding: 0;
        left: 20px;
        top: 8px;
        height: 40px;
        border: none;
    }

    #categories:focus{
        outline: none;
    }

    .search-icon{
        position: absolute;
        top: 18px;
        left: 670px;
        color: #949494;
    }
</style>