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

    // sendMessages call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
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

      // sendMessages call2
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
 
     // sendMessages call3
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
   
    // sendMessages call4
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
    
    // sendMessages call5
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
    
    // sendMessages call6
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
    
    // sendMessages call7
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

    // sendMessages call8
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

    // sendMessages call9
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

    // sendMessages call10
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

    // sendMessages call11
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

    // sendMessages call12
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

    // sendMessages call13
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

    // sendMessages call14
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

    // sendMessages call15
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
    
    // sendMessages call16
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
    
    // sendMessages call17
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
    
    // sendMessages call18
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
    
    // sendMessages call19
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

    // sendMessages call20
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

    // sendMessages call21
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

    // sendMessages call22
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

    // sendMessages call23
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

    // sendMessages call24
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

    // sendMessages call25
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

    // sendMessages call26
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

    // sendMessages call27
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

    // sendMessages call28
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

    // sendMessages call29
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

    // sendMessages call30
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

    // sendMessages call31
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

    // sendMessages call32
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

    // sendMessages call33
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

    // sendMessages call34
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

    // sendMessages call35
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

    // sendMessages call36
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

    // sendMessages call37
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
