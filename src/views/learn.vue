<template>
  <div class="learn-container">
    <app-header1></app-header1>
    <div id="overlay">

      <!-- Content within the overlay -->
      <div id="overlay-content">
        <div v-if="quickquizGenerated" class="quiz-container04">

          <div class="quiz-container05">
            <div class="quiz-container07">
              <div class="quiz-question heading3">
                <h1>Question {{ this.currentquickQuestionID + 1 }}:</h1>
              </div>
              <div class="quiz-question1">
                <p class="quiz-question-txt heading3">
                  {{ this.currentQuickQuizQuestions[this.currentquickQuestionID].questionText }}
                </p>
              </div>

            </div>
            <div v-if="this.currentQuickQuizQuestions[this.currentquickQuestionID].imageUrl"
              class="quiz-question-image-container">
              <div class="quiz-question-image-container-image-wrapper">
                <img alt="profile" :src=this.currentQuickQuizQuestions[this.currentquickQuestionID].imageUrl />
              </div>
            </div>
            <div class="quiz-container08">

              <div class="quiz-container16 heading4">
                <div class="quiz-answers">
                  <answer-active-2 @click="checkAnswer2(0)"
                    :Answer1="`${this.currentQuickQuizQuestions[this.currentquickQuestionID].answers[0]}`"
                    :answer-id="0"></answer-active-2>
                  <answer-active-2 @click="checkAnswer2(1)"
                    :Answer1="`${this.currentQuickQuizQuestions[this.currentquickQuestionID].answers[1]}`"
                    :answer-id="1"></answer-active-2>
                </div>
                <div class="quiz-answers-part2">
                  <answer-active-2 @click="checkAnswer2(2)"
                    :Answer1="`${this.currentQuickQuizQuestions[this.currentquickQuestionID].answers[2]}`"
                    :answer-id="2"></answer-active-2>
                  <answer-active-2 @click="checkAnswer2(3)"
                    :Answer1="`${this.currentQuickQuizQuestions[this.currentquickQuestionID].answers[3]}`"
                    :answer-id="3"></answer-active-2>
                </div>
                <button @click="hideQuiz"></button>
                <button @click="hideQuickQuiz" id="showOverlayButton">Sakrij kviz</button>
              </div>
              <div class="quiz-container10">
                <div class="quiz-container11">
                  <div class="quiz-separator"></div>
                  <div class="quiz-container14">
                    <span class="quiz-score heading2">{{ this.quickScore }}</span>
                    <span class="quiz-num-of-quesctions heading3">/ {{ this.quickNumQuestions }}</span>
                  </div>
                  <div class="quiz-container15"></div>

                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- -->
      </div>
    </div>
    <div class="learn-banner">
      <div class="width-wrapper">
        <h2 class="learn-text heading1 bold">
          Otkrij raznolikosti naših pernatih prijatelja, tijekom učenja testiraj svoje znanje uz kratke kvizove!
        </h2>
      </div>
    </div>
    <div class="learn-hero">
      <div class="width-wrapper-100">
        <div v-if="birdsDataStore" class="learn-hero">
          <div class="learn-name-sound-outer">
            <div class="learn-container01"></div>
            <div class="learn-container02">
              <h1 class="learn-hero-heading heading1 bold">{{ currentBirdStore.commonName }}</h1>
            </div>
            <div class="learn-divider">
              <div class="learn-container03">
                <div class="learn-icon">
                  <svg v-if="!isSoundPlaying" @click="playSound" viewBox="0 0 1024 1024" class="learn-icon">
                    <path
                      d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416zM384 288l384 224-384 224z">
                    </path>


                  </svg>
                  <svg v-if="isSoundPlaying" @click="pauseSound" viewBox="0 0 1024 1024" class="learn-icon">


                    <path
                      d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416zM320 320h384v384h-384z">
                    </path>
                    <!--  pause icon
                    <path
                      d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416zM320 320h128v384h-128zM576 320h128v384h-128z">
                    </path>
                    -->
                  </svg>
                </div>
              </div>
              <div class="learn-container04"></div>
            </div>
          </div>
          <div class="learn-container05">
            <div class="learn-images-container">
              <div class="learn-container06">
                <gallery-card2 rootClassName="rootClassName7" v-if="birdsDataStore" :image_src=currentBirdStore.imageUrl1
                  alt="BirdImg"></gallery-card2>
              </div>
            </div>
            <div class="learn-all-description-container">
              <div class="learn-description-outer">
                <div class="learn-general-info">
                  <div class="learn-left-container">
                    <div class="learn-scientific-name">
                      <svg viewBox="0 0 877.7142857142857 1024" class="learn-icon02">
                        <path
                          d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z">
                        </path>
                      </svg>
                      <span class="learn-specname heading4">
                        znanstveno ime: 
                      </span>
                      <span class="learn-text01 heading4">{{ currentBirdStore.scientificName }}</span>
                    </div>
                    <div class="learn-specific-characteristic">
                      <svg viewBox="0 0 877.7142857142857 1024" class="learn-icon02">
                        <path
                          d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z">
                        </path>
                      </svg>
                      <span class="learn-text02 heading4">
                        karakteristike: 
                      </span>
                      <span class="learn-text03 heading4">
                        {{ currentBirdStore.specificCharacteristic }}
                      </span>
                    </div>
                  </div>
                  <div class="learn-right-container">
                    <div class="learn-wingspan">
                      <svg viewBox="0 0 877.7142857142857 1024" class="learn-icon02">
                        <path
                          d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z">
                        </path>
                      </svg>
                      <span class="learn-wingsspan heading4">
                        raspon krila: 
                      </span>
                      <span class="learn-text04 heading4">{{ currentBirdStore.wingSpan }}</span>
                    </div>
                    <div class="learn-diet">
                      <svg viewBox="0 0 877.7142857142857 1024" class="learn-icon02">
                        <path
                          d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z">
                        </path>
                      </svg>
                      <span class="learn-diet1 heading4 ">prehrana: </span>
                      <span class="learn-text05 heading4 ">
                        {{ currentBirdStore.diet }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="learn-head-body-info">
                  <div class="learn-head-info">
                    <div class="learn-container07">
                      <div class="learn-head-line">
                        <span class="learn-text06 heading2 bold">Glava ptice</span>
                        <div class="learn-line"></div>
                      </div>
                      <div class="learn-head-text">
                        <div class="learn-headtxt">
                          <svg viewBox="0 0 877.7142857142857 1024" class="learn-icon02">
                            <path
                              d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z">
                            </path>
                          </svg>
                          <span class="learn-head heading4">glava: </span>
                          <span class="learn-text07 heading4">
                            {{ currentBirdStore.headDescription }}
                          </span>
                        </div>
                        <div class="learn-crowntxt">
                          <svg viewBox="0 0 877.7142857142857 1024" class="learn-icon02">
                            <path
                              d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z">
                            </path>
                          </svg>
                          <span class="learn-crown heading4">tjeme: </span>
                          <span class="learn-text08 heading4">{{ currentBirdStore.crownDescription }}</span>
                        </div>
                        <div class="learn-eyetxt">
                          <svg viewBox="0 0 877.7142857142857 1024" class="learn-icon02">
                            <path
                              d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z">
                            </path>
                          </svg>
                          <span class="learn-eye  heading4">oko: </span>
                          <span class="learn-text09 heading4 ">
                            {{ currentBirdStore.eyeDescription }}
                          </span>
                        </div>
                        <div class="learn-beaktxt">
                          <svg viewBox="0 0 877.7142857142857 1024" class="learn-icon02">
                            <path
                              d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z">
                            </path>
                          </svg>
                          <span class="learn-beak heading4 ">kljun: </span>
                          <span class="learn-text10 heading4 ">
                            {{ currentBirdStore.beakDescription }}
                          </span>
                        </div>
                        <div class="learn-throattxt">
                          <svg viewBox="0 0 877.7142857142857 1024" class="learn-icon02">
                            <path
                              d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z">
                            </path>
                          </svg>
                          <span class="learn-throat heading4 ">grlo: </span>
                          <span class="learn-text11 heading4 ">{{ currentBirdStore.throatDescription }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="learn-body-info">
                    <div class="learn-container08">
                      <div class="learn-body-line">
                        <span class="learn-text12 heading2 bold">Tijelo ptice</span>
                        <div class="learn-line1"></div>
                      </div>
                      <div class="learn-body-text">
                        <div class="learn-backtxt">
                          <svg viewBox="0 0 877.7142857142857 1024" class="learn-icon02">
                            <path
                              d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z">
                            </path>
                          </svg>
                          <span class="learn-back heading4 ">leđa: </span>
                          <span class="learn-text13 heading4 ">
                            {{ currentBirdStore.backDescription }}
                          </span>
                        </div>
                        <div class="learn-wingstxt">
                          <svg viewBox="0 0 877.7142857142857 1024" class="learn-icon02">
                            <path
                              d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z">
                            </path>
                          </svg>
                          <span class="learn-wings heading4 ">krila: </span>
                          <span class="learn-text14 heading4 ">{{ currentBirdStore.wingsDescription }}</span>
                        </div>
                        <div class="learn-tailtxt">
                          <svg viewBox="0 0 877.7142857142857 1024" class="learn-icon02">
                            <path
                              d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z">
                            </path>
                          </svg>
                          <span class="learn-tail heading4 ">rep: </span>
                          <span class="learn-text15 heading4 ">
                            {{ currentBirdStore.tailDescription }}
                          </span>
                        </div>
                        <div class="learn-bellytxt">
                          <svg viewBox="0 0 877.7142857142857 1024" class="learn-icon02">
                            <path
                              d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z">
                            </path>
                          </svg>
                          <span class="learn-belly heading4 ">trbuh: </span>
                          <span class="learn-text16 heading4 ">
                            {{ currentBirdStore.bellyDescription }}
                          </span>
                        </div>
                        <div class="learn-chest">
                          <svg viewBox="0 0 877.7142857142857 1024" class="learn-icon02">
                            <path
                              d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z">
                            </path>
                          </svg>
                          <span class="learn-chest1 heading4 ">prsa: </span>
                          <span class="learn-text17 heading4 ">
                            {{ currentBirdStore.chestDescription }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="learn-container09">
            <span class="learn-hero-sub-heading heading4 ">
              Ptice u gradu: priroda u srcu, znanje na dlanu
            </span>
            <div class="learn-container10">
              <div class="learn-btn-group">
                <button id="previousBtn" @click="previousBirdID" class="learn-hero-button1 heading4 bold button">
                  Nazad
                </button>
                <button id="nextBtn" @click="nextBirdID" class="learn-hero-button1 heading4 bold button">
                  Naprijed
                </button>
              </div>
              <div id="quickBtn" class="learn-btn-group">
                <button @click="showQuickQuiz" class="learn-hero-button1 heading4 button bold">
                  Kratki kviz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="learn-testimonial">
      <div class="width-wrapper">
        <div class="learn-container11">

          <div class="learn-container12">
            <h2 class="learn-details-heading heading1 bold">
              Zabavne činjenice o ovoj ptici uz ChatGPT
            </h2>
            <div class="learn-container13">
              <div class="learn-testimonial-card">
                <div class="learn-container14">
                  <div class="learn-container15">
                    <div class="learn-testimonial1">
                      <svg viewBox="0 0 1024 1024" class="learn-icon30">
                        <path
                          d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z">
                        </path>
                      </svg>
                      <span class="learn-text18 heading3">
                        {{ chatGPTfact }}
                      </span>
                      <span class=" heading3 bold">{{ currentBirdStore.commonName }}</span>
                    </div>
                    <div v-if="birdsDataStore">
                      <img alt="profile" v-if="birdsDataStore" :src=currentBirdStore.imageUrl2 class="learn-image" />
                    </div>
                  </div>
                  <button @click="getChatGPTFact" :disabled="!chatGPTbtnstate"
                    class="learn-hero-button1 align-self-center heading4 button">
                    <span class="learn-text20 heading4 bold">
                      <span>Generiraj novo</span>
                      <br />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader1 from '../components/header1'
import GalleryCard2 from '../components/gallery-card2'
import AppFooter from '../components/footer'
import AnswerCorrectActive from '../components/answer-correct-active'
import AnswerActive2 from '../components/answer-active-2.vue'

import axios from 'axios'

const chatFactDefault = 'Generiraj neke činjenice o meni!';

export default {
  name: 'Learn',
  components: {
    AppHeader1,
    GalleryCard2,
    AnswerCorrectActive,
    AnswerActive2,
    AppFooter,
  },
  data() {
    return {
      chatGPTfact: chatFactDefault,
      chatGPTbtnstate: true,
      //
      quickScore: 0,
      quickNumQuestions: 9,
      //
      currentQuickQuizQuestions: [],
      quickquizGenerated: false,
      //
      currentquickQuestionID: 0,
      //
      isSoundPlaying: false,
      audio: null,
    }
  },
  created() {
    // this.moundSound();
    const questionFromStore = this.questions.slice(0, this.quickNumQuestions);
    this.currentQuickQuizQuestions = questionFromStore;
    this.quickquizGenerated = true;
  },
  methods: {


    showQuickQuiz() {
      this.pauseSound();
      console.log('/learn Show Quick Quizz');
      const indexStart = this.quickNumQuestions * (((this.currentIDStore + 1) / 3) - 1);;
      const indexEnd = this.quickNumQuestions * ((this.currentIDStore + 1) / 3);
      this.currentQuickQuizQuestions = this.questions.slice(indexStart, indexEnd);
      const overlay = document.getElementById('overlay');
      overlay.style.display = 'flex';
    },
    hideQuickQuiz() {
      console.log('/learn Hide Quick Quizz');
      const overlay = document.getElementById('overlay');
      overlay.style.display = 'none';
    },

    correctAnswer() {
      console.log("correct")
      if (this.quickScore != this.quickNumQuestions) {
        this.quickScore++;
      }
      if (this.currentquickQuestionID != this.quickNumQuestions - 1) {

        this.nextQuestion();
      } else {
        this.quizDone();
      }
    },
    nextQuestion() {
      this.currentquickQuestionID++;
    },
    wrongAnswer() {
      console.log("wrong")
      if (this.currentquickQuestionID != this.quickNumQuestions - 1) {

        this.nextQuestion();
      } else {
        this.quizDone();
      }
    },
    quizDone() {
      this.quickScore = 0;
      this.currentquickQuestionID = 0;
      this.hideQuickQuiz();
    },
    checkAnswer2(answerID) {
      const element = document.querySelector(`.answer-active-2[answer-id="${answerID}"]`);
      const id = element.getAttribute('answer-id');
      if (id == this.currentQuickQuizQuestions[this.currentquickQuestionID].correctAnswerId) {
        // correct
        element.style.backgroundColor = 'var(--dl-color-success-300)';
        element.style.boxShadow = '10px 10px 20px 0px var(--dl-color-success-300)';

        setTimeout(() => {
          this.correctAnswer();
        }, 200);
      } else {
        // wrong answ
        element.style.backgroundColor = 'var(--dl-color-danger-300)';
        element.style.boxShadow = '10px 10px 20px 0px var(--dl-color-danger-300)';

        setTimeout(() => {
          this.wrongAnswer();
        }, 200);

      }
      setTimeout(() => {
        element.style.backgroundColor = ''; // Revert to the default color or specify another color
        element.style.boxShadow = '';
      }, 200);
    },


    nextBirdID() {
      this.pauseSound();
      // this.moundSound();
      this.chatGPTfact = chatFactDefault;
      var currentIDTemp = this.currentIDStore
      const birdsCnt = this.birdCount;
      if (currentIDTemp != birdsCnt - 1) {
        currentIDTemp++;
        this.$store.commit('updateBirdID', currentIDTemp);
        if ((currentIDTemp + 1) % 3 == 0) {
          const quickBtn = document.getElementById('quickBtn');
          quickBtn.style.display = 'flex'
          if (currentIDTemp == 2) {

          }
        } else quickBtn.style.display = 'none'
      }
      if (currentIDTemp == birdsCnt - 1) document.getElementById('nextBtn').disabled = true;
      if (currentIDTemp != 0) {
        document.getElementById('previousBtn').disabled = false;
      }
      // Dispatch an action to update the bird id
    },
    previousBirdID() {
      this.pauseSound();
      // this.moundSound();
      this.chatGPTfact = chatFactDefault;
      var currentIDTemp = this.currentIDStore
      const birdsCnt = this.birdCount;
      if (currentIDTemp != 0) {
        currentIDTemp--;
        this.$store.commit('updateBirdID', currentIDTemp);
        if ((currentIDTemp + 1) % 3 == 0) {
          const quickBtn = document.getElementById('quickBtn');
          quickBtn.style.display = 'flex'
        } else quickBtn.style.display = 'none'
      }


      if (currentIDTemp != this.birdCount - 1) document.getElementById('nextBtn').disabled = false;
      if (currentIDTemp == 0)
        document.getElementById('previousBtn').disabled = true;

      // Dispatch an action to update the bird id

    },
    getChatGPTFact() {
      // const overlay = document.getElementById('overlay');
      // overlay.style.display = 'block';
      if (this.currentBirdStore) {
        this.chatGPTbtnstate = false;
        const prompt = `Tell me a fun fact about the bird ${this.currentBirdStore.scientificName}. Return the answer in croatian`
        axios
          .post('http://localhost:8080/chat', prompt)
          .then((response) => {
            console.log('chatGPT fetched...')
            this.chatGPTfact = response.data;
            this.chatGPTbtnstate = true;
            return response.data;
          })
          .catch((error) => console.error('Fetching chatGPT Error:', error))
      } else {
        console.log('Store is not initialized')
      }
    },
    playSound() {
      try {
        if (this.isSoundPlaying) {
          console.log('Sound is already playing');
          return;
        }

        this.isSoundPlaying = true;

        this.moundSound();
        this.audio.play();
      } catch (error) {
        console.error('Error: Playing bird sound error:', error)
        this.isSoundPlaying = false;
      }
    },
    pauseSound() {
      if (this.isSoundPlaying && this.audio) {
        this.audio.pause();
        this.isSoundPlaying = false;
      }
    },
    moundSound() {
      if (this.currentBirdStore && this.currentBirdStore.commonName) {
        const nameToLower = this.currentBirdStore.commonName.toLowerCase();
        this.audio = new Audio(require(`./bird_sounds/${nameToLower}.mp3`));
        this.audio.addEventListener('ended', () => {
          this.isSoundPlaying = false;
        });
      }
    }

  },
  computed: {

    birdCount() {
      return this.$store.getters.getBirdCount;
    },
    questions() {
      return this.$store.getters.getQuestionsHardCoded;
    },
    birdsDataStore() {
      // Access the data from the store
      return this.$store.getters.getBirdsData;
    },
    currentBirdStore() {
      // Access the data from the store
      return this.$store.getters.getCurrentBird;
    },
    currentIDStore() {
      // Access the data from the store
      return this.$store.getters.getCurrentID;
    },
  },
  metaInfo: {
    title: 'Learn - Bird is The Word',
    meta: [
      {
        property: 'og:title',
        content: 'Learn - Bird is The Word',
      },
    ],
  },
}
</script>

<style scoped>
#quickBtn {
  display: none;
  /*switch to flex */
}

#overlay {
  display: none;
  /* Set to 'block' by default */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 800;
  justify-content: center;
  align-items: center;
}

/* Styling for the content within the overlay */
#overlay-content {
  background-color: red;
  width: 60%;
  height: auto;
}


