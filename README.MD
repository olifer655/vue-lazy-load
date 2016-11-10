# vue-lazy-load

当图片随着可视区的变化而变化


```HTML
  <ul>
    <li v-for="item in list">
      <img v-lazy-load="item">
      <div>
        lazy-load
      </div>
    </li>
  </ul>
```

```JavaScript
  export default {
    data() {
      return {
        list: [
          'b180678e57cb1b226c04888e7f244c20jpeg',
          '31e42634e29812e6594c98a89e922c60jpeg',
          '1c595c37272d3e554317dcec1e17a9f5jpeg',
        ]
      };
    }
  };
```

# Options



## Development

|Command|Description|
|---|---|
|npm run build|Build in umd format|

# License

MIT
