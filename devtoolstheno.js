function performKeyValidation(passwordHash) {
    var isDevToolsOpen = false;

    function isDevTools() {
        const handler = setInterval(() => {
            const before = new Date();
            debugger;
            const after = new Date();
            const cost = after.getTime() - before.getTime();
            if (cost > 100) {
                consoleOpenCallback();
                clearInterval(handler);
            }
        }, 1000);
    }

    function checkDevToolsOpen() {
        var widthThreshold = window.outerWidth - window.innerWidth > 160;
        var heightThreshold = window.outerHeight - window.innerHeight > 160;
        var orientation = widthThreshold ? 'vertical' : 'horizontal';

        if (!(heightThreshold && widthThreshold) &&
            ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
            isDevToolsOpen = true;
            return true;
        } else {
            isDevToolsOpen = false;
        }
    }

    // Check if DevTools is open using a custom console message
    let element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            return true;
        }
    });
    console.log('%cCheck DevTools', 'font-size: 1px;');

    // Check if DevTools is open using a custom debug message
    let checkDevToolsElement = document.createElement('checkDevTools');
    Object.defineProperty(checkDevToolsElement, 'id', {
        get: function () {
            return true;
        }
    });
    console.debug(checkDevToolsElement);

    // Perform key validation
    window.onload = function() {
        // 检查本地存储中是否已保存验证状态
        var isKeyVerified = sessionStorage.getItem('isKeyVerified');
        
        if (isKeyVerified) {
            // 如果已验证通过，则在控制台打印消息
            console.log("Key already verified!");
        } else {
            // 获取URL中的key参数
            var urlParams = new URLSearchParams(window.location.search);
            var key = urlParams.get('key');
            
            // 定义特定的密码，并进行MD5加密
            var Password = passwordHash;
            var keyMD5 = CryptoJS.SHA256(key).toString();

            // 检查key参数是否等于特定的密码
            if (keyMD5 !== Password) {
                // 如果不等于，则跳转到404页面
                // window.location.href = '404.html';
                console.log("Error");
                setInterval(function() {
                    if (isDevToolsOpen || checkDevToolsOpen()) {
                        console.log("Detected unauthorized debugging");
                        document.writeln("检测到非法调试,请关闭DevTools,然后刷新网页<br>");
                    }
                }, 1000); // 每隔一秒检测一次
            } else {
                // 如果验证通过，则将验证状态保存到本地存储
                sessionStorage.setItem('isKeyVerified', 'true');
                
                // 删除URL中的key参数
                window.history.replaceState({}, document.title, window.location.pathname);
                
                // 在控制台打印消息
                console.log("Key verified successfully!");
            }
        }
    };
}
