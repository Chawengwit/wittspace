<template>
  <div id="headerZone">
    <div class="header"> 
        <router-link class="myname" to="/">CHAWENGWIT</router-link>
    </div>
  </div>
</template>

<script>

export default {
    name: "HeaderZone"
}
</script>

<style>
  .header {
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .myname{
    font-size: 8vw;
    color: var(--orange);
    text-decoration: none;
    letter-spacing: 1vw;
  }
  
</style>