"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageGroupData = {
    //  -->   /messageGroup/1/messages
    //Recuperar todo messageGroup  cujo user.id = 1
    // where users.1 == true
    //Recuperar todos messageGroup cujo user.id = 2
    // where users.2 == true
    '1': {
        id: '1',
        users: ['1', '2'],
        messages: {
            '1': {
                id: '1',
                userId: '2',
                message: 'Olá, bom dia!',
                date: new Date()
            },
            '2': {
                id: '2',
                userId: '1',
                message: 'Seu produto já está a caminho',
                date: new Date()
            },
            '3': {
                id: '3',
                userId: '2',
                message: 'Tá bom.',
                date: new Date()
            },
            '4': {
                id: '4',
                userId: '2',
                message: 'Muito Obrigado',
                date: new Date()
            },
        }
    },
    '2': {
        id: '2',
        users: ['1', '3'],
        messages: {
            '1': {
                id: '1',
                userId: '1',
                message: 'O Produto já foi enviado?',
                date: new Date()
            },
        }
    },
    '3': {
        id: '3',
        users: ['1', '4'],
        messages: {
            '1': {
                id: '1',
                userId: '4',
                message: 'Oiiii',
                date: new Date()
            },
        }
    }
};
//# sourceMappingURL=message-group-data.js.map