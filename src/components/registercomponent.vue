<template>
    <div class="net p-3">
        <div class="loginform mt-2 container p-3 rounded shadow">
            <div class="text-center title mb-3"><span id="upper">REGISTRATION FORM</span></div>
            <div>
                <h3 class="text-center m-3">Update Your Profile Picture</h3>
                <div class="m-auto  mt-3  mb-3 w-50 rounded">
                    <form>
                        <label for="imgInp" class="imgnp" @click="uploadimage">Upload Image</label>
                        <input type='file' id="imgInp" ref="imagefile" />
                        <div id="filename">
                            <img src="" id="blah" ref="upload">
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <p>Thanks for logging in & supporting <b>embark.org</b> where all of the trips are offered by tour
                    guides who live and work in the local community.</p>
                <p>If you have not registered before please take a minute to join our exciting community of adventure
                    travellers.</p>
                <p>For additional help and questions, you can get in contact with us at <b>support@embark.org</b></p>
            </div>
            <form class="g-3 py-3">
                <div>
                    <label for="name" class="form-label text-muted my-3">Name</label>
                    <input type="text" class="form-control py-3" id="name">
                </div>
                <div>
                    <label for="username" class="form-label text-muted my-3">Username</label>
                    <input type="email" class="form-control py-3" id="username">
                </div>
                <div>
                    <label for="email" class="form-label text-muted my-3">E-mail</label>
                    <input type="email" class="form-control py-3" id="email" placeholder="username@gmail.com">
                </div>
                <div>
                    <label for="pass" class="form-label text-muted my-3">Password</label>
                    <input type="password" class="form-control py-3" id="pass">
                </div>
                <div>
                    <label for="inputPassword4" class="form-label text-muted my-3">Password Confirmation</label>
                    <input type="password" class="form-control py-3" id="inputPassword4">
                </div>
                <div>
                    <label for="location" class="form-label text-muted my-3">Location</label>
                    <input type="text" class="form-control py-3" id="location">
                </div>
                <div class="mt-3 text-muted">I am Agree <a href=""> Terms Condition</a></div>
                <div class="text-end mt-3">
                    <button class="btn  mx-2">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>






<script>
import navbarcomponent from './navbarcomponent.vue'
export default {
    data() {
        return {

        }
    },
    methods: {
        uploadimage() {
            this.$refs.imagefile.onchange = (evt) => {
                const [file] = this.$refs.imagefile.files;
                console.log(this.$refs.imagefile.files);
                if (file) {
                    this.$refs.upload.setAttribute("src", URL.createObjectURL(file));
                }
            }
        }
    },
    components:{navbarcomponent},
}
</script>



<style scoped>
.net {
    background-color: #f8fafc;
}

.loginform {
    width: 450px;
    background-color: white;
}

#upper {
    text-transform: uppercase;
}

.title {
    background-color: #f8fafc;
    padding: 10px;
}

a {
    text-decoration: none;
}

button {
    background-color: #3A5A97;
    color: black;
}

button i {
    font-size: 20px;
}

.reg {
    text-align: end;
    padding-left: 5px;
}

.imgnp {
    cursor: pointer;
    background-color: #f8fafc;
    color: black;
    padding: 5px 20px;
    display: block;
    margin: auto;
    width: 100%;
    text-align: center;
    border-radius: 10px;
}

#imgInp {
    opacity: 0;
    position: absolute;
    z-index: -1;
}

#filename {
    margin: 25px auto;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 1px solid #f8fafc;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#blah {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    align-self: center;
}


@media(max-width:768px) {
    .loginform {
        width: 100%;
    }
}
</style>