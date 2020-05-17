import {IBookPageQuery} from "@/views/book/book";
import RequestCarrier from "@/utils/requist";

export class BookService {
    public static getBookList = (query: IBookPageQuery) => {
        return RequestCarrier.post_json('/book/list', query);
    }
}