<template>
  <div>
    <Header />
    <Nuxt id="content" />
  </div>
</template>

<style>
* {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

#content {
  background-color: #5352ed;
  margin: 0 auto;
  min-height: calc(100vh - 46px);
  text-align: center;
}

::selection {
  background-color: #3742fa;
}

.cursor {
  cursor: pointer;
}
</style>
