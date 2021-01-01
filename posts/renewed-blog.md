---
title: ブログを新しくした
pubdate: 2021-01-02
---

2020年はSapper, Contentful, Netlifyの組み合わせで１年間ブログを運用していました。その時の記事は[こちら](https://qiita.com/ryuta69/items/d982c6cbdf3423e22b2c))です。

しかし、Sapperが正式終了しSvelte-kitへ継承するという事で、2021年になったこともあり鞍替えしようとしました。リポジトリは [こちら](https://github.com/ulwlu/ulwlu-blog)です。

ですがSvelte-kitはまだ非公式でSSGモードが無い事に気づき(svelte-kit adaptがsapper exportにあたる。しかしまだhtmlを生成できない。)、結局一旦svelte preprocessの復習がてら、TypeScriptとTailwindとVercelを新たに組み込んだブログを作りました。

今後の予定としては、Svelte-kitが出たら上記のリポジトリにさっと切り替えをしようと思います。またContentfulはもう使わないでしょう。新しく入れるとしたらCreate-Pixel-Reactで書いたドット絵と、なんかアプリをwasmで入れようかなと思います。
