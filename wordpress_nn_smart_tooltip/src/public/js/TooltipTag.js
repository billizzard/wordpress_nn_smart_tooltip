export default class TooltipTag {
    constructor() {
        this.tooltip = {
            container: $('.nnst'),
        };

        this.mode = 'click';

        this.openedTooltip = null;
        this.startScrollTop = 0;
        this.startTop = 0;
        if (this.tooltip.container.length) {
            this._addEvents();
        }
    }

    _addEvents() {
        if (this.mode === 'click') {
            this.tooltip.container.on('click', $.proxy(this._tagClickEvent, this));
        } else {
            this.tooltip.container.on('mouseover', $.proxy(this._tagClickEvent, this));
            this.tooltip.container.on('mouseout', $.proxy(this._hideAllTooltips, this));
        }

        $('body').on('click', $.proxy(this._bodyClickEvent, this));
        $(window).scroll(() => {
            if (this.openedTooltip) {
                this.openedTooltip.css('top', this.startTop - ($(window).scrollTop() - this.startScrollTop));
            }
        });
    }

    _bodyClickEvent(event) {
        if (!(event.target.closest('.nnst') || event.target.closest('.nnst-info'))) {
            this._hideAllTooltips();
        }
    }

    _tagClickEvent(event) {
        let target = $(event.target);
        let id = target.data('id');
        if (id) {
            this._triggerTooltip(id, event.clientX, event.clientY);
        }
    }

    _hideAllTooltips() {
        $('.nnst-info').hide();
        this.openedTooltip = null;
    }

    _triggerTooltip(id, x, y) {
        let tooltipInfo = $('.nnst-info[data-id="' + id + '"]');

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
        this.startScrollTop = $(window).scrollTop();
        this.openedTooltip = tooltip;

        tooltip.css({
            left: x - 18,
            top: y,
        });
    }
}
