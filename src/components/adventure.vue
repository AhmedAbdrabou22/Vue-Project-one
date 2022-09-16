<template>
    <div class="overlay">
        <div class="overlaycontent text-center">
            <div>
                <h1>Find your adventure</h1>
                <p>Book tours with local hosts and share experiences with a community of passionate travelers.</p>
            </div>
            <div>
                <button class="btn btn-primary mx-3 mt-3 p-4">
                    <router-link id="router" to="/feature">Book Your Adventure</router-link>
                </button>
                <button class="btn btn-danger mx-3 mt-3 p-4">Explore The world</button>
            </div>
        </div>
    </div>
    <splitcomponents />
    <adventurework/>
    <reponsiples/>
</template>


<script>
import splitcomponents from './splitscomponent.vue'
import adventurework from './adventurework.vue'
import reponsiples from './reponsiples.vue'
export default {
    data() {
        return {

        }
    },
    components: {splitcomponents , adventurework ,reponsiples}
}
</script>

<style>
.overlay {
    background-image: url(../assets/1.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 85vh;
    position: relative;
}

.overlaycontent {
    background-color: rgba(255, 255, 255, 0.6);
    width: 50%;
    height: 150px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    line-height: 60px;
    padding: 15px;
}

.overlaycontent h1 {
    font-size: 50px;
}

h1,
p {
    color: #666;
}

#router {
    color: white;
    text-decoration: none;
}

@media(max-width:768px) {
    .overlaycontent {
        width: 100%;
        height: min-content;
    }
}
</style>