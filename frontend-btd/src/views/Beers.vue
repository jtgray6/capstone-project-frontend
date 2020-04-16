<template>
    <div>
        <Header />
        <div class="beer-page">
            <h2 class="brewery-page-title">CURRENT BEERS</h2>
            <div class="beer-container">
                <BeerFlipCard v-for="beer in beers" :key="beer.id" class="beer-card">
                    <template slot="front">
                        <div class="beer-card-front" :style="{'background-image': `url(${beer.image_url})`}">
                            <div class="front-card-container">
                                <h3 class="front-card-name">{{beer.name}}</h3>
                                <h4 class="front-card-style">{{beer.style}}</h4>
                                <h4 class="front-card-brewery">{{beer.brewery.name}}</h4>
                            </div>
                        </div>
                    </template>
                    <template slot="back">
                        <div class="beer-card-back" :style="{'background-image': `url(${beer.brewery.logo_url})`}">
                            <h3 class="back-card-name">{{beer.name}}</h3>
                            <h4 class="front-card-style">{{beer.style}}</h4>
                            <p class="beer-card-description">{{beer.description}}</p>
                            <p class="beer-stats">{{beer.abv}}% ABV - Untapped Rating {{beer.rating}}</p>
                            <p class="release-date">Released on {{beer.release_date}}</p>
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

    .front-card-name {
        margin: 0;
    }

    .beer-container {
        display: flex;
        flex-wrap: wrap;
        width: 1350px;
        justify-content: flex-start;
    }
    .beer-card-front {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
        width: 300px;
        background-size: 100%;
        &:hover {
            background-color: rgba(255, 255, 255, 0.6);
            background-blend-mode: lighten;
        }
    }

    .beer-card-description {
        margin: 0;
        width: 80%;
        text-align: center;
    }

    .beer-card-back {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-size: 100%;
        background-color: rgba(255, 255, 255, 0.8);
        background-blend-mode: lighten;        
    }

    .beer-card-front .front-card-container {
        display: none;
    }

    .beer-card-front:hover .front-card-container {
        display: block;
    }

    .front-card-container {
        text-align: center;
    }

    .beer-card-back {
        height: 300px;
        width: 300px;
    }

    .beer-container {
        display: flex;
    }
</style>