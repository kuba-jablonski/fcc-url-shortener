const parseUrl = (url) => {
    let match = url.slice(5).match(/https?:\/\/.*\..*/);
    return match ? match[0] : 'Invalid URL';
}

module.exports = {parseUrl};