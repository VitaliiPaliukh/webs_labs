import $api from "../http/api";

export default class CartServices {
    static async getCart() {
        return $api.get(`/cart/get`);
    }

    static async addItem(body) {
        return await $api.post(`/cart/create`, body);
    }

    static async updateItem(body) {
        return await $api.put(`/cart/update/${body.id}`, { chainsawId: body.chainsawsId, amount: body.amount, type: body.type });
    }

    static async deleteItem(id) {
        return await $api.delete(`/cart/delete/${id}`);
    }
}