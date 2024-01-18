<template>
<div class="col" v-for="(datas) in data" :key="datas.id">

    <div class="movie-item">
        <router-link :to="{name:'movies', params:{id:datas.id}}">
        <img :src="getImageUrl(datas.backdrop_path)" alt="">
            <div class="movie-item-content text-white">
                 <div class="movie-item-title">
                    {{datas.original_title}}
                        </div>
                        <div class="movie-infos">
                        <div class="movie-info">
                        <span><i class="pi pi-star" style="color: red"></i>
                         {{datas.vote_average}} 
                         ({{datas.vote_count}})</span>
                        </div>
                        <div class="movie-info">
                        <span v-if="datas.vote_average > 8 && datas.vote_count > 1000">
                        <i class="pi pi-thumbs-up" style="color: red"></i> 
                        Recomended</span>
                            </div>
                        </div>
                    </div>
                </router-link>
                <LoveButton :movieData="datas"/>
                </div>
                </div>    
        </template>

<script>
import LoveButton from './LoveButton.vue';

export default{
    components:{ LoveButton },
    props:{
    data:{
      type:Array,
      default: () => ([]),
    }
  },
  mounted(){
    console.log('ini props', this.data)
  },
  methods:{
    getImageUrl(path) {
      return `https://image.tmdb.org/t/p/w220_and_h330_face${path}`;
    },
  }
}
</script>