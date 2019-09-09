<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Project</router-link> |
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <router-link class="navbar-brand" to="/">Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="navbar-brand" to="/about">About
                    </router-link>
                </li>

                <li class="nav-item" v-if="!isLoggedIn">
                    <router-link class="navbar-brand" to="/login">Login
                    </router-link>
                </li>
                <li class="nav-item" v-if="!isLoggedIn">
                    <router-link class="navbar-brand" to="/register">Register
                    </router-link>
                </li>

                <li class="nav-item" v-if=" isLoggedIn">
                    <router-link class="navbar-brand" to="/profile">Profile
                    </router-link>
                </li>
                <li class="nav-item" v-if="isLoggedIn">
                    <a class="nav-link" @click.prevent="logoutUser()">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>


<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapGetters(['isLoggedIn'])
        },
        methods: {
            ...mapActions(['logout']),
            logoutUser() {
                this.logout();
            }
        }
    }
</script>

<style scoped>

</style>