/* Copyed from Quiz */

.quiz-question-image-container-image-wrapper {
  width: 50%;
  max-height: 400px;
}

.quiz-question-image-container-image-wrapper img {
  width: 50%;
  height: 50%;
  object-fit: cover;
  margin: auto
}

.quiz-question-image-container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}


.quiz-container04 {
  flex: 0 0 auto;
  width: 100%;

  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #D9D9D9;
}

.quiz-container05 {
  flex: 0 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  /*
  margin-top: var(--dl-space-space-fourunits);
  margin-bottom: var(--dl-space-space-fourunits);
  */
  flex-direction: column;
}



.quiz-container07 {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.quiz-container08 {
  width: 100%;
  height: auto;
  display: flex;
  /*margin-top: var(--dl-space-space-twounits);*/
  align-items: flex-start;
  flex-direction: column;
}

.quiz-question {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.quiz-question1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.quiz-question-txt {
  text-align: center;
}




.quiz-container10 {
  flex: 0 0 auto;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  /*margin-bottom: var(--dl-space-space-fourunits);*/
  justify-content: center;
}

.quiz-container11 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: var(--dl-space-space-fourunits);
  margin-bottom: var(--dl-space-space-fourunits);
}




.quiz-container14 {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.quiz-score {
  color: var(--dl-color-primary1-blue80);
}

.quiz-num-of-quesctions {
  color: var(--dl-color-gray-500);
}

.quiz-container15 {
  flex: 1;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}

.quiz-separator {
  flex: 0 0 auto;
  width: 100%;
  height: 2px;
  display: flex;
  border-color: var(--dl-color-primary1-blue60);
  border-style: solid;
  border-width: 2px;
  flex-direction: column;
}

.quiz-container16 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.quiz-answers {
  width: 90%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}

.quiz-answers-part2 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/*End of copy*/
.learn-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.learn-banner {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-sixunits);
  padding-left: var(--dl-space-space-sixunits);
  padding-right: var(--dl-space-space-sixunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-sixunits);
  justify-content: space-between;
}



.learn-text {

  text-align: center;
}

.learn-hero {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-sixunits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-sixunits);
  justify-content: center;
  background-color: var(--dl-color-primary1-blue80);
}

