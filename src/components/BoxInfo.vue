<template>
  <div id="BoxInfo">
    <div class="container-info">
        <div class="intro">
            <h1>Gallery</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reiciendis ratione soluta repellat, sed itaque culpa voluptas esse excepturi atque assumenda officia molestias, ipsam nam dolorum placeat nobis minima quidem!</p>
        </div>
        <div class="profile-image">
            <img src="../assets/images/iam.JPG" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "BoxInfo"
}
</script>

<style>
    .container-info{
        display: flex;
        justify-content: space-between;
        align-items: end;
        padding: 20px;
        gap: 40px;
        color: var(--black);
        margin-bottom: 30px;
    }

    .intro {
        width: 50%;
    }
    
    .intro h1 {
        font-size: 60px;
        line-height: 1.2;
        margin-bottom: 15px;
        font-weight: 700;
    }

    .intro p {
        font-size: 24px;
        line-height: 1.2;
    }

    .profile-image{
        width: 50%;
        overflow: hidden;
        border-radius: 10px;
    }
    .profile-image img {
        width: 100%;
        object-fit: contain;
    }
</style>