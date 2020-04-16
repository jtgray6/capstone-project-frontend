<template>
    <div class="footer">
        <p class="signature">Made with ♡ by Jeremy Gray</p>
    </div>
</template>

<style lang="scss">
    @import '../styles/typography';
    @import '../styles/colors';

    .footer {
        background-color: black;
        color: $secondary-color-7;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .signature {
        margin: 0;
        font-family: $secondary-font;
    }
</style>