<template>
    <div id="ImageList">
        <div class="container-images-list">

            <div class="image-col">
                <div class="image-container" v-for="(image, index) in col_1" :key="index">
                    <div  class="image-box">
                        <img :src="image"> 
                    </div>
                    <div class="image-filter">
                        <div class="location">Hong kong</div>
                        <div class="film-name">Kodak Gold 200</div>
                    </div>
                </div>
            </div>

             <div class="image-col">
                <div class="image-container" v-for="(image, index) in col_2" :key="index">
                    <div  class="image-box">
                        <img :src="image"> 
                    </div>
                    <div class="image-filter">
                        <div class="location">Hong kong</div>
                        <div class="film-name">Kodak Gold 200</div>
                    </div>
                </div>
            </div>

            <div class="image-col">
                <div class="image-container" v-for="(image, index) in col_3" :key="index">
                    <div  class="image-box">
                        <img :src="image"> 
                    </div>
                    <div class="image-filter">
                        <div class="location">Hong kong</div>
                        <div class="film-name">Kodak Gold 200</div>
                    </div>
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
            if(idx <= 8){ this.col_1.push(path); }
            if(idx > 8 && idx<=14){ this.col_2.push(path); }
            if(idx > 14 &&idx<=21){ this.col_3.push(path); }
            
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
    .image-container{
        position: relative;
        cursor: zoom-in;
    }

    .image-filter{
        width: 100%;
        position: absolute;
        bottom: 0;

        display: flex;
        
        flex-direction: column;
        align-items: start;
        justify-content: end;
        background: transparent;
        padding: 10px;
        gap: 5px;
        color: #FFF;
        z-index: 2;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.3s ease-out;
    }

    .image-container:hover .image-filter {
        display: flex;
        
        backdrop-filter: blur(2px);
        backdrop-filter: brightness(90%);

        visibility: visible;
        opacity: 1;
    }
    .location, .film-name {
        background-color: transparent ;
    }
    .image-box{
        width: 100%;
        overflow: hidden;
        position: relative;
        z-index: 1;
    }

    .image-box img {
        width: 100%;
        object-fit: contain;
    }

</style>