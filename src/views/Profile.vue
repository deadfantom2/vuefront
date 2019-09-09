<template>
    <div>
        <h2>Profile</h2>
        <div class="card" v-if="user">
            <div class="list-group-item">Email: {{ user.email }}</div>
            <div class="list-group-item">Username: {{ user.username }}</div>
            <div class="list-group-item">Name: {{ user.name }}</div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        computed:{
            ...mapGetters(['user'])
        },
        methods: {
            ...mapActions(['getProfile'])
        },
        created() {
            this.getProfile();
        }
    }

</script>

<style scoped>

</style>