class MyHeader extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // 使用模板和样式
        shadow.innerHTML = `
            <style>
                body {
                    font-family: Helvetica, sans-serif;
                    margin: 0;
                    padding: 0;
                    display: block;
                    background-color: none;
                    width: 100%;
                    height: 100%;
                }

                iframe {
                    border: 0px;
                    margin: 0px;
                    padding: 0px;
                }
                h1 {
                    color: #000000;
                }

                h2 {
                    margin: 0;
                    font-size: 12px;
                    font-weight: 400;
                }

                @media screen and (min-width: 1000px) {
        /* 菜单样式 */
        .menu {
            position: absolute;
            display: flex;
            justify-content: space-around;
            list-style: none;
            padding: 10px 10px;
            margin-block-start: 0px;
            margin-block-end: 0px;
            height:22px;
        }

        .menu-item {
            display: inline-block;
            align-content: center;
            margin-right: 30px;
        }

        #menu-toggle {
        display: none;
    }
}

                /* 移动端样式 */
                @media screen and (max-width: 1000px) {
                    .menu {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                        overflow: hidden;
                        background-color: none;
                        position: absolute;
                        top: 42px;
                        width: 100vw;
                        height: 100vh;
                        max-width: 600px;
                        padding: 0px 0;
                        opacity: 0;
                        pointer-events: none;
                        transition: opacity 0.25s ease;
                    }

                    .menu.show {
                        opacity: 1;
                        pointer-events: all;
                    }

                    .menu-item {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        border: 1px solid #000000;
                        height: 130px;
                        margin-bottom: -1px;
                        margin-left: 0px;
                        margin-right: 0;
                    }

                    .menu-item2 {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        border: 0px solid #ddd;
                        height: 40px;
                        margin-bottom: -1px;
                        margin-left: 0px;
                        margin-right: 0;
                    }

                    #menu-toggle {
                        display: block;
                        cursor: pointer;
                        position: absolute;
                        top: 12.5px;
                        left: 12.5px;
                        height: 17px;
                        width: auto;
                    }

                    h2 {
                        margin-left: 30px;
                    }
                }

                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    z-index: 1000;
                    background-color: white;
                }
            </style>

            <div class="header">
                <!-- 汉堡按钮 -->
                <img id="menu-toggle" src="icons/hamburger.png" alt="Menu">

                <!-- 菜单项 -->
                <ul class="menu">
                    <li class="menu-item"><h2>WEARS WEARS WEARS WEARS WEARS WEARS WEARS<br>WEARS WEARS WEARS WEARS WEARS WEARS WEARS<br>WEARS WEARS WEARS WEARS WEARS WEARS WEARS</h2></li>
                    <li class="menu-item"><h2>HOME DECOR HOME DECOR HOME DECOR HOME DECOR<br>HOME DECOR HOME DECOR HOME DECOR HOME DECOR<br>HOME DECOR HOME DECOR HOME DECOR HOME DECOR</h2></li>
                    <li class="menu-item"><h2>SCULPTURES SCULPTURES SCULPTURES SCULPTURES<br>SCULPTURES SCULPTURES SCULPTURES SCULPTURES<br>SCULPTURES SCULPTURES SCULPTURES SCULPTURES</h2></li>
                    <li class="menu-item"><h2>ACCESSORIES ACCESSORIES ACCESSORIES<br>ACCESSORIES ACCESSORIES ACCESSORIES<br>ACCESSORIES ACCESSORIES ACCESSORIES</h2></li>
                    <li class="menu-item2"><h2></h2></li>
                    <li class="menu-item2"><h2>About</h2></li>
                    <li class="menu-item2"><h2>Contact</h2></li>
                    <li class="menu-item2"><h2>Tracking</h2></li>
                </ul>

                <!-- Logo -->
                <div style="width:100vw; height:auto; display:flex; justify-content: center; padding-top: 9px;padding-bottom:11px; background-color: white;">
                    <img src="logo.png" style="width:130px;height:auto">
                </div>
            </div>

            <div style="width:100%;height: 42px;"></div>
        `;
    }

    connectedCallback() {
        // 在 `connectedCallback` 中设置点击事件
        const menu = this.shadowRoot.querySelector('.menu');
        const toggleButton = this.shadowRoot.querySelector('#menu-toggle');

        toggleButton.addEventListener('click', () => {
            menu.classList.toggle('show');
            if (menu.classList.contains('show')) {
                toggleButton.src = 'icons/close.png'; // 切换为关闭图标
            } else {
                toggleButton.src = 'icons/hamburger.png'; // 切换为汉堡图标
            }
        });
    }
}

// 注册自定义元素
customElements.define('my-header', MyHeader);