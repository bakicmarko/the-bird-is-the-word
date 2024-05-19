<template>
  <div class="gallery-card11-gallery-card" v-bind:class="rootClassName">
    <img :alt="image_alt" :src="image_src" class="gallery-card11-image" />
  </div>
</template>

<script>
export default {
  name: 'GalleryCard11',
  props: {
    rootClassName: String,
    title: {
      type: String,
      default: 'Project Title',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    subtitle: {
      type: String,
      default: 'Lorem ipsum dolor sit amet',
    },
  },
}
</script>

<style scoped>
.gallery-card11-gallery-card {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.gallery-card11-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


@media(max-width: 1200px) {
  .gallery-card11-root-class-name {
    top: -140px;
    left: 107px;
    width: 1000px;
    position: absolute;
  }
  .gallery-card11-root-class-name1 {
    right: -3px;
    width: 550px;
    bottom: -3px;
    height: 700px;
    position: absolute;
  }
}
@media(max-width: 767px) {
  .gallery-card11-gallery-card {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .gallery-card11-image {
    height: 10rem;
  }
}
</style>
