import React from "react";
import Banner from "../../components/Banner";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Intro6 = () => {
  return (
    <div className="intro-bg">
      <Banner data={"pj-6"} />
      {/* h5改成h4  */}
      {/* span改成div  */}
      <div className="post-content">
        <div className="post-wrap">
          <div>
            <p>
              ease
              是一個已上線的空間資訊平台，我加入此專案時正進行第二版本的更新工程，
              design system
              已由另一位設計師負責、本人責負責流程設計，後期畫面流程皆轉由我負責設計。
              這是一個我完全沒有相關知識的領域，在功能溝通、查閱資料上需要花比較多的時間理解。有些功能目前業界並沒有整合的前例，必須持續出圖溝通，確認瞭解客戶對平台功能的想像。
              <br></br>
              <br></br>
              流程設計主要以舊版之使用者回饋做優化，將著重說明部分功能使用流程的前後差異。
            </p>
          </div>
          <div>
            <h4>空間差值工具</h4>
            <p>
              ◼ 原版步驟多未有進度標示，使用者易不清楚目前執行的階段
              <br></br>◼
              在圖層屬性多樣的平台中，選項提示語不清，不確定需要選擇什麼
              <br></br>◼
              在操作過程中，需要使用的計算項目細項尚未釐清，導致其實只有一種計算選項
            </p>
            <LazyLoadImage
              src="/portfolio/images/ease/Old_Interpolation_tool.jpg"
              alt=""
            />
            <p>
              ◼ 減少步驟中不必要的選項
              <br></br>◼ 調整提示語，讓使用者了解選項目的
              <br></br>◼ 多項程序可在一頁內完成操作，避免忘記前步選擇
            </p>
            <LazyLoadImage
              src="/portfolio/images/ease/New_Interpolation_tool.jpg"
              alt=""
            />
          </div>
          <div>
            <h4>網格生成工具</h4>
            <p>
              新版本增加需求：
              <br></br>◼ 網格生成可選多個圖層共同計算
              <br></br>◼ 需設立網格點的點空間大小
            </p>
            <LazyLoadImage
              src="/portfolio/images/ease/Mesh_generation_tool.jpg"
              alt=""
            />
            <p>
              新版本操作：
              <br></br>◼ 開啟網格生成工具後，圖層轉為勾選模式，可匯入網格工具
              <br></br>◼ 提供x.y.z點空間大小數值輸入
            </p>
            <LazyLoadImage
              src="/portfolio/images/ease/MU_Mesh_generation_tool.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <h4>動畫工具</h4>
            <LazyLoadImage
              src="/portfolio/images/ease/IA_animation.jpg"
              alt=""
              srcset=""
            />
            <LazyLoadImage
              src="/portfolio/images/ease/MU_Animation.jpg"
              alt=""
            />
            <p>Default</p>
            <LazyLoadImage
              src="/portfolio/images/ease/animation_default.jpg"
              alt=""
            />
            <p>Edit Tool - Position</p>
            <LazyLoadImage
              src="/portfolio/images/ease/animation_edit1.jpg"
              alt=""
            />
            <p>Edit Tool - Sec.</p>
            <LazyLoadImage
              src="/portfolio/images/ease/animation_edit2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <LazyLoadImage
        src="/portfolio/images/ease/End.jpg"
        alt=""
        className="thank-you"
      />
    </div>
  );
};

export default Intro6;
