<template>
    <div>
        <Header />
        <div class="beer-page">
            <h2 class="brewery-page-title">BEERS</h2>
            <div class="beer-container">
                <BeerFlipCard v-for="beer in beers" :key="beer.id" class="beer-card">
                    <template slot="front">
                        <div class="beer-card-front" :style="{'background-image': `url(${beer.image_url})`}">
                            <h3 class="beer-card-name">{{beer.name}}</h3>
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
    @import "../styles/typography";

    .beer-page {
        padding-top: 8rem;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: $secondary-font;
    }

    .beer-card {
        margin: 1rem;
        box-shadow: 0 5px 10px gray;
        height: 300px;
        width: 300px;
    }

    .beer-card-name {
        margin: 0;
    }

    .beer-container {
        display: flex;
        flex-wrap: wrap;
        width: 1350px;
        justify-content: flex-start;
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

    .beer-card-front .beer-card-name {
        display: none;
    }

    .beer-card-front:hover .beer-card-name {
        display: block;
    }

    .beer-card-back {
        height: 300px;
        width: 300px;
    }

    .beer-container {
        display: flex;
    }
</style>