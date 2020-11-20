var users = [
    {id: 1, name: 'sleey'},
    {id: 2, name: 'happy'},
    {id: 3, name: 'dopey'},
    {id: 4, name: 'bashful'},
    {id: 5, name: 'doc'},
    {id: 6, name: 'sneezy'},
    {id: 6, name: 'grumpy'}
];

module.exports = {
    getUsers: function () {
        return users;
    },
    getUser: function (id) {
        return users.filter(function (user) {
            return user.id == id;
        })
    }
}