.learn-name-sound-outer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--dl-space-space-threeunits);
  margin-bottom: var(--dl-space-space-tenunits);
}

.learn-container01 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}

.learn-container02 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
}

.learn-hero-heading {
  color: var(--dl-color-gray-white);
  text-align: center;
  font-family: "Raleway";
  line-height: 1.6;
}

.learn-divider {
  flex: 1;
  width: auto;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}

.learn-container03 {
  flex: 1;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
}

.learn-icon {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xlarge);
  height: var(--dl-size-size-xlarge);
}

.learn-container04 {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
}

.learn-container05 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.learn-images-container {
  flex: 1;
  width: auto;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.learn-container06 {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.learn-all-description-container {
  gap: var(--dl-space-space-twounits);
  flex: 2;
  width: auto;
  display: flex;
  max-width: auto;
  align-items: center;
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: flex-start;
}

.learn-description-outer {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 3em;
  flex-direction: column;
}

.learn-general-info {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-fourunits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-fourunits);
  justify-content: center;
}

.learn-left-container {
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-eightunits);
  flex-direction: column;
}

.learn-scientific-name {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
}

.learn-icon02 {
  fill: #ffffff;
  width: var(--dl-size-size-xxsmall);
  height: var(--dl-size-size-xxsmall);
  min-width: var(--dl-size-size-xxsmall);
  min-height: var(--dl-size-size-xxsmall);

  margin-right: var(--dl-space-space-halfunit);
}

