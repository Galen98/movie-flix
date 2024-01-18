<script>
import axios from 'axios'
export default{
    data(){
        return{
          movie:[]  
        }
    },
    created(){
    const options = {
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjUyZDAxMDM1YTUyODIyZTBmNDA0NDllYjdhOWQ2ZSIsInN1YiI6IjY1YThmMGIzZWEzOTQ5MDEzMTFmNDJlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MgkXtu8aLrxH9e1m_XuswwAJk28aMTy-ejD56cBUPG4'
      }
    };
    axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?language=en-US`, options)
      .then(response => {
      console.log(response.data)
      this.movie = response.data
      })
      .catch(error => console.error(error));    
    },
    methods:{
    getImageUrl(path) {
    return `https://image.tmdb.org/t/p/w220_and_h330_face${path}`;
    },
    }   
}
</script>

<template>
<div class="section m-3 p-3">
<div class="container">
<header class="p-5 rounded" style="position: relative;" :style="{ backgroundImage: 'url(' + getImageUrl(movie.backdrop_path) + ')', backgroundSize: 'cover' }">
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 1;"></div>
  <div class=" mt-0 text-light text-center" style="position: relative; z-index: 2;">
    <h1 class="display-5 fw-bold text-danger">{{movie.title}}</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4 display-6">{{movie.tagline}}</p>
    </div>
  </div>
</header>
<div class="text-white">
<div class="movie-summary mt-5 py-2 fw-bold">
   <p>{{ movie.overview }}</p>
</div>
<ul class="movie-meta">
<li><strong>Rating:</strong>  {{ movie.vote_average }}</li>
<li><strong>Total vote:</strong> {{movie.vote_count}}</li>
<li><strong>Premiere:</strong> {{movie.release_date}}</li>
<li><strong>Category: </strong>
    <span v-for="(genre, index) in movie.genres" :key="genre.id">
    {{ genre.name }}
    {{ index < movie.genres.length - 1 ? ', ' : '' }}
  </span>
</li>
<li><a class="btn btn-danger btn-pill" :href="movie.homepage" target="_blank">Watch now!</a></li>
</ul>
</div>
</div>
</div>
</template>
