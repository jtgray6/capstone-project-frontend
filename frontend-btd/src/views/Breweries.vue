<template>
    <div>
        <Header />
        <h2>Breweries</h2>
        <ul class="brewery-container">
            <li v-for="brewery in breweries" :key="brewery.id">
                <div>
                    <header class="brewery-header">
                        <img class="brewery-logo" :src="brewery.logo_url" :alt="brewery.name"/>
                        <h3>{{brewery.name}}</h3>
                    </header>
                    <img :src="brewery.image_url" :alt="brewery.name"/>
                </div>
            </li>
        </ul> 
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    created(){
        this.$store.dispatch("fetchBreweries")
    },
    computed: {
        breweries(){
            return this.$store.state.breweries
        }
    },
    components: {
        Header
    }
}
</script>

<style lang="scss">
    .brewery-logo {
        height: 6rem;
    }
    .brewery-header {
        display: flex;
    }
    .brewery-container {
        display: flex;
        flex-direction: column;
    }
</style>