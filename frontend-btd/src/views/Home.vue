<template>
    <div id="home">
        <Header />
        <main class="welcome-page">
            <h2 class="welcome-title">Welcome to Brew Tour Denver!</h2>
            <h4 class="welcome-greeting">Have you ever seen anything so full of splendor? 
                The Colorado craft beer scene is vast and plentiful, 
                leaving little to be desired, with a plethora of options to decide between!
            </h4>
            <h4 class="welcome-greeting">
                Brew Tour Denver is designed with the hope that, locals and tourists alike, 
                everyone gets the chance to enjoy the hidden gems of the Greater Denver craft beer scene.
            </h4>
        </main>

    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    components: {
        Header
    }
}
</script>

<style lang="scss">
    @import "../styles/typography";

    .welcome-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        background-image: url("https://lh3.googleusercontent.com/PYjsuF8Urtf4EAQo1-_hpp7X0DEomdYukVWEzHGWQMUMnm3EumfWrHh14dnonpCaIopgOz4vwVHXIQIBSaqGrijZ_qIXvmw9JM_yNEJNiP_jf5Bm41965C-2HYQ7Rrdg6jxMyL_pYxzfEMn1epHveLhsls0xQTt3wNzZ3U-AzJSYgx5ggRtXS_YtVKBBxmoLurdMO8PHVJ9nBdFYnswFGD3cfLFkCmyPCR_3f6RIfKgrCD2xGgzWbIETIdvo0nXeb0YZRVT6_9RM_zhAEQiyNBlDr0_LRRjCNUnbZdp2477EXjWB8pPiUQfxkU7W_uBuQrk_UVWS5oylTwdj-ffVQ7oCHaxBgiQrQxcL9K-6IgORfwwDWJ4uJF_z3LsB5oY-zjA_vwO31VrxP76ubG5c4XGufzhHFX6aY1MsgMzifWgQFrIYRhFWJ_ICCH3DhkKs1X1W9OTXZWOsRwI4BzIKYYJ0H_g398cgWcNh2JR5kkD1iuBA8StV7UtyJAuCWXT3wb4kCXI9jWg9X7roHo5bHLLrOh_RkJ5-H1b1nEwRpa9bRgf_XjU4y0YspUFpYje51sptbsXmGIenJ7Ba_CrqSLDdWsy0JBs-w7P70AdW2rtHcj1PkB1zbmV5-yrBPqEOaj8aP7m5WNDCEhHtY87hGvt4xdmfIXAsLDCc7GKDkpQw_Fmi48UJk0rKg3F07A=w901-h677-no");
        background-color: rgba(255, 255, 255, 0.8);
        background-blend-mode: lighten;
        background-repeat: no-repeat;
        background-size: 100vw 100vh;
        padding-top: 8rem;
    }

    .welcome-title {
        margin-top: 8rem;
        font-family: $primary-font;
        font-size: 3rem;
    }

    .welcome-greeting {
        margin: 0 0;
        padding-bottom: 0;
        font-family: $secondary-font;
        font-size: 1.4rem;
        width: 650px;
        line-height: 2;
        text-align: center;
        font-weight: 600;
    }
</style>