// こちらは、/contact 会社へのお問い合わせページです。

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl mb-10 font-bold">
        お問い合わせフォーム
      </h1>
      <form action="">
        <table className="w-full mb-5 mx-auto">
          <tbody>
            <tr>
              <th className="text-center w-1/3"></th>
              <td className="text-center p-5"></td>
            </tr>
            <tr>
              <th className="text-left p-2">名前</th>
              <td className="p-2">
                <input
                  type="text"
                  name="名前"
                  className="form-input border-2 w-full"
                />
              </td>
            </tr>
            <tr>
              <th className="text-left p-2">性別</th>
              <td className="p-2">
                <label className="mr-4">
                  <input type="radio" name="性別" className="mr-1" />
                  <span>男</span>
                </label>
                <label>
                  <input type="radio" name="性別" className="mr-1" />
                  <span>女</span>
                </label>
              </td>
            </tr>
            <tr>
              <th className="text-left p-2">メール</th>
              <input
                type="email"
                name="メール"
                className="form-input border-2 w-full"
              />
            </tr>
            <tr>
              <th className="text-left p-2">電話</th>
              <td className="p-2">
                <input
                  type="tel"
                  name="電話"
                  className="form-input border-2 w-full"
                />
              </td>
            </tr>
            <tr>
              <th className="text-left p-2">職業</th>
              <td className="p-2">
                <select name="職業" className="form-select border-2 w-full">
                  <option>選択</option>
                  <option>学生</option>
                  <option>主婦</option>
                  <option>会社員</option>
                  <option>その他</option>
                </select>
              </td>
            </tr>
            <tr>
              <th className="text-left p-2">お問い合わせ内容</th>
              <td className="p-2">
                <textarea
                  name="問い合わせ"
                  className="form-textarea border-2 w-full"
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary mx-auto block">
          送信
        </button>
      </form>
    </div>
  );
}
