<template>
    <div>
        <el-collapse v-model="activeName">
            <el-collapse-item v-for="beer in beers" :key="beer.id">
                <template slot="title">
                    <h5 class="beer-list-title">{{beer.name}}</h5>
                </template>
                <div>
                    <p>{{beer.description}}</p>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeName: '2'
        }
    },
    props: {
        beers: Array,
    }
}
</script>

<style lang="scss">
    .beer-list-title {
        margin: 0;
        font-size: 1rem;
    }
</style>