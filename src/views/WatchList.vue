<template>
<header class="p-5" style="position: relative;background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d96bb958-4e6c-4ce0-9447-fbe226fbbecf/dfwh77z-8f5ae4e2-a905-47fd-a857-5ae64c596729.jpg');background-size: cover;">
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 1;"></div>
  <div class="px-4 py-5 mt-0 text-light text-center" style="position: relative; z-index: 2;">
    <h1 class="display-5 fw-bold">Your watchlist</h1>
    <div class="col-lg-6 mx-auto">
    </div>
  </div>
</header>

<div class="section m-3 p-3">
    <div v-if="moviesData.length > 0" class="container">
    <h4 class="fw-bold text-light display-7 underline">YOUR MOVIE WATCHLIST</h4>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-3"> 
    <MovieCard :data="moviesData"/>
    </div>
    </div>

    <div v-if="tvData.length > 0" class="container mt-5">
    <h4 class="fw-bold text-light display-7 underline">YOUR TV SERIES WATCHLIST</h4>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-3"> 
    <TvCard :data="tvData"/>
    </div>
    </div>
    </div>
</template>

<script>
import MovieCard from '@/components/movie/MovieCard.vue';
import TvCard from '@/components/movie/TvCard.vue';

export default{
    components:{MovieCard, TvCard},
    data(){
        return{
            moviesData:[],
            tvData:[]
        }
    },
    mounted(){
        const getMovieData = localStorage.getItem('watchlistMovie');
        if(getMovieData){
            this.moviesData = JSON.parse(getMovieData)
        }

        const getTvData = localStorage.getItem('watchlistTv');
        if(getTvData){
            this.tvData = JSON.parse(getTvData)
        }
        
    }
}
</script>