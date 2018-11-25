import RequestHelper from 'admin/js/helpers/RequestHelper';

export default class TooltipButtonHandler {
    static saveTooltip(data) {
        return new Promise((resolve, reject) => RequestHelper.sendRequest(data).then(response => {
            response && response.success ? resolve(response) : reject(response);
        }));
    }

    static getTooltip(data) {
        return new Promise((resolve, reject) => RequestHelper.sendRequest(data).then(response => {
            response && response.success ? resolve(response) : reject(response);
        }));
    }
}
