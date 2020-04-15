<template>
    <div>
        <Header />
        <div class="locations-map">
            <GmapMap
                :center="{lat:39.7392, lng:-104.9903}"
                :zoom="9"
                map-type-id="roadmap"
                style="width: 80vw; height: 80vh"
            >
                <GmapMarker
                    :position="{lat:39.9636039, lng:-105.5151977}"
                />
                <GmapMarker
                    :position="{lat:40.428113, lng:-104.6927074}"
                />
                <GmapMarker
                    :position="{lat:39.7397474, lng:-104.9476401}"
                />
                <GmapMarker
                    :position="{lat:39.9983913, lng:-105.0900474}"
                />
                <GmapMarker
                    :position="{lat:39.7996425, lng:-105.0845666}"
                />
            </GmapMap>
        </div>
    </div>
</template>

<script>
    // below code needs to go in template when uncommented
    import Header from '@/components/Header'
    export default {
        components: {
            Header
        }
    }

</script>

<style lang="scss">
    .locations-map {
        padding-top: 8rem;
        width: 100vw;
        display: flex;
        justify-content: center;
        background-color: darkgray;
    }
</style>