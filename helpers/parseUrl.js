const parseUrl = (url) => {
    let match = url.match(/https?:\/\/.*\..*/);
    return match ? match[0] : 'Invalid URL';
}

module.exports = {parseUrl};