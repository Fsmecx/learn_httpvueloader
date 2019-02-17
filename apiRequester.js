(function umd(root, factory) {
    if (typeof module === 'object' && typeof exports === 'object') {
        module.exports = factory()
    } else if (typeof define === 'function' && define.amd) {
        console.log(" define([], factory)")
        define([], factory)
    } else {
        // console.log("root.apiRequest = factory()")
        root.apiRequest = factory()
    }
})(this, function factory() {
    'use strict';
    class apiRequest {
        'use strict';

        constructor(settings) {
            // console.log("Constructor, settings = " + settings)
            this._settings = {
                mode: 'no-cors',
                method: 'get',
                url: null,
                headers: {
                    "Content-Type": "application/json"
                },
                body: null
            }
        }
        get settings() {
            return this._settings
        }
        set settings(value) {
            console.log("set setting as " + value)
            this._settings = value
        }
        verb(verb) {
            console.log("seting verb = " + verb)
            this._settings.method = verb
            return this
        }
        url(url) {
            // console.log("setting url = " + url)
            this._settings.url = url;
            return this;
        }
        send() {
            console.log(`Sending with settings = `)
            console.log(this._settings)
            // console.log(this._settings.url)
            return fetch(this._settings.url).then(resp => {
                console.log("in fetch then")
                console.log(resp)
                if (resp.ok) {
                    console.log("200-209, procceed")
                    return resp.json()
                } else {
                    console.log("not 200, rejecting" + resp.status)
                    return Promise.reject(resp.status);
                }
            }).catch(error => {
                console.log('in fetch catch')
                console.log("network error occurred " + error)
            })
        }
        get() {
            console.log("getting")
            return fetch(this._settings.url)
        }
        post(data) { // here the data and url are not hardcoded anymore
            var json_data = JSON.stringify(data);

            return $.ajax({
                type: "POST",
                url: this.settings.url,
                data: json_data,
                dataType: "json",
                contentType: "application/json;charset=utf-8"
            });
        }

    }
    return apiRequest

});