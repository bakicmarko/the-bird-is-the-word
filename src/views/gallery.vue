<template>
  <div class="gallery-container">
    <app-header1 rootClassName="header1-root-class-name1"></app-header1>
    <div class="gallery-gallery">
      <h1 class="gallery-text heading1 bold">Ptice naših gradova</h1>
      <div v-if="birdsDataStore && birdsDataStore[0] && birdsDataStore[0].imageUrl1" class="gallery-gallery1">
        <div class="gallery-image-row">
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[0].imageUrl1, birdsDataStore[0].imageUrl2, birdsDataStore[0].imageUrl3]"
              :image_src="birdsDataStore[0].imageUrl1" :text="birdsDataStore[0].commonName"></image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[1].imageUrl1, birdsDataStore[1].imageUrl2, birdsDataStore[1].imageUrl3]"
              :image_src="birdsDataStore[1].imageUrl1" :text="birdsDataStore[1].commonName"></image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[2].imageUrl1, birdsDataStore[2].imageUrl2, birdsDataStore[2].imageUrl3]"
              :image_src="birdsDataStore[2].imageUrl1" :text="birdsDataStore[2].commonName">
            </image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[3].imageUrl1, birdsDataStore[3].imageUrl2, birdsDataStore[3].imageUrl3]"
              :image_src="birdsDataStore[3].imageUrl1" :text="birdsDataStore[3].commonName">
            </image-and-text>

          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[4].imageUrl1, birdsDataStore[4].imageUrl2, birdsDataStore[4].imageUrl3]"
              :image_src="birdsDataStore[4].imageUrl1" :text="birdsDataStore[4].commonName">
            </image-and-text>


          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[5].imageUrl1, birdsDataStore[5].imageUrl2, birdsDataStore[5].imageUrl3]"
              :image_src="birdsDataStore[5].imageUrl1" :text="birdsDataStore[5].commonName">
            </image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[6].imageUrl1, birdsDataStore[6].imageUrl2, birdsDataStore[6].imageUrl3]"
              :image_src="birdsDataStore[6].imageUrl1" :text="birdsDataStore[6].commonName">
            </image-and-text>
          </div>
        </div>
        <div class="gallery-image-row">
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[7].imageUrl1, birdsDataStore[7].imageUrl2, birdsDataStore[7].imageUrl3]"
              :image_src="birdsDataStore[7].imageUrl1" :text="birdsDataStore[7].commonName">
            </image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[8].imageUrl1, birdsDataStore[8].imageUrl2, birdsDataStore[8].imageUrl3]"
              :image_src="birdsDataStore[8].imageUrl1" :text="birdsDataStore[8].commonName"></image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[9].imageUrl1, birdsDataStore[9].imageUrl2, birdsDataStore[9].imageUrl3]"
              :image_src="birdsDataStore[9].imageUrl1" :text="birdsDataStore[9].commonName">
            </image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[10].imageUrl1, birdsDataStore[10].imageUrl2, birdsDataStore[10].imageUrl3]"
              :image_src="birdsDataStore[10].imageUrl1" :text="birdsDataStore[10].commonName">
            </image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[11].imageUrl1, birdsDataStore[11].imageUrl2, birdsDataStore[11].imageUrl3]"
              :image_src="birdsDataStore[11].imageUrl1" :text="birdsDataStore[11].commonName">
            </image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[12].imageUrl1, birdsDataStore[12].imageUrl2, birdsDataStore[12].imageUrl3]"
              :image_src="birdsDataStore[12].imageUrl1" :text="birdsDataStore[12].commonName">
            </image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[13].imageUrl1, birdsDataStore[13].imageUrl2, birdsDataStore[13].imageUrl3]"
              :image_src="birdsDataStore[13].imageUrl1" :text="birdsDataStore[13].commonName">
            </image-and-text>
          </div>
        </div>
        <div class="gallery-image-row">
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[14].imageUrl1, birdsDataStore[14].imageUrl2, birdsDataStore[14].imageUrl3]"
              :image_src="birdsDataStore[14].imageUrl1" :text="birdsDataStore[14].commonName">
            </image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[15].imageUrl1, birdsDataStore[15].imageUrl2, birdsDataStore[15].imageUrl3]"
              :image_src="birdsDataStore[15].imageUrl1" :text="birdsDataStore[15].commonName">
            </image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[16].imageUrl1, birdsDataStore[16].imageUrl2, birdsDataStore[16].imageUrl3]"
              :image_src="birdsDataStore[16].imageUrl1" :text="birdsDataStore[16].commonName">
            </image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[17].imageUrl1, birdsDataStore[17].imageUrl2, birdsDataStore[17].imageUrl3]"
              :image_src="birdsDataStore[17].imageUrl1" :text="birdsDataStore[17].commonName">
            </image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[18].imageUrl1, birdsDataStore[18].imageUrl2, birdsDataStore[18].imageUrl3]"
              :image_src="birdsDataStore[18].imageUrl1" :text="birdsDataStore[18].commonName">
            </image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[19].imageUrl1, birdsDataStore[19].imageUrl2, birdsDataStore[19].imageUrl3]"
              :image_src="birdsDataStore[19].imageUrl1" :text="birdsDataStore[19].commonName">
            </image-and-text>
          </div>
          <div class="gallery-image-card">
            <image-and-text
              :images="[birdsDataStore[20].imageUrl1, birdsDataStore[20].imageUrl2, birdsDataStore[20].imageUrl3]"
              :image_src="birdsDataStore[20].imageUrl1" :text="birdsDataStore[20].commonName">
            </image-and-text>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader1 from '../components/header1'
import ImageAndText from '../components/image-and-text'
import AppFooter from '../components/footer'

export default {
  name: 'Gallery',
  components: {
    AppHeader1,
    ImageAndText,
    AppFooter,
  },
  computed: {
    birdsDataStore() {
      // Access the data from the store
      return this.$store.getters.getBirdsData;
    },
  },
  metaInfo: {
    title: 'Gallery - Bird is The Word',
    meta: [
      {
        property: 'og:title',
        content: 'Gallery - Bird is The Word',
      },
    ],
  },
}
</script>

<style scoped>
.gallery-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.gallery-gallery {
  width: 100%;
  height: 200%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}

.gallery-text {
  color: var(--dl-color-gray-black);
  align-self: center;
  text-align: center;
  padding-top: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-threeunits);
}

.gallery-gallery1 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
}

.gallery-image-row {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  height: 40vh;
  display: flex;
  align-self: flex-start;
  align-items: stretch;
  justify-content: center;
}

.gallery-image-card {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
}






@media(max-width: 767px) {
  .gallery-gallery {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}

@media(max-width: 479px) {
  .gallery-gallery {
    padding: var(--dl-space-space-unit);
  }
}
</style>
