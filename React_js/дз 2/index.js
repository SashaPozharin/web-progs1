users = {
    group: {
        Users:{
            user1: {
                username: "Катя",
                age: 18,
                registDate: 2018,
                logindate: "02.02.2021",
                isBanned: false,
            },
            user2: {
                username: "Андрей",
                age: 21,
                registDate: 2019,
                logindate: "04.02.2021",
                isBanned: false,
            },
            user3: {
                username: "Vasya_Petkin",
                age: 21,
                registDate: 2017,
                logindate: "07.02.2021",
                isBanned: false,
            },   
            user4: {
                username: "xXx_ANIGILYATOR_xXx",
                age: 12,
                registDate: 2021,
                logindate: "24.01.2021",
                isBanned: true,
            },     
        },
        Moderator: {
            user1: {
                username: "Анатолий",
                age: 23,
                registDate: 2017,
                logindate: "07.02.2021",
                accessLevel: 3,
            }, 
            user2: {
                username: "Егор",
                age: 18,
                registDate: 2018,
                logindate: "06.02.2021",
                accessLevel: 1,
            },
        },
        Administrator: {
            user1: {
                username: "Сергей",
                age: 27,
                registDate: 2016,
                logindate: "06.02.2021",
                superuser: true,
            } 
        }
    }
};
console.log(users.group.Administrator.user1.superuser)