var fs = require('fs');

module.exports = {
  'Demo test Yahoo' : function (client) {
    client
      // ヤフーを開く
      .url('http://www.yahoo.co.jp')
      .pause(500)
      .click('#pbhello a')

      // ログインページ
      .pause(500)
      .waitForElementVisible('body', 1000)
      .setValue('input[name=login]', '********') // id
      .pause(100)

      .click('#btnNext')
      .pause(100)
      .waitForElementVisible('input[name=passwd]', 1000)
      .setValue('input[name=passwd]', '********') //password
      .pause(100)
      .click('#btnSubmit')

       // topに戻ってくる
      .pause(500)
      .waitForElementVisible('body', 1000)
      .click('.Personalbox__noticeItem a:nth-child(2)')

      // tpointを取得
      .pause(500)
      .waitForElementVisible('body', 1000)

      // tpointを表示
      .execute(function(msg) {
        return document.getElementsByClassName('ptsPoint')[0].innerHTML;
      }, [], function (result) {
        console.log(result.value);

        // T pointをファイルに書き込み
        fs.writeFile('out.txt', JSON.stringify(result));
      })

      .pause(1000)
      .end();
    ;
    /**
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'rembrandt van rijn')
      .pause(5000)
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('ol#rso li:first-child',
        'Rembrandt - Wikipedia')
      .end();
      **/
  }
};
