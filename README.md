# webappdev

## 0. このコンテンツについて

- 対象

    - プログラミング初心者

    - プログラミングでウェブアプリケーションを作ってみたい人

- 前提

    - ウェブブラウザは FireFox または Chrome

    - テキストエディタが使える

    - コマンド入力ができる

    - ある程度から先は自分で勉強して学ぶ

- 範囲

    - HTML / JavaScript / CSS（フロントエンド）

    - Node.js（バックエンド）

    - テンプレート

    - HTTP / REST API

    - JSON

    - AJAX / jQuery

- 範囲外

    - クラウド / IaaS / PaaS

    - データベースなどとの外部連携

    - package.json

    - Git などの各種コマンド


---

## 1. ローカル HTML

- ローカルシステム内で HTML (index.html)を作ってブラウザで表示

    - HTML / JavaScript / css

    - JavaScript はシンプルなもの

        - jQuery を使って現在時刻を表示するが、jQuery の説明は後半で

        - ここでは $('#id').html( xxx ) で値を動的に変えることができる、程度

    - HTML は表データとフォームを含むものにする

      - フォームの送信先は POST /data

- 「ワードやエクセル」との比喩

    - ローカルファイルシステム

    - 共有するには共有サーバーが必要

---

## 2. Node.js 

- サーバーサイドの JavaScript 

    - これを使うと公開／共有できる

    - 「サーバーを使って共有する」イメージを説明

- npm を説明

    - Express

        - ``$ npm install express``

- 静的ファイルを公開するだけのアプリを作る


---

## 3. テンプレート化

- テンプレート化することで「見た目」と「ロジック」を分離する

    - 共同作業がしやすくなる

- EJS 

    - ``$ npm install ejs``

    - 静的ファイル(index.html)を拡張子だけ変えて(index.ejs)そのまま使う

- GET / のハンドラを作る

---

## 4. HTTP / REST API

- HTTP を説明

    - GET/POST/PUT/DELETE

    - Content-Type

    - HTTP Status

    - REST API

- POST /data のハンドラを作る

    - bodyParser

        - ``$ npm install body-parser``

    - メモリ配列に格納するだけ

    - 送信データをそのまま返す

        - JSON は次回

- フォームからデータを登録して動くことを確認

- この時点で２つのハンドラが存在

---

## 5. JSON

- JSON を説明

    - データの型、配列

    - JSON オブジェクト、JSON 配列

- GET /alldata のハンドラを作る

    - メモリ配列をそのまま JSON 配列で返す

- フォームからいくつかデータを登録し、ブラウザから /alldata を参照

- この時点で３つのハンドラが存在

---

## 6. AJAX / jQuery

- AJAX を説明

    - 同期処理／非同期処理

    - SPA の実現

    - jQuery 

- index.ejs / my.js の改良

    - index.ejs 内のテーブルの内容を空にする

    - index.ejs ロード時に AJAX で GET /alldata を実行して、その結果を使ってテーブルを描画する

    - フォームから POST /data する処理を AJAX で非同期に実行して、実行後、再度 AJAX で GET /alldata を実行してテーブルを再描画する

    - アドレスバーは常に変わらない（ SPA の実現）

---

## 7. 仕上げ

- ハンドラを追加／更新

    - DELETE /data を追加してレコードを削除できるようにする

    - POST /data を更新して、すでにデータが存在している国に対する処理の場合は更新、そうでない場合は新規追加となるようにする

- AJAX を追加

    - 「編集」ボタンをクリックしたら、該当データを最下行に代入して編集可能にする

    - 「削除」ボタンをクリックしたら、確認メッセージを出した上で削除し、画面を再更新する


## Licensing

This code is licensed under MIT.

https://github.com/dotnsf/webappdev/blob/master/LICENSE

## Copyright

2018 K.Kimura @ Juge.Me all rights reserved.



