window.onload = function (e) {
    liff.init(function () {
        getP();
    });
};

function getP(){
    var tipe = getParameterByName('type')
     if (tipe = 'sticker') {
// sendMessages call
    document.getElementById('HELLO').addEventListener('click', function () {
        liff.sendMessages([{
          type: "sticker",
          altText: "Sticker",
          template: {
             type: "sticker",
                 imageUrl: "https://stickershop.line-scdn.net/stickershop/v1/sticker/159360750/IOS/sticker_popup.png",
                 action: {
                     type: "uri",
                     uri: "line://shop/sticker/detail/13561"}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    }
}
