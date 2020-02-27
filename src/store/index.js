import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone'
moment.tz.setDefault('UTC');

export default new Vuex.Store({
  state:{
    currentYear: 2020,
    currentMonth: 2,
    eventFormPosX: 0,
    eventFormPosY: 0,
    eventFormActive: false,
    events: [
      { description: 'event', date: moment('2020-02-02', 'YYYY-MM-DD')},
      { description: 'event2', date: moment('2020-02-15', 'YYYY-MM-DD')},
      { description: 'event3', date: moment('2020-02-20', 'YYYY-MM-DD')},
      { description: 'event4', date: moment('2020-03-02', 'YYYY-MM-DD')},
    ],
    eventFormDate: moment()
  },
  mutations: {
    setCurrentMonth(state, payload){
      state.currentMonth = payload;
    },
    setCurrentYear(state, payload){
      state.currentYear = payload;
    },
    eventFormPos(state, payload){
      state.eventFormPosX = payload.x;
      state.eventFormPosY = payload.y;
    },
    eventFormActive(state, payload){
      state.eventFormActive = payload;
    },
    addEvent(state, payload){
      state.events.push({
        description: payload,
        date: state.eventFormDate
      });
    },
    eventFormDate(state, payload){
      state.eventFormDate = payload;
    }
  }
});