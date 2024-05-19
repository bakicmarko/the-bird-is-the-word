<template>
  <div class="gallery-card31-gallery-card" v-bind:class="rootClassName">
    <img :alt="image_alt1" :src="image_src1" class="gallery-card31-image" />
    <div class="gallery-card31-container">
      <h1 class="gallery-card31-heading">{{ title }}</h1>
      <span class="gallery-card31-text">{{ subtitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryCard31',
  props: {
    rootClassName: String,
    title: {
      type: String,
      default: 'BRGLJEZ',
    },
    subtitle: {
      type: String,
      default: 'BRGLJEZ',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1548960095-770e3e6364de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxiaXJkfGVufDB8fHx8MTcwNDc5Njc0OXww&ixlib=rb-4.0.3&q=80&w=1500',
    },
  },
}
</script>

<style scoped>
.gallery-card31-gallery-card {
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-fourunits);
  position: relative;
  box-shadow: 10px 10px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.gallery-card31-image {
  width: 100%;
  height: 70%;
  align-self: center;
  object-fit: cover;
}
.gallery-card31-container {
  width: 70%;
  height: auto;
  display: flex;
  opacity: 0;
  padding: var(--dl-space-space-twounits);
  z-index: 1;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.gallery-card31-heading {
  color: var(--dl-color-secondary-grey400);
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.gallery-card31-text {
  color: var(--dl-color-secondary-grey400);
  text-align: center;
}
.gallery-card31-root-class-name {
  align-self: center;
}






.gallery-card31-root-class-name7 {
  align-self: center;
}
























.gallery-card31-root-class-name39 {
  width: auto;
  height: auto;
}
.gallery-card31-root-class-name40 {
  width: auto;
  height: auto;
}
.gallery-card31-root-class-name41 {
  width: auto;
  height: auto;
}
.gallery-card31-root-class-name42 {
  width: auto;
  height: auto;
}
.gallery-card31-root-class-name43 {
  width: auto;
  height: auto;
}
.gallery-card31-root-class-name44 {
  width: auto;
  height: auto;
}
.gallery-card31-root-class-name45 {
  width: auto;
  height: auto;
}
.gallery-card31-root-class-name46 {
  width: auto;
  height: auto;
}
.gallery-card31-root-class-name47 {
  width: auto;
  height: auto;
}
.gallery-card31-root-class-name48 {
  width: auto;
  height: auto;
}
.gallery-card31-root-class-name49 {
  width: auto;
  height: auto;
}
.gallery-card31-root-class-name50 {
  width: auto;
  height: auto;
}
.gallery-card31-root-class-name51 {
  width: auto;
  height: auto;
}
.gallery-card31-root-class-name52 {
  width: auto;
  height: auto;
}
@media(max-width: 479px) {
  .gallery-card31-heading {
    align-self: center;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
