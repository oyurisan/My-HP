<template>
<div class="font">
<header> {{message}}</header>
<main>
<router-link to="/keireki">経歴</router-link>
<router-link to="/hobby">趣味嗜好</router-link>
</main>

</div>

</template>


<script>
export default{
  data(){
    return{
      message:`「私の説明書」`
    }
  }
}
</script>

<style>
.font{
  font-family:Meiyou,Georgia, 'Times New Roman', Times, serif
}
</style>