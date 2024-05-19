<template>
  <div class="gallery-card-gallery-card" v-bind:class="rootClassName">
    <img :alt="image_alt" :src="image_src" class="gallery-card-image" />
  </div>
</template>

<script>
export default {
  name: 'GalleryCard',
  props: {
    rootClassName: String,
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&w=1500',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.gallery-card-gallery-card {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.gallery-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media(max-width: 1200px) {
  .gallery-card-gallery-card {
    width: 960px;
  }
  .gallery-card-image {
    width: 982px;
    height: 612px;
  }
  .gallery-card-root-class-name {
    top: -742px;
    left: 104px;
    right: 104px;
    position: absolute;
  }
}
@media(max-width: 767px) {
  .gallery-card-gallery-card {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .gallery-card-image {
    height: 10rem;
  }
}
</style>
