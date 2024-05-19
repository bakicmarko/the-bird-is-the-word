import { createStore } from 'vuex'
import {
  hardCodeedResponseQuiz,
  hardCodedQuizCombinedQuestions,
  hardCodedBirdsData,
  hardCodedQuizImageQuestionsPart1,
} from '../hardcodedresponsequiz'
import axios from 'axios'

export default createStore({
  state: {
    currentID: 0,
    currentBird: {},
    birdCnt: 0,
    birds: [],
    birdFacts: [],

    //

    numberOfQuestions: -1,
    questions: [],
    currentQuestionID: -1,
    currentQuestion: null,
    quizGenrated: false,

    //
    score: 0,
    lastQuizScore: null,

    //
    questionsHardCoded: [],
    rndFlag: false,
  },
  mutations: {
    updateBirdState(
      state,
      { currentBirdId, currentBird, birdCnt, birds, birdFacts }
    ) {
      state.currentID = currentBirdId
      state.birdCnt = birdCnt
      state.birds = birds
      state.currentBird = currentBird
      state.birdFacts = birdFacts
    },
    updateQuizBirdState(
      state,
      {
        numberOfQuestions,
        questions,
        currentQuestionID,
        currentQuestion,
        quizGenrated,
      }
    ) {
      state.numberOfQuestions = numberOfQuestions
      state.questions = questions
      state.currentQuestionID = currentQuestionID
      state.currentQuestion = currentQuestion
      state.quizGenrated = quizGenrated
    },
    updateHardCodedQuizBirdState(state, { questionsHardCoded }) {
      state.questionsHardCoded = questionsHardCoded
    },
    updateBirdID(state, newID) {
      // Update the bird count without changing the birds array
      state.currentID = newID
      state.currentBird = state.birds[newID]
    },
    updatechatGptResponse(state, chatResponse) {
      // Update the
      state.chatGptResponse = chatResponse
    },
    updateScoreUp(state) {
      // Update the
      state.score++
    },
    updateNextQuestion(state) {
      state.currentQuestion = state.questions[++state.currentQuestionID]
    },
    updateResetScore(state) {
      // Update the
      state.score = 0
    },
    updateResetQuiz(state) {
      console.log('reseting quiz')
      state.lastQuizScore = state.score
      state.score = 0
      state.currentQuestion = state.questions[0]
      state.currentQuestionID = 0
    },
  },
  actions: {
    generateHardCodedQuiz({ commit }) {
      console.log('Fetching hardcoded quiz data...')

      const responseData = JSON.parse(hardCodedQuizCombinedQuestions)
      const questions = responseData.questions

      commit('updateHardCodedQuizBirdState', {
        questionsHardCoded: questions,
      })

      console.log('Quiz Hardcoded Data fetched!')
    },
    async generateQuiz({ commit, state }) {
      const minNumOfQuestions = 15
      const maxNumOfQuestions = 20
      const brds = JSON.stringify(state.birdFacts)
      const chatDefaultPrompt = `Write random number of questions (min  ${minNumOfQuestions}, max  ${maxNumOfQuestions}) about this birds:  ${brds}.
                        Return json with format from example below leave attributes in english but return values in croatian. Dont make up facts about birds use only data that was given to you. Dont repeat questions.:
                        {
                               "numberOfQuestions":,
                               "questions":[
                                  {
                                     "questionText":"",
                                     "answers":[
                                        "",
                                        "",
                                        "",
                                        ""
                                     ],
                                     "correctAnswerId":
                                  }
                               ]
                            }
                                                    `

      const encodedRequest = encodeURIComponent(chatDefaultPrompt)

      return new Promise((resolve, reject) => {
        console.log('Fetching quiz data...')

        const hardCodedQuestionsForChatGPTMixUp = JSON.parse(
          hardCodedQuizImageQuestionsPart1
        )

        axios
          .post('http://localhost:8080/chat', encodedRequest)
          .then((response) => {
            console.log('chatGPT quiz fetched initial...')

            const responseData = response.data

            // //take 10 random from hardcoded ones
            // const numOfrndQuestions = 10
            // const randomIndices = Array.from(
            //   { length: numOfrndQuestions },
            //   () =>
            //     Math.floor(
            //       Math.random() *
            //         hardCodedQuestionsForChatGPTMixUp.questions.length
            //     )
            // )

            // const randomHardCodedQuestions = randomIndices.map(
            //   (index) => hardCodedQuestionsForChatGPTMixUp.questions[index]
            // )
            const numOfrndQuestions = 10
            let questions2 = [...hardCodedQuestionsForChatGPTMixUp.questions] // Create a copy of the questions array
            const randomHardCodedQuestions = []

            for (let i = 0; i < numOfrndQuestions; i++) {
              if (questions2.length === 0) {
                break // Break the loop if there are no more questions to choose from
              }
              const randomIndex = Math.floor(Math.random() * questions2.length)
              randomHardCodedQuestions.push(questions2[randomIndex])
              questions2.splice(randomIndex, 1) // Remove the selected question from the array
            }

            //appned two arrays
            const mixedArray = {
              numberOfQuestions:
                responseData.numberOfQuestions + numOfrndQuestions,
              questions: [
                ...randomHardCodedQuestions,
                ...responseData.questions,
              ],
            }
            // Fisher-Yates shuffle algorithm
            for (let i = mixedArray.questions.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1))
              ;[mixedArray.questions[i], mixedArray.questions[j]] = [
                mixedArray.questions[j],
                mixedArray.questions[i],
              ]
            }
            //
            const numberOfQuestions = mixedArray.numberOfQuestions
            const questions = mixedArray.questions
            // first question
            const currentQuestionID = 0
            const currentQuestion = mixedArray.questions[currentQuestionID]
            const quizGenrated = true
            // Commit the mutation to update the state
            commit('updateQuizBirdState', {
              numberOfQuestions,
              questions,
              currentQuestionID,
              currentQuestion,
              quizGenrated,
            })
            resolve()
            console.log('Quiz Data fetched!')
          })
      })
    },

    async loadBirdInfo({ commit }) {
      return new Promise((resolve, reject) => {
        console.log('Fetching bird data...')
        axios
          .get('http://localhost:8080/birds/')
          .then((response) => {
            // Process the response data
            //console.log(response.data)
            const birds = response.data.map((bird) => {
              // Map each bird

              return {
                id: bird['id'] - 1,
                commonName: bird['commonName'],
                scientificName: bird['scientificName'],
                specificCharacteristic: bird['specificCharacteristic'],
                eyeDescription: bird['eyeDescription'],
                headDescription: bird['headDescription'],
                crownDescription: bird['crownDescription'],
                beakDescription: bird['beakDescription'],
                backDescription: bird['backDescription'],
                wingsDescription: bird['wingsDescription'],
                tailDescription: bird['tailDescription'],
                bellyDescription: bird['bellyDescription'],
                chestDescription: bird['chestDescription'],
                throatDescription: bird['throatDescription'],
                wingSpan: bird['wingSpan'],
                diet: bird['diet'],
                imageUrl1: bird['imageUrl1'],
                imageUrl2: bird['imageUrl2'],
                imageUrl3: bird['imageUrl3'],
                //image1: bird['image1'],
                //image2: bird['image2'],
                //image3: bird['image3'],
              }
            })

            const birdFacts = response.data.map((bird) => {
              return {
                commonName: bird['commonName'],
                specificCharacteristic: bird['specificCharacteristic'],
                headDescription: bird['headDescription'],
                wingsDescription: bird['wingsDescription'],
              }
            })
            const birdCnt = birds.length
            //const currentBirdId = Math.floor(Math.random() * birdCnt)
            const currentBirdId = 0
            const currentBird = birds[currentBirdId]

            // Commit the mutation to update the state
            commit('updateBirdState', {
              currentBirdId,
              currentBird,
              birdCnt,
              birds,
              birdFacts,
            })
            resolve()
            console.log('Bird Data fetched!')
          })
          .catch((error) => {
            reject(error)
            console.log('Bird fetch store err')
          })
      })
    },
  },

  getters: {
    getBirdsData: (state) => state.birds,
    getBirdCount: (state) => state.birdCnt,
    getCurrentBird: (state) => state.currentBird,
    getCurrentID: (state) => state.currentID,
    getBirdFacts: (state) => state.birdFacts,
    //
    getNumberOfQuestions: (state) => state.numberOfQuestions,
    getQuestions: (state) => state.questions,
    getCurrentQuestionID: (state) => state.currentQuestionID,
    getCurrentQuestion: (state) => state.questions[state.currentQuestionID],
    //
    getQuizGenerated: (state) => state.quizGenrated,
    //
    // getCorrectAnswerId: (state) => state.correctAnswerId,
    //
    getScore: (state) => state.score,
    getLastQuizScore: (state) => state.lastQuizScore,
    getQuestionsHardCoded: (state) => state.questionsHardCoded,
  },
})

