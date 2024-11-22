import $api from "../http/api";

export default class ChainsawServices {
    static async getAllChainsaw(filtersOption) {
        return $api.get(`/get`, { params: filtersOption });
    }

    static async getChainsawById(id) {
        return await $api.get(`/get/${id}`);
    }
}