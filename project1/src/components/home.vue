<template>
    <div class="home">
        <slider></slider>
        <div class="newsList">
            <ul>
                <li v-for="(item,index) in arr">
                    <router-link :to="'/article/'+item.id">
                        <h2>{{item.id}}.{{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import slider from './slider.vue';
    export default {
        data(){
            return {
                arr : [],
            };
        },
        components : {
            slider
        },
        mounted(){
            this.$http.get('/src/data/index.data').then((res)=>{
                this.arr = res.data;
            }).catch((res)=>{
                alert(res.status);
            })
        }
    }
</script>
<style></style>