<template>
    <div>
        <Header />
        <h2>Home Page</h2>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    created(){
        this.$store.dispatch("fetchBreweries")
    },
    components: {
        Header
    }
}
</script>

<style lang="scss">

</style>