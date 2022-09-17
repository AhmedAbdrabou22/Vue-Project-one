<template>
    <div>
        <div>
            <button class="btn btn-primary p-2 m-1" @click="runit">Psersonal</button>
            <br>
            <button class="btn btn-primary p-2 m-1"  @click="runit">Community</button>
        </div>

        <div class="container">
            <!-- v-if="showCont == true" -->
            <div class="row" v-if="case">
                <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                    <div class="member text-center">
                        <img src="@/assets/28.jpg" alt="" />
                        <div class="mt-2">
                            <h4>The Sea</h4>
                            <p>Land Spreg Germany</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                    <div class="member text-center">
                        <img src="@/assets/29.jpg" alt="" />
                        <div class="mt-2">
                            <h4>The Sea</h4>
                            <p>Land Spreg Germany</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                    <div class="member text-center">
                        <img src="@/assets/20.jpg" alt="" />
                        <div class="mt-2">
                            <h4>The Sea</h4>
                            <p>Land Spreg Germany</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                    <div class="member text-center">
                        <img src="@/assets/25.jpg" alt="" />
                        <div class="mt-2">
                            <h4>The Sea</h4>
                            <p>Land Spreg Germany</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                    <div class="member text-center">
                        <img src="@/assets/26.jpg" alt="" />
                        <div class="mt-2">
                            <h4>The Sea</h4>
                            <p>Land Spreg Germany</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                    <div class="member text-center">
                        <img src="@/assets/10.jpg" alt="" />
                        <div class="mt-2">
                            <h4>The Sea</h4>
                            <p>Land Spreg Germany</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5" v-else>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="card">
                        <img src="@/assets/26.jpg" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="card">
                        <img src="@/assets/26.jpg" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                    <div class="card">
                        <img src="@/assets/26.jpg" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                    <div class="card">
                        <img src="@/assets/26.jpg" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                case:true,
            }
        },
        methods:{
            runit(){
                this.case = !this.case;
            }
        }
    }
</script>

<style scoped>
.member img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
}
.card img{
    height:70vh;
}
</style>