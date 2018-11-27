export default class TooltipTag {
    constructor() {
        this.tooltip = {
            container: jQuery('.nnst'),
        };

        this.openedTooltip = null;
        this.startScrollTop = 0;
        this.startTop = 0;

        if (this.tooltip.container.length) {
            this.event = jQuery('#nn_smart_tooltip-container').data('event');
            this.event = this.event === 'hover' ? 'hover' : 'click';
            this._addEvents();
        }
    }

    _addEvents() {
        if (this.event === 'hover') {
            this.tooltip.container.on('mouseover', jQuery.proxy(this._tagClickEvent, this));
            this.tooltip.container.on('mouseout', jQuery.proxy(this._hideAllTooltips, this));
        } else {
            this.tooltip.container.on('click', jQuery.proxy(this._tagClickEvent, this));
        }

        jQuery('body').on('click', jQuery.proxy(this._bodyClickEvent, this));
        jQuery(window).scroll(() => {
            if (this.openedTooltip) {
                this.openedTooltip.css('top', this.startTop - (jQuery(window).scrollTop() - this.startScrollTop));
            }
        });
    }

    _bodyClickEvent(event) {
        if (!(event.target.closest('.nnst') || event.target.closest('.nnst-info'))) {
            this._hideAllTooltips();
        }
    }

    _tagClickEvent(event) {
        let target = jQuery(event.target);
        let id = target.data('id');
        if (id) {
            this._triggerTooltip(id, event.clientX, event.clientY);
        }
    }

    _hideAllTooltips() {
        jQuery('.nnst-info').hide();
        this.openedTooltip = null;
    }

    _triggerTooltip(id, x, y) {
        let tooltipInfo = jQuery('.nnst-info[data-id="' + id + '"]');

        if (tooltipInfo.length) {
            if (!this.openedTooltip) {
                this._showTooltip(tooltipInfo, x, y);
            } else {
                this._hideAllTooltips();
                this._showTooltip(tooltipInfo, x, y);
            }
        }
    }

    _showTooltip(tooltip, x, y) {
        tooltip.show();
        y = y - tooltip.height() - 30;
        this.startTop = y;
        this.startScrollTop = jQuery(window).scrollTop();
        this.openedTooltip = tooltip;

        tooltip.css({
            left: x - 18,
            top: y,
        });
    }
}
