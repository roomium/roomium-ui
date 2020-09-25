<template>
  <div>
    <!-- navbar-link start -->
    <div>
      <b-nav align="right" class="wrapper-nav">
        <b-nav-item class="item-nav mr-3">Home</b-nav-item>
        <b-nav-item class="item-nav mr-3">Contact</b-nav-item>
        <b-nav-item class="item-nav mr-3">About</b-nav-item>
        <!-- cant use b-nav-item so i using span -->
        <b-nav-item>
          <span class="login-nav" style="color: white"> Login </span>
        </b-nav-item>
      </b-nav>
      <hr />
    </div>
    <!-- navbar-link start end -->
    {{/** Nav */}}
    {{/** Logo */}}
    {{/** UL */}}
    {{/** Menu List ada dropdown jugak yak */}}
    {{/** Login atau register */}}
  </div>
</template>

<script>
export default {
  name: "Header", // karena auto import kalo komponen kasih nama kek gini ya , lebih bagus pagesnya juga kasih name.
};
</script>

<style scoped>
/* navbar-link-start  */
.wrapper-nav {
  margin: 10px;
}
.item-nav {
  /* margin: 0 30px; */
  font-size: 19px;
  letter-spacing: 1px;
  color: #07689f;
}
.login-nav {
  -webkit-text-stroke: 1px #ffffff;
  letter-spacing: 1px;
  background-color: #07689f;
  /* color: #ffffff; */
  border-radius: 10px;
  padding: 7px 25px;
  justify-content: center;
  text-align: center;
  margin-right: 150px;
  font-size: 19px;
}
/* navbar-link-end  */
</style>