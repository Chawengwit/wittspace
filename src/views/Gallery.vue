<template>
  <div id="Gallery">
    <BoxInfo/>
    <ImageList/>
  </div>
</template>

<script>
import BoxInfo from '@/components/BoxInfo.vue';
import ImageList from '@/components/ImageList.vue';

export default {
  name: "Gallery",
  components: {
    BoxInfo,
    ImageList
  }

}
</script>

<style>

</style>