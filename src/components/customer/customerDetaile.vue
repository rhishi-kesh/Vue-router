<template>
    <div class="mb-16">
        <h2 class="mb-4 text-3xl">Customer Details</h2>
        <router-link :to="{name: 'customerEdit', params: {id: $route.params.id}, query: {locale: 'en', q: 100}}" class="px-4 py-1 bg-slate-800 text-white inline-block">Edit {{ id }}</router-link>
    </div>
</template>


<script>
    export default {
        data () {
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            '$route'(to){
                this.id = to.params.id
            }
        },
        methods: {
            navigateToHome() {
                this.$router.push('/')
            }
        }
    }
</script>