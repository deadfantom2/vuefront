<template>

    <div>
        <h2>Login</h2>
        <div class="row">
            <div class="card mx-auto">
                 <div class="card-header text-white bg-primary">
                     <h4>Login</h4>
                 </div>
                <div class="card-body">
                    <form @submit.prevent="loginUser()">
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text"
                                   id="username"
                                   placeholder="username"
                                   name="username"
                                   v-model="username"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="text"
                                   id="password"
                                   placeholder="password"
                                   name="password"
                                   v-model="password"
                                   class="form-control">
                        </div>
                        <input type="submit" class="btn btn-primary" value="Login" />
                        &nbsp;
                        <router-link to="/register" class="card-link">Need and account?</router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        data(){
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapActions(['login']),
            loginUser(){
                let user = {
                    username: this.username,
                    password: this.password
                };
                this.login(user).then(res => {
                   if(res.data.success){
                       this.$router.push('/profile');
                   }
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
</script>

<style scoped>
    .card {
        width: 60%;
    }
    .btn {
        border-radius: 0;
    }
    .form-control {
        border-radius: 0;
    }
</style>
