<template>
    <div>
        <Header />
        <div class="locations-map">
            <h2 class="locations-page-title">BREWERY LOCATIONS</h2>
            <GmapMap
                :center="{lat:39.7392, lng:-104.9903}"
                :zoom="9"
                map-type-id="roadmap"
                style="width: 80vw; height: 80vh"
            >
                <GmapMarker v-for="brewery in breweries" :key="brewery.id"
                    :position="{lat: parseFloat(brewery.latitude), lng: parseFloat(brewery.longitude)}"
                />
            </GmapMap>
        </div>
    </div>
</template>

<script>
    // below code needs to go in template when uncommented
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
    @import "../styles/typography";

    .locations-page-title {
        font-family: $secondary-font;
        font-size: 2.6rem;
    }
    .locations-map {
        padding-top: 8rem;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>