import { handlerPath } from '@libs/handler-resolver';
export const getAllProducts = {
    handler: `${handlerPath(__dirname)}/handler.getAllProducts`,
    events: [
        {
            http: {
                method: 'get',
                path: 'product',
                private: true
            },
        },
    ],
};

export const createProduct = {
    handler: `${handlerPath(__dirname)}/handler.createProduct`,
    events: [
        {
            http: {
                method: 'post',
                path: 'product',
                private: true
            },
        },
    ],
};
