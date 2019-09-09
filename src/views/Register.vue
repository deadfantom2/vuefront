<template>
    <div>
        <h2>Register</h2>
        <div class="row">
            <div class="card mx-auto">
                <div class="card-header text-white bg-primary">
                    <h4>Register</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="registerUser()">
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
                            <label>Name</label>
                            <input type="text"
                                   id="name"
                                   placeholder="name"
                                   name="name"
                                   v-model="name"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text"
                                   id="email"
                                   placeholder="email"
                                   name="email"
                                   v-model="email"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password"
                                   id="password"
                                   placeholder="password"
                                   name="password"
                                   v-model="password"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Confirm Password</label>
                            <input type="password"
                                   id="confirm_password"
                                   placeholder="confirm password"
                                   name="confirm_password"
                                   v-model="confirm_password"
                                   class="form-control">
                        </div>
                        <input type="submit" class="btn btn-primary" value="Register" />
                        &nbsp;
                        <router-link to="/login" class="card-link">Already have an account?</router-link>
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
                password: '',
                confirm_password: '',
                name: '',
                email: ''
            }
        },
        methods: {
            ...mapActions(["register"]),
            registerUser(){
                let user = {
                    username: this.username,
                    password: this.password,
                    confirm_password: this.confirm_password,
                    email: this.email,
                    name: this.name
                };
                this.register(user).then(res => {
                    if(res.data.success){
                        this.$router.push("/login");
                    }
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