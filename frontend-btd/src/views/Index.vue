<template>
    <div>
        <div class="login-page">
            <h1 class="title">Brew Tour Denver</h1>
            <form @submit.prevent="handleSubmit">
                <h3 class="login-form-title">Please Log In Below</h3>
                <div class="input-container">
                    <div class="form-group">
                        <input type="text" v-model="username" placeholder="Username" name="username" class="login-input" :class="{ 'is-invalid': submitted && !username }" />
                        <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
                    </div>
                    <div class="form-group">
                        <input type="password" v-model="password" placeholder="Password" name="password" class="login-input" :class="{ 'is-invalid': submitted && !password }" />
                        <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                    </div>
                </div>
                <div class="form-group">
                    <button class="login-button" :disabled="loggingIn">Login</button>
                </div>
                <RouterLink :to="{ name: 'sign-up' }"><button class="login-button">Sign Up</button></RouterLink>
            </form>
        </div>
            <Footer />
    </div>
</template>

<script>
import Footer from '@/components/Footer';
export default {

    data () {
        return {
            username: '',
            password: '',
            submitted: false
        }
    },
    components: {
        Footer
    },
    computed: {
        loggingIn () {
            return this.$store.state.authentication.status.loggingIn;
        }
    },
    created () {
        // reset login status
        this.$store.dispatch('authentication/logout');
    },
    methods: {
        handleSubmit () {
            this.submitted = true;
            const { username, password } = this;
            const { dispatch } = this.$store;
            if (username && password) {
                dispatch('authentication/login', { username, password });
            }
        }
    }
};
</script>

<style lang="scss">
        @import "../styles/typography";
        @import "../styles/colors";

        .login-page {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: hsl(0, 11%, 17%);
        }

        .login-form-title {
            font-family: $primary-font;
            font-size: 1.6rem;
            color: $secondary-color-6;
            margin: 0;
        }

        form {
            font-family: $secondary-font;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 360px;
            box-shadow: 0 5px 15px black;
            border-radius: 6px;
            padding: 1rem;
            background-color: black;
            color: white;
        }
        .input-container {
            margin-top: 6px;
            padding: 1rem;
            text-align: left;
        }

        .login-input {
            font-size: 1rem;
            width: 180px;
            padding: 10px;
            margin: 10px 0;
            border-radius: 6px;
        }

        .login-button {
            font-size: 0.9rem;
            padding: 6px;
            width: 180px;
            margin: 8px 0;
            background-color: black;
            border-radius: 6px;
            color: $secondary-color-6;
            border-color: $secondary-color-6;
            &:hover {
                background-color: hsl(0, 11%, 17%);
            }
            
        }

</style>