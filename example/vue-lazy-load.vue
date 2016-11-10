<template>
  <div>
    <h2>Lazy Load</h1>
    <ul>
      <li class="lazyload-listitem" v-for="item in list">
        <img v-lazy-load="item" class="lazyload-image">
        <div class="description">
          lazy-load
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h2 {
    padding: 0 5%;
  }

  body {
    margin: 0;
    background: #eee;
  }
  .lazyload-listitem {
    position: relative;
  }
  .lazyload-image {
    width: 45%;
    height: 100px;
    padding: 10px 5%;
    float: left;
  }
  .description {
    float: left;
    height: 100px;
    padding: 10px 0;
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        list: [
          'b180678e57cb1b226c04888e7f244c20jpeg',
          '31e42634e29812e6594c98a89e922c60jpeg',
          '1c595c37272d3e554317dcec1e17a9f5jpeg',
          '785e478e4b26af74f4539c79f31fde80jpeg',
          'bdfb630636b444346e38cef6c59f6457jpeg',
          '7a5596ab03934612236f807b92906fd8jpeg',
          '2348b028e7ee67bac3c354d5e98f2f6ejpeg',
          'dac8838aa16b31e1898b584dfe847f49jpeg',
          '05f812bb9cfb8976d0f13f66e281b4e8jpeg',
          'b7110f270e19e67dc14d5df5a6caab37jpeg',
          '4b51d61c1471f639830969b34b776520jpeg',
          '753828831cc9000b52afc6515ee7128cjpeg',
          '77a1dec30800929f44230038db9fcbdfjpeg',
          '24c0c5acd4658987c12c0b53859a5b57jpeg',
          '381b2607600e933d437cf05644cb0960jpeg',
          'ea8f62903e25390a00d1f24b88923950jpeg',
          'f4ecc1ecdf01449620395a39274d7714jpeg',
          'b0e8fe21a14c2128cf67d8b8d1dca33bjpeg',
          'ba29e6f70ec5693d49fbf2b9a6172478jpeg',
          'b50a07ad553938d74eed376cc42aaf7fjpeg',
          'e62591a500bed16d8c62c7ea31225f03jpeg',
          '9621b0ed917e96681c2587ea2c2477aejpeg',
          '63eb65343a74f7893a14e2f7733e5107jpeg',
          'd6dc766244249310d35d739f5ae9038djpeg',
          '2f9a4b6b9cce83657e472fd3fa7da6d9jpeg',
          '8d05a4398dc8bc4ccb3bf1016fc88321jpeg',
          'ce7cb163067ba1c6cb42601df8f43b12png',
          'b423c05b4e9a0e9a61343ac55ca3a923jpeg'
        ]
      };
    },
    ready() {

    }
  };
</script>
