<template>
    <div>
        <Header />
        <div class="beer-page">
            <div class="beer-container">
                <BeerFlipCard v-for="beer in beers" :key="beer.id" class="beer-card">
                    <template slot="front">
                        <div class="beer-card-front" :style="{'background-image': `url(${beer.image_url})`}">
                            <h3 style="display:none;">{{beer.name}}</h3>
                        </div>
                    </template>
                    <template slot="back">
                        <div class="beer-card-back">
                            <p>{{beer.description}}</p>
                        </div>
                    </template>
                </BeerFlipCard>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BeerFlipCard from '@/components/BeerFlipCard'

export default {
    created(){
        this.$store.dispatch("fetchBeers")
    },
    computed: {
        beers(){
            return this.$store.state.beers
        }
    },
    components: {
        Header,
        Footer,
        BeerFlipCard
    }
}
</script>

<style lang="scss">
    .beer-page {
        padding-top: 8rem;
        height: 100vh;
        display: flex;
        justify-content: center;
    }

    .beer-card {
        margin: 1rem;
        box-shadow: 0 5px 10px gray;
        height: 300px;
        width: 300px;
    }

    .beer-container {
        padding: 1rem;
    }
    .beer-card-front {
        height: 300px;
        width: 300px;
        background-size: 100%;
        &:hover {
            background-color: rgba(255, 255, 255, 0.6);
            background-blend-mode: lighten;
        }
    }

    .beer-card-back {
        height: 300px;
        width: 300px;
    }

    .beer-container {
        display: flex;
    }
</style>