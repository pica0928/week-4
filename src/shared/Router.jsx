import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
// react-router의 역할은 우리가 사이트를 볼때, 어떤 페이지를 어떤 경로로 보여줄지를 관리하기 위한 기능입니다.
// 우리가 읽기 귀찮아하는 1일 1로그 100일 완성 IT 지식을 예로 듭시다.
// 우리는 우리의 과제를 하기 위해 목차를 보고 과제의 내용을 찾습니다.
// 하드웨어와 관련한 내용은 1부, 소프트웨어와 관련한 내용은 2부..
// 라우터라는 건 그 각 부 또는 각 장을 관리하는 목차, 이정표같은 존재라고 이해해주시면 좋겠습니다.

// 라우터는 다음과 같은 구조로 이루어져 있습니다.
// 브라우저 또는 해시를 통해 페이지의 경로 자체를 총괄적으로 관리하는 BrowserRouter / HashRouter
// 그리고 그 라우터와 페이지 경로 자체의 매개체가 되어주는 Routes
// 마지막으로 우리가 가고자 하는 페이지를 설정하는 Route, 이 Route에 우리가 보여주고픈 종합적인 컴포넌트를
// 배치해주시면 되겠습니다. 

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        {/* path = 페이즈의 경로를 나타냅니다. '/'이면 index.html과 다름없고, /name이면 /name이라는 경로로
          사이트를 보내줍니다. element는 해당 페이지를 들어갈 시, 어떤 컴포넌트를 기준으로 보여주게 할지를 설정할 수 있습니다. */}
        {/* path="/:id"라고 한다면, 해당 내용은 각 페이지의 id에 맞춰 같은 Detail 컴포넌트 형식을 보여주겠다는 것입니다.
          쇼핑몰에서 형식은 같지만 다 다른 상품들이 판매되고 있죠? 다 저런 형태를 가진다고 봐주시면 되겠습니다. */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
