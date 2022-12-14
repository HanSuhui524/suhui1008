import React from "react";
import Pagination from "../../components/products/Pagination";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

const PaginationContainer = () => {
    const [searchParams] = useSearchParams();

    const { username } = useParams();
    const tag = searchParams.get('tag');
    // console.log(tag)
    // page가 없으면 1을 기본값으로 사용
    const page = parseInt(searchParams.get('page'), 10) || 1;

    const { lastPage, products, loading } = useSelector(({ products, loading }) => ({
        lastPage: products.lastPage,
        products: products.products,
        loading: loading['products/LIST_PRODUCTS'],
      }));

      //포스트 데이터가 없거나 로딩 중이면 아무것도 보여주지 않음
      if (!products || loading) return null;

      return (
        <Pagination
          tag={tag}
          username={username}
          page={parseInt(page, 10)}
          lastPage={lastPage}
          />
      );
};

export default PaginationContainer;