<template>
    <div class="layout-guide">
        <h4><router-link to="/">Robonomics dApp Vue.js 3.0 UI Library</router-link></h4>
        <router-view/>
    </div>
</template>

<style>

.layout-guide {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem;
}

.layout-guide h1 {
    text-align: center;
    margin-bottom: 3rem;
  }

.layout-guide p,
.layout-guide h2,
.layout-guide h3,
.layout-guide h4,
.layout-guide h5,
.layout-guide li {
    margin-bottom: 1rem;
  }

.layout-guide section {
    margin: 4rem auto;
}

.layout-guide section section {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}

.layout-guide .grid-8, .layout-guide .grid-6 {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: var(--space)
}

.layout-guide .grid-6 {
    grid-template-columns: repeat(6, 1fr);
}

.layout-guide h4 {
    text-align: center;
    }

.label-example {
    display: block;
    white-space: nowrap;
}

.label-example input[type=text], .label-example select {
    background: #fff;
    display: inline-block;
}
code {
  background: rgb(200, 218, 250);
  padding: 2px;
  margin: 2px;
 }

 .label-example > *:not(:last-child) {
    margin-right: 10px;
 }
 
 blockquote {
    background-color: aliceblue;
    padding: 1.5rem;
    margin: 1.5rem 0;
 }
</style>
