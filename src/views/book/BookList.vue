<template>
    <div>
        <Row type="flex" justify="start" :gutter="12">
            <Col>
                <Input v-model="query.data" placeholder="请输入书名"></Input>
            </Col>
            <Col>
                <Button type="primary" @click="searchData">查询</Button>
            </Col>
        </Row>
        <Table stripe :columns="columns" :data="dataList" :loading="tableLoading" style="padding-top: 8px;">
            <!--            <template slot="bookAge" slot-scope="{row}">-->
            <template v-slot:bookAge="{row}">
                {{row.bookAge}}年
            </template>
            <template v-slot:action="{row}">
                <Dropdown trigger="click">
                    <a href="javascript:void(0)">
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    操作
                    <DropdownMenu slot="list">
                        <DropdownItem @click.native="editBook(row)">编辑</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </template>
        </Table>
        <Row type="flex" justify="end" style="padding-top: 8px;">
            <Col>
                <Pagination :total="pageResult.total"
                            :on-page-index-change="onPageIndexChange"
                            :on-page-size-change="onPageSizeChange"/>
            </Col>
        </Row>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {IBookDetail, IBookPageQuery} from "@/views/book/book";
    import {IPageResult} from "@/components/login/user";
    import {BookService} from "@/views/book/book.service";
    import Pagination from "@/components/common/Pagination.vue";
    import {markdownRoute} from "@/config/config.constant";

    @Component({
        components: {Pagination}
    })
    export default class BookList extends Vue {
        public query: IBookPageQuery = {index: 1, size: 10};
        public tableLoading: boolean = false;
        public dataList: IBookDetail[] = [];
        public pageResult: IPageResult = {total: 0, records: undefined};
        public columns: any = [
            {
                type: 'index',
                width: 60,
                align: "center"
            },
            {
                title: "书名",
                key: "bookName",
                align: "center",
                tooltip: true,
            },
            {
                title: "出版社",
                key: "bookPress",
                align: "center",
                tooltip: true,
            },
            {
                title: "作者",
                key: "bookAuthor",
                align: "center",
                tooltip: true,
            },
            {
                title: "编辑",
                key: "bookEditor",
                align: "center",
                tooltip: true,
            },
            {
                title: "出版时长",
                slot: "bookAge",
                align: "center",
                tooltip: true,
            },
            {
                title: "描述",
                key: "bookAge",
                align: "center",
                tooltip: true,
                render: (h: any, {row}: any) => h(
                    "div", [
                        h('Icon', {
                            props: {
                                type: 'ios-book'
                            }
                        }),
                        h('strong', row.bookAge),
                        h("span", '年')
                    ]
                )
            },
            {
                title: "操作",
                slot: "action",
                align: "center",
                tooltip: true,
            }
        ];

        searchData() {
            this.query = Object.assign({}, this.query, {index: 1, size: 10});
            this.loadDbDataToLocal(this.query);
        }

        loadDbDataToLocal(query: IBookPageQuery) {
            this.tableLoading = true;
            BookService.getBookList(query).then(value => {
                this.pageResult = value.data;
                this.dataList = this.pageResult.records;
            }).finally(() => {
                this.tableLoading = false;
            });
        }

        onPageIndexChange(index: number) {
            this.query.index = index;
            this.loadDbDataToLocal(this.query);
        }

        onPageSizeChange(size: number) {
            this.query.size = size;
            this.loadDbDataToLocal(this.query);
        }

        editBook(row: IBookDetail) {
            this.$router.push(markdownRoute);
        }

        mounted() {
            this.loadDbDataToLocal(this.query);
        }
    }
</script>

<style scoped>

</style>