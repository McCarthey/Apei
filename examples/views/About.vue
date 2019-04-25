<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>

<script>
import throttle from "../../lib/throttle.js";
export default {
    created() {
        window.onmousemove = throttle(() => {
            console.log("eee" + +new Date());
        }, 1000);
        console.log("test", throttle);
    }
};
</script>

