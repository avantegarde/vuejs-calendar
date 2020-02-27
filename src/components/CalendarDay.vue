<template>
  <div :class="classObject" @click="captureClick">
    {{ day.format('D') }}
    <ul class="event-list">
      <li v-for="event in events">{{ event.description }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['day'],
  computed:{
    classObject(){
      let eventFormDate = this.$store.state.eventFormDate;
      let eventFormActive = this.$store.state.eventFormActive;
      let today = this.day.isSame(this.$moment(), 'day');
      return {
        day: true,
        today,
        past: this.day.isSameOrBefore(this.$moment(), 'day') && !today,
        active: eventFormDate.isSame(this.day, 'day') && eventFormActive
      }
    },
    events(){
      return this.$store.state.events.filter(event => event.date.isSame(this.day, 'day'));
    }
  },
  methods:{
    captureClick(e){
      this.$store.commit('eventFormPos', { x:e.clientX, y:e.clientY});
      this.$store.commit('eventFormActive', true);
      this.$store.commit('eventFormDate', this.day);
    }
  }
}
</script>