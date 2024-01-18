<script>

</script>

<template>
    <nav class="navbar-expand-lg navbar navbar-dark shadow-sm nav-black">
      <div class="container-fluid m-2 p-1">
        <router-link :to="{ name: 'home' }" class="navbar-brand text-light">Movie Apps</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'watchlist' }" class="nav-link" aria-current="page">
                <span class="pi pi-heart"></span> Watchlist
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'movie' }" class="nav-link" aria-current="page">Movies</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'tvlist' }" class="nav-link" aria-current="page">TV Show</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  