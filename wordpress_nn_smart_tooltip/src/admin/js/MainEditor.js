import TinymceHelper from './helpers/TinymceHelper';

export default class MainEditor {
    constructor(tooltipPopup) {
        this.editor = null;
        this.tooltipPopup = tooltipPopup;
        this._addButtonToTinymce();
        this._addEvents();
    }

    isHasSelectedText() {
        return !this.editor.selection.isCollapsed();
    }

    addTooltipToSelectedText(id) {
        this._wrapSelectedText();
        this._addIdToSelectedText(id);
    }

    _addEvents() {
        jQuery('.wp-editor-container').on('click', '.mce-nn_smart_tooltip', jQuery.proxy(this._tooltipButtonClickEvent, this));
    }

    _addButtonToTinymce() {
        if (typeof (tinymce) !== 'undefined') {
            tinymce.PluginManager.add('nn_smart_tooltip', (editor, url) => {
                editor.on('init', () => {
                    editor.formatter.register('nnst', {
                        inline: 'span',
                        classes: 'nnst',
                    });
                });

                editor.addButton('nn_smart_tooltip', {
                    title: 'Add tooltip to text / Exit',
                    classes: 'nn_smart_tooltip',
                    image: url + "/images/comment.svg",

                    onPostRender: function () {
                        editor.on('NodeChange', e => {
                            this.active(e.element.className === 'nnst');
                        });
                    },
                });
            });
        }
    }

    _getTooltipByCursorNode(cursorNode) {
        let ssntNode = cursorNode.closest('.nnst');
        return ssntNode ? ssntNode : null;
    }

    _tooltipButtonClickEvent(event) {
        this.editor = TinymceHelper.getActiveEditor();
        if (this.editor) {
            if (!this.isHasSelectedText()) {
                let nnstNode = this._getTooltipByCursorNode(this.editor.selection.getNode());
                if (nnstNode) {
                    this.tooltipPopup.showPopup(event.clientX, event.clientY, nnstNode.dataset.id);
                } else {
                    alert('Please, select the text.');
                }
            } else {
                this.tooltipPopup.showPopup(event.clientX, event.clientY);
            }
        }
    }

    _addIdToSelectedText(id) {
        let spanNodes = this.editor.dom.select('.nnst');
        spanNodes.forEach(function (element) {
            if (!element.hasAttribute('data-id')) {
                element.setAttribute('data-id', id);
            }
        });
    }

    _wrapSelectedText() {
        this.editor.formatter.toggle('nnst');
    }
}
