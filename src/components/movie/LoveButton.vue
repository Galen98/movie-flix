<template>
    <span class="love-icon" @click="toggleLove">
      <i class="pi pi-heart-fill" style="font-size: 1.5rem" :class="{ 'loved': isLoved }"></i>
    </span>
  </template>
  
  <script>
  export default {
    props: {
      movieData: Object,
    },
    data() {
      return {
        isLoved: false,
      };
    },
    mounted() {
      const watchlistMovie = JSON.parse(localStorage.getItem('watchlistMovie')) || [];
      this.isLoved = watchlistMovie.some((movie) => movie.id === this.movieData.id);
    },
    methods: {
      toggleLove() {
        this.isLoved = !this.isLoved;
        const watchlistMovie = JSON.parse(localStorage.getItem('watchlistMovie')) || [];
        if (this.isLoved) {
          watchlistMovie.push(this.movieData);
        } else {
          const index = watchlistMovie.findIndex((movie) => movie.id === this.movieData.id);
          if (index !== -1) {
            watchlistMovie.splice(index, 1);
          }
        }
        localStorage.setItem('watchlistMovie', JSON.stringify(watchlistMovie));
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
  