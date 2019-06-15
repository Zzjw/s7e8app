<template>
    <div class="test">
        <p>{{ message }}</p>
        <p>
            <button @click="change">++</button>
        </p>
    </div>
</template>

<script>
export default {
  data: {
    message: 'first!'
  },
  methods: {
    change () {
      this.message = 'PRESS!!'
    }
  }
}
</script>

