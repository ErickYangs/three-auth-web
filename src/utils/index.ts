export default {
    randomString(len?: Number) {
        len = len || 32
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
        var maxPos = $chars.length
        var pwd = ''
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
        }
        return 'USER_SESSION_' + pwd
    }
}