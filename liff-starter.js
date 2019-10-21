window.onload = function (e) {
    liff.init(function () {
        getP();
    });
};

// sendMessages call
    document.getElementById('HELLO').addEventListener('click', function () {
        liff.sendMessages([{
            type: "HELLO",
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
