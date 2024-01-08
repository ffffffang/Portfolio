import React, { useRef, useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Scroll from "../../components/Scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SideBar from "../../components/SideBar";
const Intro_OEC_ds = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle((pre) => {
      return (pre = document.querySelectorAll(".post-content h4"));
    });
  }, []);

  return (
    <div className="intro-bg">
      <Banner data={"pj-oec-ds"} />
      <Scroll />
      {/* h5改成h4  */}
      {/* span改成div  */}
      <div className="post-grid">
        <SideBar title={title} />
        <div className="post-content">
          <div className="post-wrap">
            <div>
              <h4>01. 專案背景</h4>
              <p>
                加入時，團隊正致力於重新設計貨運追蹤平台的前後台，包括視覺及使用流程的全面改進。當時的挑戰主要體現在：1.
                缺乏設計系統文件 2. 元件未經歸檔 3. 主要色彩體系變更 4.
                缺乏明確的排版準則。這些問題使得難以保持平台視覺一致性。
                <br></br>
                <br></br>
                此專案從 Basic element 到 Template 完整建置，撰寫 UI Guidelines
                與前端工程師一同完成 Storybook 也加速設計到前端的交付流程，是 0
                到 1 導入設計系統的過程。
              </p>
            </div>
            <div>
              <h5>[ 我的角色 ]</h5>
              <p>
                ‧ 前後台的元件設計
                <br></br>‧ 建置 Local variables 管理元件顏色、參數
                <br></br>‧ 元件變體架構設計
                <br></br>‧ 建立頁面 Template
                <br></br>‧ 發佈並維護 Library
                <br></br>‧ UI Guidelines 文件撰寫
              </p>
            </div>
            <div>
              <h4>02. 顏色設定</h4>
              <p>
                訂定主色會是我們重新建置 Design System 的第一步。
                早期產品沿用集團 LOGO
                主色做設計，集團主色制定標準為傳宣物印刷，在軟體的使用上色系較不適合，所以我決定依據
                LOGO 主色生成適用新版本平台的數位專用色板。
              </p>
              <h5>[ 訂定主色基礎色 ]</h5>
              <p>
                基礎色的選定我藉由 HSB 色彩模式改動 LOGO 主色的 Brightness
                生成一個基礎色票，後續將藉由訂定的主色基礎色生成色板以進行輔色的設定。
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/OEC_ds/brightness.jpg"
                  alt=""
                />
                <figcaption>基礎設訂定示意</figcaption>
              </figure>
              <h5>[ 訂定主色基礎色 ]</h5>
              <p>
                大部分色板生成工具仰賴設計師手動調整數據生成色票。但考量到產品輔色較多，規則可能會變得複雜、後續對顏色的維護上也有困難，最終選用
                Material Design Theme 的計算系統，且 Material Design
                也在顏色使用上提供了一個廣泛適用的框架，對現在的團隊來說是比較合用，在規範上也有跡可循。
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/OEC_ds/colors.jpg"
                  alt=""
                />
                <figcaption>由主色生成輔色</figcaption>
              </figure>
              <h5>[ 引進 Design Token ]</h5>
              <p>
                為加速前端工程系統性的導入設計系統，包含 Color
                在內的所有基本元素（圓角、空間等等）我都為他們設定了一組
                Token，成功建檔後工程師就可以透過 Figma Dev Mode
                直接複製程式碼設定元件樣式，不僅可以加速元件製作速度，若有樣式改動也會更快速一致。
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/OEC_ds/designTokenSample.jpg"
                  alt=""
                />
                <figcaption>Design Token 示意圖</figcaption>
              </figure>
            </div>
            <div>
              <h4>03. 元件設計</h4>
              <p>
                元件設計流程如下：
                <br></br>
                盤點平台元件類型 &gt;  參考其他公司 Design Guidelines &gt;
                開始製作元件初版  &gt; 開會討論 &gt; 樣式定案 &gt;
                建構適合團隊的變體架構 &gt; 元件發佈
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/OEC_ds/Navigation-Bar.jpg"
                  alt=""
                />
              </figure>
            </div>
            <div>
              <h4>04. UI Guides 文件</h4>
              <p>
                由於重新設計平台的轉案跨及多個部門（BA, SA, F2E
                …），我們希望在元件交付上清楚明瞭，確保大家對元件的想像一致。
              </p>
              <h5>[ 蒐集各角色需求 ]</h5>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/OEC_ds/roles.jpg"
                  alt=""
                />
              </figure>
              <p>
                得知以上需求後以下是建構的 Layout，依照這個模板建立 UI
                的規範指南。
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/OEC_ds/layout.jpg"
                  alt=""
                />
                <figcaption>UI Guidelines Layout</figcaption>
              </figure>
            </div>
            <div>
              <h4>05. 學習與思考</h4>
              <p>
                雖然負責過多次大型 Design System
                建置專案，但每每根據不同公司的產品特性、設計軟體的更新，以及產業的變化，我都會面臨不同的挑戰和解決問題的機會。
                <br></br>
                <br></br>
                在這次的專案中，參考了多個相似性質的設計規範，這不僅讓我更深入地了解
                to B
                產業的元件設計趨勢和互動方式，還學到了如何在參考中找到適用於我們產品的元素，同時保持操作的一致性。Design
                System
                的建立與後續的維護是需要不斷的溝通和協作，確保每個團隊成員對設計原則和元件使用的理解一致，未來會撰寫詳細的使用、建置教學給設計師們，希望後續的協作能夠減少溝通成本。
                <br></br>
                <br></br>
                另外，在設計稿交付的效率以及設計師在設計 mockup
                的過程中是否會遇到其他痛點，都將是後續會重點追蹤的項目。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro_OEC_ds;
