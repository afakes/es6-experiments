
class instance {

    static from(url) {
        return new Promise(
            (resolve, reject) => {
                let link = document.createElement('link');
                link.rel = 'import';
                link.href = url;
                link.onload =
                    (event) => {
                        let lastpart = url.match(/([^\/]*)\/*$/)[1];
                        let classNameStr = lastpart.substr(0,lastpart.indexOf('.class'));
                        let result = null;
                        eval(`result = ${classNameStr};`);
                        resolve(result); return;
                    };
                document.querySelector('head').appendChild(link);

            }
        );

    }


}
