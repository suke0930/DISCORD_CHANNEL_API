# DISCORD_CHANNNEL_API
### ENGLISH IS DOWN IN PAGE
websocket入力を使い簡単にdiscordのチャンネルにメッセージを送信することができるAPIを提供するサーバーです。
付属のライブラリには簡易的にdisocordにbotのトークンでログインする機能があります。
## 使い方
conf.jsonにまずtokenを貼り、portを決めた後追加したい項目をあらたにオブジェクトとして作成し、cid(channel id)を指定してください。
オブジェクトのキーの名前がそのままapiの呼び出し名になります。
conf.json内のテンプレートをコピーして使うことを推奨します。
## APIの使い方
```
以下の形式でwebsocketでsendすることにより利用可能です。
    ws.send(JSON.stringify({ type: "zisin", message: "test" }));
```
typeで指定したものがそのままconf内の指定名に直結します。
詳しくはcli.jsを参考にしてください。

# ENGLISH

# DISCORD_CHANNEL_API
### english is down in page
This server provides an API that allows you to easily send messages to a discord channel using websocket input.
The included library provides a simple way to login to discord with bot token.
## Usage
First, paste the token into conf.json, then create a new object with the items you want to add, and specify the cid (channel id).
The key name of the object will be used as the API call name.
## How to use API
````
You can use it by sending with websocket in the following format.
    ws.send(JSON.stringify({ type: "zisin", message: "test" }));
````
The type specified directly corresponds to the name specified in the conf.
Please refer to cli.js for details.
