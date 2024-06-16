<template>
    <div id="ImageList">
        <div class="container-images-list">
            <div class="image-col">
                <div v-for="(image, index) in col_1" :key="index" class="image-box">
                    <img :src="image"> 
                </div>
            </div>
            <div class="image-col">
                <div v-for="(image, index) in col_2" :key="index" class="image-box">
                    <img :src="image"> 
                </div>
            </div>
            <div class="image-col">
                <div v-for="(image, index) in col_3" :key="index" class="image-box">
                    <img :src="image"> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    ///src/assets/images/films/1.jpg
    name: "ImageList",
    mounted() {
        for(let idx = 1 ; idx<=21 ;idx++){
            let path = '../src/assets/images/films/' + idx + '.jpg';
            if(idx <= 7){ this.col_1.push(path); }
            if(idx > 7 && idx<=12){ this.col_2.push(path); }
            if(idx > 12 &&idx<=19){ this.col_3.push(path); }
            
        }
    },
    data() {
        return {
            col_1: [],
            col_2: [],
            col_3: []
        }
    },
}
</script>

<style>
    .container-images-list{
        display: grid;
        grid-template-columns: 2fr 3fr 2fr;
        gap: 20px;
        padding: 20px;
    }
    .image-col{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .image-box{
        width: 100%;
        overflow: hidden;
    }

    .image-box img {
        width: 100%;
        object-fit: contain;
    }

</style>