.learn-specname {
  color: var(--dl-color-secondary-gray500);
}

.learn-text01 {
  color: var(--dl-color-gray-white);
}

.learn-specific-characteristic {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
}



.learn-text02 {
  color: var(--dl-color-secondary-gray500);
}

.learn-text03 {
  color: var(--dl-color-gray-white);
}

.learn-right-container {
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-eightunits);
  flex-direction: column;
}

.learn-wingspan {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
}



.learn-wingsspan {
  color: var(--dl-color-secondary-gray500);
}

.learn-text04 {
  color: var(--dl-color-gray-white);
}

.learn-diet {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
}



.learn-diet1 {
  color: var(--dl-color-secondary-gray500);
}

.learn-text05 {
  color: var(--dl-color-gray-white);
}

.learn-head-body-info {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.learn-head-info {
  flex: 1;
  width: auto;
  height: 100%;
  display: flex;
}

.learn-container07 {
  flex: 1;
  width: 100%;
  height: 1%;
  display: flex;
  position: relative;
  align-self: flex-start;
  align-items: flex-start;
  padding-left: var(--dl-space-space-sixunits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: flex-start;
}

.learn-head-line {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-right: 5%;
  flex-direction: column;
}

.learn-text06 {
  color: var(--dl-color-gray-white);
  margin-bottom: var(--dl-space-space-unit);
}

.learn-line {
  width: 100%;
  height: 2px;
  display: flex;
  align-items: flex-start;
  background-color: #D9D9D9;
}

.learn-head-text {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: flex-start;
}

.learn-headtxt {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
}



.learn-head {
  color: var(--dl-color-secondary-gray500);
}

.learn-text07 {
  color: var(--dl-color-gray-white);
}

.learn-crowntxt {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
}



.learn-crown {
  color: var(--dl-color-secondary-gray500);
}

.learn-text08 {
  color: var(--dl-color-gray-white);
}

.learn-eyetxt {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
}



.learn-eye {
  color: var(--dl-color-secondary-gray500);
}

.learn-text09 {
  color: var(--dl-color-gray-white);
}

.learn-beaktxt {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
}



.learn-beak {
  color: var(--dl-color-secondary-gray500);
}

.learn-text10 {
  color: var(--dl-color-gray-white);
}

.learn-throattxt {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
}



.learn-throat {
  color: var(--dl-color-secondary-gray500);
}

.learn-text11 {
  color: var(--dl-color-gray-white);
}

.learn-body-info {
  flex: 1;
  width: auto;
  height: 100%;
  display: flex;
}

.learn-container08 {
  flex: 1;
  width: 100%;
  height: 1%;
  display: flex;
  position: relative;
  align-self: flex-start;
  align-items: flex-start;
  padding-left: var(--dl-space-space-sixunits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: flex-start;
}

.learn-body-line {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-direction: column;
}

.learn-text12 {
  color: var(--dl-color-gray-white);
  margin-bottom: var(--dl-space-space-unit);
}

.learn-line1 {
  width: 100%;
  height: 2px;
  display: flex;
  align-items: flex-start;
  background-color: #D9D9D9;
}

.learn-body-text {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: flex-start;
}

.learn-backtxt {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
}



.learn-back {
  color: var(--dl-color-secondary-gray500);
}

.learn-text13 {
  color: var(--dl-color-gray-white);
}

.learn-wingstxt {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
}

.learn-wings {
  color: var(--dl-color-secondary-gray500);
}

.learn-text14 {
  color: var(--dl-color-gray-white);
}

.learn-tailtxt {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
}



.learn-tail {
  color: var(--dl-color-secondary-gray500);
}

.learn-text15 {
  color: var(--dl-color-gray-white);
}

.learn-bellytxt {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
}

.learn-belly {
  color: var(--dl-color-secondary-gray500);
}

.learn-text16 {
  color: var(--dl-color-gray-white);
}

.learn-chest {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
}



.learn-chest1 {
  color: var(--dl-color-secondary-gray500);
}

.learn-text17 {
  color: var(--dl-color-gray-white);
}

.learn-container09 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: var(--dl-space-space-tenunits);
  flex-direction: column;
  justify-content: center;
}

.learn-hero-sub-heading {
  color: var(--dl-color-gray-white);
  text-align: center;
}

.learn-container10 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.learn-btn-group {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: row;
}

.learn-hero-button1 {
  flex: 1;
  color: var(--dl-color-gray-white);
  transition: 0.3s;
  border-color: var(--dl-color-primary1-blue100);
  border-width: 0px;
  border-radius: 45px;
  justify-content: center;
  font-size: 16px;
  /*
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 3rem;
  padding-left: 3rem;
  */
  background-color: var(--dl-color-primary1-blue100);
}

.learn-hero-button1:hover {
  color: var(--dl-color-gray-white);
  border-color: rgba(41, 20, 119, 0.9);
  background-color: rgba(41, 20, 119, 0.9);
}






.learn-testimonial {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: var(--dl-color-secondary-grey400);
}

.learn-container11 {
  display: flex;
  margin-top: var(--dl-space-space-twentyunits);
  margin-bottom: var(--dl-space-space-twentyunits);
  align-items: stretch;
  justify-content: center;
}

.learn-container12 {
  flex: 0 0 auto;
  max-width: 70%;
  align-self: center;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.learn-details-heading {
  width: 100%;
  align-self: flex-start;
  text-align: center;
  font-family: "Raleway";
  line-height: 1.6;
  margin-bottom: var(--dl-space-space-twentyunits);
}

.learn-container13 {
  width: 100%;
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.learn-testimonial-card {
  display: flex;
  padding: var(--dl-space-space-threeunits);
  background: #fff;
  box-shadow: 10px 10px 40px 0px #5228f5;
  align-items: center;
  justify-content: space-between;
}

.learn-container14 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.learn-container15 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.learn-testimonial1 {
  display: flex;
  opacity: 1;
  align-items: flex-start;
  margin-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  justify-content: space-between;
}

.learn-icon30 {
  width: var(--dl-size-size-small);
  flex-shrink: 0;
  margin-bottom: var(--dl-space-space-twounits);
}

.learn-text18 {
  color: var(--dl-color-gray-500);
  margin-bottom: var(--dl-space-space-twounits);
}



.learn-image {
  width: var(--dl-size-size-xxxxlarge);
  height: var(--dl-size-size-xxxxlarge);
  object-fit: cover;
  flex-shrink: 0;
  border-radius: var(--dl-radius-radius-round);
}



.align-self-center {
  align-self: center;
}

.learn-hero-button13:hover {
  color: var(--dl-color-gray-white);
  border-color: rgba(41, 20, 119, 0.9);
  background-color: rgba(41, 20, 119, 0.9);
}



.learn-text20 {
  color: var(--dl-color-gray-white);
}

@media(max-width: 991px) {
  .learn-hero {
    flex-direction: column;
  }

  .learn-hero-heading {
    text-align: center;
  }

  .learn-all-description-container {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .learn-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .learn-container11 {
    flex-direction: column;
  }

  .learn-container13 {
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
}

@media(max-width: 767px) {
  .learn-banner {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .learn-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .learn-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .learn-container11 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .learn-details-heading {
    text-align: center;
  }

  .learn-testimonial-card {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .learn-testimonial1 {
    margin-right: var(--dl-space-space-twounits);
  }

  .learn-icon30 {
    height: var(--dl-size-size-small);
  }
}

@media(max-width: 479px) {
  .learn-banner {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .learn-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .learn-all-description-container {
    margin-bottom: var(--dl-space-space-unit);
  }

  .learn-btn-group {
    flex-direction: column;
  }

  .learn-container11 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .learn-testimonial-card {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
  }

  .learn-testimonial1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
