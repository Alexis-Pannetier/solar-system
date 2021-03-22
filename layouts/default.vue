<template>
  <div id="background">
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

#background {
  background-image: url('~/assets/images/galaxy-background.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  display: fixed;
}

#content {
  color: white;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 300;
  color: white;
  letter-spacing: 1px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.white {
  color: white !important;
}

.cursor {
  cursor: pointer;
}
</style>
