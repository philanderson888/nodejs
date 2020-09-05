var users = [
    {id: 1, name: 'sleey'},
    {id: 2, name: 'happy'},
    {id: 3, name: 'dopey'},
    {id: 4, name: 'bashful'},
    {id: 5, name: 'doc'},
    {id: 6, name: 'sneezy'},
    {id: 7, name: 'grumpy'}
];

var maxId = function(){
    return users.reduce(function (last, current){
        return Math.max(last, current.id);
    },0)
};

module.exports = {
    getUsers: function () {
        return users;
    },
    getUser: function (id) {
        return users.filter(function (user) {
            return user.id == id;
        })
    },
    addUser: function(name){
        var id = maxId()+1;
        users.push({id: id, name: name});
        return users[users.length-1];
    },
    updateUser: function(id, name){

        var index = -1;
        for (var i = 0; i < users.length; i++) {
            if (users[i].id == id){
                index = i;
                break;
            }
        }
        users[index].name = name;
        return users[index];
    }

}