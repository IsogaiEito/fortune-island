// こちらは、/contact 会社へのお問い合わせページです。

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="	box-sizing: border-box;	text-center text-2xl margin-bottom 40px contact-ttl">
        <b> お問い合わせフォーム</b>
      </h1>
      <form action="">
        <table
          className="box-sizing: border-box; width: 100%; margin-bottom: 20px; contact-table"
          style={{ margin: "0 auto;" }}
        >
          <tr>
            <th className="box-sizing: border-box; text-center width: 30%; contact-item"></th>
            <td className="box-sizing: border-box; text-center padding: 20px contact-body"></td>
          </tr>
          <tr>
            <th className="box-sizing: border-box; contact-item">名前</th>
            <td className="box-sizing: border-box; contact-body">
              <input type="text" name="名前" class="form-text border-4" />
            </td>
          </tr>
          <tr>
            <th className="box-sizing: border-box; contact-item">性別</th>
            <td className="box-sizing: border-box; contact-body">
              <label className="contact-sex">
                <input type="radio" name="性別" />
                <span className="contact-sex-txt">男</span>
              </label>
              <label className="contact-sex">
                <input type="radio" name="性別" />
                <span className="contact-sex-txt">女</span>
              </label>
            </td>
          </tr>
          <tr>
            <th className="box-sizing: border-box; contact-item">メール</th>
            <td className="box-sizing: border-box; contact-body">
              <input type="email" name="メール" class="form-text border-4" />
            </td>
          </tr>
          <tr>
            <th className="box-sizing: border-box; contact-item">電話</th>
            <td className="box-sizing: border-box; contact-body">
              <input type="tel" name="電話" class="form-text border-4" />
            </td>
          </tr>
          <tr>
            <th className="box-sizing: border-box; contact-item">職業</th>
            <td className="box-sizing: border-box; contact-body">
              <select name="職業" class="form-select">
                <option>選択</option>
                <option>学生</option>
                <option>主婦</option>
                <option>会社員</option>
                <option>その他</option>
              </select>
            </td>
          </tr>
          <tr>
            <th className="box-sizing: border-box; contact-body">
              お問い合わせ内容
            </th>
            <td className="box-sizing: border-box; contact-body">
              <textarea
                name="問い合わせ"
                class="form-textarea border-4"
              ></textarea>
            </td>
          </tr>
        </table>
        <button type="submit" class="submit" style={{ margin: "0 auto" }}>
          送信
        </button>
      </form>
    </div>
  );
}
