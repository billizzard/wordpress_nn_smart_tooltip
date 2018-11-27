export default class TooltipPopup {
    constructor(popupEditor) {
        this.tooltipPopup = {
            container: jQuery('#acf-group_5be945fe0b28d'),
            isOpened: false,
        };

        this.popupEditor = popupEditor;
        this.existingTooltipId = null;

        if (this.tooltipPopup.container.length) {
            this.tooltipPopup.collapseButton = this.tooltipPopup.container.find('.handlediv');
            this.tooltipPopup.header = this.tooltipPopup.container.find('h2');
            this.mainEditor = null;
            this._init();
            this._addEvents();
        }
    }

    setMainEditor(mainEditor) {
        this.mainEditor = mainEditor;
    }

    showPopup(x, y, id = null) {
        if (!this.tooltipPopup.isOpened) {
            this._setPopupPosition(x + 20, y + 20);
            if (id) {
                this._toggleLoader(true);
                this.existingTooltipId = id;
                this.popupEditor.loadTooltipToContent(id).then(
                    resolve => this._toggleLoader(false),
                    reject => this._toggleLoader(false)
                );
            } else {
                this.popupEditor.setContent('');
                this.existingTooltipId = null;
            }
            this._showPopup();
        } else {
            this._hidePopup();
        }
    }

    _showPopup() {
        this.tooltipPopup.container.show();
        this.tooltipPopup.isOpened = true;
    }

    _hidePopup() {
        this.tooltipPopup.container.hide();
        this.tooltipPopup.isOpened = false;
    }

    _init() {
        this.tooltipPopup.collapseButton.remove();
        this.tooltipPopup.header.removeClass().addClass('nn_popup_header');
        this.tooltipPopup.header.wrap('<div class="nn_popup_header-wrapper"></div>');
        this.tooltipPopup.headerWrapper = this.tooltipPopup.container.find('.nn_popup_header-wrapper');
        this.tooltipPopup.headerWrapper
            .append('<div class="nn_popup_button loader js_nn_popup_loader" title="Loading..."></div>')
            .append('<div class="nn_popup_button save js_nn_popup_save dashicons dashicons-yes" title="Save"></div>')
            .append('<div class="nn_popup_button close js_nn_popup_close dashicons dashicons-no" title="Close"></div>');
        this.tooltipPopup.closeButton = this.tooltipPopup.container.find('.js_nn_popup_close');
        this.tooltipPopup.saveButton = this.tooltipPopup.container.find('.js_nn_popup_save');
        this.tooltipPopup.loader = this.tooltipPopup.container.find('.js_nn_popup_loader');
        this.tooltipPopup.container.removeClass();
        this.tooltipPopup.container.draggable();
        this.tooltipPopup.container.hide();
    }

    _addEvents() {
        jQuery('.js_nn_popup_close').on('click', jQuery.proxy(this._popupCloseButtonEvent, this));
        jQuery('.js_nn_popup_save').on('click', jQuery.proxy(this._popupSaveButtonEvent, this));
    }

    _toggleLoader(show) {
        show ? this.tooltipPopup.loader.show() : this.tooltipPopup.loader.hide();
    }

    _popupCloseButtonEvent(event) {
        this._hidePopup();
    }

    _popupSaveButtonEvent(event) {
        if ((!this.mainEditor || !this.mainEditor.isHasSelectedText()) && !this.existingTooltipId) {
            alert('Please, select the text.');
        } else {
            this._toggleLoader(true);
            if (this.existingTooltipId) {
                this.popupEditor.updateContent(this.existingTooltipId).then(
                    (response) => this._successUpdateTooltip(response),
                    (response) => this._failUpdateTooltip(response)
                );
            } else {
                this.popupEditor.saveContent().then(
                    (insertedId) => this._successSaveTooltip(insertedId),
                    (response) => this._failSaveTooltip(response)
                );
            }
        }
    }

    _successSaveTooltip(insertedId) {
        this.mainEditor.addTooltipToSelectedText(insertedId);
        this._toggleLoader(false);
        this._hidePopup();
    }

    _failSaveTooltip() {
        this._toggleLoader(false);
        alert('Failed to save');
    }

    _successUpdateTooltip() {
        this._toggleLoader(false);
        this._hidePopup();
    }

    _failUpdateTooltip() {
        this._toggleLoader(false);
        alert('Failed to save');
    }

    _setPopupPosition(x, y) {
        this.tooltipPopup.container.css({
            top: y,
            left: x,
            right: 'auto',
            bottom: 'auto',
        });
    }
}
