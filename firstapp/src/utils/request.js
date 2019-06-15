export function get(url, data, header){
	return request(url,'GET',data,header)
}

export function post(url,data,header){
	return request(url,'POST',data,header)
}

function request(url,method,data,header){
	return new Promise((resolve,reject)=>{
		wx.request({
			data,
			method,
			header,
			url:"http://172.20.10.4:5000"+url,
			success: function(res){
				if(res.data.error_code===0){
					resolve(res.data.data)
				} else{
					return false
				}
			}
		})
	})
}