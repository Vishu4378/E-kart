import axios from "axios";

export function getproductlist() {

	return axios.get('https://dummyjson.com/products').then((response) => {
		return response.data.products;

	})


}
export function getproductdetail(id) {

	return axios.get('https://dummyjson.com/products/' + id).then((response)=>{
		return response.data;
	})



}