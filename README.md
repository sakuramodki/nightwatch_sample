# how to use
npmを使えるようにする
## mac
```
$ brew install npm
```

## centos
```
$ sudo yum install epel-release
$ sudo yum install nodejs
$ node -v
$ yum install -y npm --enablerepo=epel
```

## 環境を構築する
パッケージが入る
```
$ npm init
```

## 起動する
```
./node_modules/.bin/nightwatch -c ./night.conf.js samle.js
```
