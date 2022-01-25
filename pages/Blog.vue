<template>
  <div class="blog">
    <p></p>
    <div class="center">
      <div class="container">
        <h2><div class="title">MyBlog.</div></h2>
        <i class="bi bi-facebook"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
            /></svg
        ></i>
        <i class="bi bi-instagram"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
            /></svg
        ></i>
        <i class="bi bi-twitter"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            /></svg
        ></i>
      </div>
      <div>投稿フォーム</div>
      name:&nbsp;&nbsp;&nbsp;&nbsp;<input
        v-model="username"
        type="textarea"
        placeholder="name"
      /><br />
      <p></p>
      date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input
        v-model="date"
        type="date"
      /><br />
      <p></p>
      title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input
        v-model="title"
        type="text"
        placeholder="title"
      /><br />
      <p></p>
      message:<input
        v-model="message"
        type="textarea"
        class="inpit"
        placeholder="message"
        maxlength="300"
        cols="200"
        rows="100"
      /><br />
      <!-- <input type="file" /> -->
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button @click="up" class="submit">投稿</button>
    </div>
    <div class="titles">記事一覧</div>
    <div class="blogs">
      <div class="d-flex flex-column bd-highlight mb-3"></div>
      <div v-for="(blogg,index) in blog" :key="index">
        <div class="item">
          <h3>No.{{ index+ 1 }}</h3>
          <i class="bi bi-person-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg></i>
          &nbsp;&nbsp;{{ blogg.username }}&nbsp;&nbsp; {{ blogg.date }}<br />
          <h3>{{ blogg.title }}</h3>
          <div class="line"></div>
          <p></p>
          {{ blogg.message }}<br />
          <button @click="upcomment(blogg.id)" class="box">
            <i class="bi bi-plus">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
            </i>
          </button>
          <button @click="kesu(blogg.id)" class="box">
            <i class="bi bi-trash">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </i></button>
             {{iine}}
          <button @click="good(blogg.id)">
            <i class="bi bi-hand-thumbs-up">
              <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up"  viewBox="0 0 16 16">
                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
              </svg>
            </i>
          </button>
          <br />
          {{ comments.length }}件のコメント<br>
        
          <div v-if="show">
            comment:<input v-model="comment" type="text" />
            <button @click="addcomment">add</button>
          </div>
          <div v-if="comments.length != 1">
            コメント一覧
            <div v-for="item in comments" :key="item.comment">
              {{ item.comment }}
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
      blogs: [
        {
          username: '',
          date: '',
          title: '',
          message: '',
          comment:""
          
        },
      ],
      count: 1,
      show: false,
      comments: [
        {
          comment: '',
        },
      ],
      iine:0
    }
  },
  computed: {
    blog() {
      return this.$store.state.Blog
    }
  },
  created() {
    this.$store.dispatch('init')
  },
  methods: {
        independcomment(){
      return{
        comments:[
          {comment:""}
        ]
      }
    },
    good(id){
    this.$store.dispatch('goodcount',id)
    },
    upcomment(id) {
      this.show = !this.show
    },
    addcomment() {
      this.comments.push({
        comment: this.comment,
      })
      this.comment = ''
    },
    up() {
      alert(`投稿してもよろしいでしょうか`)
      this.$store.dispatch('add', {
        username: this.username,
        date: this.date,
        title: this.title,
        message: this.message,
        // count: this.count ++,
        good:0
      })
      this.username = ''
      this.title = ''
      this.message = ''
      this.date = ''
    },
    kesu(id) {
      alert(`削除してもよろしいでしょうか`)
      this.$store.dispatch('delete', id)
    },
  },
}
</script>

<style>
.blog {
  font-family: Meiyou, Georgia, 'Times New Roman', Times, serif;
}
.title {
  text-align: center;
  font-size: 110px;
}
.inpit {
  width: 500px;
  height: 400px;
}
.titles {
  text-align: center;
  font-size: 70px;
}
.container {
  display: flex;
}
.item {
  padding: 1em;
  margin: 2em 0;
  color: #5d627b;
  background: white;
  border-top: solid 10px #5d627b;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
}
.line {
  border-bottom: 1px solid black;
}
.submit {
  display: inline-block;
  background-color: #000;
  color: #fff;
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
}
.blogs {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin: auto;
}
.center {
  width: 400px;
  margin: auto;
}
.box {
  width: 35px;
  height: 35px;
  background: #dfddd7;
  border-radius: 50%;
}
</style>
