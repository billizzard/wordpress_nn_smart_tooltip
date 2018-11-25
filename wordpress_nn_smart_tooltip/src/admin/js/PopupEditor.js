import TooltipButtonHadler from './handlers/TooltipButtonHandler';

export default class PopupEditor {
    constructor() {
        this.tooltipPopup = {
            container: $('#acf-group_5be945fe0b28d'),
        };
    }

    getContent() {
        let iframe = this.tooltipPopup.container.find('iframe')
        if (iframe) {
            let html = iframe.contents().find('body').html();
            if (html) {
                return html;
            }
        }

        return null;
    }

    setContent(html) {
        let iframe = this.tooltipPopup.container.find('iframe')
        if (iframe) {
            iframe.contents().find('body').html(html);
        }
    }

    saveContent() {
        return new Promise((resolve, reject) => {
            let data = {
                tooltip: this.getContent(),
                action: 'save_tooltip',
                postId: $('#post_ID').val(),
            };

            if (data.tooltip) {
                TooltipButtonHadler.saveTooltip(data).then(
                    response => resolve(response.insertedId),
                    response => reject(response),
                );
            }
        });
    }

    updateContent(id) {
        return new Promise((resolve, reject) => {
            let data = {
                tooltip: this.getContent(),
                action: 'update_tooltip',
                id,
            };

            if (data.tooltip && data.id) {
                TooltipButtonHadler.saveTooltip(data).then(
                    (response) => resolve(response.insertedId),
                    (response) => reject(response),
                );
            }
        });
    }

    loadTooltipToContent(id) {
        return new Promise((resolve, reject) => {
            let data = {
                id,
                action: 'get_tooltip',
            };

            if (data.id) {
                TooltipButtonHadler.getTooltip(data).then(
                    (response) => this._successGetTooltip(resolve, response),
                    (response) => this._failGetTooltip(reject, response),
                );
            }
        });
    }

    _successGetTooltip(resolve, response) {
        this.setContent(response.data.tooltip);
        resolve(response);
    }

    _failGetTooltip(reject, response) {
        reject(response);
    }
}
