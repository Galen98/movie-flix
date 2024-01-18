<script>
import HeroMovie from '@/components/movie/HeroMovie.vue';
import MovieCard from '@/components/movie/MovieCard.vue'
import TvCard from '@/components/movie/TvCard.vue';
import axios from 'axios'
export default{
  components:{HeroMovie, MovieCard, TvCard},
  data(){
  return{
    moviesData: [],
    tvData: []
  }
}, mounted(){
  const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjUyZDAxMDM1YTUyODIyZTBmNDA0NDllYjdhOWQ2ZSIsInN1YiI6IjY1YThmMGIzZWEzOTQ5MDEzMTFmNDJlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MgkXtu8aLrxH9e1m_XuswwAJk28aMTy-ejD56cBUPG4'
      }
    };
    axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US', options)
      .then(response => {
        this.moviesData = response.data.results.slice(0, 12);
      })
      .catch(error => console.error(error));

      axios.get('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
      .then(response => {
        this.tvData = response.data.results.slice(0, 12);
        console.log(this.tvData);
      })
      .catch(error => console.error(error));
}
}
</script>

<template>
  <main>
    <hero-movie/>
    <div class="section m-3 p-3">
    <div class="container">
    <h4 class="fw-bold text-light display-7 underline">POPULAR MOVIES</h4>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-3"> 
    <MovieCard :data="moviesData"/>
    </div>
    </div>

    <div class="container mt-5">
    <h4 class="fw-bold text-light display-7 underline">POPULAR TV SHOW</h4>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-3"> 
    <TvCard :data="tvData"/>
    </div>
    </div>
    </div>
    </main>
</template>

