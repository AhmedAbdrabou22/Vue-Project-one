<template>
    <div>
        <div class="container text-center p-5">
            <h3>The embark.org family</h3>
            <p>Get to know who are contributing to embark.org every day</p>

            <div class="reponsible mt-5">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="pt-2">
                            <div class="res"><img src="@/assets/16.jpg" alt="reponible one"></div>
                            <div class="mt-3">
                                <p>Ali Quardiqui</p>
                                <p class="w-50 d-inline-block">Hiker , Adventure Host, Mountainer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="pt-2">
                            <div class="res"><img src="@/assets/31.jpeg" alt="reponible one"></div>
                            <div class="mt-3">
                                <p>Denish tamngan Blon</p>
                                <p class="w-50 d-inline-block">Hiker , Adventure Host, Mountainer , Mountain ,Biker Camper</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="pt-2">
                            <div class="res"><img src="@/assets/32.jpeg" alt="reponible one"></div>
                            <div class="mt-3">
                                <p>Alex Potemkin</p>
                                <p class="w-50 d-inline-block">Hiker , Backpacker, Photographer , Filmmaker , Solo Travel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <router-link to="/members"><button class="btn btn-primary p-3 m-3">MEET THE COMMUNITY</button></router-link>
                <button class="btn btn-danger p-3 m-3">JOIN OUR COMMUNITY</button>
            </div>
        </div>
    </div>
</template>


<style scoped>
.res img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
}
</style>