<template>
  <he-page class="demo-home-page">
    <!--搜索条件区域-->
    <data-filter />
    <!--表格区域：表格、操作、分页-->
    <he-table-layout>
      <template v-slot:header>
        <he-table-control
          :groupButton="groupButton"
          :groupDropdown="groupDropdown"
          :groupFilterDropDown="groupFilterDropDown"
        />
      </template>
      <!--业务table定制-->
      <!--      <x-table></x-table>-->
      <data-table :list="list" />

      <template v-slot:footer>
        <he-table-pagination />
      </template>
    </he-table-layout>
    <!--弹窗区域-->
  </he-page>
</template>

<script>
import api from "@/api";
import dataFilter from "./data-filter";
import dataTable from "./data-table";

export default {
  name: "demo-home",
  components: {
    dataFilter,
    dataTable,
  },
  data() {
    return {
      list: [
        {
          productName: "商品商品商品商品商品商品商品商品1",
          productSize: "红色",
          productNumber: 10,
        },
        {
          productName: "商品商品商品商品商品商品商品商品商品商品2",
          productSize: "红色",
          productNumber: 10,
        },
      ],
    };
  },
  computed: {
    // 操作按钮组
    groupButton() {
      return [
        {
          name: "添加",
          icon: "el-icon-plus",
          key: "add",
          disable: false,
        },
        {
          name: "编辑",
          icon: "el-icon-edit",
          key: "edit",
          disable: false,
        },
        {
          name: "删除",
          icon: "el-icon-delete",
          key: "delete",
          disable: false,
        },
        {
          name: "导入",
          icon: "el-icon-upload2",
          key: "imports",
          disable: false,
        },
        {
          name: "导出",
          icon: "el-icon-download",
          key: "exports",
          disable: false,
        },
      ];
    },
    // 下拉选项组
    groupDropdown() {
      return [
        {
          name: "黄金糕",
          val: "a",
          disabled: false,
        },
        {
          name: "狮子头",
          val: "b",
          disabled: false,
        },
        {
          name: "螺蛳粉",
          val: "c",
          disabled: false,
        },
      ];
    },
    // 筛选按钮组
    groupFilterDropDown() {
      return [
        {
          name: "复选框 A",
          val: "a",
          disabled: false,
        },
        {
          name: "复选框 B",
          val: "b",
          disabled: false,
        },
        {
          name: "复选框 C",
          val: "c",
          disabled: false,
        },
      ];
    },
  },
  mounted() {
    console.warn("==api===", api);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.demo-home-page {
}
</style>
