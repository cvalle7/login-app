<template>
    <div class="main-container">
        <h1>Wellcome to log in app</h1>
        <div class="login">
            <h2>LOG IN</h2>
            <form @submit.prevent="submitLogin">
                <div class="inputs">
                    <input type="text" placeholder="User" v-model="user" />
                    <div class="password-container">
                        <input class="psw" :type="hidePassword ? 'text' : 'password'" placeholder="Password"
                            v-model="password" />
                        <i class="eye" :class="hidePassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
                            @click="changeStatus"></i>
                    </div>
                    <p @click="forgotPassword" class="fpass">Forgot your password?</p>
                </div>
                <div class="buttons">
                    <button class="btn-submit" @click="submit">Log in</button>
                    <div class="or-div">
                        <p class="separator"></p>
                        <p>or</p>
                        <p class="separator"></p>
                    </div>
                    <button class="btn-google">
                        <font-awesome-icon :icon="['fab', 'google']" /> Login with Google
                    </button>
                    <p @click="signUp" class="sign-up">don't have an account? sign up here</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

import { ref } from "vue";

const user = ref('');
const password = ref('');
const hidePassword = ref(false)

const changeStatus = () => {
    hidePassword.value = !hidePassword.value
}
const submitLogin = () => {
    console.log('hola')
}

const signUp = () => {
    console.log('hola')
}

const forgotPassword = () => {
    console.log('hola')
}

</script>

<style scoped>
.main-container {
    display: flex;
    height: 100vh;
    margin-top: 5%;
    align-items: center;
    flex-direction: column;
}

.login {
    margin-top: 5%;
    padding: 2%;
    border-radius: 15px;
    background-color: rgb(214, 214, 214);
    width: 30%;
}

.login form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1px;
}

.login form input {
    width: 80%;
    height: 4vh;
    border-radius: 10px;
    border: none;
    margin-top: 4%;
    font-size: medium;
}

.inputs {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.password-container {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.eye {
    position: absolute;
    top: 45%;
    right: 2%;
    cursor: pointer;
}

.fpass {
    font-size: small;
    width: 60%;
    align-self: flex-end;
    color: rgb(0, 83, 138);
    cursor: pointer;
    transition: color 0.5s ease;
    margin-bottom: 0;
}

.fpass:hover {
    color: rgb(0, 42, 70);
}

.or-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: rgb(83, 82, 82)
}

.separator {
    width: 20%;
    border: 0;
    border-top: 1px solid #161212;
    margin: 20px 0;
    margin: 0 5px;
}

.buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 20vh;
}

.btn-submit {
    height: 20%;
    border-radius: 15px;
    border: 1px solid transparent;
    font-size: medium;
    cursor: pointer;
    transition: background-color 0.5s ease, border 0.5s ease;
    color: white;
    background-color: rgb(57, 126, 48);
}

.btn-submit:hover {
    border: 1px solid black;
    background-color: rgb(49, 92, 44);
}

.btn-google {
    height: 20%;
    border-radius: 15px;
    border: 1px solid transparent;
    font-size: medium;
    cursor: pointer;
    transition: background-color 0.2s ease, border 0.5s ease;
    color: white;
    background-color: rgb(0, 105, 175);
}

.btn-google:hover {
    border: 1px solid black;
    background-color: rgb(0, 83, 138);
}

.sign-up {
    font-size: small;
    align-self: flex-end;
    color: rgb(10, 87, 0);
    transition: color 0.2s ease;
}

.sign-up:hover{
    color: rgb(3, 29, 0);
    cursor: pointer;
}
</style>