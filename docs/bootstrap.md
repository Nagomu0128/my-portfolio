# Bootstrap 5 スキル

## 概要
Bootstrap 5を使用してレスポンシブなUIを構築するためのガイドライン。
HTML/CSSファイル作成時はこのドキュメントに従うこと。

---

## CDN（必須）

HTMLファイルには以下を必ず含める：

```html
<!-- head内 -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- body終了タグ直前 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

---

## 基本ルール

1. **Bootstrapクラス優先**: カスタムCSSよりBootstrapユーティリティクラスを使う
2. **グリッドシステム使用**: レイアウトは `container` → `row` → `col-*` の構造で組む
3. **レスポンシブ対応**: ブレークポイント（sm, md, lg, xl, xxl）を活用する
4. **混在禁止**: Tailwind等の他フレームワークと併用しない
5. **jQuery不要**: Bootstrap 5はVanilla JSで動作する

---

## HTMLテンプレート

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>タイトル</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <div class="container py-4">
    <!-- コンテンツ -->
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## グリッドシステム

```html
<!-- 基本構造 -->
<div class="container">
  <div class="row">
    <div class="col-md-6">左カラム</div>
    <div class="col-md-6">右カラム</div>
  </div>
</div>

<!-- 3カラム（レスポンシブ） -->
<div class="row">
  <div class="col-12 col-md-4">1</div>
  <div class="col-12 col-md-4">2</div>
  <div class="col-12 col-md-4">3</div>
</div>

<!-- ガター調整 -->
<div class="row g-3"><!-- g-0〜g-5 --></div>
```

---

## コンポーネント

### ナビゲーションバー

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">サイト名</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link active" href="#">ホーム</a></li>
        <li class="nav-item"><a class="nav-link" href="#">機能</a></li>
        <li class="nav-item"><a class="nav-link" href="#">お問い合わせ</a></li>
      </ul>
    </div>
  </div>
</nav>
```

### カード

```html
<div class="card">
  <img src="image.jpg" class="card-img-top" alt="画像">
  <div class="card-body">
    <h5 class="card-title">タイトル</h5>
    <p class="card-text">説明文がここに入ります。</p>
    <a href="#" class="btn btn-primary">詳細を見る</a>
  </div>
</div>

<!-- カードグリッド -->
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col"><div class="card">...</div></div>
  <div class="col"><div class="card">...</div></div>
  <div class="col"><div class="card">...</div></div>
</div>
```

### ボタン

```html
<!-- 基本 -->
<button class="btn btn-primary">プライマリ</button>
<button class="btn btn-secondary">セカンダリ</button>
<button class="btn btn-success">成功</button>
<button class="btn btn-danger">危険</button>
<button class="btn btn-warning">警告</button>
<button class="btn btn-info">情報</button>

<!-- アウトライン -->
<button class="btn btn-outline-primary">アウトライン</button>

<!-- サイズ -->
<button class="btn btn-primary btn-lg">大</button>
<button class="btn btn-primary btn-sm">小</button>
```

### フォーム

```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">メールアドレス</label>
    <input type="email" class="form-control" id="email" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">パスワード</label>
    <input type="password" class="form-control" id="password">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="remember">
    <label class="form-check-label" for="remember">ログイン状態を保持</label>
  </div>
  <button type="submit" class="btn btn-primary">送信</button>
</form>

<!-- セレクト -->
<select class="form-select">
  <option selected>選択してください</option>
  <option value="1">選択肢1</option>
  <option value="2">選択肢2</option>
</select>

<!-- テキストエリア -->
<textarea class="form-control" rows="3"></textarea>
```

### モーダル

```html
<!-- トリガーボタン -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  モーダルを開く
</button>

<!-- モーダル本体 -->
<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">タイトル</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        モーダルの内容
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
        <button type="button" class="btn btn-primary">保存</button>
      </div>
    </div>
  </div>
</div>
```

### アラート

```html
<div class="alert alert-primary" role="alert">プライマリアラート</div>
<div class="alert alert-success" role="alert">成功メッセージ</div>
<div class="alert alert-danger" role="alert">エラーメッセージ</div>
<div class="alert alert-warning" role="alert">警告メッセージ</div>

<!-- 閉じるボタン付き -->
<div class="alert alert-info alert-dismissible fade show" role="alert">
  お知らせ内容
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
```

### テーブル

```html
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>名前</th>
      <th>メール</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>田中太郎</td>
      <td>tanaka@example.com</td>
    </tr>
  </tbody>
</table>

<!-- バリエーション -->
<table class="table table-striped"><!-- 縞模様 --></table>
<table class="table table-bordered"><!-- 枠線 --></table>
<table class="table table-hover"><!-- ホバー --></table>
<table class="table table-sm"><!-- コンパクト --></table>
```

### バッジ

```html
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>

<!-- 丸型 -->
<span class="badge rounded-pill bg-primary">99+</span>
```

### アコーディオン

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
        質問1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">回答1の内容</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
        質問2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">回答2の内容</div>
    </div>
  </div>
</div>
```

---

## ユーティリティクラス

### スペーシング
- `m-*`: margin（0〜5, auto）
- `p-*`: padding（0〜5）
- 方向: `t`(top), `b`(bottom), `s`(start/left), `e`(end/right), `x`(横), `y`(縦)
- 例: `mt-3`, `px-4`, `py-2`, `mb-auto`

### テキスト
- `text-start`, `text-center`, `text-end`: 揃え
- `text-primary`, `text-secondary`, `text-muted`: 色
- `fw-bold`, `fw-normal`, `fw-light`: 太さ
- `fs-1`〜`fs-6`: サイズ

### 背景
- `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`, `bg-light`, `bg-dark`

### 表示
- `d-none`: 非表示
- `d-block`, `d-inline`, `d-flex`, `d-grid`
- レスポンシブ: `d-md-none`, `d-lg-block`

### Flexbox
- `d-flex`, `flex-row`, `flex-column`
- `justify-content-start`, `justify-content-center`, `justify-content-end`, `justify-content-between`
- `align-items-start`, `align-items-center`, `align-items-end`
- `gap-1`〜`gap-5`

### サイズ
- `w-25`, `w-50`, `w-75`, `w-100`: 幅
- `h-25`, `h-50`, `h-75`, `h-100`: 高さ
- `mw-100`, `mh-100`: 最大幅・高さ

### ボーダー
- `border`, `border-top`, `border-bottom`
- `border-0`: ボーダー削除
- `rounded`, `rounded-circle`, `rounded-pill`

### シャドウ
- `shadow-sm`, `shadow`, `shadow-lg`

---

## ブレークポイント

| 名前 | クラス接尾辞 | 画面幅 |
|------|-------------|--------|
| Extra small | なし | <576px |
| Small | sm | ≥576px |
| Medium | md | ≥768px |
| Large | lg | ≥992px |
| Extra large | xl | ≥1200px |
| XXL | xxl | ≥1400px |

---

## 禁止事項

- `!important` の多用
- インラインスタイル（`style=""`）の多用
- Bootstrapクラスの上書き目的でのカスタムCSS
- 非推奨のjQuery依存コード
- 他CSSフレームワークとの併用

---

## 参考リンク

- 公式ドキュメント: https://getbootstrap.com/docs/5.3/