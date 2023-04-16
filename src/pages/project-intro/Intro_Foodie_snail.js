import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Scroll from "../../components/Scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SideBar from "../../components/SideBar";
///1. Change Intro[number]
const Intro_Foodie_snail = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle((pre) => {
      return (pre = document.querySelectorAll(".post-content h4"));
    });
  }, []);
  return (
    <div className="intro-bg">
      <Banner data={"pj-foodie-snail"} />
      {/* h5改成h4  */}
      {/* span改成div  */}
      <Scroll />
      <div className="post-grid">
        <SideBar title={title} />
        <div className="post-content">
          <div className="post-wrap">
            <div>
              <p>
                從 IDEO 線上課程學習運用設計思考的方法解決課題，本次課題為：How
                Might We Provide Healthier Food Options for People in Need?
                <br></br>
                <br></br>
                我們決定以 APP
                形式提供更健康的食物選擇。透過訪談調研來了解在乎健康、租屋上班族的生活經驗與習慣，找到相關痛點，進而設計出貼近族群需求的設計。
              </p>
            </div>
            <div>
              <h4>01. 使用者分析</h4>
              <LazyLoadImage
                src="/portfolio/images/Foodie_snail/choose_TA.jpg"
                alt=""
                className="pic-width"
              />
              <figcaption>TA 選擇過程</figcaption>
              <div className="circle-highlight">
                <div className="circle-highlight-1">
                  <h6 className="text-secondary">
                    解構課題
                    <br></br>
                    關鍵字
                  </h6>
                  <p>
                    重新解構課題關鍵字，在隊員集思廣益下提案多種潛在 TA
                    後定義題目。
                  </p>
                </div>

                <div className="circle-highlight-1">
                  <h6 className="text-secondary">定義 TA</h6>
                  <p>將客群鎖定為22-35歲的租屋上班族。</p>
                </div>

                <div className="circle-highlight-1">
                  <h6 className="text-secondary">定義題目</h6>
                  <p>
                    進一步票選定義題目為
                    「如何為租屋上班族提供更健康的食物選擇？」
                  </p>
                </div>
              </div>

              <div>
                <h5>[ 用戶訪談調研 ]</h5>
                <p>
                  ◼ 受訪者基本資料
                  <br></br>◼ 飲食習慣
                  <br></br>◼ 分享開伙的經驗
                  <br></br>◼ 食材購買經驗/偏好
                </p>
                <br></br>
                <p>
                  我們共訪談了13位受訪者，欲了解受訪者的飲食習慣、開伙經驗以及對於健康飲食的想法，收斂出三個主要的痛點：分別是使用飲食紀錄
                  APP 會遇到的麻煩、食材買太多以及不方便料理。
                </p>
                <br></br>

                <p>
                  「我想吃得健康，自己煮可以控制營養素攝取量。」
                  <br></br>
                  「只能煮會處理的食材」
                  <br></br>
                  「廚房小，清理不便，沒有洗碗機。」
                </p>

                <p>
                  「為了增肌減脂，我選擇自己開伙。」
                  <br></br>
                  「料理設備有點危險、老舊。」
                  <br></br>
                  「不定時的開伙時間，食材容易壞掉。」
                </p>

                <p>
                  「想吃健康的食物影響今天是否下廚。」
                  <br></br>
                  「買食材會有買太多的困擾（蔬菜）。」
                  <br></br>
                  「因為租屋處是共用廚房，無法與室友同時使用。」
                  <br></br>
                  「下班很累不方便煮。」
                </p>
              </div>
              <br></br>
              <div>
                <h5>[ 洞察解析 ]</h5>
                <p>我們分享並且討論了受訪者的故事，收斂出三個主要的重點：</p>
                <div className="circle-highlight">
                  <div className="circle-highlight-1">
                    <h6 className="text-secondary">重視健康</h6>
                    <p>會下廚的受訪者普遍重視健康</p>
                  </div>

                  <div className="circle-highlight-1">
                    <h6 className="text-secondary">食材問題</h6>
                    <p>
                      1. 買太多（不會算份量）
                      <br></br>
                      2. 變化性不高（會煮的只有幾道）
                    </p>
                  </div>

                  <div className="circle-highlight-1">
                    <h6 className="text-secondary">不方便料理</h6>
                    <p>
                      1. 受限於器具（器具限制烹飪）
                      <br></br>
                      2. 當天個人狀態（很累不想煮）
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h5>[ How Might We...? ]</h5>
                <p>套入三個重點發想，提出幾個想法：</p>
                <p>
                  ◼ 飲食指南與紀錄
                  <br></br>
                  教你怎麼吃得健康並且紀錄分析
                  <br></br>◼ 共享廚房/料理教室
                  <br></br>
                  提供可以料理的場所器具服務
                  <br></br>◼ 與店家合作
                  <br></br>
                  1. 受限於器具（器具限制烹飪） 2. 當天個人狀態（很累不想煮）
                  <br></br>◼ 食材購買經驗/偏好
                  <br></br>
                  方便、單人份量
                </p>
              </div>
              <br></br>
              <div>
                <h5>[ 選擇提案 ]</h5>
                <p>
                  最後我們討論與票選可執行性，決定以 APP
                  切入為租屋族提供飲食平台與紀錄，接著展開第二次的用戶訪談，深入探討市面上飲食
                  APP 帶給用戶的幫助。以下是我們的 Userstory:
                </p>
                <br></br>
                <LazyLoadImage
                  src="/portfolio/images/Foodie_snail/Userstory.jpg"
                  alt=""
                  className="pic-width"
                />
                <figcaption>使用者情境</figcaption>
              </div>
            </div>
            <div>
              <h4>02. 計畫與構建</h4>
              <LazyLoadImage
                src="/portfolio/images/Foodie_snail/IA.png"
                alt=""
                className="IA_PIC"
              />
              <figcaption>資訊架構</figcaption>

              <div>
                <LazyLoadImage
                  src="/portfolio/images/Foodie_snail/wireframe1.png"
                  alt=""
                  className="IA_PIC"
                />
                <LazyLoadImage
                  src="/portfolio/images/Foodie_snail/wireframe2.png"
                  alt=""
                  className="IA_PIC"
                />
                <figcaption>Wireframe</figcaption>
              </div>
            </div>
            <div className="hightlight">
              <h4>03. 產品亮點</h4>
              <div className="hightlight-1">
                <div className="hightlight-content">
                  <h5>[ 專屬客製化 ]</h5>
                  <p>
                    在初次登錄時透過客製化的方式讓用戶透過選擇家中現有的器具、目標設定，自動推薦適合用戶烹煮的食譜以及相關內容，使用戶後續使用過程中更易貼近需求。
                  </p>
                </div>
                <br></br>
                <div>
                  <LazyLoadImage
                    className="hightlightImg"
                    src="/portfolio/images/Foodie_snail/H1.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="hightlight-1">
                <div>
                  <div className="hightlight-content">
                    <h5>[ 多樣的食譜/外食內容 ]</h5>
                    <p>
                      多樣食譜以及外食選擇，透過演算法讓用戶自己煮/外食的選擇上可以耗費更少的心力，取得更有效率的成果。
                    </p>
                  </div>
                  <br></br>
                  <LazyLoadImage
                    className="hightlightImg"
                    src="/portfolio/images/Foodie_snail/H2.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="hightlight-1">
                <div>
                  <div className="hightlight-content">
                    <h5>[ 多樣的食譜/外食內容 ]</h5>
                    <p>
                      多樣食譜以及外食選擇，透過演算法讓用戶自己煮/外食的選擇上可以耗費更少的心力，取得更有效率的成果。
                    </p>
                  </div>
                  <br></br>
                  <LazyLoadImage
                    className="hightlightImg"
                    src="/portfolio/images/Foodie_snail/H3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <a
              href="https://www.behance.net/gallery/119099339/Foodie-snail-APP"
              target="_blank"
              rel="noreferrer"
              className="sort-content"
            >
              <div className="button">More UI Design Details</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro_Foodie_snail;
