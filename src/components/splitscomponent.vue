<template>
    <div class="s">
        <div class="container pt-3">
            <div class="magal">
                <div class="gallery">
                    <div class="image">
                        <img src="../assets/23.jpg" alt="">
                        <div class="sp">
                            <div class="pp">
                                <p>Split</p> ADVENTURES
                            </div>
                        </div>
                    </div>
                    <div class="image">
                        <img src="../assets/17.jpg" alt="">
                        <div class="sp">
                            <div class="pp">
                                <p>Split</p> ADVENTURES
                            </div>
                        </div>
                    </div>
                    <div class="image">
                        <img src="../assets/18.jpg" alt="">
                        <div class="sp">
                            <div class="pp">
                                <p>Split</p> ADVENTURES
                            </div>
                        </div>
                    </div>
                    <div class="image">
                        <img src="../assets/19.jpg" alt="">
                        <div class="sp">
                            <div class="pp">
                                <p>Split</p> ADVENTURES
                            </div>
                        </div>
                    </div>
                    <div class="image">
                        <img src="../assets/22.jpg" alt="">
                        <div class="sp">
                            <div class="pp">
                                <p>Split</p> ADVENTURES
                            </div>
                        </div>
                    </div>
                    <div class="image">
                        <img src="../assets/20.jpg" alt="">
                        <div class="sp">
                            <div class="pp">
                                <p>Split</p> ADVENTURES
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>

export default {
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>



<style scoped>
.magal {
    width: 100%;
}

.container {
    background-color: crimson;
}

.s {
    background-color: crimson;
}

.magal .gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.magal .gallery .image {
    width: calc(95% / 3);
    margin: 0px;
    overflow: hidden;
    position: relative;
}

.magal .gallery .image img {
    width: 100%;
    height: 300px;
    vertical-align: middle;
    transition: all 0.3s ease;
}

.magal .gallery .image:hover img {
    transform: scale(1.1);
}

.sp {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 25px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

.sp .pp {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.sp p {
    font-size: 25px;
    color: white;
}

@media(max-width:768px) {
    .magal .gallery .image {
        width: calc(95% / 1);
        margin: 0px;
        overflow: hidden;
        position: relative;
    }
}
</style>