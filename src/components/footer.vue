<template>
  <div class="footer-footer" v-bind:class="rootClassName">
    <footer class="footer-footer1">
      <div class="footer-container">
        <a href="#headerID" class="footer-logo heading1 heading1">{{ Logo }}</a>
        <nav class="footer-nav">
          <router-link to="/" class="footer-home heading3">{{ Nav2 }}</router-link>
          <router-link to="/learn" class="footer-nav1 heading3">{{ Nav1 }}</router-link>
          <router-link to="/quiz" class="footer-nav3 heading3">{{ Nav3 }}</router-link>
          <router-link to="/gallery" class="footer-nav3 heading3">{{ Nav4 }}</router-link>
        </nav>
      </div>
      <div class="footer-separator"></div>
      <div class="footer-icon-group">
        <svg viewBox="0 0 950.8571428571428 1024" class="footer-icon">
          <path
            d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z">
          </path>
        </svg><svg viewBox="0 0 877.7142857142857 1024" class="footer-icon2">
          <path
            d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z">
          </path>
        </svg><svg viewBox="0 0 602.2582857142856 1024" class="footer-icon4">
          <path
            d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z">
          </path>
        </svg>
      </div>
      <div class="footer-separator1"></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    Nav2: {
      type: String,
      default: '',
    },
    rootClassName: String,
    Nav3: {
      type: String,
      default: 'Kviz',
    },
    Nav1: {
      type: String,
      default: 'Učilica',
    },
    Nav4: {
      type: String,
      default: 'Galerija',
    },
    Logo: {
      type: String,
      default: 'BIRD IS THE WORD',
    },
  },
}
</script>

<style scoped>
.footer-footer {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  left: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.footer-footer1 {
  width: 100%;
  display: flex;
  max-width: 60%;
  align-items: center;
  padding-top: var(--dl-space-space-fourunits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fourunits);
  justify-content: space-between;
}

.footer-container {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  max-width: 60%;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.footer-logo {
  color: var(--dl-color-gray-white);
  font-weight: bold;
  text-decoration: none;
}

.footer-nav {
  flex: 0 0 auto;
  display: flex;
  margin-top: 0px;
  align-items: center;
  flex-direction: row;
}

.footer-home {
  color: var(--dl-color-secondary-gray500);

  text-decoration: none;
}

.footer-nav1 {
  color: var(--dl-color-secondary-gray500);
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}

.footer-nav3 {
  color: var(--dl-color-secondary-gray500);
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}

.footer-separator {
  flex: 0 0 auto;
  width: 100%;
  height: 0px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-left: 0px;
  border-color: var(--dl-color-gray-800);
  border-style: solid;
  border-width: 1px;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}

.footer-icon-group {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.footer-icon {
  fill: var(--dl-color-secondary-gray500);
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}

.footer-icon2 {
  fill: var(--dl-color-secondary-gray500);
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}

.footer-icon4 {
  fill: var(--dl-color-secondary-gray500);
  width: 24px;
  height: 24px;
}

.footer-separator1 {
  flex: 0 0 auto;
  width: 100%;
  height: 0px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-left: 0px;
  border-color: var(--dl-color-gray-800);
  border-style: solid;
  border-width: 1px;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}

@media(max-width: 767px) {
  .footer-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .footer-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .footer-separator1 {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .footer-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .footer-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .footer-separator1 {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
