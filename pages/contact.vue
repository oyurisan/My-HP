<template>
  <div>
    <table>
      <tr>
        <td>
    <div class="font">
      <h5>
        <div>Contact</div>
        <div>お問い合わせ</div></h5>
      <div>Email:oyurisann68@gmail.com</div>
      <div>Tel:090-4209-1095</div>
      <div class="input-group mb-3">
        <input
          v-model="myname"
          type="text"
          placeholder="Name"
          class="name"
        />
      </div>
      <br />
      <div class="input-group mb-3">
        <input v-model="tel" type="number" 
        maxlength="13"
        placeholder="Tel" class="name">
      </div>
      <div class="input-group mb-3">
        <select
          v-model="age"
          class="name"
          aria-label="Default select example"
          aria-placeholder="your age"
        >
          <option selected>your age</option>
          <option value="10">10代</option>
          <option value="20">20代</option>
          <option value="30">30代</option>
          <option value="40">40代</option>
          <option value="50">50代</option>
          <option value="60">60代</option>
          <option value="70">70代</option>
          <option value="80">80代</option>
          <option value="90">90代</option>
        </select>
      </div>
      <br />
      <div class="input-group mb-3">
        <input
          v-model="title"
          type="text"
          placeholder="Title"
          aria-label="Username"
          aria-describedby="inputGroup-sizing-sm"
          class="name"
        />
      </div>
      <div class="input-group mb-3">
        <textarea
          id="exampleFormControlTextarea1"
          v-model="message"
          rows="3"
          class="name"
          placeholder="Message"
        ></textarea>
      </div>
      <input type="checkbox">メールマガジン配信を希望する
      <div v-if="show">
      <h4 class="complete">送信が完了しました。</h4>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <div class="container">
        <button class="submit" type="button" @click="add">Submit</button>
        <!-- <button class="btn btn-primary" type="button" @click="kuria">Cancel</button> -->
        </div>
      </div>
    </div>

    </td>
    <td></td>
    <td>
      <a><img src="~/assets/ossan.jpg" height="550px"></a>
    </td>
    </tr>
    <tr>
      <td>
         <a><img src="~/assets/map.jpg" height="550px"></a>
      </td>
      
      <td>
        <h3>住所・営業時間</h3><br>
        <p></p>
        <div>〒361-0057</div><br>
        <div>埼玉県行田市城西2-6-26</div>
        <p></p>
        <div>月曜〜木曜   9:00~18:00</div><br>3
        <div>金曜〜日曜   定休日</div>
      </td>
    </tr>

    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myname:'',
      tel:"",
      age:'',
      title: '',
      message:'',
      done:false,
      show:false
    }
  },
  created(){
    this.$store.dispatch('todos/init')
  },
  methods:{
    add(){
      alert(`この内容で送信しますか`)
      this.$store.dispatch('todos/add',{message:this.message,myname:this.myname,tel:this.tel,age:this.age,title:this.title,done:false})
      this.myname=""
      this.tel=""
      this.age=""
      this.title=""
      this.message=""
       this.show = !this.show
    },
    kuria(){
       this.myname=""
      this.tel=""
      this.age=""
      this.title=""
      this.message=""
    },
      toggle(todo){
      this.$store.dispatch('todos/toggle',todo)
  }
}
}
</script>

<style>
.w20 {
  width: 20%;
}
.font {
  font-family: Meiyou, Georgia, 'Times New Roman', Times, serif;
}
.container{
  display: flex;
}
 .name {
      display: block;
      width: 100%;
      height: 36px;
      border-width: 0 0 2px 0;
      border-color: #000;
      font-family: Lusitana, serif;
      font-size: 18px;
      line-height: 26px;
      font-weight: 400;
 }
   .submit{
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
   .complete{
     color: red;
   }
</style>
