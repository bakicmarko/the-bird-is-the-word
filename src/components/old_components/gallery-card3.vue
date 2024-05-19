<template>
  <div class="gallery-card3-gallery-card" v-bind:class="rootClassName">
    <img :alt="image_alt" :src="image_src" class="gallery-card3-image" />
  </div>
</template>

<script>
export default {
  name: 'GalleryCard3',
  props: {
    rootClassName: String,
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&w=1500',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.gallery-card3-gallery-card {
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.gallery-card3-image {
  top: 0px;
  left: 0px;
  right: auto;
  width: 100%;
  bottom: auto;
  height: 300px;
  position: absolute;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius8);
}
























</style>
