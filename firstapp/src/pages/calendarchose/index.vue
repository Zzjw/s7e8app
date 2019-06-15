<template>
  <div class="mpvue-picer">
    <!-- <button @click="showPicker">添加日程</button> -->
    <goTop/>
    <click-counter/>
    <button type="default" @click="showDatePicker">添加备忘</button>
    <mpvue-picker ref="mpvuePicker" :mode='mode' :deepLength="deepLength" :pickerValueDefault="TimePickerValueDefault" :themeColor="themeColor" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="TimePickerValueDefault"></mpvue-picker>
  </div>
</template>

<script>
import mpvuePicker from 'mpvue-picker'
import clickCounter from '@/components/click-counter'
import GoTop from '@/components/goTop'
import {post,get} from '@/utils/request'
export default {
  components: {
    mpvuePicker,
    GoTop,
    clickCounter
  },
  data () {
    return {
      mode: 'selector',
      TimePickerValueDefault: [0, 0, 0]
    }
  },
  methods: {
    // 确定的时候运行这个
    onConfirm (e) {
      console.log(e)
      post('/date',e.value)
    },
    // 滚动的时候运行这个
    onChange (e) {
      console.log(e)
    },
    // 取消的时候运行这个
    onCancel (e) {
      console.log(e)
    },
    // 日期选择
    showDatePicker () {
      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let strDate = date.getDate()
      this.TimePickerValueDefault = [year, month, strDate]
      this.mode = 'dateSelector'
      this.themeColor = '#8D0177'
      this.$refs.mpvuePicker.show()
    }
  }
}
</script>

<style>

</style>