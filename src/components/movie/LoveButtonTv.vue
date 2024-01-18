<template>
    <span class="love-icon" @click="toggleLove">
      <i class="pi pi-heart-fill" style="font-size: 1.5rem" :class="{ 'loved': isLoved }"></i>
    </span>
  </template>
  
  <script>
  export default {
    props: {
      tvData: Object,
    },
    data() {
      return {
        isLoved: false,
      };
    },
    mounted() {
      const watchlistTv = JSON.parse(localStorage.getItem('watchlistTv')) || [];
      this.isLoved = watchlistTv.some((movie) => movie.id === this.tvData.id);
    },
    methods: {
      toggleLove() {
        this.isLoved = !this.isLoved;
        const watchlistTv = JSON.parse(localStorage.getItem('watchlistTv')) || [];
        if (this.isLoved) {
          watchlistTv.push(this.tvData);
        } else {
          const index = watchlistTv.findIndex((movie) => movie.id === this.tvData.id);
          if (index !== -1) {
            watchlistTv.splice(index, 1);
          }
        }
        localStorage.setItem('watchlistTv', JSON.stringify(watchlistTv));
      },
    },
  };
  </script>
  
  <style scoped>
  .love-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  
  .loved {
    color: red;
  }
  </style>
  