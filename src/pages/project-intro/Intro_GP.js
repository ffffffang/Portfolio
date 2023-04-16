import React, { useRef, useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Scroll from "../../components/Scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SideBar from "../../components/SideBar";
const Intro_GP = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle((pre) => {
      return (pre = document.querySelectorAll(".post-content h4"));
    });
  }, []);

  const switches = [false, false, false, false, false, false];
  const popContainer = useRef(null);
  const popText = useRef(null);
  const popTextArr = [
    "預告步驟",
    "平台優勢",
    "調整 Payer 稱呼排列",
    "減少 CTA",
    "可用付款方式清楚可見",
    "告知 User 資料是安全的",
  ];
  function openInfo(x, e) {
    popContainer.current.style.display = "none";
    switches[x] = !switches[x];
    switches[x]
      ? (popContainer.current.style.display = "block")
      : (popContainer.current.style.display = "none");

    switches[x] && (popContainer.current.className = `pop-container pop${x}`);
    popText.current.innerText = `${popTextArr[x]}`;
    switches.forEach((_, i) => {
      if (i != x) {
        switches[i] = false;
      }
    });
    e.closest(".after-container")
      .querySelectorAll(".after-btn")
      .forEach((btns) => (btns.style.opacity = "0.4"));
    switches[x] === true ? (e.style.opacity = "0") : (e.style.opacity = "0.4");
  }
  function hoverInfo(x, e) {
    switches[x] !== true && (e.style.opacity = "1");
  }
  function hoverOutInfo(x, e) {
    switches[x] !== true && (e.style.opacity = "0.4");
  }

  return (
    <div className="intro-bg">
      <Banner data={"pj-gofreight-pay"} />
      <Scroll />
      {/* h5改成h4  */}
      {/* span改成div  */}
      <div className="post-grid">
        <SideBar title={title} />
        <div className="post-content">
          <div className="post-wrap">
            <div>
              <h4>01. 專案簡介</h4>
              <p>
                GoFreight Pay 是一個線上付款平台，Payee 透過表單/信件/連結向
                Payer 請款。 Payer 點擊連結進入 Main Page
                後可以開始執行付款，詳細流程如下。
              </p>
            </div>
            <div class="flex-row">
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GP/GoFreightPay_intro_step_1.gif"
                  alt=""
                  width="100%"
                />
                <figcaption>Step1. 選擇付款方式</figcaption>
              </figure>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GP/GoFreightPay_intro_step_2.gif"
                  alt=""
                />
                <figcaption>Step2. 輸入付款資訊</figcaption>
              </figure>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GP/GoFreightPay_intro_step_3.gif"
                  alt=""
                />
                <figcaption>Step3. 確認資訊並付款</figcaption>
              </figure>
            </div>
            <figure>
              <LazyLoadImage src="/portfolio/images/GP/Funnel.jpg" alt="" />
            </figure>
            <div>
              <h5>[ 我的角色 ]</h5>
              <p>
                ‧ 工作坊參與、前期合作準備
                <br></br>‧ 參與解方決策
                <br></br>‧ 迭代介面設計
                <br></br>‧ 與行銷部門合作動畫
              </p>
            </div>
            <div>
              <h5>[ 專案結果 ]</h5>
              <p>
                ‧ 減少彈出率：🔻59.03%
                <br></br>‧ 提升轉換率：🔺8.16%
              </p>
            </div>
            <div>
              <h4>02. 工作坊，集思廣益</h4>
              <h5>[ 問題 ] 如何讓更多人完成交易？</h5>
              <h5>[ 首要目標 ] 提升轉換率、減少跳出率</h5>
              <p>以舊版畫面為基礎，我們以付款方的角度做出了初步假設</p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GP/GP_Before.jpg"
                  alt=""
                />
                <figcaption>舊版 Mainpage</figcaption>
              </figure>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GP/GP_Brainstrom.jpg"
                  alt=""
                />
                <figcaption>針對假設思考解方之部分討論截圖</figcaption>
              </figure>
              <div>
                <figure>
                  <LazyLoadImage
                    src="/portfolio/images/GP/Solve_function.jpg"
                    alt=""
                  />
                </figure>
                <p>
                  針對資源和時程考量，我們選擇以下項目作為本次迭代的主要調整方向：
                  <br></br>
                  1. 簡化 Main Page CTA，以減少使用者的選擇困擾。<br></br>
                  2. 增加付款方式、安全性提示等資訊，以減少使用者的不信任感。
                  <br></br>
                  3. 加入付款流程動畫，簡單告知接下來的流程以減少不確定感。
                </p>
              </div>
            </div>
            <div>
              <h4>03. 頁面設計迭代</h4>
              <p>
                在與 PM 及其他設計師討論過後最後選擇了左右切割的排版設計。
                <br></br>
                清楚劃分介紹與操作這兩者，這樣的排版讓增加資訊後的 Main Page
                維持簡潔的樣式，不影響付款體驗。
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GP/Layout_Solution.jpg"
                  alt=""
                />
              </figure>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GP/Layout_Solution_2.jpg"
                  alt=""
                />
              </figure>
              <div>
                <h5>[ 改版後演示 ]</h5>
                <video
                  src="/portfolio/images/GP/Mainpage.mov"
                  className="video"
                  autoPlay
                  loop
                  controls
                  muted
                ></video>
              </div>
              <div>
                <h5>[ 新舊比較 ]</h5>
                <figure class="before-hover">
                  <LazyLoadImage
                    src="/portfolio/images/GP/Payment_Request_Before.jpg"
                    alt=""
                  />
                  <figcaption>(Before) Hover 看舊版痛點 </figcaption>
                </figure>
              </div>
              <div class="after-container">
                <div
                  class="after-btn pop0"
                  onClick={(event) => openInfo(0, event.target)}
                  onMouseEnter={(event) => hoverInfo(0, event.target)}
                  onMouseLeave={(event) => hoverOutInfo(0, event.target)}
                ></div>
                <div
                  class="after-btn pop1"
                  onClick={(event) => openInfo(1, event.target)}
                  onMouseEnter={(event) => hoverInfo(1, event.target)}
                  onMouseLeave={(event) => hoverOutInfo(1, event.target)}
                ></div>
                <div
                  class="after-btn pop2"
                  onClick={(event) => openInfo(2, event.target)}
                  onMouseEnter={(event) => hoverInfo(2, event.target)}
                  onMouseLeave={(event) => hoverOutInfo(2, event.target)}
                ></div>
                <div
                  class="after-btn pop3"
                  onClick={(event) => openInfo(3, event.target)}
                  onMouseEnter={(event) => hoverInfo(3, event.target)}
                  onMouseLeave={(event) => hoverOutInfo(3, event.target)}
                ></div>
                <div
                  class="after-btn pop4"
                  onClick={(event) => openInfo(4, event.target)}
                  onMouseEnter={(event) => hoverInfo(4, event.target)}
                  onMouseLeave={(event) => hoverOutInfo(4, event.target)}
                ></div>
                <div
                  class="after-btn pop5"
                  onClick={(event) => openInfo(5, event.target)}
                  onMouseEnter={(event) => hoverInfo(5, event.target)}
                  onMouseLeave={(event) => hoverOutInfo(5, event.target)}
                ></div>
                <div ref={popContainer} class="pop-container">
                  <p class="pop-text">
                    <span class="close-pop"> ✖ </span>
                    <span ref={popText}></span>
                  </p>
                </div>
                <figure class="after-img">
                  <LazyLoadImage
                    src="/portfolio/images/GP/Payment_Request_After.jpg"
                    alt=""
                  />
                  <figcaption>(After) 點擊觀看新版重點</figcaption>
                </figure>
              </div>
            </div>
            <div>
              <h4>04. 成果追蹤</h4>
              <p>取 2022 8~11 月的數據比較改版前的相同時長顯示：</p>
              <p>
                ‧ 減少彈出率：🔻59.03% (Aug.: 62.5% -{">"} Nov.: 3.47%){" "}
                <br></br>‧ 提升轉換率：🔺8.16% (Aug.: 18.99% -{">"} Nov.:
                27.15%)
              </p>
            </div>
            <div>
              <h4>05. 學習與思考</h4>
              <p>
                Main Page
                改版後轉換率雖有改善但也不如預期顯著，付款也可能會有淡季旺季問題，除了觀測數據時間可以再拉長之外，採取以下方式驗證：
                <br></br>
                1. 為了解使用者不進行下一步的原因，在網站中加入簡易彈出問卷調查
                <br></br>
                2. 尋找符合 Payer
                身份的受訪者著手驗證用是否在兩種介面的感受上有差異、差在哪、是否影響對平台的決策
              </p>
              <br></br>
              <p>
                另外單個 Payer 使用大額付款的頻率增加，會不會也是印證 Payer
                對平台的信任度提升，也是個值得觀察的議題。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro_GP;
