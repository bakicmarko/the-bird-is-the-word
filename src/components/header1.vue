<template>
  <div id="headerID" class="header1-header" v-bind:class="rootClassName">
    <header data-thq="thq-navbar" class="header1-navbar-interactive width-wrapper">
      <div class="header1-container">
        <div class="header1-container1">
          <router-link to="/" class="header1-logo heading3">{{ Logo }}</router-link>
        </div>
        <div data-thq="thq-navbar-nav" class="header1-desktop-menu">
          <nav class="header1-links">
            <router-link to="/" class="header1-nav1 heading3 bold">
              {{ Nav1 }}
            </router-link>
            <router-link to="/learn" class="header1-nav2 heading3 bold">
              {{ Nav2 }}
            </router-link>
            <router-link to="/quiz" class="header1-nav3 heading3 bold">
              {{ Nav31 }}
            </router-link>
            <router-link to="/gallery" class="header1-nav31 heading3 bold">
              {{ Nav311 }}
            </router-link>
          </nav>
        </div>
        <div class="header1-container2"></div>
      </div>
      <div data-thq="thq-burger-menu" class="header1-burger-menu">
        <svg viewBox="0 0 1024 1024" class="header1-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z">
          </path>
        </svg>
      </div>
      <div data-thq="thq-mobile-menu" class="header1-mobile-menu">
        <div class="header1-nav">
          <div class="header1-top">
            <span class="header1-logo1">{{ Logo1 }}</span>
            <div data-thq="thq-close-menu" class="header1-close-menu">
              <svg viewBox="0 0 1024 1024" class="header1-icon02">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z">
                </path>
              </svg>
            </div>
          </div>
          <nav class="header1-links1">
            <span class="header1-nav11">{{ Nav11 }}</span>
            <span class="header1-nav21">{{ Nav21 }}</span>
            <span class="header1-nav32">{{ Nav32 }}</span>
            <span class="header1-nav4">{{ Nav4 }}</span>
            <span class="header1-nav5">{{ Nav5 }}</span>
          </nav>
          <div class="header1-buttons">
            <button class="header1-login button">{{ Login1 }}</button>
            <button class="header1-register button">{{ Register1 }}</button>
          </div>
        </div>
        <div>
          <svg viewBox="0 0 950.8571428571428 1024" class="header1-icon04">
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z">
            </path>
          </svg><svg viewBox="0 0 877.7142857142857 1024" class="header1-icon06">
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z">
            </path>
          </svg><svg viewBox="0 0 602.2582857142856 1024" class="header1-icon08">
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z">
            </path>
          </svg>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header1',
  props: {
    Nav31: {
      type: String,
      default: 'Kviz',
    },
    Nav4: {
      type: String,
      default: 'Team',
    },
    Nav21: {
      type: String,
      default: 'Generate Fun Fact',
    },
    Nav2: {
      type: String,
      default: 'Učilica',
    },
    Register: {
      type: String,
      default: 'Register',
    },
    Login1: {
      type: String,
      default: 'Login',
    },
    Logo: {
      type: String,
      default: 'Bird is the word',
    },
    Nav11: {
      type: String,
      default: 'Preview Birds',
    },
    Nav32: {
      type: String,
      default: 'Kviz',
    },
    Nav311: {
      type: String,
      default: 'Galerija',
    },
    Nav5: {
      type: String,
      default: 'Blog',
    },
    Nav3: {
      type: String,
      default: 'Generate Fun Facts',
    },
    Login: {
      type: String,
      default: 'Login',
    },
    Nav1: {
      type: String,
      default: '',
    },
    rootClassName: String,
    Logo1: {
      type: String,
      default: 'BIRDIFY',
    },
    Register1: {
      type: String,
      default: 'Register',
    },
  },
}
</script>

<style scoped>
.header1-header {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  background-color: var(--dl-color-primary1-blue80);
}

.header1-navbar-interactive {

  display: flex;
  position: sticky;
  min-height: var(--dl-size-size-xlarge);
  align-items: center;
  padding-top: var(--dl-space-space-oneandhalfunits);
  padding-left: var(--dl-space-space-threeunits);
  border-radius: 50px;
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  justify-content: space-between;
  margin-top: var(--dl-space-space-fourunits);
  margin-bottom: var(--dl-space-space-fourunits);
  background-color: var(--dl-color-gray-white);
}

.header1-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header1-container1 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header1-logo {
  font-family: "Lato";
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
}

.header1-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.header1-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.header1-nav1 {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
}

.header1-nav2 {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
}

.header1-nav3 {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
}

.header1-nav31 {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
}

.header1-container2 {
  flex: 1;
  display: flex;
  align-items: flex-start;
}

.header1-burger-menu {
  display: none;
}

.header1-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.header1-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  border-radius: 50px;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}

.header1-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.header1-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.header1-logo1 {
  font-size: 2em;
  font-weight: bold;
}

.header1-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header1-icon02 {
  fill: var(--dl-color-gray-900);
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.header1-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.header1-nav11 {
  color: var(--dl-color-gray-black);
  margin-bottom: var(--dl-space-space-unit);
}

.header1-nav21 {
  color: var(--dl-color-gray-black);
  margin-bottom: var(--dl-space-space-unit);
}

.header1-nav32 {
  color: var(--dl-color-gray-black);
  margin-bottom: var(--dl-space-space-unit);
}

.header1-nav4 {
  color: var(--dl-color-gray-black);
  margin-bottom: var(--dl-space-space-unit);
}

.header1-nav5 {
  color: var(--dl-color-gray-black);
  margin-bottom: var(--dl-space-space-unit);
}

.header1-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.header1-login {
  border-color: var(--dl-color-primary1-blue100);
  border-width: 1px;
  margin-right: var(--dl-space-space-twounits);
  padding-left: 1.5rem;
  border-radius: 30px;
  padding-right: 1.5rem;
}

.header1-register {
  color: var(--dl-color-gray-white);
  transition: 0.3s;
  border-color: var(--dl-color-primary1-blue100);
  border-width: 1px;
  padding-left: 1.5rem;
  border-radius: 30px;
  padding-right: 1.5rem;
  background-color: var(--dl-color-primary1-blue100);
}

.header1-register:hover {
  border-color: #849492ff;
  background-color: #849492ff;
}

.header1-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.header1-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.header1-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}



@media(max-width: 1200px) {
  .header1-root-class-name {
    background-color: #4f36b1;
  }

  .header1-root-class-name2 {
    background-color: #4f36b1;
  }
}

@media(max-width: 767px) {
  .header1-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .header1-desktop-menu {
    display: none;
  }

  .header1-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header1-mobile-menu {
    padding-top: var(--dl-space-space-oneandhalfunits);
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .header1-nav11 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .header1-nav21 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }

  .header1-nav32 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }

  .header1-nav4 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }

  .header1-nav5 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}

@media(max-width: 479px) {
  .header1-navbar-interactive {
    width: 90%;
    padding: var(--dl-space-space-unit);
  }

  .header1-logo {
    font-size: 1.5em;
  }

  .header1-mobile-menu {
    padding: 16px;
  }

  .header1-logo1 {
    font-size: 1.5em;
  }

  .header1-icon02 {
    fill: var(--dl-color-gray-900);
  }
}
</style>
