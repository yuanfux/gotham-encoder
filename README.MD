# gotham-encoder [![npm version](https://badge.fury.io/js/gotham-encoder.svg)](https://badge.fury.io/js/gotham-encoder) [![Build Status](https://travis-ci.org/yuanfux/gotham-encoder.svg?branch=master)](https://travis-ci.org/yuanfux/gotham-encoder)

## API
### encode(str)
#### 将文本转化为SG专属密文

```javascript

import gotham from 'gotham-encoder'

const encoded = gotham.encode('峰哥牛逼'); // 加密

console.log(encoded); // '饭皇抽了严峻,大球吸了扫地,神仆遇上人气,兆兆调侃烟头,峯䔅天生发发,枫哥哈罗捞趁'

```

### decode(str)
#### 解码密文
```javascript

const decoded = gotham.decode('饭皇抽了严峻,大球吸了扫地,神仆遇上人气,兆兆调侃烟头,峯䔅天生发发,枫哥哈罗捞趁'); // 解码

console.log(decoded); // '峰哥牛逼'

```

## License
MIT

<sub><sup><sup>免责声明: 用户以各种方式使用本软件（包括但不限于修改使用、直接使用、通过第三方使用）的过程中，不得以任何方式利用本软件直接或间接从事违反中国法律、以及社会公德的行为。软件的使用者需对自身行为负责，因使用软件引发的一切纠纷，由使用者承担全部法律及连带责任。作者不承担任何法律及连带责任。对免责声明的解释、修改及更新权均属于作者本人所有。</sup></sup></sub>