<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href=""><img src="../assets/logo.jpg" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse align-items-baseline" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active text-dark  p-4 " id="bordered" aria-current="page" href="">Explore <i class="fa-solid fa-caret-down"></i></a>
                    </li>
                    <li class="p-4">
                        <form>
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                        </form>
                    </li>
                </ul>
                <ul class="navbar-nav  mb-1 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/login"><a class="nav-link  text-dark" href="">Login</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register"><a class="nav-link  text-dark" href="">Register</a></router-link>
                    </li>
                </ul>
                <button class="btn mx-1 p-3 ">Host And Adventure</button>
            </div>
        </div>
    </nav>
</template>

<script>
    import logincomponent from './logincomponent.vue'
    export default {
        data(){
            return {

            }
        },
        components:{logincomponent},
    }
</script>


<style scoped>
form {
    width: 450px;
}
bordered{
    border-left: 1px solid black;
    border-right: 1px solid black;
}

i{
    color: #e6003e;
    font-size:18px;
}
.btn{
    background-color: #2eb0d1;
    color: white;
    line-height: 40px;
    text-transform: uppercase;
}
a{
    text-decoration: none;
}
</style>