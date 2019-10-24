window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;

    // openWindow call
    document.getElementById('openwindowbutton').addEventListener('click', function () {
        liff.openWindow({
            url: 'https://line.me'
        });
    });

    // closeWindow call
    document.getElementById('closewindowbutton').addEventListener('click', function () {
        liff.closeWindow();
    });

    // sendMessages1
    document.getElementById('sendmessagebutton1').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360750/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages2
    document.getElementById('sendmessagebutton2').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360751/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
 
    // sendMessages3
    document.getElementById('sendmessagebutton3').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360752/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
   
    // sendMessages4
    document.getElementById('sendmessagebutton4').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360753/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
    
    // sendMessages5
    document.getElementById('sendmessagebutton5').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360754/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
    
    // sendMessages6
    document.getElementById('sendmessagebutton6').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360758/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
    
    // sendMessages7
    document.getElementById('sendmessagebutton7').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360767/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages8
    document.getElementById('sendmessagebutton8').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360773/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages9
    document.getElementById('sendmessagebutton9').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/71941530/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/12093'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages10
    document.getElementById('sendmessagebutton10').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/216150840/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8575240'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages11
    document.getElementById('sendmessagebutton11').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14846/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/946'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages12
    document.getElementById('sendmessagebutton12').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/238477772/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9265797'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages13
    document.getElementById('sendmessagebutton13').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14848/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/946'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages14
    document.getElementById('sendmessagebutton14').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/28688221/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10488'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages15
    document.getElementById('sendmessagebutton15').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/240516120/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15737'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
    
    // sendMessages16
    document.getElementById('sendmessagebutton16').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/231666042/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15412'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
    
    // sendMessages17
    document.getElementById('sendmessagebutton17').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/6412041/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4819'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
    
    // sendMessages18
    document.getElementById('sendmessagebutton18').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/6412048/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4819'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
    
    // sendMessages19
    document.getElementById('sendmessagebutton19').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/223756508/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15235'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages20
    document.getElementById('sendmessagebutton20').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/216150869/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8575240'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages21
    document.getElementById('sendmessagebutton21').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/218806399/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15065'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages22
    document.getElementById('sendmessagebutton22').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/229635565/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15348'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages23
    document.getElementById('sendmessagebutton23').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/44666880/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/11329'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages24
    document.getElementById('sendmessagebutton24').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/30505567/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10597'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages25
    document.getElementById('sendmessagebutton25').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/12012493/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1296847'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages26
    document.getElementById('sendmessagebutton26').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122025/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages27
    document.getElementById('sendmessagebutton27').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122027/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages28
    document.getElementById('sendmessagebutton28').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122029/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages29
    document.getElementById('sendmessagebutton29').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122031/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages30
    document.getElementById('sendmessagebutton30').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122033/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages31
    document.getElementById('sendmessagebutton31').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122035/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages32
    document.getElementById('sendmessagebutton32').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122037/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages33
    document.getElementById('sendmessagebutton33').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122047/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages34
    document.getElementById('sendmessagebutton34').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122049/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages35
    document.getElementById('sendmessagebutton35').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122051/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages36
    document.getElementById('sendmessagebutton36').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122053/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages37
    document.getElementById('sendmessagebutton37').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122055/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages38
    document.getElementById('sendmessagebutton38').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697590/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages39
    document.getElementById('sendmessagebutton39').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697591/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages40
    document.getElementById('sendmessagebutton40').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697592/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages41
    document.getElementById('sendmessagebutton41').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697593/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages42
    document.getElementById('sendmessagebutton42').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697594/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages43
    document.getElementById('sendmessagebutton43').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697595/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages44
    document.getElementById('sendmessagebutton44').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697596/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages45
    document.getElementById('sendmessagebutton45').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697597/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages46
    document.getElementById('sendmessagebutton46').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697598/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages47
    document.getElementById('sendmessagebutton47').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697599/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages48
    document.getElementById('sendmessagebutton48').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697600/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages49
    document.getElementById('sendmessagebutton49').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697601/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages50
    document.getElementById('sendmessagebutton50').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697602/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages51
    document.getElementById('sendmessagebutton51').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697603/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages52
    document.getElementById('sendmessagebutton52').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697604/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages53
    document.getElementById('sendmessagebutton53').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697605/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages54
    document.getElementById('sendmessagebutton54').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697606/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages55
    document.getElementById('sendmessagebutton55').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697607/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages56
    document.getElementById('sendmessagebutton56').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697608/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages57
    document.getElementById('sendmessagebutton57').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697609/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages58
    document.getElementById('sendmessagebutton58').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697610/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages59
    document.getElementById('sendmessagebutton59').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697611/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages60
    document.getElementById('sendmessagebutton60').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697612/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages61
    document.getElementById('sendmessagebutton61').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697613/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

























































































































    // get access token
    document.getElementById('getaccesstoken').addEventListener('click', function () {
        const accessToken = liff.getAccessToken();
        document.getElementById('accesstokenfield').textContent = accessToken;
        toggleAccessToken();
    });

    // get profile call
    document.getElementById('getprofilebutton').addEventListener('click', function () {
        liff.getProfile().then(function (profile) {
            document.getElementById('useridprofilefield').textContent = profile.userId;
            document.getElementById('displaynamefield').textContent = profile.displayName;

            const profilePictureDiv = document.getElementById('profilepicturediv');
            if (profilePictureDiv.firstElementChild) {
                profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
            }
            const img = document.createElement('img');
            img.src = profile.pictureUrl;
            img.alt = "Profile Picture";
            profilePictureDiv.appendChild(img);

            document.getElementById('statusmessagefield').textContent = profile.statusMessage;
            toggleProfileData();
        }).catch(function (error) {
            window.alert("Error getting profile: " + error);
        });
    });
}

function toggleAccessToken() {
    toggleElement('accesstokendata');
}

function toggleProfileData() {
    toggleElement('profileinfo');
}

function toggleElement(elementId) {
    const elem = document.getElementById(elementId);
    if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}
