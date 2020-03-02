import Vue from 'vue';
import './style.scss';

import store from './store';

import moment from 'moment-timezone'
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

import App from './components/App.vue';

let events = [
  { description: 'event', date: moment('2020-02-02', 'YYYY-MM-DD')},
  { description: 'event2', date: moment('2020-02-15', 'YYYY-MM-DD')},
  { description: 'event3', date: moment('2020-02-20', 'YYYY-MM-DD')},
  { description: 'event4', date: moment('2020-03-02', 'YYYY-MM-DD')},
];
let initialState = Object.assign({}, store.state, {events});
store.replaceState(initialState);

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store
});
