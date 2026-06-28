import { useState } from 'react';
import { Menu, X, Clock, MapPin, Phone, Instagram, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';

const INTERIOR_IMAGES = [
  { src: 'https://ed8b2927b8eea1b983e1dd49d789993d.oss.atoms.dev/IMG_1965%202.jpg', alt: 'カウンター席と緑の壁' },
  { src: 'https://ed8b2927b8eea1b983e1dd49d789993d.oss.atoms.dev/IMG_1966%202.jpg', alt: 'ソファ席と植物のラウンジ' },
  { src: 'https://ed8b2927b8eea1b983e1dd49d789993d.oss.atoms.dev/IMG_1967.jpg', alt: '森のようなリラックス空間' },
];

const HERO_IMAGE = 'https://ed8b2927b8eea1b983e1dd49d789993d.oss.atoms.dev/IMG_1966%202.jpg';

const NAV_ITEMS = [
  { label: 'Concept', href: '#concept' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Access', href: '#access' },
];

const DRINK_MENU = [
  {
    category: 'ビール',
    items: [
      { name: '生ビール', price: '' },
      { name: 'シャンディガフ', price: '' },
      { name: 'レッドアイ', price: '' },
    ],
  },
  {
    category: 'ウイスキー',
    items: [
      { name: 'ハイボール', price: '' },
      { name: 'コークハイ', price: '' },
      { name: 'ジンジャーハイ', price: '' },
    ],
  },
  {
    category: '酎ハイ',
    items: [
      { name: 'レモンサワー', price: '' },
      { name: 'グレープフルーツサワー', price: '' },
      { name: 'ピーチサワー', price: '' },
      { name: 'トマトサワー', price: '' },
      { name: 'シークワーサーサワー', price: '' },
    ],
  },
  {
    category: '焼酎',
    items: [
      { name: '米', price: '' },
      { name: '麦', price: '' },
      { name: '芋', price: '' },
      { name: '茉莉花', price: '' },
    ],
  },
  {
    category: 'カクテル',
    items: [
      { name: 'レゲエパンチ', price: '' },
      { name: 'カシスソーダ', price: '' },
      { name: 'カシスウーロン', price: '' },
      { name: 'カシスオレンジ', price: '' },
      { name: 'カシスグレープ', price: '' },
      { name: 'ファジーネーブル', price: '' },
      { name: 'ティフィンウーロン', price: '' },
      { name: 'ティフィンソーダ', price: '' },
      { name: 'ジントニック', price: '' },
      { name: 'JJ（茉莉花焼酎×ジャスミン茶）', price: '' },
      { name: 'JR（茉莉花焼酎×緑茶）', price: '' },
    ],
  },
  {
    category: 'ソフトドリンク',
    items: [
      { name: 'ジャスミン茶', price: '' },
      { name: '烏龍茶', price: '' },
      { name: '緑茶', price: '' },
      { name: 'トマトジュース', price: '' },
      { name: 'オレンジジュース', price: '' },
      { name: 'グレープフルーツジュース', price: '' },
      { name: 'コーラ', price: '' },
      { name: 'ジンジャーエール', price: '' },
    ],
  },
];

const SPECIAL_DRINKS = [
  { name: 'クエルボ テキーラ', price: '¥1,000' },
  { name: 'イエガー', price: '¥1,000' },
  { name: 'コカレロ', price: '¥1,000' },
  { name: '1800 テキーラ', price: '¥1,800' },
  { name: 'コーヒー泡盛', price: '¥500' },
  { name: 'セロリショットガン（10杯分）', price: '¥4,800' },
];

const SNACK_MENU = [
  { name: 'ピザポテト', price: '¥500' },
  { name: 'ドンタコス', price: '¥500' },
  { name: 'ポテトチップス', price: '¥500' },
  { name: 'ビーフジャーキー', price: '¥600' },
  { name: 'サキイカ', price: '¥600' },
  { name: 'チョコ盛り', price: '¥600' },
  { name: 'ナッツ盛り', price: '¥500' },
  { name: 'だがし盛り', price: '¥600' },
];

const CHAMPAGNE_MENU = [
  { name: 'オリジナル シャンパン ホワイト', desc: '嫉妬させてみな?', price: '¥20,000' },
  { name: 'オリジナル シャンパン ピンク', desc: '女を落とす武器', price: '¥25,000' },
  { name: 'モエ・エ・シャンドン ブリュット', desc: 'あの女誰よ?', price: '¥27,000' },
  { name: 'ヴーヴクリコ イエローラベル', desc: '濡らしてからだよ?', price: '¥30,000' },
  { name: 'モエ・エ・シャンドン ネクター', desc: 'もうあたしが見えない', price: '¥32,000' },
  { name: 'モエ・エ・シャンドン ロゼ', desc: '靴でも舐めさせてくだせぇ!', price: '¥36,000' },
  { name: 'ペリエ ジュエ ベルエポック', desc: '一生ついていきます!!', price: '¥80,000' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl tracking-widest text-primary">
          Barセロリ
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-foreground cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/30 animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="森のようなバーのラウンジ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl tracking-wider text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Barセロリ
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          森の中で仲間たちと楽しく歌って飲める場所
        </p>
        <div className="mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
          <div className="inline-block border border-primary/30 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded">
            <p className="text-primary text-sm tracking-wider">30分 ¥1,200 飲み放題</p>
          </div>
        </div>
        <div className="mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.3s' }}>
          <a
            href="#concept"
            className="inline-block border border-primary/40 text-primary px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary/10 transition-all duration-300 cursor-pointer"
          >
            Discover
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.8s' }}>
        <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
}

function ConceptSection() {
  return (
    <section id="concept" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Our Philosophy</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
            森の中で仲間たちと<br />楽しく歌って飲める場所
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            森の中に迷い込んだような空間で、仲間たちと語り合い、
            歌い、飲む。それがBarのコンセプトです。
          </p>
          <p className="text-muted-foreground leading-relaxed">
            緑に囲まれた温もりのある店内で、
            日常を忘れて心ゆくまでお過ごしください。
            木々のざわめきとグラスの音が響く、
            あなただけの森の隠れ家へようこそ。
          </p>
        </div>
        <div className="relative">
          <img
            src={INTERIOR_IMAGES[2].src}
            alt={INTERIOR_IMAGES[2].alt}
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4 -z-10" />
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  const [activeTab, setActiveTab] = useState<'drink' | 'food' | 'champagne'>('drink');

  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Menu</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            メニュー
          </h2>
          <div className="inline-block border border-primary/30 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded mb-4">
            <p className="text-primary text-lg tracking-wider font-display">30分 ¥1,200 飲み放題</p>
          </div>
          <p className="text-muted-foreground text-sm">※ フード・シャンパンは別メニュー</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10">
          {[
            { key: 'drink' as const, label: 'ドリンク' },
            { key: 'food' as const, label: 'フード' },
            { key: 'champagne' as const, label: 'シャンパン' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-sm tracking-wider uppercase cursor-pointer transition-all duration-300 pb-2 border-b-2 ${
                activeTab === tab.key
                  ? 'text-primary border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Drink Tab */}
        {activeTab === 'drink' && (
          <div className="space-y-10">
            <div className="grid md:grid-cols-3 gap-8">
              {DRINK_MENU.map((cat) => (
                <div key={cat.category}>
                  <h3 className="font-display text-xl text-primary mb-4 border-b border-primary/20 pb-2">
                    {cat.category}
                  </h3>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item.name} className="text-muted-foreground text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary/50 rounded-full flex-shrink-0" />
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Special drinks */}
            <div>
              <h3 className="font-display text-xl text-primary mb-4 border-b border-primary/20 pb-2">
                スペシャルドリンク（別料金）
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6">
                {SPECIAL_DRINKS.map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-2 border-b border-border/30">
                    <span className="text-muted-foreground text-sm">{item.name}</span>
                    <span className="text-primary font-display text-sm whitespace-nowrap ml-2">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Food Tab */}
        {activeTab === 'food' && (
          <div className="max-w-2xl mx-auto">
            <h3 className="font-display text-xl text-primary mb-6 border-b border-primary/20 pb-2">
              スナックメニュー
            </h3>
            <div className="space-y-3">
              {SNACK_MENU.map((item) => (
                <div key={item.name} className="flex items-center justify-between py-2 border-b border-border/30">
                  <span className="text-muted-foreground text-sm">{item.name}</span>
                  <span className="text-primary font-display text-sm">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Champagne Tab */}
        {activeTab === 'champagne' && (
          <div className="max-w-2xl mx-auto">
            <h3 className="font-display text-xl text-primary mb-6 border-b border-primary/20 pb-2">
              シャンパンメニュー
            </h3>
            <div className="space-y-4">
              {CHAMPAGNE_MENU.map((item) => (
                <div key={item.name} className="py-3 border-b border-border/30">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-foreground font-display text-base">{item.name}</p>
                      <p className="text-primary/70 text-xs mt-1 italic">「{item.desc}」</p>
                    </div>
                    <span className="text-primary font-display text-lg whitespace-nowrap">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function GallerySection() {
  const [current, setCurrent] = useState(0);
  const allImages = [...INTERIOR_IMAGES];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % allImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + allImages.length) % allImages.length);

  return (
    <section id="gallery" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            森の空間
          </h2>
        </div>

        {/* Main slider */}
        <div className="relative overflow-hidden rounded-sm">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {allImages.map((img, idx) => (
              <div key={idx} className="w-full flex-shrink-0">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/60 backdrop-blur-sm p-2 rounded-full text-primary hover:bg-background/80 transition-colors cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/60 backdrop-blur-sm p-2 rounded-full text-primary hover:bg-background/80 transition-colors cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-foreground/80 text-sm font-display">
            {allImages[current].alt}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 mt-6">
          {allImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-20 h-14 overflow-hidden rounded-sm cursor-pointer transition-all duration-300 ${
                idx === current ? 'ring-2 ring-primary' : 'opacity-50 hover:opacity-80'
              }`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function AccessSection() {
  return (
    <section id="access" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Access</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            店舗情報
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Clock className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">営業時間</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  毎日 21:00 - Last
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">住所</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  〒812-0026<br />
                  福岡県福岡市博多区上川端町3-3-1<br />
                  第5 2F
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">お問合せ</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  080-4696-2205<br />
                  ※ お席のご予約はお電話にて承ります
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={INTERIOR_IMAGES[0].src}
              alt={INTERIOR_IMAGES[0].alt}
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 border border-primary/20 -translate-x-4 translate-y-4 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl tracking-widest text-primary mb-2">Barセロリ</h3>
            <p className="text-muted-foreground text-sm">森の中で仲間たちと楽しく歌って飲める場所</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/20 text-center">
          <p className="text-muted-foreground text-xs tracking-wider">
            &copy; 2024 Bar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ConceptSection />
      <MenuSection />
      <GallerySection />
      <AccessSection />
      <Footer />
    </div>
  );
