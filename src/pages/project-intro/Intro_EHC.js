import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Scroll from "../../components/Scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SideBar from "../../components/SideBar";
const Intro_EHC = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle((pre) => {
      return (pre = document.querySelectorAll(".post-content h4"));
    });
  }, []);
  return (
    <div className="intro-bg">
      <Banner data={"pj-elder-health-center"} />
      <Scroll />
      {/* h5改成h4  */}
      {/* span改成div  */}
      <div className="post-grid">
        <SideBar title={title} />
        <div className="post-content">
          <div className="post-wrap">
            <div>
              <div>
                <h4>01. 背景</h4>
                <p>
                  協助社區單位及地方政府有效運用資通訊技術，以利管理長者健康資訊，並透過平台下載長者容易理解的個人報告，進而增加對健康自主管理與長者健康促進單位活動的信心。
                  提供社區單位、縣市政府與國健署，符合長者健康管理與預防及延緩失能網絡需求之網站與系統。
                  此次優化平台功能包含師資管理、使用者權限類別與成效統計。
                </p>
                <h5>[ 目標使用者 ]</h5>
                <p>
                  ◼ 國健署社區組
                  <br></br>◼ 各地方衛生局
                  <br></br>◼
                  國民健康署預防及延緩失能整合計畫子計畫二工工作分項二之社區單位
                </p>
              </div>
            </div>

            <div>
              <h4>02. 計畫與重構</h4>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/HPAhealth/IA.jpg"
                  alt=""
                />
                <figcaption>資訊架構</figcaption>
              </figure>
            </div>

            <div>
              <h5>[ 舊版本使用者痛點 ]</h5>
              <p>
                依據客服人員回報統計數據，發現各單位使用上常發生以下問題：
                <br></br>
              </p>
              <br></br>

              <div className="circle-highlight">
                <div className="circle-highlight-1">
                  <h6 className="text-secondary">資訊狀況</h6>
                  <p>提示語少，需要與客服確認如何登打才不會使資料上傳失敗。</p>
                </div>

                <div className="circle-highlight-1">
                  <h6 className="text-secondary">資料登打</h6>
                  <p>
                    系統將課程不同天的資料分開必須要回到上一頁再往下看，導致登打資料時非常耗時間。
                  </p>
                </div>

                <div className="circle-highlight-1">
                  <h6 className="text-secondary">不確定因素</h6>
                  <p>
                    開課期間有些長者只來第一次，或者前十次都有到，僅兩次未出席，也因此沒後測，該如何記錄？
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h5>[ 介面重構 ]</h5>
              <p>
                平台主要功能為管理“人”以及其資料，最上層資料顯示介面上改採用卡片形式。
                <br></br>
                使用卡片形式有以下原因：
                <br></br>
                1. 減少使用者鼠標移動距離，讓操作速度變快
                <br></br>
                2. 將多餘資訊藏至卡片中，避免登打人員眼花
                <br></br>
                3. 使每一筆資料都具有獨立性
                <br></br>
                <br></br>
                以課程管理為例，下為上層資料顯示：
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/HPAhealth/MU_class.jpg"
                  alt=""
                />
              </figure>
              <p>
                下圖為內層基本資料顯示，改用右側標籤方式，以內層多選下拉選單減少多選元件的空間：
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/HPAhealth/MU_class_cardopen.jpg"
                  alt=""
                />
              </figure>
              <p>
                重新切分資訊區塊解決原先流程上無法在同一視窗登打改變狀態問題，
                也可以在每一頁都連結到登打前後測的區域，防止有其中幾堂無法到課的學員沒有登打到資料，導致數值平均不準確：
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/HPAhealth/MU_class_cardopen2.jpg"
                  alt=""
                />
              </figure>
            </div>

            <div>
              <h5>[ 簡化學員報到方式 ]</h5>
              <p>
                系統以電子郵件註冊，舊版平台長者在報到時需要登打相關帳戶資料花費較多時間，新系統自動化報到流程如下：
                <br></br>
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/HPAhealth/process.png"
                  alt=""
                />
              </figure>
              <br></br>
            </div>

            <div>
              <h4>03. 下一步</h4>
              <p>
                第二版預計於2022年6月中期開放各單位測試使用，測試將著重驗證登打資料以及查找資料的情形是否有改善、設計是否更簡單直覺，並持續進行優化。上層資訊介面方面，未來將會評估資訊區塊不用分頁改無限滾動方式是否能讓體驗更順暢。
                <br></br>
                另外預計與 Line Bot 連動讓學員得以實時追蹤課堂通知。
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro_EHC;
