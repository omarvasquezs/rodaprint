(function( $ ) {
    "use strict";

    // Script for whatsapp and fb messenger widget icon
    $(document).ready(function() {
        var zaloWidgetInterval;
        var tawkToInterval;
        var skypeWidgetInterval;
        var lcpWidgetInterval;
        var closePopupTimeout;
        var lzWidgetInterval;
        var arcuOptions;
        var arCuMessages = ["\u00a1Hola!", "\u00bfTienes alguna pregunta?", "Por favor use este bot\u00f3n<br \/>\n\u00a1para contáctarnos!"];
        var arCuLoop = false;
        var arCuCloseLastMessage = false;
        var arCuPromptClosed = false;
        var _arCuTimeOut = null;
        var arCuDelayFirst = 2000;
        var arCuTypingTime = 2000;
        var arCuMessageTime = 4000;
        var arCuClosedCookie = 0;
        var arcItems = [];
        window.addEventListener('load', function () {
            jQuery('#arcontactus').remove();
            var $arcuWidget = jQuery('<div>', {
                id: 'arcontactus'
            });
            jQuery('body').append($arcuWidget);
            arCuClosedCookie = arCuGetCookie('arcu-closed');
            jQuery('#arcontactus').on('arcontactus.init', function () {
                if (arCuClosedCookie) {
                    return false;
                }
                arCuShowMessages();
            });
            jQuery('#arcontactus').on('arcontactus.closeMenu', function () {
                arCuCreateCookie('arcumenu-closed', 1, 1);
            });
            jQuery('#arcontactus').on('arcontactus.openMenu', function () {
                clearTimeout(_arCuTimeOut);
                if (!arCuPromptClosed) {
                    arCuPromptClosed = true;
                    jQuery('#arcontactus').contactUs('hidePrompt');
                }
            });
            jQuery('#arcontactus').on('arcontactus.openCallbackPopup', function () {
                clearTimeout(_arCuTimeOut);
                if (!arCuPromptClosed) {
                    arCuPromptClosed = true;
                    jQuery('#arcontactus').contactUs('hidePrompt');
                }
            });

            jQuery('#arcontactus').on('arcontactus.hidePrompt', function () {
                clearTimeout(_arCuTimeOut);
                if (arCuClosedCookie != "1") {
                    arCuClosedCookie = "1";
                    arCuPromptClosed = true;
                    arCuCreateCookie('arcu-closed', 1, 0);
                }
            });
            var arcItem = {};
            arcItem.id = 'msg-item-3';
            arcItem.class = 'msg-item-instagram';
            arcItem.title = "Instagram";
            arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>';
            arcItem.href = 'https://www.instagram.com/direct/t/107972727266902';
            arcItem.color = '#ff358a';
            arcItems.push(arcItem);
            var arcItem = {};
            arcItem.id = 'msg-item-2';
            arcItem.class = 'msg-item-whatsapp';
            arcItem.title = "WhatsApp";
            arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>';
            arcItem.href = 'https://wa.me/51945325508';
            arcItem.color = '#00BB2D';
            arcItems.push(arcItem);
            var arcItem = {};
            arcItem.id = 'msg-item-1';
            arcItem.class = 'msg-item-facebook-messenger';
            arcItem.title = "Messenger";
            arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"></path></svg>';
            arcItem.href = 'https://www.facebook.com/messages/t/107972727266902';
            arcItem.color = '#567AFF';
            arcItems.push(arcItem);

            arcuOptions = {
                wordpressPluginVersion: '1.7.9',
                buttonIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>',
                drag: false,
                mode: 'regular',
                buttonIconUrl: 'assets/fonts/msg.svg',
                showMenuHeader: false,
                menuHeaderText: "How would you like to contact us?",
                showHeaderCloseBtn: false,
                headerCloseBtnBgColor: '#008749',
                headerCloseBtnColor: '#ffffff',
                itemsIconType: 'rounded',
                align: 'right',
                reCaptcha: false,
                reCaptchaKey: '',
                countdown: 0,
                theme: '#00bb2d',
                buttonText: "Chat",
                buttonSize: 'medium',
                menuSize: 'large',
                phonePlaceholder: '+XXX-XX-XXX-XX-XX',
                callbackSubmitText: 'Solicitar llamada',
                errorMessage: 'Error de conexión. Actualice la página e intente nuevamente.',
                callProcessText: 'Te estamos llamando al telefono',
                callSuccessText: 'Gracias.<br />Le devolveremos la llamada pronto.',
                iconsAnimationSpeed: 600,
                iconsAnimationPause: 2000,
                callbackFormText: 'Por favor, introduzca su número de teléfono<br />y te llamamos pronto',
                items: arcItems,
                ajaxUrl: '#',
                promptPosition: 'top',
                callbackFormFields: {
                    phone: {
                        name: 'phone',
                        enabled: true,
                        required: true,
                        type: 'tel',
                        label: '',
                        placeholder: "+XX-XXX-XXX-XXX"
                    },
                },
                action: 'arcontactus_request_callback'
            };
            jQuery('#arcontactus').contactUs(arcuOptions);
        });
        function arCuGetCookie(cookieName){
            if (document.cookie.length > 0) {
                var c_start = document.cookie.indexOf(cookieName + "=");
                if (c_start != -1) {
                    c_start = c_start + cookieName.length + 1;
                    var c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length;
                    }
                    return unescape(document.cookie.substring(c_start, c_end));
                }
            }
            return 0;
        };
        function arCuCreateCookie(name, value, days){
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            } else {
                expires = "";
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        };
        function arCuShowMessage(index){
            if (arCuPromptClosed){
                return false;
            }
            if (typeof arCuMessages[index] !== 'undefined'){
                jQuery('#arcontactus').contactUs('showPromptTyping');
        
                _arCuTimeOut = setTimeout(function(){
                    if (arCuPromptClosed){
                        return false;
                    }
                    jQuery('#arcontactus').contactUs('showPrompt', {
                        content: arCuMessages[index]
                    });
                    index ++;
                    _arCuTimeOut = setTimeout(function(){
                        if (arCuPromptClosed){
                            return false;
                        }
                        arCuShowMessage(index);
                    }, arCuMessageTime);
                }, arCuTypingTime);
            }else{
                if (arCuCloseLastMessage){
                    jQuery('#arcontactus').contactUs('hidePrompt');
                }
                if (arCuLoop){
                    arCuShowMessage(0);
                }
            }
        };
        function arCuShowMessages(){
            setTimeout(function(){
                clearTimeout(_arCuTimeOut);
                arCuShowMessage(0);
            }, arCuDelayFirst);
        }
        window.addEventListener('load', function(){
            jQuery('#arcontactus-storefront-btn').click(function(e){
                e.preventDefault();
                setTimeout(function(){
                    jQuery('#arcontactus').contactUs('openMenu');
                }, 200);
            });
        });
    });

    // Smooth scrolling
    $(document).ready(function() {
        // Select all links with hashes
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
                };
            });
            }
        }
        });
    });

})(jQuery);