# ylib
This is Ylib
At present, the official documentation of this module is only available in Chinese, if you are a foreign language user, use translation software to make do with it.

devtoolstheno：
# 使用说明

禁止打开DevTools的一个简单的js库

## 使用步骤

1. 在您的项目中引入 CryptoJS 库和该 JavaScript 库。
2. 在需要的地方添加以下代码，并替换 `'允许调试key的sha256数值'` 为您所允许的调试密码的 SHA256 数值。

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
<!-- 使用地址1 -->
<script src="https://mirror.ghproxy.com/https://raw.githubusercontent.com/0x6768/ylib/main/devtoolstheno.min.js"></script>
<!-- 使用地址2 -->
<script src="https://raw.githubusercontent.com/0x6768/ylib/main/devtoolstheno.min.js"></script>
<!-- 使用地址3 -->
<script src="https://cdn.jsdelivr.net/gh/0x6768/ylib/devtoolstheno.min.js"></script>

<script>
    performKeyValidation('允许调试key的sha256数值');
</script>
```
## 你可以使用以下网站生成sha256数值
https://www.jyshare.com/front-end/706/
https://emn178.github.io/online-tools/sha256.html
### 声明
本js库 完全免费开源:[开源地址][1] 开源协议采用：GPL v3.0
注意检测概率不是100%，有概率逃过检测
本库有可能会有问题，请提交issue让我进行解决
如果你自己要调试，请在你网站url的后面跟上?key=允许的调试密码

#### 作者信息
邮箱:mystery128@qq.com
Github:[点击这里][2]
Bilibili:[点击这里][3]
QQ:2540797494
个人博客：[点击这里][4]


  [1]: https://github.com/0x6768/ylib
  [2]: https://github.com/0x6768
  [3]: https://space.bilibili.com/493847518?spm_id_from=..0.0
  [4]: https://blog.yang233.eu.org/
