<template lang="html">
  <div>
    <div v-if="status"class="ui menu">
      <div class="item">
        <div class="ui primary button" @click="register">Sign up</div>
      </div>
      <div class="item">
        <div class="ui button" @click="login">Log-in</div>
      </div>
    </div>
    <div v-if="!status"class="ui menu">
      <!-- <div class="item"> -->
        <button type="button" @click="logOut">LogOut</button>
        <button type="button" id="articelcreate">Create</button>
      <!-- </div> -->
    </div>

    <div class="ui modal">
      <i class="close icon" @click="cancel"></i>
      <div class="content">
        <form class="ui form">
          <div class="field">
            <label>Username</label>
            <input type="text" v-model="username" placeholder="UserName">
          </div>
          <div class="field">
            <label>First Name</label>
            <input type="password" v-model="password" placeholder="Password">
          </div>
          <button type="button" v-if="action" class="ui button" @click="signUp">Submit</button>
          <button type="button" v-if="!action" class="ui button" @click="signIn">Login</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      status : true,
      action : true,
      username : '',
      password : ''
    }
  },
  methods : {
    logOut(){
      localStorage.clear()
      location.reload()
      console.log('logout');
    },
    register(){
      this.action = true
      console.log('regis');
    },
    login(){
      this.action = false
      console.log('login');
    },
    signIn(){
            action : true
      axios.post('http://localhost:3000/api/login',{
        username : this.username,
        password : this.password
      }).then((respon) =>{
        console.log(respon);
        let username = respon.data.username
        console.log(username);
        localStorage.setItem('username', username)
        this.username = ''
        this.password = ''
        location.reload()

      })
    },
    signUp(){
      action : true
      axios.post('http://localhost:3000/api/register',{
        username : this.username,
        password : this.password
      }).then((respon)=>{
        console.log(respon);
      })
      this.username = ''
      this.password = ''
    },
    cancel(){
      console.log('cancel');
      this.username = ''
      this.password = ''
    }
  },
  created(){
    if(localStorage.getItem('username')){
      this.status = false
    }
  }
}
</script>

<style lang="css">
</style>
