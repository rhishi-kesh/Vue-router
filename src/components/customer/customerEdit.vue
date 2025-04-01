<template>
    <div class="mb-16">
        <h2 class="mb-4 text-3xl">Customer Edit</h2>
        <span class="px-5 py-1 bg-slate-700 text-white rounded inline-block">{{ id }}</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus officia voluptate est harum ipsam? Autem rerum distinctio atque provident perspiciatis eveniet ipsam est nemo alias incidunt quasi molestiae libero exercitationem voluptate veritatis ut, in modi deleniti dolorem laboriosam? Facere ullam fuga eveniet ratione, animi in saepe debitis. Quod minus magnam optio quos, totam neque nam eligendi necessitatibus libero voluptatem, vitae sint nostrum soluta. Aliquam totam velit tenetur, illum impedit pariatur mollitia. Mollitia tenetur nisi repellat, quidem placeat rem quia. Laboriosam obcaecati tenetur consequatur optio possimus dicta consequuntur molestiae nisi deserunt doloremque, doloribus quo libero aliquam debitis vitae corporis magnam molestias quos nostrum numquam? Debitis fugiat at soluta quae deleniti rerum molestiae ipsa beatae eligendi facere necessitatibus molestias tempore laboriosam culpa, placeat minus corporis eum ducimus facilis cupiditate! Facere, tenetur ad autem non necessitatibus officiis vero accusamus libero! Architecto temporibus provident nihil rerum ipsam soluta quam, eos quo, maiores odit mollitia? Officiis, sint unde? Deleniti soluta voluptatem, error nihil quod nesciunt tempore dolor eaque cum pariatur excepturi perspiciatis eligendi sapiente enim non consectetur laborum a, qui dignissimos in sit magni iste at reiciendis. Consequuntur nihil sed enim repudiandae suscipit, rem quia odit hic et sequi assumenda cum facilis architecto quos nulla.</p>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
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