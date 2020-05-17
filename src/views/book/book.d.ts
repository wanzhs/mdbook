import {IBasePagination} from "@/components/login/user";

export interface IBookDetail {
    bookId?: number;
    bookTitle?: string;
    bookAuthor?: string;
    bookPress?: string;
    bookEditor?: string;
    bookAge?: number;
}

export interface IBookPageQuery extends IBasePagination {
    data?: string;
}
