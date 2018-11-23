(function( $ ) {
    class TinymceTooltip {
        constructor() {
            this.tooltipPopup = {
                container: $('#acf-group_5be945fe0b28d'),
                isOpened: false,
            };

            if (this.tooltipPopup.container.length) {
                this.tooltipPopup.collapseButton = this.tooltipPopup.container.find('.handlediv');
                this.tooltipPopup.header = this.tooltipPopup.container.find('h2');
                this._addButtonToTinymce();
                this._init();
                this._addEvents();
            }
        }

        _init() {
            this.tooltipPopup.collapseButton.remove();
            this.tooltipPopup.header.removeClass().addClass('nn_popup_header');
            this.tooltipPopup.header.wrap('<div class="nn_popup_header-wrapper"></div>');
            this.tooltipPopup.headerWrapper = this.tooltipPopup.container.find('.nn_popup_header-wrapper');
            this.tooltipPopup.headerWrapper
                .append('<div class="nn_popup_button save js_nn_popup_save dashicons dashicons-yes" title="Save"></div>')
                .append('<div class="nn_popup_button close js_nn_popup_close dashicons dashicons-no" title="Close"></div>');
            this.tooltipPopup.container.removeClass();
            this.tooltipPopup.container.draggable();
            this.tooltipPopup.container.hide();
            this.tooltipPopup.container.css('opacity', '1');
        }

        _addEvents() {
            $('.wp-editor-container').on('click', '.mce-nn_smart_tooltip', $.proxy(this._tooltipButtonClickEvent, this));
        }

        _addButtonToTinymce() {
            if (typeof (tinymce) !== 'undefined') {
                tinymce.create('tinymce.plugins.nn_smart_tooltip', {
                    init: function (editor, url) {
                        editor.addButton('nn_smart_tooltip', {
                            title: 'Add tooltip to text / Exit',
                            cmd: 'nn_smart_tooltip',
                            classes: 'nn_smart_tooltip',
                            text: '[tool]',
                            // image: '/wp-content/plugins/wordpress_nn_smart_tooltip/images/r_paragraph.png',
                        });

                        editor.addCommand('nn_smart_tooltip', function () {
                            if (!editor.selection.isCollapsed()) {
                                alert('Please, unselect the text.');

                                return;
                            }

                            return;
                        });
                    },
                });

                tinymce.PluginManager.add('nn_smart_tooltip', tinymce.plugins.nn_smart_tooltip);
            }
        }

        _tooltipButtonClickEvent(event) {
            this._showTooltipPopup(event.clientX, event.clientY);
        }

        _showTooltipPopup(x, y) {
            if (!this.tooltipPopup.isOpened) {
                this._setPopupPosition(x + 20, y + 20);
                this.tooltipPopup.container.show();
                this.tooltipPopup.isOpened = true;
            } else {
                this.tooltipPopup.container.hide();
                this.tooltipPopup.isOpened = false;
            }
        }

        _setPopupPosition(x, y) {
            this.tooltipPopup.container.css({top: y, left: x, right: 'auto', bottom: 'auto'})
        }
    }

    new TinymceTooltip();
})( jQuery );
