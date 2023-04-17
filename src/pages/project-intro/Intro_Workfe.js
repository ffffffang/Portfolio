import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Scroll from "../../components/Scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SideBar from "../../components/SideBar";
const Intro_Woekfe = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle((pre) => {
      return (pre = document.querySelectorAll(".post-content h4"));
    });
  }, []);
  return (
    <div className="intro-bg">
      {/* data是指 data/bammerdata ID */}
      <Banner data={"pj-workfe"} />
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
                您是否曾因找不到合適的咖啡廳而苦惱呢？Workfe
                不只能迅速幫您找到附近的咖啡廳，同時可以知道該咖啡廳是否有座位。
                <br></br>
                台灣擁有許多小眾咖啡廳，這些咖啡廳通常以獨特的風格、氛圍和咖啡品質而聞名。它們通常位於巷弄中、隱藏在小角落，並且注重著重細緻的咖啡製作和舒適的用餐環境。Workfe
                提供一個平台，讓您能與好友分享、交流這些你喜愛的小眾咖啡廳，也讓業主能透過平台推廣，讓更多人能認識不同有特色的咖啡廳。
              </p>
              <h5>[ 問題與目標 ]</h5>
              <p>
                前期團隊已經依照前期投發問卷結果得到以下使用者的痛點並發展功能。
                <br></br>
                <br></br>
                <strong>1. 總是沒位置</strong>
                <br></br>
                看人流量記錄也沒辦法準確預估是否有座位，資訊也沒有像粉絲專頁更新那麼頻繁。
                <br></br>
                <strong>2. 落差很大</strong>
                <br></br>
                環境圖少或甚至沒有，無法準確評估咖啡廳全貌，去到現場常常會跟期待的落差很大。
                <br></br>
                <strong>3. 很難評估是否適合自己</strong>
                <br></br>
                透過評論自行篩選、評估咖啡館是否滿足目前需求是一件很花時間的事。
                <br></br>
                <strong>4. 沒有太多曝光機會</strong>
                <br></br>
                小眾咖啡廳相較於連鎖咖啡廳比較沒有曝光的機會，對業務運營和長期發展產生不利影響。
              </p>
            </div>
            <div>
              <h4>02. 設計流程</h4>
              <p>
                作為產品開發中期加入的設計師，此時因主要功能都已經規劃完成，我的目標將會提供產品
                使用流程、界面設計、互動設計等。希望通過用戶研究並提供 MVP
                蒐集反饋驗證產品是否符合用戶的需求和期望，進行產品的持續優化和改進。
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/Workfe/Design_Step.jpg"
                  alt=""
                  className="IA_PIC"
                />
              </figure>
              <h5>[ 我們的目標 ]</h5>
              <p class="workfe-quote">
                “ 上線一個能夠讓咖啡愛好者找到適合自己的小眾咖啡廳坐下享受的 APP
                ”
              </p>
              <h5>[ 我們的假設 ]</h5>
              <p>
                提供即時座位資訊可以避免使用者到咖啡廳後撲空沒有座位。
                隨時更新附近的咖啡廳可以幫助使用者快速瀏覽、探索附近更多有趣的咖啡館。
                藉由使用者之間認同關鍵字的方式讓每個咖啡廳都擁有專屬的特徵可以供使用者篩選適合的咖啡廳。
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/Workfe/IA.jpg"
                  alt=""
                  className="IA_PIC"
                />
                <figcaption>初步資訊架構</figcaption>
              </figure>
              <h5>[ 市場回饋 ]</h5>
              <p>
                前期團隊使用問卷的方式來了解使用者在咖啡廳中的行為，基於結果能幫助我們評估產品的功能設定。我們從這些填問卷的使用者中選取了20名受訪者（其中男性5名，女性15名，年齡介於19到25歲，佔75%。職業主要是大學生和研究生），希望透過收集他們對產品畫面的第一眼回饋，了解目前APP的功能期待值以及使用者對產品的接受度，以優化或研擬新增功能。訪談後團隊在市場性以及功能面上稍做調整與策略：
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/Workfe/Metric-Numbers.png"
                  alt=""
                />
              </figure>
              <p>
                ‧
                每兩周會去咖啡廳一次以上的使用者佔50%，其中超過九成以上的使用者在咖啡廳停留超過一小時。（因此，初期
                Workfe
                在滿座率計算方式上，採用業主每小時一次自行更新數據的頻率）
                <br></br>‧ 加強回報滿座率誘因、新增獎勵機制<br></br>‧
                資訊方面不僅提供咖啡廳基本資訊也加上硬體資訊<br></br>‧
                使用者對社群的期待及社群目的讓我們重新探討文章審核機制
              </p>
            </div>
            <div>
              <h4>03. 最小可行產品 (MVP)</h4>
              <p>
                MVP 可以視為後續產品的雛形 (Ver.1)，我們希望以 MVP
                進行封測來觀察使用者如何和我們的產品互動，並收集更多反饋以幫助下一次改版。這次發布的的核心功能包含在咖啡社群、滿座率、Freetag、查看離自己最近的咖啡館。
              </p>
              <div className="hightlight-1">
                <div className="hightlight-content">
                  <h5>[ #Freetag ]</h5>
                  <p>
                    由使用者共同定義咖啡廳的特色，使用者可以新增或認同咖啡廳的
                    #freetag ，如：寵物、網美、音樂風格、安靜。
                  </p>
                </div>
                <figure>
                  <LazyLoadImage
                    className="hightlightImg"
                    src="/portfolio/images/Workfe/freetag.png"
                    alt=""
                  />
                </figure>
              </div>

              <div className="hightlight-1">
                <div className="hightlight-content">
                  <h5>[ 即時滿座率 ]</h5>
                  <p>
                    商家每小時可回報滿座率，消費者則可以藉由回報滿座率集點數獲取抽獎資格。
                  </p>
                </div>
                <figure>
                  <LazyLoadImage
                    className="hightlightImg"
                    src="/portfolio/images/Workfe/vacancy.png"
                    alt=""
                  />
                </figure>
              </div>

              <div className="hightlight-1">
                <div className="hightlight-content">
                  <h5>[ 咖啡社群 ]</h5>
                  <p>
                    商家及消費者皆擁有個人頁面，可以貼文及關注其他使用者（不限商家或消費者）。
                  </p>
                </div>
                <figure>
                  <LazyLoadImage
                    className="hightlightImg"
                    src="/portfolio/images/Workfe/community.png"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <div>
              <h4>04. 設計迭代</h4>
              <h5>[ 更加詳細的地圖資訊 ]</h5>
              <p>
                封測後發現使用者在未引導下操作時很難發現下方卡片可以連動至 Cafe
                資訊頁面。我們區分
                不同狀態圖釘顏色、卡片調整為展開方式呈現更多訊息，讓你可以更快從地圖找到想去的咖啡廳。
              </p>
              <figure>
                <LazyLoadImage
                  className="hightlightImg"
                  src="/portfolio/images/Workfe/re_map.png"
                  alt=""
                />
                <figcaption>Before(左) After(右)</figcaption>
              </figure>
              <h5>[ 可以更直覺的給予店家 Freetag ]</h5>
              <p>
                原先 Freetag 機制為在發文時以 #
                喚出標記，透過封測結果我們了解到對於剛開始接觸的使用者來說功能藏得太深，使用率並不高，改版後認同
                Freetag 功能在發文介面中獨立區塊編輯、新增。
              </p>
              <figure>
                <LazyLoadImage
                  className="hightlightImg"
                  src="/portfolio/images/Workfe/re_freetag.png"
                  alt=""
                />
                <figcaption>Before(左) After(右)</figcaption>
              </figure>
              <h5>[ 發文分享你愛的咖啡廳變得快速 ]</h5>
              <p>
                封測的結果顯示社群發文功能是使用者最常使用的功能，改版後我們更改了
                Tab bar 是否需要更改設計或甚至改變排列位置。 在不影響 Workfe
                最大賣點下又能更直覺的發文至社群。
              </p>
              <LazyLoadImage
                className="hightlightImg"
                src="/portfolio/images/Workfe/Tap_Bar.png"
                alt=""
              />
              <figcaption>Before(左) After(右)</figcaption>
            </div>
            <div>
              <h4>05. 學習與反思</h4>
              <p>
                ‧
                在前期調查與後續產品的代的比較中可以發現使用者有時候不知道自己需要什麼，仍需要透過實際操作才能有讓他們更明確的輪廓。
                <br></br>‧ 就算是 MVP
                階段也不該犧牲使用體驗：我們想要更快地上線產品，但不代表我們必須要犧牲使用體驗來提高速度，畢竟使用者有可能因為一次的挫折就不再繼續使用一個產品。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro_Woekfe;
