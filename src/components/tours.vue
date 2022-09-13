<template>
    <div class="text-center mt-3">
        <h1>FIND YOUR ADVENTURE</h1>
        <form action="" method="post">
            <input type="text" class="form-control w-25 d-inline p-3 me-2"  list="browsers" name="favorite_browser">
            <input type="number" class="form-control d-inline p-3 me-2" min="1" max="20" placeholder="Groub Size"  list="browsers" name="favorite_browser">
            <input type="submit" class="btn bg-dark text-light p-3  align-baseline" value="Search">
        </form>
        <table class="mt-3 mx-auto">
            <tr>
                <td v-for="tra in arr">
                    <div @click="opacityway($event,tra)"><img :src="tra.img" alt=""/> <span>{{tra.title}}</span></div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                arr :[],
                historydata :[],
            }
        },
        async created(){
            const res = await fetch("http://localhost:3000/traveldata")
            this.arr = await res.json();
        },
        methods:{
            opacityway(event,e){
                event.path[1].classList.toggle("opacityit")
                this.historydata.push(event.path[1])
            }
        }
    }
</script>


<style>
    input[type="number"]{
        width:150px;
    }
    table td img{
        width:100px;
    }
    table td{
        width:150px;
        height:100px;
        padding:5px;
    }
    .opacityit{
        opacity: 0.5;
    }
</style>