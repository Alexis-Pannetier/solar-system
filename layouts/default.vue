<template>
  <div>
    <Header />
    <Nuxt id="content" />
    <Footer />
  </div>
</template>

<style>
* {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

html {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

#content {
  background-color: #5352ed;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}

.cursor {
  cursor: pointer;
}
</style>
