<template>
    <div class="net p-3">
        <div class="loginform mt-2 container p-3 rounded shadow">
            <div class="text-center title mb-3"><span id="upper">Login Form</span></div>
            <div>
                <p>Thanks for logging in & supporting <b>embark.org</b> where all of the trips are offered by tour guides who live and work in the local community.</p>
                <p>If you have not registered before please take a minute to join our exciting community of adventure travellers.</p>
                <p>For additional help and questions, you can get in contact with us at <b>support@embark.org</b></p>
            </div>
            <form class="g-3 py-3">
                <div>
                    <label for="inputEmail4" class="form-label text-muted my-3">E-mail</label>
                    <input type="email" class="form-control py-3" id="inputEmail4" placeholder="username@gmail.com">
                </div>
                <div>
                    <label for="inputPassword4" class="form-label text-muted my-3">Password</label>
                    <input type="password" class="form-control py-3" id="inputPassword4">
                </div>
                <div class="mt-3"><a href="">Forget Password ?</a></div>
                <div class="d-flex justify-content-center align-items-center mt-3">
                    <button class="btn  mx-2">Sign In</button>
                    <button class="btn  mx-2"><i class="fa-brands fa-square-facebook"></i> &nbsp; &nbsp; Sign In with Facebook</button>
                </div>
                <div class="mt-3 reg p-3">
                    <span>New to embark <a href="">Register now</a></span>
                </div>
            </form>
        </div>
    </div>
</template>






<script>

export default {
    data() {
        return {

        }
    },
}
</script>



<style scoped>
.net{
    background-color: #f8fafc;
}
.loginform{
    width:450px;
    background-color: white;
}
#upper{
    text-transform: uppercase;
}
.title{
    background-color: #f8fafc;
    padding:10px;
}
a{
    text-decoration: none;
}
button{
    background-color: #3A5A97;
    color: white;
}
button i{
    font-size: 20px;
}
.reg{
    text-align:end;
    padding-left: 5px;
}
</style>