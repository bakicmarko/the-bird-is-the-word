<template>
  <div class="header-header">
    <header data-thq="thq-navbar" class="header-navbar-interactive">
      <span class="header-logo">{{ Logo }}</span>
      <div data-thq="thq-navbar-nav" class="header-desktop-menu">
        <nav class="header-links">
          <span class="header-nav1">{{ Nav1 }}</span>
          <span class="header-nav2">{{ Nav2 }}</span>
          <span class="header-nav3">{{ Nav3 }}</span>
        </nav>
        <div class="header-buttons">
          <button class="header-login button">{{ Login }}</button>
          <button class="header-register button">{{ Register }}</button>
        </div>
      </div>
      <div data-thq="thq-burger-menu" class="header-burger-menu">
        <svg viewBox="0 0 1024 1024" class="header-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
      <div data-thq="thq-mobile-menu" class="header-mobile-menu">
        <div class="header-nav">
          <div class="header-top">
            <span class="header-logo1">{{ Logo1 }}</span>
            <div data-thq="thq-close-menu" class="header-close-menu">
              <svg viewBox="0 0 1024 1024" class="header-icon02">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <nav class="header-links1">
            <span class="header-nav11">{{ Nav11 }}</span>
            <span class="header-nav21">{{ Nav21 }}</span>
            <span class="header-nav31">{{ Nav31 }}</span>
            <span class="header-nav4">{{ Nav4 }}</span>
            <span class="header-nav5">{{ Nav5 }}</span>
          </nav>
          <div class="header-buttons1">
            <button class="header-login1 button">{{ Login1 }}</button>
            <button class="header-register1 button">{{ Register1 }}</button>
          </div>
        </div>
        <div>
          <svg viewBox="0 0 950.8571428571428 1024" class="header-icon04">
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
            ></path></svg
          ><svg viewBox="0 0 877.7142857142857 1024" class="header-icon06">
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg
          ><svg viewBox="0 0 602.2582857142856 1024" class="header-icon08">
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    Nav4: {
      type: String,
      default: 'Team',
    },
    Logo: {
      type: String,
      default: 'Bird is the word',
    },
    Nav1: {
      type: String,
      default: 'Preview Birds',
    },
    Nav3: {
      type: String,
      default: 'Quiz',
    },
    Nav11: {
      type: String,
      default: 'Preview Birds',
    },
    Logo1: {
      type: String,
      default: 'BIRDIFY',
    },
    Nav2: {
      type: String,
      default: 'Generate Fun Fact',
    },
    Login1: {
      type: String,
      default: 'Login',
    },
    Register: {
      type: String,
      default: 'Register',
    },
    Nav5: {
      type: String,
      default: 'Blog',
    },
    Register1: {
      type: String,
      default: 'Register',
    },
    Nav31: {
      type: String,
      default: 'Quiz',
    },
    Nav21: {
      type: String,
      default: 'Generate Fun Fact',
    },
    Login: {
      type: String,
      default: 'Login',
    },
  },
}
</script>

<style scoped>
.header-header {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  background-color: var(--dl-color-primary1-blue80);
}
.header-navbar-interactive {
  width: 90%;
  display: flex;
  position: sticky;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-oneandhalfunits);
  padding-left: var(--dl-space-space-threeunits);
  border-radius: 50px;
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.header-logo {
  font-size: 2em;
  font-family: "Lato";
  font-weight: bold;
  text-transform: uppercase;
}
.header-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.header-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.header-nav1 {
  transition: 0.3s;
}
.header-nav1:hover {
  color: #3d6e70ff;
}
.header-nav2 {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
}
.header-nav2:hover {
  color: #3d6e70ff;
}
.header-nav3 {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
}
.header-nav3:hover {
  color: #3d6e70ff;
}
.header-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-login {
  border-color: var(--dl-color-primary1-blue100);
  border-width: 1px;
  margin-right: var(--dl-space-space-twounits);
  padding-left: 1.5rem;
  border-radius: 45px;
  padding-right: 1.5rem;
}
.header-register {
  color: var(--dl-color-gray-white);
  transition: 0.3s;
  font-weight: bold;
  border-color: var(--dl-color-primary1-blue100);
  padding-left: 1.5rem;
  border-radius: 45px;
  padding-right: 1.5rem;
  background-color: var(--dl-color-primary1-blue100);
}
.header-register:hover {
  border-color: rgba(41, 20, 119, 0.9);
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: rgba(41, 20, 119, 0.9);
}
.header-burger-menu {
  display: none;
}
.header-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.header-mobile-menu {
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
.header-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.header-logo1 {
  font-size: 2em;
  font-weight: bold;
}
.header-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-icon02 {
  fill: var(--dl-color-gray-900);
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.header-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.header-nav11 {
  color: var(--dl-color-gray-black);
  margin-bottom: var(--dl-space-space-unit);
}
.header-nav21 {
  color: var(--dl-color-gray-black);
  margin-bottom: var(--dl-space-space-unit);
}
.header-nav31 {
  color: var(--dl-color-gray-black);
  margin-bottom: var(--dl-space-space-unit);
}
.header-nav4 {
  color: var(--dl-color-gray-black);
  margin-bottom: var(--dl-space-space-unit);
}
.header-nav5 {
  color: var(--dl-color-gray-black);
  margin-bottom: var(--dl-space-space-unit);
}
.header-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-login1 {
  border-color: var(--dl-color-primary1-blue100);
  border-width: 1px;
  margin-right: var(--dl-space-space-twounits);
  padding-left: 1.5rem;
  border-radius: 30px;
  padding-right: 1.5rem;
}
.header-register1 {
  color: var(--dl-color-gray-white);
  transition: 0.3s;
  border-color: var(--dl-color-primary1-blue100);
  border-width: 1px;
  padding-left: 1.5rem;
  border-radius: 30px;
  padding-right: 1.5rem;
  background-color: var(--dl-color-primary1-blue100);
}
.header-register1:hover {
  border-color: #849492ff;
  background-color: #849492ff;
}
.header-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.header-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.header-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
@media(max-width: 767px) {
  .header-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .header-desktop-menu {
    display: none;
  }
  .header-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-mobile-menu {
    padding-top: var(--dl-space-space-oneandhalfunits);
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .header-nav11 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .header-nav21 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .header-nav31 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .header-nav4 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .header-nav5 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .header-navbar-interactive {
    width: 90%;
    padding: var(--dl-space-space-unit);
  }
  .header-logo {
    font-size: 1.5em;
  }
  .header-mobile-menu {
    padding: 16px;
  }
  .header-logo1 {
    font-size: 1.5em;
  }
  .header-icon02 {
    fill: var(--dl-color-gray-900);
  }
}
</style>
