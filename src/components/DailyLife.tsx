const topics = [
  {
    emoji: "🏠",
    title: "Жильё",
    description:
      "Большинство эмигрантов ютились в дешёвых меблированных комнатах и пансионах. В Париже целые кварталы — Пасси, Отёй, Монпарнас — стали русскими. Семьи из нескольких человек нередко занимали одну комнату.",
  },
  {
    emoji: "⚒️",
    title: "Работа",
    description:
      "Бывшие офицеры работали шофёрами такси, дворяне — официантами, профессора давали уроки языка. Парижские заводы Рено и Ситроен стали крупнейшими работодателями для русских эмигрантов.",
  },
  {
    emoji: "🍽️",
    title: "Рестораны и кафе",
    description:
      "Русские рестораны стали центрами общественной жизни. «Корнилов», «Доминик», «Кавказский» в Париже — здесь собирались эмигранты, обсуждали политику, читали стихи, справляли православные праздники.",
  },
  {
    emoji: "⛪",
    title: "Церковь",
    description:
      "Православный приход был главным институтом общины. Церковь крестила, венчала, отпевала. Александро-Невский собор в Париже стал духовным центром русской эмиграции на десятилетия.",
  },
  {
    emoji: "📰",
    title: "Пресса и издательства",
    description:
      "«Последние новости», «Возрождение», «Руль» — газеты выходили ежедневно. В Берлине и Париже действовали десятки русских издательств, выпускавших книги, журналы и альманахи.",
  },
  {
    emoji: "🎓",
    title: "Образование",
    description:
      "Эмигранты создавали русские гимназии, университеты и кружки. В Праге действовал Русский народный университет. Дети учились на двух языках, сохраняя русскую идентичность.",
  },
];

export default function DailyLife() {
  return (
    <section className="bg-stone-50 px-6 py-20 lg:py-32" id="daily-life">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Повседневность</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4 leading-tight">
          Как жили эмигранты
        </h2>
        <p className="text-neutral-500 text-lg mb-16 max-w-2xl">
          За высокой культурой скрывалась тяжёлая проза жизни — поиск работы, жилья и сохранения себя на чужбине.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-neutral-200">
          {topics.map((item, i) => (
            <div
              key={i}
              className="p-8 border-b border-r border-neutral-200 hover:bg-white transition-colors duration-300 group"
            >
              <div className="flex items-start gap-5">
                <span className="text-3xl mt-1 shrink-0">{item.emoji}</span>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:underline underline-offset-4">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-neutral-900 text-white p-8 lg:p-12">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Контекст эпохи</p>
          <p className="text-xl lg:text-2xl leading-relaxed font-light max-w-3xl">
            Русские эмигранты не просто выживали — они выстроили параллельную цивилизацию: со своими театрами, 
            больницами, судами чести, скаутскими отрядами и даже спортивными клубами. 
            Это был феномен, не имевший аналогов в мировой истории.
          </p>
        </div>
      </div>
    </section>
  );
}
