<template>
    <div class="header">
        <h1 class="title">Brew Tour Denver</h1>
        <nav>
        <ul>
          <li>
            <RouterLink :to="{ name: 'home' }" class="nav-button">Home</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'breweries' }" class="nav-button">Breweries</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'locations' }" class="nav-button">Locations</RouterLink>
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
    @import "../styles/typography";
    @import "../styles/colors";

    ul, .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        margin-left: 16px;
        font-family: $primary-font;
        font-size: 2.6rem;
    }

    .nav-button {
      font-family: $primary-font;
      font-size: 1.6rem;
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
        color: $secondary-color-6;
    }
    
    .header {
        background-color: $black;
        margin: 0;
        position: fixed;
        width: 100vw;
    }

</style>