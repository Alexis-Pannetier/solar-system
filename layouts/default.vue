<template>
  <div id="background">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
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
body {
  color: white;
}

#background {
  background-image: url('~/assets/images/galaxy-background.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  display: fixed;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
