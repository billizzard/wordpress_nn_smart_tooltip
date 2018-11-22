(function( $ ) {
    class TinymceTooltip {
        constructor() {
            this._addButtonToTinymce();
            this._addEvents();
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

        _tooltipButtonClickEvent() {
            alert('dfdf');
        }
    }

    new TinymceTooltip();
})( jQuery );
