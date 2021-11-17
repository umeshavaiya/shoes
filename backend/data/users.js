const bcrypt = require('bcryptjs');
const Users = [{
        name: 'admin',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'scriptoptim',
        email: 'scriptoptim@xyz.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'user',
        email: 'user@user.com',
        password: bcrypt.hashSync('123465', 10)
    }
];

module.exports = Users;