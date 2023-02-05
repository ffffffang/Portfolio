import React from "react";
import Banner from "../../components/Banner";
import { LazyLoadImage } from "react-lazy-load-image-component";
///1. Change Intro[number]
const Intro3 = () => {
  return (
    <div className="intro-bg">
      <Banner data={"pj-3"} />
      {/* h5改成h4  */}
      {/* span改成div  */}
      <div className="post-content">
        <div className="post-wrap">
          <div>
            <p>
              後疫情時代智慧生活風行，您是否有因為找不到合適的咖啡廳而苦惱呢？
              Workfe
              可以輕鬆幫你解決：Workfe主打的功能是迅速幫您找到有空位的咖啡廳，同時，您可以在
              Workfe 上與好友分享線下的發現，也可以用 ＃freetag
              覓得適合您需求風格的咖啡廳。 這就是 Workfe
              ，一個致力於解決白跑一趟滿座咖啡廳的麻煩，同時讓您能與好友分享、交流喜愛咖啡廳的平台。
            </p>
          </div>

          <div>
            <h4>市場上的競品</h4>
            <p>
              「愛食記
              ifoodie」是人們找餐廳常用的軟體，愛食記內的社群較多在消費者交流，
              Workfe不只注重用戶與用戶之間的交流也想推動咖啡廳業者與消費者的互動關係。
              「CAFFÈCOIN」也是我們的另一個競品， Workfe
              與其做出的市場區隔不僅是擁有咖啡社群，也重點開發滿座率，讓消費者共享資訊，希望能帶來更便利的體驗。
            </p>
          </div>

          <div>
            <h4>問卷調查結果</h4>
            <p>
              目前總共投放兩次問卷，第一份針對 Workfe 的市場性：總共收到 136
              份問卷回覆，填答者以台北市大學生為主。
              其中有過半數的學生每兩周會去咖啡廳一次以上且超過九成以上的學生會在咖啡廳待超過一小時，故
              Workfe 在空位率計算方式，初期採商家每小時更新數據。
            </p>
            <br></br>
            <p>
              第二份針對APP功能做調查，共有78個回覆。
              填答者不使用市面上提供相似服務 APP 的主要原因有三：1.慣用 Google
              Map 2.App 提供訊息不足或推廣不足 3.不常去咖啡廳。
              最期待即時滿座率的功能，最不期待的為社群功能。最困擾的問題我們收斂為以下三項：
            </p>
          </div>

          <div class="circle-highlight">
            <div class="circle-highlight-1">
              <h6 class="text-secondary">沒位置</h6>
              <p>
                1. 看人流量記錄也沒辦法準確預估是否有座位
                <br></br>
                2. 資訊沒有像粉絲專頁更新那麼頻繁
              </p>
            </div>

            <div class="circle-highlight-1">
              <h6 class="text-secondary">環境不佳</h6>
              <p>
                1. 環境圖少或甚至無，多為店家單方提供
                <br></br>
                2. 承上點，無法準確評估咖啡廳全貌
              </p>
            </div>

            <div class="circle-highlight-1">
              <h6 class="text-secondary">評價不公</h6>
              <p>
                1. 其他美食 APP 評論過少
                <br></br>
                2. 刷評論無法分辨真假
              </p>
            </div>
          </div>

          <div>
            <h4>初步資訊架構</h4>
            <img
              src="/portfolio/images/Workfe/IA.jpg"
              alt=""
              class="IA_PIC"
            ></img>
          </div>

          <div>
            <h4>用戶訪談調研</h4>
            <p>
              希望了解根據前兩次問卷調查製作，目前 APP
              的功能期待值以及使用者對產品的接受度。
              以產品畫面蒐集受訪者的第一眼回饋，優化或研擬新增功能。
              20名受訪者中，男性有5名女性15名，佔75%。年齡分布多為19至25歲的學生，分布大致平均。
              職業以大學生和研究生佔多數，以下為訪談重點蒐集資訊摘要：
            </p>
            <br></br>
            <p>
              ◼ 受訪者基本資料
              <br></br>◼ 以畫面介紹 APP 功能
              <br></br>◼ 蒐集受訪者至咖啡廳的行為資料
              <br></br>◼ 對咖啡廳相關偏好以及看法
              <br></br>◼ 在尋找適合咖啡廳與咖啡廳內體驗相關痛點
            </p>
            <br></br>
            <p>
              此次訪談後團隊在市場性以及功能面上稍做調整與策略：
              <br></br>◼ 加強回報滿座率誘因、新增獎勵機制
              <br></br>◼ 資訊方面不僅提供咖啡廳基本資訊也加上硬體資訊
              <br></br>◼ 使用者對社群的期待及社群目的讓我們重新探討文章審核機制
            </p>
          </div>

          <div class="hightlight">
            <h4>產品亮點</h4>
            <div class="hightlight-1">
              <div>
                <img
                  class="hightlightImg"
                  src="/portfolio/images/Workfe/freetag.png"
                  alt=""
                ></img>
              </div>
              <div class="hightlight-content">
                <h4>#Freetag</h4>
                <p>
                  由使用者共同定義咖啡廳的特色，使用者可以新增或認同咖啡廳的
                  #freetag ，如：寵物、網美、音樂風格、安靜。
                </p>
              </div>
            </div>

            <div class="hightlight-1">
              <div>
                <img
                  class="hightlightImg"
                  src="/portfolio/images/Workfe/vacancy.png"
                  alt=""
                ></img>
              </div>
              <div class="hightlight-content">
                <h4>即時滿座率</h4>
                <p>
                  商家每小時可回報滿座率，消費者則可以藉由回報滿座率集點數獲取抽獎資格。
                </p>
              </div>
            </div>

            <div class="hightlight-1">
              <div>
                <img
                  class="hightlightImg"
                  src="/portfolio/images/Workfe/community.png"
                  alt=""
                ></img>
              </div>

              <div class="hightlight-content">
                <h4>咖啡社群</h4>
                <p>
                  商家及消費者皆擁有個人頁面，可以貼文及關注其他使用者（不限商家或消費者）。
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4>封測回饋</h4>
            <p>
              邀請百名北市咖啡愛好者一同進行封測，並請他們填寫使用後的回饋表單，此次封測目的主要為初步的易用性測試。為直接了解使用者使用的痛點，除了要求社群發文外，操作上不給其他任務。
            </p>
            <br></br>
            <p>
              封測測後介面與流程部分回饋整理如下：
              <br></br>◼ 無法直覺地從地圖功能移動至店家頁面
              <br></br>◼ 初期比起滿座率更常使用社群功能
              <br></br>◼ 發文時新增Freetag的操作方式不容易被發現
              <br></br>◼ 希望發文功能的圖片編輯能夠更彈性
              <br></br>
              <br></br>
              <a
                href="https://www.workfe.app/docs/a69543535e934b9ab5328ddd224b4358"
                target="_blank"
              >
                查看封測說明
              </a>
            </p>
          </div>

          <div class="hightlight">
            <h4>我們的下一步</h4>
            <div class="hightlight-1">
              <div>
                <img
                  class="hightlightImg"
                  src="/portfolio/images/Workfe/re_map.png"
                  alt=""
                ></img>
              </div>
              <div class="hightlight-content">
                <h4>地圖功能</h4>
                <p>
                  測後發現使用者在未引導下操作時很難發現下方卡片可以連動至 Cafe
                  資訊頁面。
                  目前更改店家圖釘顏色以及圖片展開、滑動方式，再搭配後續任務測試驗證。
                </p>
              </div>
            </div>

            <div class="hightlight-1">
              <div>
                <img
                  class="hightlightImg"
                  src="/portfolio/images/Workfe/re_freetag.png"
                  alt=""
                ></img>
              </div>
              <div class="hightlight-content">
                <h4>發文標籤 Freetag 不明顯狀況改善方向</h4>
                <p>
                  透過封測結果我們了解到：以#喚出標記 Freetag
                  在操作上並不直覺，目前規劃認同 Freetag 在發文介面中獨立。
                </p>
              </div>
            </div>

            <div class="hightlight-1">
              <div>
                <img
                  class="hightlightImg"
                  src="/portfolio/images/Workfe/Tap_Bar.png"
                  alt=""
                ></img>
              </div>

              <div class="hightlight-content">
                <h4>Tap Bar 調整</h4>
                <p>
                  使用者較常使用社群發文功能，需要思考層級最高放置於 Tap Bar
                  中間的地圖功能（使用者會藉由此觀看附近咖啡滿座率）
                  是否需要更改設計或甚至改變排列位置。 在不影響 Workfe
                  最大賣點下又能更直覺的發文至社群。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro3;
