<template>
    <div>
        <form v-on:submit.prevent="handleSubmit">
            <h3>Sign Up Below</h3>
            <input type="text" v-model="email" placeholder="Email"/>
            <input type="text" v-model="username" placeholder="Username"/>
            <input type="password" v-model="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password"/>
            <input type="submit" value="Create Account"/>
            <RouterLink :to="{ name: 'index' }">Have an account? Click here to login!</RouterLink>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            username: '',
            password: '',
            submitted: false
        }
    },
    methods: {
        handleSubmit () {
            this.submitted = true;
            const { email, username, password } = this;
            const { dispatch } = this.$store;
            if (email && username && password) {
                dispatch('authentication/signup', { email, username, password });
            }
        }
    }
}
</script>

<style lang="scss">

</style>