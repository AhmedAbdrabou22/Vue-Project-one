<template>
    <div>
        <div class="text-center mt-3">
            <h1>FIND YOUR ADVENTURE</h1>
            <form action="" method="post">
                <input type="text" class="form-control w-25 d-inline p-3 me-2" list="browsers" name="favorite_browser">
                <input type="number" class="form-control d-inline p-3 me-2" min="1" max="20" placeholder="Groub Size"
                    list="browsers" name="favorite_browser">
                <input type="submit" class="btn bg-dark text-light p-3  align-baseline" value="Search">
            </form>
            <div class="tablee">
                <table class="mt-3 mx-auto">
                <tr>
                    <td v-for="tra in traveldata">
                        <div @click="opacityway($event,tra)"><img :src="tra.img" alt="" /> <span>{{tra.title}}</span></div>
                    </td>
                </tr>
            </table>
            </div>
        </div>
    </div>
</template>



<script>
// import featuretours from './featuretours.vue'
export default {
    data() {
        return {
            traveldata: [
                {
                    img: "/img/10.190951b4.jpg",
                    title: "Diving"
                },
                {
                    img: "/img/11.61ee65ab.jpg",
                    title: "Climbing"
                },
                {
                    img: "/img/13.8feb1416.jpg",
                    title: "biking"
                },
                {
                    img: "/img/13.8feb1416.jpg",
                    title: "tourrims"
                },
                {
                    img: "/img/10.190951b4.jpg",
                    title: "safari"
                },
                {
                    img: "/img/11.61ee65ab.jpg",
                    title: "building"
                },
                {
                    img: "/img/10.190951b4.jpg",
                    title: "suffering"
                },
                {
                    img: "/img/13.8feb1416.jpg",
                    title: "offroading"
                }
            ],
            historydata: [],
        }
    },
    methods: {
        opacityway(event, e) {
            if (this.historydata.length == 0) {
                event.path[1].classList.add("opacityit")
                this.historydata.push(event.path[1])
            } else {
                this.historydata.forEach((ele) => {
                    ele.classList.remove("opacityit")
                    this.historydata.splice(ele)
                })
                event.path[1].classList.add("opacityit")
                this.historydata.push(event.path[1])
            }
            let r = document.querySelectorAll('.card');
            console.log(r);
            r.forEach((ele)=>{
                if(!(ele.classList.contains('opacityit'))) {
                    ele.style.display = "none";
                }else{
                    ele.style.display="block"
                }
            })
        }
    },
    // components: { featuretours }
}
</script>


<style scoped>
input[type="number"] {
    width: 150px;
}
table{
    width: 70%;
}
table td img {
    width: 100px;
}

table td {
    width: 150px;
    height: 100px;
    padding: 5px;
}

.opacityit {
    opacity: 0.5;
}
@media(max-width:768px){
    .tablee{
        overflow: auto;
    }
}
</style>