### 使用thrift框架写一个微服务

###### 具体方式为 将本机服务器作为多端服务器， 通过开放不同的端口接受系统消息。


##### 最终结果如图所示


![最终结果](document/result.png.jpg)


###测试时发现一些bug，目前在准备八股考试，暂时没时间修改。


```
1: 插入一个用户时，若在用户马上就排好时，会产生异常的bug。
2： 声明不够简练，没办法凸显出多线程的优势。
```
