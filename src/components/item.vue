<template>
  <nb-list-item>
    <touchable-opacity class="container" :active-opacity="0.5">
      <view class="score">
        <text class="score-text">{{data.id}}</text>
      </view>
      <view class="detail">
        <text class="title">{{data.title}}</text>
      </view>
    </touchable-opacity>
  </nb-list-item>
</template>

<script>

export default {
  props: {
    data: Object
  }
};
</script>

<style>
  .container {
    flex: 1;
    flex-direction: row;
    padding: 16;
  }
  .score {
    width: 40;
    height: 40;
    background-color: #fff;
    border-radius: 20;
    justify-content: center;
    align-items: center;
    margin-right: 16;
  }
  .score-text {
    color: #ff6600;
    font-weight: bold;
  }
  .detail {
    flex: 1
  }
  .name {
    color: #666;
    font-size: 12;
    margin-bottom: 6;
  }
  .title {
    color: #333;
    font-size: 14;
  }
</style>