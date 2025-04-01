<template>
    <div>
        <div class="grid grid-cols-1">
            <div>
                <compHeader></compHeader>
                <div class="px-16">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import compHeader from "./components/appHeader.vue"
    export default {
        components: {
            compHeader
        }
    }
</script>
