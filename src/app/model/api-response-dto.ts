export class ApiResponseDTO {
    public responseText : string;
    public responseData : Object[];
    constructor( responseText : string,responseData:Object[]){
        this.responseText = responseText;
		this.responseData = responseData;
    }
}
