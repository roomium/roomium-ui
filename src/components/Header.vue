<template>
  <div>
    <!-- navbar-link start -->
    <div>
      <b-nav align="right" class="wrapper-nav">
        <b-nav-item class="item-nav mr-3">Home</b-nav-item>
        <b-nav-item class="item-nav mr-3">Link</b-nav-item>
        <b-nav-item class="item-nav mr-3">Another Link</b-nav-item>
        <!-- cant use b-nav-item so i using span -->
        <b-nav-item>
          <span class="login-nav" style="color:white;">Login</span>
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
  color: #2ec1ac;
}
.login-nav {
  background-color: #2ec1ac;
  color: white !important;
  border-radius: 10px;
  padding: 7px 25px;
  justify-content: center;
  text-align: center;
  /* margin-bottom: 2px; */
  margin-right: 150px;
  /* padding-bottom: -3px; */
  font-size: 19px;
}
/* navbar-link-end  */
</style>