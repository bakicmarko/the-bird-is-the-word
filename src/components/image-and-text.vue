<template>
  <div class="image-and-text-image-and-text" v-bind:class="rootClassName">
    <img @click="switchImage" :alt="image_alt" :src="currentImageUrl" class="image-and-text-image" />
    <div class="image-and-text-container heading3"><span>{{ text }}</span></div>
  </div>
</template>

<script>
export default {
  name: 'ImageAndText',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    text: {
      type: String,
      default: 'Text',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1606567595334-d39972c85dbe?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGJpcmR8ZW58MHx8fHwxNzA0OTY3Nzg4fDA&ixlib=rb-4.0.3&w=1500',
    },
    images: {
      type: Array,
      default: () => [],
    },
    rootClassName: String,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },

  computed: {
    currentImageUrl() {
      return this.images.length > 0 ? this.images[this.currentIndex] : this.image_src;
    },
  },
  methods: {
    switchImage() {
      if (this.images.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }
    },
  },
}
</script>

<style scoped>
.image-and-text-image-and-text {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-self: flex-start;
  box-shadow: 10px 10px 10px 0px #d4d4d4;
  align-items: center;
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}

.image-and-text-image {
  width: 100%;
  height: 70%;
  object-fit: cover;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
}

.image-and-text-container {
  text-align: center;
  flex: 0 0 auto;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-and-text-root-class-name {
  width: 100%;
}

.image-and-text-root-class-name1 {
  width: 100%;
}

.image-and-text-root-class-name2 {
  width: 100%;
}
</style>
