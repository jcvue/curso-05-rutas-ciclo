<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand fw-bold" to="/"
                >Vue App</router-link
            >

            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        to="/"
                        exact
                        active-class="active"
                    >
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        active-class="active"
                        :to="{ name: 'pokemon', params: { id: 51 } }"
                    >
                        Pokemon
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        active-class="active"
                        to="/about"
                    >
                        About
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