/*
// fetch bird data backend
        axios
          .get('http://localhost:8080/birds/')
          .then((response) => {
            // Process the response data
            console.log(response.data)
            const birds = response.data.map((bird) => {
              // Map each bird

              return {
                id: bird['id'] - 1,
                commonName: bird['commonName'],
                scientificName: bird['scientificName'],
                specificCharacteristic: bird['specificCharacteristic'],
                eyeDescription: bird['eyeDescription'],
                headDescription: bird['headDescription'],
                crownDescription: bird['crownDescription'],
                beakDescription: bird['beakDescription'],
                backDescription: bird['backDescription'],
                wingsDescription: bird['wingsDescription'],
                tailDescription: bird['tailDescription'],
                bellyDescription: bird['bellyDescription'],
                chestDescription: bird['chestDescription'],
                throatDescription: bird['throatDescription'],
                wingSpan: bird['wingSpan'],
                diet: bird['diet'],
                imageUrl1: bird['imageUrl1'],
                imageUrl2: bird['imageUrl2'],
                imageUrl3: bird['imageUrl3'],
                //image1: bird['image1'],
                //image2: bird['image2'],
                //image3: bird['image3'],
              }
            })

            const birdFacts = response.data.map((bird) => {
              return {
                commonName: bird['commonName'],
                scientificName: bird['scientificName'],
                specificCharacteristic: bird['specificCharacteristic'],
                eyeDescription: bird['eyeDescription'],

                wingSpan: bird['wingSpan'],
                diet: bird['diet'],
              }
            })
            const birdCnt = birds.length
            //const currentBirdId = Math.floor(Math.random() * birdCnt)
            const currentBirdId = 0
            const currentBird = birds[currentBirdId]

            // Commit the mutation to update the state
            commit('updateBirdState', {
              currentBirdId,
              currentBird,
              birdCnt,
              birds,
              birdFacts,
            })
            resolve()
            console.log('Bird Data fetched!')
          })
          .catch((error) => {
            reject(error)
            console.log('Bird fetch store err')
          })
      })
      */

