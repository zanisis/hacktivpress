<template lang="html">
  <div v-if="status">
    <div v-for="(articel, index) in articels" style="padding:5px">
      <div style="text-align:left" class="ui attached segment left">
        <div class="">
          <Label>Author : </Label> {{articel.author}}
          <br>
          <Label>Title : </Label> {{articel.title}}
          <br>
          <Label>Content : </Label> {{articel.content}}
          <br>
          <Label>Category : </Label> {{articel.category}}
        </div>
        <div class="item" style="text-align:right">
          <div class="ui button red basic icon" @click="deleteIdArticel(articel._id)"><i class="trash icon"></i></div>

          <button type="button" @click="getEditArticel(articel._id)">Edit</button>
          <button type="button" @click="showArticel(articel._id)">Show</button>
        </div>
      </div>
    </div>

    <div class="ui small modal">
      <div class="ui icon header">
        {{ content }}
      </div>
      <div class="content">
        <div class="ui form">
          <div class="field">
            <div class="two fields">
              <div class="field">
                <label>Title</label>
              </div>
              <div class="field">
                <label>Category</label>
              </div>
            </div>
            <div class="two fields">
              <div class="field">
                <input type="text" v-model="dataArticels.title" placeholder="Your title">
              </div>
              <div class="field">
                <input type="text" v-model="dataArticels.category" placeholder="Your Category">
              </div>
            </div>
          </div>
          <div class="field">
            <label>Your Content</label>
            <div class="fields">
              <textarea name="name" rows="8" cols="80" v-model="dataArticels.content"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="actions">
        <div class="ui red cancel inverted button" @click="cancel">
          <i class="remove icon"></i>
          No
        </div>
        <div v-if="CreateOrUpdate && show" class="ui green ok inverted button" id="submit" @click="submit">
          <i class="checkmark icon"></i>
          Submit
        </div>
        <div v-if="!CreateOrUpdate && show" class="ui green ok inverted button" id="submit" @click="update(dataArticels._id)">
          <i class="checkmark icon"></i>
          Update
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      content : 'Input Your Articles',
      show : true,
      CreateOrUpdate : true,
      status : false,
      articels : [],
      author : '',
      dataArticels : {
        title : '',
        content : '',
        category : ''
      }
    }
  },
  methods:{
    update(id){
      console.log(id);
      axios.put('http://localhost:3000/api/articels/'+id,{
        author : this.author,
        title : this.dataArticels.title,
        content : this.dataArticels.content,
        category : this.dataArticels.category
      }).then((response)=>{
        console.log(response.data);
      })
      $('.ui.small.modal')
      .modal('close')
      location.reload()
    },
    submit(){
      console.log(this.dataArticels);
      axios.post('http://localhost:3000/api/articels',{
        author : this.author,
        title : this.dataArticels.title,
        content : this.dataArticels.content,
        category : this.dataArticels.category
      }).then((response)=>{
        console.log(response);
        this.dataArticels = {
          title : '',
          content : '',
          content : '',
          category : ''
        }
        location.reload()
      })
    },
    cancel(){
      this.dataArticels = {
        title : '',
        content : '',
        category : ''
      }
      $('.ui.small.modal')
      .modal('close')
    },
    deleteIdArticel(id){
      axios.delete('http://localhost:3000/api/articels/'+id).then((response)=>{
        console.log(response);
      })
      location.reload()
    },
    getEditArticel(id){
      console.log(id);
      axios.get('http://localhost:3000/api/articels/'+id).then((response)=>{
        console.log(response.data);
        this.author = response.data.author
        this.CreateOrUpdate = false
        this.dataArticels = {
          _id : response.data._id,
          title : response.data.title,
          content : response.data.content,
          category : response.data.category
        }
        $('.ui.small.modal')
        .modal('show')
      })
    },
    showArticel(id){
      console.log('masuk');
      this.show = false
      axios.get('http://localhost:3000/api/articels/'+id).then((response)=>{
        console.log(response.data);
        this.author = response.data.author
        this.CreateOrUpdate = false
        this.dataArticels = {
          title : response.data.title,
          content : response.data.content,
          category : response.data.category
        }
      })
      $('.ui.small.modal')
      .modal('show')
    }
  },
  created() {
    console.log('main', this.status);
    if(localStorage.getItem('username')){
      this.author = localStorage.getItem('username')
      this.status = true
      axios.get('http://localhost:3000/api/articels').then((response)=>{
        console.log(response, 'articels');
        this.articels = response.data
      })
    }

  }
}
</script>

<style lang="css">
</style>
