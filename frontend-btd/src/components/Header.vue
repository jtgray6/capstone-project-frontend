<template>
    <div class="header">
        <h1 class="title">Brew Tour Denver</h1>
        <nav>
        <ul>
          <li>
            <RouterLink :to="{ name: 'home' }" class="nav-button">Home</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'locations' }" class="nav-button">Locations</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'breweries' }" class="nav-button">Breweries</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'index' }" class="nav-button">Logout</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

    ul, .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        margin-left: 16px;
    }

    ul {
        list-style: none;
        margin-right: 8px;
    }

    li {
        padding: 8px;
    }

    a {
        text-decoration: none;
    }

    .nav-button, h1 {
        color: yellow;
    }
    
    .header {
        background-color: darkblue;
        margin: 0;
    }

</style>