/* bird data locally
      const response = JSON.parse(hardCodedBirdsData)
        const birds = response.map((bird) => {
          // Map each bird
          return {
            id: bird['id'] - 1,
            commonName: bird['commonName'],
            scientificName: bird['scientificName'],
            specificCharacteristic: bird['specificCharacteristic'],
            eyeDescription: bird['eyeDescription'],
            headDescription: bird['headDescription'],
            crownDescription: bird['crownDescription'],
            beakDescription: bird['beakDescription'],
            backDescription: bird['backDescription'],
            wingsDescription: bird['wingsDescription'],
            tailDescription: bird['tailDescription'],
            bellyDescription: bird['bellyDescription'],
            chestDescription: bird['chestDescription'],
            throatDescription: bird['throatDescription'],
            wingSpan: bird['wingSpan'],
            diet: bird['diet'],
            imageUrl1: bird['imageUrl1'],
            imageUrl2: bird['imageUrl2'],
            imageUrl3: bird['imageUrl3'],
            
            //image1: bird['image1'],
            //image2: bird['image2'],
            //image3: bird['image3'],
            
          }
        })

        const birdFacts = response.map((bird) => {
          return {
            commonName: bird['commonName'],
            scientificName: bird['scientificName'],
            specificCharacteristic: bird['specificCharacteristic'],
            eyeDescription: bird['eyeDescription'],

            wingSpan: bird['wingSpan'],
            diet: bird['diet'],
          }
        })
        const birdCnt = birds.length
        //const currentBirdId = Math.floor(Math.random() * birdCnt)
        const currentBirdId = 0
        const currentBird = birds[currentBirdId]

        // Commit the mutation to update the state
        commit('updateBirdState', {
          currentBirdId,
          currentBird,
          birdCnt,
          birds,
          birdFacts,
        })
        resolve()
        console.log('Bird Data fetched!')
      
      */

/*

        axios
          .post('http://localhost:8080/chat', encodedRequest)
          .then((response) => {
            console.log('chatGPT quiz fetched initial...')

            const responseData = response.data
            //
            const numberOfQuestions = responseData.numberOfQuestions
            const questions = responseData.questions
            //console.log(JSON.stringify(questions))

            //console.log(responseData)
            // first question
            const currentQuestionID = 0
            const currentQuestion = responseData.questions[currentQuestionID]
            const quizGenrated = true
            //const correctAnswerId = responseData.questions[0].correctAnswerId
            const quizGenrated = true
            // Commit the mutation to update the state
            commit('updateQuizBirdState', {
              numberOfQuestions,
              questions,
              currentQuestionID,
              currentQuestion,
              quizGenrated,
            })
            resolve()
            console.log('Quiz Data fetched!')
          })
          .catch((error) => {
            reject(error)
            console.log('Quiz fetch store err')
          })
          */
