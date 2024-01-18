<template>
    <header class="p-5" style="position: relative;background-image: url('https://images7.alphacoders.com/130/1305609.jpeg');background-size: cover;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 1;"></div>
      <div class="px-4 py-5 mt-0 text-light text-center" style="position: relative; z-index: 2;">
        <h1 class="display-5 fw-bold">Search your TV Series and add to your watchlist!</h1>
        <div class="col-lg-6 mx-auto">
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
        <form class="d-flex" @submit.prevent="searchList">
          <input class="form-control me-2 rounded-pill custom-search-input" type="search"
            placeholder="Search tv series" v-model="searchString" aria-label="Search">
          <button class="btn rounded btn-danger" type="submit">
            <span class="pi pi-search"></span>
          </button>
        </form>
      </div>
    </div>
      </div>
    </header>
    
    <div class="section m-3 p-3">
        <div class="container">
        <h4 class="fw-bold text-light display-7 underline">TV SERIES LISTS</h4>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-3">
        <TvCard v-if="tvData.length > 0" :data="tvData"/>
        <div v-else class="fw-bold text-white">
        Data Not Found!
        </div>
        </div>
        <center>
        <PaginatorMovie
        class="mt-5"
        :current-page="currentPage"
        :total-pages="totalPages"
        :on-page-change="handlePageChange"/>
        </center>
        </div>
        </div>
    </template>
    
    <script>
    import axios from 'axios'
    import TvCard from '@/components/movie/TvCard.vue';
    import PaginatorMovie from '@/components/movie/PaginatorMovie.vue';
    
    export default{
        components:{PaginatorMovie, TvCard},
        data(){
            return{
                tvData: [],
                currentPage: 1,
                totalPages: null,
                searchString: ''
            }
        },
        mounted() {
        this.fetchTv();
      },
      methods: {
        fetchTv() {
          const options = {
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjUyZDAxMDM1YTUyODIyZTBmNDA0NDllYjdhOWQ2ZSIsInN1YiI6IjY1YThmMGIzZWEzOTQ5MDEzMTFmNDJlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MgkXtu8aLrxH9e1m_XuswwAJk28aMTy-ejD56cBUPG4'
            }
          };
          axios.get(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${this.currentPage}&sort_by=popularity.desc`, options)
            .then(response => {
              this.tvData = response.data.results;
              this.totalPages = response.data.total_pages;
            })
            .catch(error => console.error(error));
        },
        searchList(){
        const options = {
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjUyZDAxMDM1YTUyODIyZTBmNDA0NDllYjdhOWQ2ZSIsInN1YiI6IjY1YThmMGIzZWEzOTQ5MDEzMTFmNDJlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MgkXtu8aLrxH9e1m_XuswwAJk28aMTy-ejD56cBUPG4'
        }
        };
        axios.get(`https://api.themoviedb.org/3/search/tv?query=${this.searchString}&include_adult=false&language=en-US&page=${this.currentPage}`, options)
        .then(response => {
          this.tvData = response.data.results;
          this.totalPages = response.data.total_pages;
        })
        .catch(error => console.error(error));
        },
        handlePageChange(page) {
          this.currentPage = page;
          this.fetchTv();
          window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        },
      },
    }
    </script>