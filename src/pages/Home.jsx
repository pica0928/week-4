import React from "react";
import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import Form from "../features/todos/components/Form";
import List from "../features/todos/components/List";
// 위의 경로들을 보면 각 컴포넌트들을 가져오기 위한 경로라는 것을 알 수 있습니다.

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
    
  );
};
// Home 컴포넌트는 Router.jsx를 보시면 아시겠지만 index.html의 기준이 되는 페이지라는 걸 알 수 있습니다.
// 해당 컴포넌트 안에는 기본적으로 Layout으로 감싸고, 그 안에 Header, Form, List 컴포넌트를 감싼 형태인 것을 알 수 있습니다.
// Layout Component가 감싸는 { children }의 존재는 바로 이 자식 컴포넌트들이라고 생각해주시면 되겠습니다.


export default Home;
