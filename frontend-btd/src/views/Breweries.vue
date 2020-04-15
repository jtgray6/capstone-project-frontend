<template>
    <div>
        <Header />
        <main class="brewery-page">
            <h2 class="brewery-page-title">BREWERIES</h2>
            <el-collapse v-model="activeName" accordian>
                <el-collapse-item v-for="brewery in breweries" :key="brewery.id" :name="brewery.id">
                    <template slot="title" class="brewery-title">
                        <header class="brewery-header">
                            <div class="logo-container">
                                <img class="brewery-logo" :src="brewery.logo_url" :alt="brewery.name"/>
                            </div>
                            <h3 class="brewery-name">{{brewery.name}}</h3>
                        </header>
                    </template>
                    <div class="brewery-card">
                        <img class="brewery-image" :src="brewery.image_url" :alt="brewery.name"/>
                        <div class="brewery-bottom">
                            <div class="left-side">
                                <h4 class="brewery-location">Located in {{brewery.location}}</h4>
                                <GmapMap
                                    :center="{lat: parseFloat(brewery.latitude), lng: parseFloat(brewery.longitude)}"
                                    :zoom="14"
                                    map-type-id="roadmap"
                                    style="width: 260px; height: 260px"
                                >
                                    <GmapMarker
                                        :position="{lat: parseFloat(brewery.latitude), lng: parseFloat(brewery.longitude)}"
                                    />
                                </GmapMap>
                                <a :href="brewery.website_url" class="website-link">Go to Website</a>
                            </div>
                            <div class="right-side">
                                <h4 class="brewery-location">Beer Releases</h4>
                                <BeerList :beers="brewery.beers"/>
                            </div>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse> 
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BeerList from '@/components/BeerList'

export default {
    data(){
        return {
            activeName: '2'
        }
    },
    created(){
        this.$store.dispatch("fetchBreweries")
    },
    computed: {
        breweries(){
            return this.$store.state.breweries
        }
    },
    components: {
        Header,
        Footer,
        BeerList
    }
}
</script>

<style lang="scss">
    @import "../styles/typography";

    .brewery-location {
        font-size: 1.3rem;
    }

    .website-link {
        margin-top: 1rem;
        text-decoration: none;
        color: black;
        padding: 4px;
        box-shadow: 0 5px 8px black;
        border-radius: 5px;
        text-align: center;
        width: 200px;
    }

    .brewery-page-title {
        font-size: 2.6rem;
    }

    .brewery-bottom {
        display: flex;
        justify-content: space-evenly;
        width: 100vw;
    }

    .left-side {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .right-side {
        width: 260px;
        text-align: center;
    }
    .brewery-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: $secondary-font;
        padding-top: 10rem;
        z-index: 0;
    }
    .brewery-logo {
        height: 6rem;
        padding: 2rem 0;
    }
    .logo-container {
        width: 8rem;
    }
    .brewery-name {
        font-size: 2rem;
    }
    .brewery-header {
        display: flex;
        align-items: center;
    }
    .brewery-image {
        width: 1000px;
    }
    .brewery-card {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .brewery-container {
        display: flex;
        flex-direction: column;
    }
    .el-collapse-item__header {
        // display: flex;
        // align-items: center;
        height: fit-content !important;
        justify-content: center;
        // line-height: 48px;
        // background-color: #FFF;
        // color: #303133;
        // cursor: pointer;
        // border-bottom: 1px solid #EBEEF5;
        // font-size: 13px;
        // font-weight: 500;
        // outline: 0;
    }
</style>