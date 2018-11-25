export default class RequestHelper {
    static sendRequest(data, method = 'post') {
        return new Promise(resolve => jQuery[method](ajaxurl, data, response => resolve(response)));
    }

    static sendFormData(formData) {
        return new Promise((resolve, reject) => {
            let request = jQuery.ajax({
                url: gsmaWiki.ajaxurl,
                type: 'POST',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
            });

            request.done(data =>  {
                resolve(data);
            });

            request.fail(() => {
                reject();
            });
        });
    }
}
