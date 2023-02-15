import React, { useEffect, useState } from "react";
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
              <p>
                GoFreight Pay 是一個連結貨代管理主產品 (GoFreight)
                的線上付款平台。 收款方 (Payee) 會利用從 GoFreight
                產生的付款入口 (連結/表單/信件) 向付款方 (Payer) 請款， Payer
                看到連結後會點進來第一頁（下稱 Main Page）。
                <br></br>
                我們發現從 Main page 到下一個環節 (註冊/信箱認證) 會掉 80%
                的使用者，而值得注意的是這 80% 當有 50%
                的使用者不採取任何行為就離開。且最後到付款階段時就緊僅剩下當初流量的
                20% 而已。
                <br></br>
                <br></br>
                為了提升最終的交易數，希望能從掉了 80% 的 Main Page
                轉換率開始著手想出解方。
              </p>
            </div>
            <div>
              <h5>[ 限制與挑戰 ]</h5>
              <p>由於資源的調度，必須在一個月的時間內完成設計決策。</p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GP/Payer_Flow.jpg"
                  alt=""
                />
                <figcaption>Payer 付款流程圖</figcaption>
              </figure>
            </div>
            <div>
              <h4>01. 計畫與重構</h4>
              <h5>[ 集思廣益，跨部門工作坊 ]</h5>
              <p>
                開始工作坊前先假設自己是付款人，對付款方做出了初步假設（在
                Miro）：
              </p>
              <br></br>
              <p>
                ◼ Payer 在 Main Page 認知到「改用新平台的風險」很高
                <br></br> 1. 不知道 GoFreight Pay 是什麼
                <br></br> 2. 因為這次點選是 Payer 第一次看見GoFreight Pay
                ，還未建立信任
                <br></br> 3. Payee 沒有動機主動建立 Payer 與平台間的信任
              </p>
              <br></br>
              <p>◼ 不確定使用平台會不會拖到到帳日期</p>
              <br></br>
              <p>◼ 可能會花時間力氣填了資料之後付款方式被拒絕</p>
              <br></br>
              <p>◼ 擔心接下來會需要填付款資料容易資料外洩</p>
              <br></br>
              <p>
                ◼ 已經習慣現有付款方式
                <br></br> 1. 其他支付方式的不確定性因素較少
                <br></br> 2. 需要花時間與心力學習、了解 GP 如何運作
              </p>
              <br></br>
              <p>
                ◼ 缺乏誘因
                <br></br> 1. 不知道平台可以帶來什麼精神或時間成本的效益
                <br></br> 2. 不清楚平台可以降低哪些他們本該承擔的成本
              </p>
            </div>
            <div>
              <h5>[ 問題 ] 如何讓更多人完成交易？</h5>
              <h5>[ 目標 ] 提升轉換率、減少跳出率</h5>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GP/GP_Brainstrom.jpg"
                  alt=""
                />
                <figcaption>針對假設思考解方之部分討論截圖</figcaption>
              </figure>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GP/GP_Function.jpg"
                  alt=""
                />
                <figcaption>公式輔助解方的想過程</figcaption>
              </figure>
            </div>
            <div>
              <h5>[ 收斂結論，選擇解方 ]</h5>
              <p>
                資源與時程考量下，收斂出下列項目作為此次迭代主要調整的項目：
                <br></br>◼ 減少 Main Page CTA，避免使用者有過多選擇
                <br></br>◼ 增加資訊
                <br></br> 1. 付款方式
                <br></br> 2. 安全性提示
                <br></br> 3. 付款流程動畫
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GP/Solve_function.jpg"
                  alt=""
                />
                <figcaption>解方收斂過程部分截圖</figcaption>
              </figure>
            </div>
            <div>
              <h4>02. 迭代</h4>
              <h5>[ 更改 UI 驗證設計決策 ]</h5>
              <p>
                Layout 挑戰：如何能將資訊清楚呈現。<br></br>
                最後選擇了左右切割的排版設計，清楚劃分介紹與操作這兩者，這樣的排版讓增加資訊後的
                Main Page 維持簡潔的樣式，不影響付款體驗。
              </p>
              <figure>
                <LazyLoadImage src="/portfolio/images/GP/Layout.jpg" alt="" />
              </figure>
            </div>
            <div>
              <h5>[ 上線後數據觀察結果 ]</h5>
              <p>
                取 2022 8~11 月的數據比較改版前的相同時長顯示：<br></br>
                1. 成功減少彈出率：🔻59.03% (Aug.: 62.5% -> Nov.: 3.47%)
                <br></br>
                2. 成功提升轉換率：🔺8.16% (Aug.: 18.99% -> Nov.: 27.15%)
              </p>
            </div>
            <div>
              <h5>[ 我們的下一步 ]</h5>
              <p>
                Main Page
                改版後轉換率雖有改善但也不如預期顯著，付款也可能會有淡季旺季問題，除了觀測數據時間可以再拉長之外，擬採取以下方式驗證：
                <br></br>
                1. 尋找符合 Payer
                身份的受訪者著手驗證用是否在兩種介面的感受上有差異、差在哪、是否影響對平台的決策
                <br></br>
                2.
                在網站中加入彈出的簡易問卷調查，目的在於了解使用者不進行下一步的原因
              </p>
            </div>
            <div>
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
