

export abstract class BasicApiService {
    protected onSuccess(response) {
        var data = response.json();
        if(data.success) {
            return data.result;
        } else {
            return Promise.reject(data.error);
        }
    }
}