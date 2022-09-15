<template>
    <displayimg/>
    <tours @filterdata ="filterit"/>
    <div class="mt-5">
        <h2 class="text-center mb-3">FEATURE TOURS</h2>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 mt-5 " ref="cardtour" v-for="data in countrytravel">
                    <div class="card" :class="[data.cardtitle == 'Savana' || data.cardtitle =='Triping' || data.cardtitle =='Caves' ? 'all':'no',]">
                        <div class="image text-center rounded-circle">
                            <img :src="data.profile" alt="" class="rounded-circle" />
                        </div>
                        <img :src='data.img' class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{data.cardtitle}}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
        import displayimg from './displayimg.vue'
        import tours from './tours.vue'
export default {
    data() {
        return {
            cc:"date",
            countrydata: [],
            countrytravel: [
                { img: "/img/1.0ee17f34.jpg", cardtitle: "Savana", profile: "/img/2.00b98ab8.jpg" },
                { img: "/img/5.c745bb8e.jpg", cardtitle: "Gamels & Safari", profile: "/img/4.497fe071.jpeg" },
                { img: "/img/6.9d65b561.jpg", cardtitle: "Ma3alm Sia7ia", profile: "/img/3.ba408057.png" },
                { img: "/img/7.571be33d.jpg", cardtitle: "Triping", profile: "/img/2.00b98ab8.jpg" },
                { img: "/img/8.7de51fd8.png", cardtitle: "Caves", profile: "/img/4.497fe071.jpeg" },
                { img: "/img/9.f47197de.jpg", cardtitle: "Biking", profile: "/img/3.ba408057.png" }
            ],
        }
    },

    methods: {
        run(){
            let r = document.querySelectorAll('.card')
            console.log(r)
        },
        // filterit(e){
        //     console.log(typeof e);
        //     console.log(e);
        // }
    },
    components: {
        displayimg ,tours
    }
}
</script>


<style scoped>
.card .card-img-top {
    width: 100%;
    height: 250px;
}

.card {
    position: relative;
}

.card .image {
    width: 87px;
    height: 87px;
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
}

.image img {
    width: 80px;
}

h2 {
    color: #666;
}
</style>