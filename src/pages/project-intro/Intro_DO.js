import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Scroll from "../../components/Scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SideBar from "../../components/SideBar";
const Intro_DO = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle((pre) => {
      return (pre = document.querySelectorAll(".post-content h4"));
    });
  }, []);
  return (
    <div className="intro-bg">
      <Banner data={"pj-design-operation"} />
      <Scroll />
      {/* h5改成h4  */}
      {/* span改成div  */}
      <div className="post-grid">
        <SideBar title={title} />
        <div className="post-content">
          <div className="post-wrap">
            <div>
              <p>
                隨著設計軟體功能逐漸完善、產品功能擴大與設計團隊的人員增加，舊有的設計元件已經不敷使用。為了更快速的設計流程，讓設計師能有更多時間專注於使用者體驗議題上，汰換元件使設計工具變得方便好用勢在必行。
              </p>
            </div>
            <div>
              <h4>01. 前期調查</h4>
              <p>
                問卷中列出各項元件，目的為調查設計師的： <br></br>
                1. 使用頻率：將依據使用頻率決定更迭的先後順序 <br></br>
                2. 使用痛點：
                <br></br>
              </p>
              <div className="circle-highlight">
                <div className="circle-highlight-1">
                  <h6 className="text-secondary">不符合工程實作</h6>
                  <p>影響到 Design QA、開發之間的溝通效率</p>
                </div>

                <div className="circle-highlight-1">
                  <h6 className="text-secondary">舊架構不方便使用</h6>
                  <p>舊架構常出需要拆掉重組，拉長設計時間</p>
                </div>

                <div className="circle-highlight-1">
                  <h6 className="text-secondary">行為不明</h6>
                  <p>常找不到元件行為，需要花時間考古</p>
                </div>
              </div>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/Design-Operation/order-list.png"
                  alt=""
                />
                <figcaption>問卷結果整理評分排序</figcaption>
              </figure>
            </div>
            <div>
              <h4>02. 元件結構拆解重構</h4>
              <h5>[ 搜集評估 ]</h5>
              <p>
                以下以 Modal 為例，需要列出現有使用的樣式，從中找出以下項目的規
                <br></br>則：1. 欄位排版 2. 內容置放<br></br>
                由找到的規則進行分類，找到直覺切換 State, Variant 的方法。
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/Design-Operation/Comp-Structure.jpg"
                  alt=""
                />
                <figcaption>拆解示意圖</figcaption>
              </figure>
              <h5>[ 規劃架構思考使用情境 ]</h5>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/Design-Operation/flow.png"
                  alt=""
                />
              </figure>
              <h5>[ 完成元件進行測試驗證 ]</h5>
              <p>
                進行使用者測試和驗證，了解設計師反應和回饋，修正和優化元件設計，確保其能夠提供良好的使用體驗。
              </p>
            </div>
            <div>
              <h4>03. Design System Document</h4>
              <p>
                每個元件建立時同步會進行設計文件的撰寫，因為對團隊、跨部門合作上會有效地幫助：
                <br></br>
                1.
                溝通效率：設計文件可以清楚地描述系統的要求、功能和架構，有助於溝通各方之間的期望，減少設計師、開發人員、測試人員、管理人員等之間的混亂和錯誤。
                <br></br>
                2.
                降低風險：幫助檢測和解決問題，以減少開發過程中產生的錯誤和缺陷，降低系統的風險，減少後續修復成本。
                <br></br>
                3.
                提高開發效率：輔助開發人員進行開發工作，確保開發人員遵守系統要求和設計原則，提高開發效率。
                <br></br>
                4.
                確保產品質量：幫助測試人員確保產品符合系統要求和設計原則，並有助於檢查系統是否運行正常。
                <br></br>
                5.
                紀錄：作為成為後續維護和迭代的重要依據，有助於保存知識和經驗，以便於日後參考。
              </p>

              <p>
                也約束設計師僅能從設計文件提取需要的元件，避免改動到主元件。
              </p>
              <div className="circle-highlight">
                <div className="circle-highlight-1">
                  <h6 className="text-secondary">跨部門溝通</h6>
                </div>

                <div className="circle-highlight-1">
                  <h6 className="text-secondary">保護主元件</h6>
                </div>

                <div className="circle-highlight-1">
                  <h6 className="text-secondary">資訊中心</h6>
                </div>
              </div>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/Design-Operation/component-doc.png"
                  alt=""
                />
                <figcaption>Component Document 撰寫示意</figcaption>
              </figure>
            </div>
            <div>
              <h4>04. 迭代程序</h4>
              <p>
                由於設計團隊擴大、系統變得龐大，現存的 UI 或 Patterns
                不一定能完全符合設計師的需求，同時為了維持設計的統一性，我們規劃了設計系統的更新迭代流程。
              </p>
              <LazyLoadImage
                src="/portfolio/images/Design-Operation/review-image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro_DO;
