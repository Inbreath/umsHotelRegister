<template>
  <div class="wrapper" append="tree">
    <div class="room-item" v-for="item in $store.state.allRooms" @click="changeRoom(item.room)" v-bind:class="[room(item.room)]" >
      {{ item.room }}
    </div>
    
  </div>
</template>

<style>
  .wrapper { width:750px;}
  .room-item{
    border:1px;
    width:750px;
    height:100px;
  }
  .active{
    border:1px;
    background-color: green;
  }
</style>

<script>
  export default {
    created () {
    },
    data: {
      room:'-1',
    },
    methods: {
      room (selectedroom){
        if(this.room == selectedroom){
          return 'active'
        }
      },
      changeRoom (room) {
        this.room = room,
        this.$store.commit('changeRoom', room)
      }
    }
  }
</script>
